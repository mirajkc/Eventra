import { prisma } from "../config/prisma.config.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"

class NotificationService {
  async getNotificationCount(filter : {userId : string}){
      return prisma.notification.count({
        where : filter
      })
    }
  async sendNotificaion({userId,title,message, type, entityId, entityType}:{
    userId : string,
    title : string,
    message : string,
    type : "EVENT_CREATED" | "EVENT_UPDATED" | "EVENT_REMINDER" | "EVENT_CANCELLED" | "ORG_APPROVED" | "PAYMENT_SUCCESS",
    entityType : "EVENT" | "ORGANIZATION" |"USER"| "PAYMENT",
    entityId : string
  }){
    const newNotifications = await prisma.notification.create({
      data : {
        userId : userId,
        title : title,
        message : message,
        type : type, 
        entityType : entityType,
        entityId : entityId
      }
    })
    if(!newNotifications){
      throw {
        code : 500,
        message : "Error unable to send the notificaions. ",
        status : "NOTIFICATION_CREATION_ERR"
      } as IErrorTypes
    }
    return newNotifications
  }
}
const notificationService = new NotificationService()
export default notificationService