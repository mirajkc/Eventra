import type {Request, Response,  NextFunction } from "express"
import type { IRegisterTypes, IUserDetails, IUserLogin } from "../lib/types/user.types.ts"
import authService from "../service/auth.service.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import bcrypt from 'bcrypt'
import generateString from "../utilities/randomstring.generator.ts"
import type { IRegisterSession } from "../lib/types/session.types.ts"
import sessionService from "../service/session.service.ts"
import enviroment from "../config/enviroment.config.ts"
import { generateToken, verifyToken } from "../service/jwt.service.ts"
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
  async login(req:Request,res:Response,next:NextFunction){
    try {
      const data:IUserLogin  = req.body
      const userDetails : any = await authService.getUserDetails({
        email : data.email
      })
      if(!userDetails){
        throw {
          code : 401,
          message : "Error! invalid user or password",
          staus : "USER_NOT_FOUN_ERR"
        } as IErrorTypes
      }
      const isValid = await bcrypt.compare(data.password, userDetails.password)
      if(!isValid){
        throw {
          code: 401,
          message: "Invalid email or password",
          status: "INVALID_CREDENTIALS"
        } as IErrorTypes
      }  
      const sessionDetails:IRegisterSession = {
        accessToken :  generateToken({payload : userDetails.id , expiresIn : '1h'}),
        refreshToken :  generateToken({payload : userDetails.id ,expiresIn :'15d'}),
       userId : userDetails.id,
       expiresOn : new Date(Date.now() + 1296000000)
      }
      await sessionService.deleteSession({ userId : userDetails.id})
      const newSession = await sessionService.createSession(sessionDetails)
      res.cookie("refreshToken" , newSession.refreshToken, {
        httpOnly : true,
        secure : enviroment.mode === "PRODUCTION",
        sameSite  : enviroment.mode === "PRODUCTION" ? "none" : "lax",
        expires : new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
      })

      res.json({
        message : "User logged in successfully",
        data : newSession.accessToken
      })
    } catch (error) {
      next(error)
    }
  }
  
  async generateAccessToken(req:Request, res:Response, next:NextFunction){
    try {
      const refreshToken : string = req.cookies.refreshToken
      if(!refreshToken){
        throw {
          code : 401,
          message : "Unable to verify user please login again",
          status : "VERIFICATION_ERR"
        } as IErrorTypes
      }
      const decoded:any =  verifyToken(refreshToken)
      const sessionDetails = await sessionService.getSession({refreshToken : refreshToken})
      if(decoded.userId !== sessionDetails.userId){
        throw {
          code: 401,
          message: "Invalid session. Please login again.",
          status: "SESSION_MISMATCH_ERR",
         } as IErrorTypes
      }
      if(sessionDetails.expiresOn < new Date()){
        await sessionService.deleteSession({userId : decoded.userId})
        throw {
          code : 401, 
          message  :"Session expired please login again. ",
          status : "SESSION_EXPIRED_ERR"
        } as IErrorTypes
      }
      const accessToken = generateToken({ payload : sessionDetails.user.id , expiresIn : "1h"})
      const updatesSession = await sessionService.updateSession({refreshToken : refreshToken}, {accessToken : accessToken})
      res.json({
        message : "New access token created",
        data : updatesSession.accessToken
      })
    } catch (error) {
      next(error)
    }
  }

  async logout(req:Request, res:Response, next:NextFunction){
    try {
      const userDetails = req.userDetails
       await sessionService.deleteSession({userId : userDetails.id
        
       })
      res.clearCookie('refreshToken')
      res.json({
        message : "User logged out successfully.",
        note : "Make sure to clear the access token as well from the cookies after the logout api hits"
      })
    } catch (error) {
      next(error)
    }
  }
  
}
const authController = new AuthController()
export default authController