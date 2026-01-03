import { prisma } from "../config/prisma.config.ts"
import type { IRegisterTypes } from "../lib/types/user.types.ts"

class AuthService{
  async getUserDetails(filter:any){
    return  await prisma.user.findFirst({
      where : filter
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
}
const authService = new AuthService()
export default authService