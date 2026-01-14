import { prisma } from "../config/prisma.config.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"

class UserService {
  getPublicUser (userDetails:any){
    const {password, session,userInteractions,userEmbedding, otpdetails, ...publicUser  } = userDetails
    return publicUser
  }
  async deleteUser (filter : {id : string}){
    const deletedUser = await prisma.user.delete({
      where : filter
    })
    if(!deletedUser){
      throw {
        code : 500,
        message : "Unable to delete the user. ",
        status : "USER_DELETION_ERR"
      } as IErrorTypes
    }
    return deletedUser
  }
  async getUserDetails(filter: { id: string }, include: any) {
  const user = await prisma.user.findUnique({
    where: filter,
    include: include,
  });

  if (!user) {
    throw {
      code: 404,
      message: "User not found",
      status: "USER_NOT_FOUND_ERR",
    } as IErrorTypes;
  }
  return user;
}


}
const userService = new UserService()
export default userService