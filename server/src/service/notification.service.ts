import { prisma } from "../config/prisma.config.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import type { ICreateNotificaion } from "../lib/types/notification.types.ts"

class NotificationService {
  async getNotificationCount(filter : {userId : string}){
      return prisma.notification.count({
        where : filter
      })
    }
  async sendNotificaion({userId,title,message, type, entityId, entityType}:ICreateNotificaion){
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

  async sendManyNotification(data :Array<ICreateNotificaion>){
    const notifications = await prisma.notification.createMany({data  :data})
    if(!notifications || notifications.count <= 0 ){
      throw {
        code : 500,
        message : "Error while sending the notifications. ",
        status : "NOTIFICATION_SEND_ERR"
      } as IErrorTypes
    }
    return notifications
  }
}
const notificationService = new NotificationService()
export default notificationService