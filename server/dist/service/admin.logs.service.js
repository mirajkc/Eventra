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
}
const adminLogsService = new AdminLogsService();
export default adminLogsService;
//# sourceMappingURL=admin.logs.service.js.map