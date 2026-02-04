import type { NextFunction, Request, Response } from "express"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import organizationService from "../service/organization.service.js"
import emailService from "../service/email.service.js"
import adminDeleteTemplate from "../emailtemplates/adminDeleteTemplate.js"
import notificationService from "../service/notification.service.js"
import eventService from "../service/event.service.js"
import userService from "../service/user.service.js"
import eventParticipantService from "../service/eventParticipants.service.js"
import { totalRegistrationsPerMonth } from "../utilities/webdata.js"
import adminLogsService from "../service/admin.logs.service.js"
import type { IUserDetails } from "../lib/types/user.types.js"
import errorLogService from "../service/errorlog.service.js"
import creditService from "../service/creditpurchase.service.js"

class AdminController {
  async deleteOrganization(req : Request, res:Response, next:NextFunction){
    try {
    const userDetails:IUserDetails = req.userDetails
    const params = req.params
    const organizationId = String(params.organizationId)
    if(organizationId.length < 1){
      throw {
        code : 404, 
        message : "Unable to fetchfethch organization details please try again. ",
        status : "ORGANIZATION_ID_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    const organizationDetails = await organizationService.getOrganizationByFilter({
      filter : {id  : organizationId},
      include : {}
    })
    const include = {
        members : {
          where : {
            role : "OWNER"
          },
          include : {
            user : {
              select : {
                id : true,
                name : true,
                email : true
              }
            }
          }
        }
      }
    const deletedOrganization:any = await organizationService.deleteOrganization(organizationDetails.id,include )    
    const creator = deletedOrganization.members[0]?.user;

    await adminLogsService.createAdminLog({
      logDetails : {
        adminId : userDetails.id,
        action : "DELETE",
        entityId : deletedOrganization.id,
        entityType : "ORGANIZATION",
        reason : req.body.reason
      }
    })

   if (creator) {
     await emailService.sendEmail({
       to: creator.email,
       subject: "Your organization got deleted",
       message: adminDeleteTemplate(deletedOrganization.name, "Organization"),
     });
   
     await notificationService.sendNotificaion({
       userId: creator.id,
       title: "Your organization has been deleted",
       message: `Hi, ${creator.name}, your organization has been deleted by one of our admins. Please make sure to follow our platform policies to avoid future deletions.`,
       type: "ORGANIZATION_DELETED",
       entityType: "ORGANIZATION",
       entityId: deletedOrganization.id,
     });
   }

    return res.json ({
      message : "Organization deleted successfully. ",
      data : deletedOrganization
    })
      
    } catch (error) {
      next(error)
    }
  }

  async deleteEvent(req : Request, res:Response, next:NextFunction){
    try {
      const userDetails:IUserDetails = req.userDetails
    const params = req.params
    const eventId = String(params.eventId)
    if(eventId.length < 1){
      throw {
        code : 404, 
        message : "Unable to fetchfethch event details please try again. ",
        status : "EVENT_ID_NOT_FOUND_ERR"
      } as IErrorTypes
    }

    const eventDetails = await eventService.getEvent({filter : {id : eventId}, include : {}})
    if(!eventDetails?.id){
      throw {
        code : 404,
        message : "Event not found please make sure that event exists. ",
        status : "EVENT_NOT_FOUND_ERR"
      } as IErrorTypes
    }

    const deletedEvent : any = await eventService.deleteEvent(eventDetails.id , {
        creator : {
          select : {
            id : true,
            name : true,
            email : true
          }
        }
      })


   
    await adminLogsService.createAdminLog({
      logDetails : {
        adminId : userDetails.id,
        action : "DELETE",
        entityId : deletedEvent.id,
        entityType : "EVENT",
        reason : req.body.reason
      }
    })   
   await emailService.sendEmail({
    to: deletedEvent.creator?.email,
    subject: "Your Event got deleted",
    message: adminDeleteTemplate(deletedEvent.title, "Event"),
  });

  await notificationService.sendNotificaion({
    userId: deletedEvent.creator?.id,
    title: "Your Event has been deleted",
    message: `Hi, ${deletedEvent.creator?.name}, your Event has been deleted by one of our admins. Please make sure to follow our platform policies to avoid future deletions.`,
    type: "EVENT_DELETED",
    entityType: "EVENT",
    entityId: deletedEvent.id,
  });

  return res.json  ({
    message : "Event deleted successfully",
    data : deletedEvent
  })
    } catch (error) {
      next(error)
    }
  }

