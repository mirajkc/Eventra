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


  async getAdminLogs(skip : number, take : number, filter : any){
    const adminLogs = await prisma.adminLogs.findMany({
       where : filter,
       skip : skip,
       take : take,
       include : {
        admin : {
          select : {
            id : true,
            name : true,
            email : true
          }
        }
       }

     })
     if(adminLogs.length < 1){
      throw {
          code : 404,
          message : "No admin logs found. ",
          status : "ADMIN_LOG_NOT_FOUND_ERR"
      } as IErrorTypes
     }
     return adminLogs
  }
  async getAdminLogsCount(filter : any){
    return prisma.adminLogs.count({
      where : filter
    })
  }
}

const adminLogsService = new AdminLogsService()

export default adminLogsService