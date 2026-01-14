import { prisma } from "../config/prisma.config.js";
class AuthService {
    async getUserDetails(filter, include) {
        return await prisma.user.findFirst({
            where: filter,
            include: include
        });
    }
    async createNewUser(data) {
        const newUser = await prisma.user.create({
            data: data
        });
        if (!newUser) {
            throw {
                code: 500,
                message: "User can't be created at the momment",
                status: "USER_REGISTRATION_ERR"
            };
        }
        return newUser;
    }
    async updateUser({ filter, data }) {
        const updatedUser = await prisma.user.update({
            where: filter,
            data: data
        });
        if (!updatedUser) {
            throw {
                code: 500,
                message: "Error while updating the user please try again",
                status: "USER_UPDATE_ERR"
            };
        }
        return updatedUser;
    }
}
const authService = new AuthService();
export default authService;
//# sourceMappingURL=auth.service.js.map