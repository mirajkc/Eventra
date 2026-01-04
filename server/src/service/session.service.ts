import { prisma } from "../config/prisma.config.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import type { IRegisterSession, ISessionDetails } from "../lib/types/session.types.ts"

class SessionService {
  async createSession(data:IRegisterSession){
    const newSession:ISessionDetails = await prisma.session.create({
      data : data
    })
    if(!newSession){
      throw{
        code : 500,
        message : "Unable to create session",
        status : "SESSION_CREATION_ERR"
      } as IErrorTypes
    }
    return newSession
  }

  async getSession(filter : { refreshToken : string }){
    const session = await prisma.session.findFirst({
      where : filter,
      include : {
        user : {
          select : {id : true}
        }
      }
    })
    if(!session){
      throw {
        code : 401, 
        message  :"Session not found please log in again",
        status : "SESSION_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    return session
  }

  async updateSession(filter:{refreshToken : string}, data:{accessToken : string}){
    const updatesSession = await prisma.session.update({
      where : filter,
      data : data
    })
    if(!updatesSession){
      throw {
        code : 401, 
        message :"Error while creation new access token",
        status :"ACCESS_TOKEN_CREATION_ERR"
      } as IErrorTypes
    }
    return updatesSession
  }
  async deleteSession(filter : { userId : string }) { 
    const deletedSession = await prisma.session.delete({
      where : filter
    })
    if(!deletedSession){
      throw {
        code : 404, 
        message : "Session not found",
        status :  "SESSION_NOT_FOUND_ERR"
       } as IErrorTypes
    }

    return deletedSession
  }
}
const sessionService = new SessionService()
export default sessionService