import { prisma } from "../config/prisma.config.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import type { ICreateOTP } from "../lib/types/otp.types.ts"

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
}
const otpService = new OTPService()
export default otpService