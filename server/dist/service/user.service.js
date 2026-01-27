import { prisma } from "../config/prisma.config.js";
class UserService {
    getPublicUser(userDetails) {
        const { password, session, userInteractions, userEmbedding, otpdetails, ...publicUser } = userDetails;
        return publicUser;
    }
    async deleteUser(filter) {
        const deletedUser = await prisma.user.delete({
            where: filter
        });
        if (!deletedUser) {
            throw {
                code: 500,
                message: "Unable to delete the user. ",
                status: "USER_DELETION_ERR"
            };
        }
        return deletedUser;
    }
    async getUserDetails(filter, include) {
        const user = await prisma.user.findUnique({
            where: filter,
            include: include
        });
        if (!user) {
            throw {
                code: 404,
                message: "User not found",
                status: "USER_NOT_FOUND_ERR",
            };
        }
        return user;
    }
}
const userService = new UserService();
export default userService;
//# sourceMappingURL=user.service.js.map