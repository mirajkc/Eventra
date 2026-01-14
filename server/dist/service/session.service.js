import { prisma } from "../config/prisma.config.js";
class SessionService {
    async createSession(data) {
        const newSession = await prisma.session.create({
            data: data
        });
        if (!newSession) {
            throw {
                code: 500,
                message: "Unable to create session",
                status: "SESSION_CREATION_ERR"
            };
        }
        return newSession;
    }
    async getSession(filter) {
        const session = await prisma.session.findFirst({
            where: filter,
            include: {
                user: {
                    select: { id: true }
                }
            }
        });
        if (!session) {
            throw {
                code: 401,
                message: "Session not found please log in again",
                status: "SESSION_NOT_FOUND_ERR"
            };
        }
        return session;
    }
    async updateSession(filter, data) {
        const updatesSession = await prisma.session.update({
            where: filter,
            data: data
        });
        if (!updatesSession) {
            throw {
                code: 401,
                message: "Error while creation new access token",
                status: "ACCESS_TOKEN_CREATION_ERR"
            };
        }
        return updatesSession;
    }
    async deleteSession(filter) {
        const result = await prisma.session.deleteMany({
            where: filter
        });
        return result;
    }
}
const sessionService = new SessionService();
export default sessionService;
//# sourceMappingURL=session.service.js.map