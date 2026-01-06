import type { Request, Response, NextFunction } from "express"
import authService from "../service/auth.service.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import type { IUserDetails } from "../lib/types/user.types.ts"
import { uploadImage } from "../service/upload.service.ts"
class UserController {
    async getLoggedInUser(req:Request, res:Response , next:NextFunction ){
      try {
        const userDetails = req.userDetails
        const userData = await authService.getUserDetails({
          id : userDetails.id
        },{
               organizationMember : true,
               createdEvents : true,
               creditPurchases : true,
               eventParticipants : true,
               notifications : true
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

}
const userController = new UserController()
export default userController