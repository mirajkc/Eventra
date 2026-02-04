import { prisma } from "../config/prisma.config.js";
class ErrorLogService {
    async getErrorLogs(skip, take, filter) {
        const errorlog = await prisma.errorLog.findMany({
            where: filter,
            skip: skip,
            take: take,
        });
        if (errorlog.length < 1) {
            throw {
                code: 404,
                message: "No error logs found. ",
                status: "ERROR_LOG_NOT_FOUND_ERR"
            };
        }
        return errorlog;
    }
    async getErrorLogsCount(filter) {
        return prisma.errorLog.count({
            where: filter
        });
    }
}
const errorLogService = new ErrorLogService();
export default errorLogService;
//# sourceMappingURL=errorlog.service.js.map