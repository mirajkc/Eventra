import type {Request, Response,  NextFunction } from "express"
import type { IRegisterTypes } from "../lib/types/user.types.ts"
import authService from "../service/auth.service.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import bcrypt from 'bcrypt'
import generateString from "../utilities/randomstring.generator.ts"
class AuthController {
  async register(req:Request,res:Response,next:NextFunction){
    try {
      const details:IRegisterTypes = req.body
      const userDetails = await authService.getUserDetails({email : details.email})
      if(userDetails){
        throw{
          code : 403 ,
          message : "User already exits please login instead.",
          status : "USER_ALREADY_EXISTS_ERR"
        } as IErrorTypes
      }
      const registerDetails:IRegisterTypes ={
        name : "User"+generateString({length: 5,charset : "alphanumeric"}).toLowerCase(), 
        email : details.email,
        password : await bcrypt.hash(details.password, 12),
        role : details.role || "CUSTOMER"
      }
      const newUser = await authService.createNewUser(registerDetails)
      return res.json({
        message : "Registerd successfully please login now...",
        data : newUser
      })
    } catch (error) {
      next(error)
    }
  }
}
const authController = new AuthController()
export default authController