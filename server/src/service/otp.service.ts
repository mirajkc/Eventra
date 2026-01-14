import { prisma } from "../config/prisma.config.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import type { ICreateOTP } from "../lib/types/otp.types.js"

class OTPService {
  async createOtp(data:ICreateOTP){
    const newOTP = await prisma.otpdetails.create({
      data : data
    })
    if(!newOTP){
      throw {
        code : 500,
        message :"Sorry, the otp can't be sent at the momment. ",
        status :"OTP_SEND_ERR"
      } as IErrorTypes
    }
    return newOTP
  }

  async getOtp({
        filter,
        orderBy = { createdAt: 'desc' }
      }: {
        filter: { userId: string, purpose: 'FORGOT_PASSWORD' | 'RESET_PASSWORD' },
        orderBy?: { createdAt: 'desc' | 'asc' }
      }) {
        const otp = await prisma.otpdetails.findFirst({
          where: filter,
          orderBy: orderBy,
        });
      
        if (!otp) {
          throw {
            code: 404,
            message: "No OTP found for the user",
          } as IErrorTypes;
        }
      
        return otp;
}
 async updateOTP({filter, data} : {filter : any, data : {used : boolean}}){
  const updateOTP = await prisma.otpdetails.update({
    where : filter,
    data : data
  })
  if(!updateOTP){
    throw {
      code : 404, 
      message : "unable to update the otp please try again",
      status : "OTP_UPDATE_ERR"
    } as IErrorTypes
  }
  return updateOTP
 }

}
const otpService = new OTPService()
export default otpService