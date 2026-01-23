import type { Request, Response, NextFunction } from "express"
import authService from "../service/auth.service.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import type { IUserDetails, IUserQuery } from "../lib/types/user.types.js"
import { uploadImage } from "../service/upload.service.js"
import userService from "../service/user.service.js"
import eventService from "../service/event.service.js"
import organizationService from "../service/organization.service.js"
import creditService from "../service/creditpurchase.service.js"
import notificationService from "../service/notification.service.js"
import organizationMemberService from "../service/organizationmember.service.js"
class UserController {
    async getLoggedInUser(req:Request, res:Response , next:NextFunction ){
      try {
        const userDetails = req.userDetails
        const userData = await authService.getUserDetails({
          id : userDetails.id
        })
        if(!userDetails){
          throw {
            code : 404, 
            message : "Unable to fetch the user details. ",
            status : "USER_DATA_FETCH_ERR"
          } as IErrorTypes
        }
        res.json({
          message : "User details fetched successfully. ",
          data : userData
        })
      } catch (error) {
        next(error)
      }
  }

  async updateUser(req:Request, res:Response, next:NextFunction){
    try {
      const data = req.body
      const userDetails:IUserDetails = req.userDetails
      let imageUrl: string = userDetails.image ?? ""
      if (req.file?.buffer) {
        imageUrl = await uploadImage(req.file.buffer, "Eventra/userProfile")
      }
      const updateData : {name : string, phone : string, image :  string} = {
        name : data.name? data.name : userDetails.name,
        phone : data.phone? data.phone : userDetails.phone,
        image : imageUrl
      }
      await authService.updateUser({filter : {id : userDetails.id}, data : updateData})
      return res.json({
        message : "User updated successfully"
      })
    } catch (error) {
      next(error)
    }
  }
  async deleteUser(req:Request, res:Response, next:NextFunction){
    try {
      const userDetails:IUserDetails = req.userDetails
       await userService.deleteUser({id : userDetails.id})
       res.json({
        message : "User deleted successfully. ",
       })
    } catch (error) {
      next(error)
    }
  }

async getUserDetails(req: Request, res: Response, next: NextFunction) {
  try {
    const query: IUserQuery = req.query;
    const userDetails: IUserDetails = req.userDetails;

    const page = Number(query.page) || 1;
    const take = Number(query.limit) || 10;
    const skip = (page - 1) * take;

    const include: any = {}; 
    if (query.createdEvents === 'true') {
      include.createdEvents = {
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      };
    }
    if(query.organizationMember === 'true'){
      include.organizationMember = {
        include : {
          organization : {
            select : {
              name : true,
              isPremium : true
            }
          },
        },
        skip, 
        take, 
        orderBy: { joinedAt: 'desc' },

      }
    }
    if(query.eventParticipants === 'true'){
      include.eventParticipants = {
        include : {
          event : {
            select : {
              title : true,
              
            }
          }
        },
        skip, 
        take, 
        orderBy: { registeredAt: 'desc' },

      }
    }
    if(query.creditPurchases){
      include.creditPurchases= {
        include : {
          organization : {
            select : {
              name : true
            }
          }
        },
        skip, 
        take, 
        orderBy: { purchasedAt: 'desc' },
      }
    }
    if(query.notifications === 'true'){
      include.notifications = {
        skip, 
        take, 
        orderBy: { createdAt: 'desc' },
      }
    }
    const userData = await userService.getUserDetails({ id: userDetails.id }, include);

    const counts: any = {};
    if (query.createdEvents === 'true') {
      counts.createdEvents = await eventService.getTotalEventsCount({ creatorId: userDetails.id });
    }
    if(query.organizationMember === 'true'){
      counts.organizationMember = await organizationMemberService.getMemberCount({filter : {userId : userDetails.id}})
    }
    if(query.eventParticipants === 'true'){
      counts.eventParticipants = await eventService.getEventParticipatedCount({userId : userDetails.id})
    }
    if(query.creditPurchases === 'true'){
      counts.creditPurchases = await creditService.getCreditPurchaseCount({purchasedBy : userDetails.id})
    }
    if(query.notifications === 'true'){
      counts.notifications = await notificationService.getNotificationCount({userId : userDetails.id})
    }

    const pagination: any = {};
    for (const key in counts) {
      pagination[key] = {
        currentPage: page,
        totalPages: Math.ceil(counts[key] / take),
        take,
        totalDocs: counts[key],
        hasNextPage: page < Math.ceil(counts[key] / take),
        hasPreviousPage: page > 1,
      };
    }

    return res.json({
      message: 'User details fetched successfully.',
      data: userData,
      pagination,
    });
  } catch (error) {
    next(error);
  }
}

}
const userController = new UserController()
export default userController