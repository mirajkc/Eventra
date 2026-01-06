import type { Request, Response, NextFunction } from "express"
import authService from "../service/auth.service.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
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
      const file = req.file?.buffer
      res.json({
        file
      })
    } catch (error) {
      next(error)
    }
  }

}
const userController = new UserController()
export default userController