  async deleteUser(req : Request, res :Response, next :NextFunction){
    try {
    const adminUserDetails:IUserDetails = req.userDetails
    const params = req.params
    const userId = String(params.userId)
    if(userId.length < 1){
      throw {
        code : 404, 
        message : "Unable to fetchfethch user details please try again. ",
        status : "USER_ID_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    const userDetails = await userService.getUserDetails({ id : userId}, {})
    if(userDetails.role === "ADMIN"){
      throw {
        code : 403,
        status : "DELTE_OPTION_NOT_PERMITTED",
        message : "Admin are not allowed to delete other admins. "
      } as IErrorTypes
    }
    const deletedUser = await userService.deleteUser({id : userDetails.id})
      await adminLogsService.createAdminLog({
      logDetails : {
        adminId : adminUserDetails.id,
        action : "DELETE",
        entityId : deletedUser.id,
        entityType : "USER",
        reason : req.body.reason
      }
    })  
    await emailService.sendEmail({
      to : deletedUser.email,
      subject : "You have been removed from Eventra",
      message : adminDeleteTemplate(deletedUser.name, "Account")
    })

    return res.json({
      message : "User deleted successfully. ",
      data :deletedUser
    })
    } catch (error) {
      next(error)
    }
  }

  async getMetadata(req : Request, res:Response, next:NextFunction){
    try {
      
      const totalEvents:number = await eventService.getTotalEventsCount({})
      const totalOrganization:number = await organizationService.getOrganizationCount({})
      const totalUsers:number = await userService.getTotalUsersCount()
      const totalRegistrations:number = await eventParticipantService.getParticipantsCount({})
      const totalAttendees:number = await eventParticipantService.getParticipantsCount({
        attended : true
      })
      const totalEventViews = 56

      return res.json({
        message : "Website Metadata has been fetched successfully",
        data : {
          totalEvents,
          totalOrganization,
          totalUsers,
          totalRegistrations,
          totalAttendees,
          totalEventViews,
          monthlyData : {
            totalRegistrations : await totalRegistrationsPerMonth(),
            totalAttendees : await totalRegistrationsPerMonth(),
            totalViews : null
          }
        }
      })

    } catch (error) {
      next(error)
    }
  }
  async getAllNotifications(req:Request, res:Response, next:NextFunction){
    try {
      const query = req.query
      const page = Number(query.page) || 1
      const take = Number(query.limit) || 10
      const title = String(query.title) || ""
      const skip = (page - 1) * take
      
      const notifications = await notificationService.getNotification({title : {contains : title}}, skip, take)
      const totalNotifications = await notificationService.getNotificationCount({title : {contains : title}})
      return res.json({
        message : "Notifications has been fetched successfully",
        data : notifications,
        paginations : {
          page : page,
          limit : take,
          total : totalNotifications,
          hasNextPage : page * take < totalNotifications,
          hasPreviousPage : page > 1
        }
      })
      
    } catch (error) {
      next(error)
    }
  }

  async getAllErrorLogs(req:Request, res:Response, next:NextFunction){
    try {
      const query = req.query
      const page = Number(query.page) || 1
      const take = Number(query.limit) || 10
      const skip = (page - 1) * take
      const message = String(query.message) || ""

      const errorLogs = await errorLogService.getErrorLogs(skip, take, {message : {contains : message}})
      const totalErrorLogs = await errorLogService.getErrorLogsCount({message : {contains : message}})
      return res.json({
        message : "Error logs has been fetched successfully",
        data : errorLogs,
        paginations : {
          page : page,
          limit : take,
          total : totalErrorLogs,
          hasNextPage : page * take < totalErrorLogs,
          hasPreviousPage : page > 1
        }
      })
      
    } catch (error) {
      next(error)
    }
  }

  async getAllAdminLogs(req:Request, res:Response, next:NextFunction){
    try {
      const query = req.query
      const page = Number(query.page) || 1
      const take = Number(query.limit) || 10
      const skip = (page - 1) * take
      const name = query.name 
      let filter = {}
      if(name && String(name).length > 2){
        const userDetails = await userService.getUserDetailsByName({name : {contains : String(name), mode: 'insensitive',}}, {})
        filter = userDetails.id.length > 3 ? {adminId : userDetails.id} : {}
      }
      const adminLogs = await adminLogsService.getAdminLogs(skip, take, filter)
      const totalAdminLogs = await adminLogsService.getAdminLogsCount(filter)
      return res.json({
        message : "Admin logs has been fetched successfully",
        data : adminLogs,
        paginations : {
          page : page,
          limit : take,
          total : totalAdminLogs,
          hasNextPage : page * take < totalAdminLogs,
          hasPreviousPage : page > 1
        }
      })      
    } catch (error) {
      next(error)
    }
  }

  async getCreditAndRevenue(req:Request, res:Response, next:NextFunction){
    try {
      const query = req.query
      const page = Number(query.page) || 1
      const take = Number(query.limit) || 10
      const skip = (page - 1) * take
      const name = query.name 
      const revenue = await creditService.getCreditPurchases()
      const credits = await creditService.getCreditPurchases()
      const filter = {
        organization : {
          name : {contains : name, mode : "insensitive"}
        }
      }
      const include = {
        user : {
          select : {
            name : true,
            id : true,
            email : true
          }
        },
        organization : {
          select : {
            name : true,
            id : true,
            credits : true,
            lastCreditReset : true
          }
        }
      }
      const creditPurchases = await creditService.getCreditPurchase(filter, skip, take, include)
      const totalCreditPurchases = await creditService.getCreditPurchaseCount(filter)
      return res.json({
        message : "Credit purchases has been fetched successfully",
        data : {
          creditPurchases,
          totalRevenue : revenue.totalCreditPurchases,
          totalCredits : credits.totalCreditPurchases,
          monthlyRevenue : revenue.monthlyCreditPurchases,
          monthlyCredits : credits.monthlyCreditPurchases
        },
        paginations : {
          page : page,
          limit : take,
          total : totalCreditPurchases,
          hasNextPage : page * take < totalCreditPurchases,
          hasPreviousPage : page > 1
        }
      })


    } catch (error) {
      next(error)
    }
  }
}
const adminController = new AdminController()
export default adminController