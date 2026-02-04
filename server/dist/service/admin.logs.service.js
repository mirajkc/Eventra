import { prisma } from "../config/prisma.config.js";
class AdminLogsService {
    async createAdminLog({ logDetails }) {
        const adminLog = await prisma.adminLogs.create({
            data: {
                adminId: logDetails.adminId,
                action: logDetails.action,
                entityId: logDetails.entityId,
                entityType: logDetails.entityType,
                reason: logDetails.reason
            },
        });
        if (!adminLog.id) {
            throw {
                code: 500,
                message: "Failed to create admin log",
                status: "ADMIN_LOG_CREATION_FAILED"
            };
        }
        return adminLog;
    }
    async getAdminLogs(skip, take, filter) {
        const adminLogs = await prisma.adminLogs.findMany({
            where: filter,
            skip: skip,
            take: take,
            include: {
                admin: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        });
        if (adminLogs.length < 1) {
            throw {
                code: 404,
                message: "No admin logs found. ",
                status: "ADMIN_LOG_NOT_FOUND_ERR"
            };
        }
        return adminLogs;
    }
    async getAdminLogsCount(filter) {
        return prisma.adminLogs.count({
            where: filter
        });
    }
}
const adminLogsService = new AdminLogsService();
export default adminLogsService;
//# sourceMappingURL=admin.logs.service.js.map