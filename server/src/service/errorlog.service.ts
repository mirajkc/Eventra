import { prisma } from "../config/prisma.config.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"

class ErrorLogService {
    async getErrorLogs(skip : number, take : number, filter :{message?: {contains : string}}){
       const errorlog = await prisma.errorLog.findMany({
        where : filter,
        skip : skip,
        take : take,
       })
       if(errorlog.length < 1){
        throw {
            code : 404,
            message : "No error logs found. ",
            status : "ERROR_LOG_NOT_FOUND_ERR"
        } as IErrorTypes
       }
       return errorlog
    }
    async getErrorLogsCount(filter :{message?: {contains : string}}){
        return prisma.errorLog.count({
            where : filter
        })
    }
}
const errorLogService = new ErrorLogService()
export default errorLogService