import { prisma } from "../config/prisma.config.js"
import type { IAdminLog } from "../lib/types/admin.types.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"

class AdminLogsService {
  async createAdminLog({logDetails}: {logDetails: IAdminLog}) {
    const adminLog = await prisma.adminLogs.create({
      data: {
        adminId:logDetails.adminId,
        action:logDetails.action,
        entityId:logDetails.entityId,
        entityType:logDetails.entityType,
        reason : logDetails.reason
      },
    })
    if(!adminLog.id){
      throw {
        code : 500,
        message : "Failed to create admin log",
        status : "ADMIN_LOG_CREATION_FAILED"
      } as IErrorTypes
    }
    return adminLog
  }
}
const adminLogsService = new AdminLogsService()

export default adminLogsService