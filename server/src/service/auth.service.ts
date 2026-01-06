import { prisma } from "../config/prisma.config.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import type { IRegisterTypes } from "../lib/types/user.types.ts"

class AuthService{
  async getUserDetails(filter:any, include : any){
    return  await prisma.user.findFirst({
      where : filter,
      include : include
    })
  }

  async createNewUser(data:any){
    const newUser = await prisma.user.create({
      data : data
    })
    if(!newUser){
      throw {
        code : 500,
        message : "User can't be created at the momment",
        status : "USER_REGISTRATION_ERR"
      }
    }
    return newUser
  }
  async updateUser({filter, data}:{filter : {id : string}, data :any}){
    const updatedUser = await prisma.user.update({
      where : filter,
      data : data
    })
    if(!updatedUser){
      throw {
        code : 500, 
        message : "Error while updating the user please try again",
        status : "USER_UPDATE_ERR"
      } as IErrorTypes
    }
    return updatedUser
  }
}
const authService = new AuthService()
export default authService