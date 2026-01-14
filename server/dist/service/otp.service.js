import { prisma } from "../config/prisma.config.js";
class OTPService {
    async createOtp(data) {
        const newOTP = await prisma.otpdetails.create({
            data: data
        });
        if (!newOTP) {
            throw {
                code: 500,
                message: "Sorry, the otp can't be sent at the momment. ",
                status: "OTP_SEND_ERR"
            };
        }
        return newOTP;
    }
    async getOtp({ filter, orderBy = { createdAt: 'desc' } }) {
        const otp = await prisma.otpdetails.findFirst({
            where: filter,
            orderBy: orderBy,
        });
        if (!otp) {
            throw {
                code: 404,
                message: "No OTP found for the user",
            };
        }
        return otp;
    }
    async updateOTP({ filter, data }) {
        const updateOTP = await prisma.otpdetails.update({
            where: filter,
            data: data
        });
        if (!updateOTP) {
            throw {
                code: 404,
                message: "unable to update the otp please try again",
                status: "OTP_UPDATE_ERR"
            };
        }
        return updateOTP;
    }
}
const otpService = new OTPService();
export default otpService;
//# sourceMappingURL=otp.service.js.map