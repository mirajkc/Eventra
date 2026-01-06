class UserService {
  getPublicUser (userDetails:any){
    const {password, session,userInteractions,userEmbedding, otpdetails, ...publicUser  } = userDetails
    return publicUser
  }
}
const userService = new UserService()
export default userService