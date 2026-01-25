
import { prisma } from "../config/prisma.config.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import type { ICreateNotificaion } from "../lib/types/notification.types.js"

class NotificationService {
  async getNotificationCount(filter: { userId: string }) {
    return prisma.notification.count({
      where: filter
    })
  }
  async sendNotificaion({ userId, title, message, type, entityId, entityType }: ICreateNotificaion) {
    const newNotifications = await prisma.notification.create({
      data: {
        userId: userId,
        title: title,
        message: message,
        type: type,
        entityType: entityType,
        entityId: entityId
      }
    })
    if (!newNotifications) {
      throw {
        code: 500,
        message: "Error unable to send the notificaions. ",
        status: "NOTIFICATION_CREATION_ERR"
      } as IErrorTypes
    }
    return newNotifications
  }

  async sendManyNotification(data: Array<ICreateNotificaion>) {
    const notifications = await prisma.notification.createMany({ data: data })
    if (!notifications || notifications.count <= 0) {
      throw {
        code: 500,
        message: "Error while sending the notifications. ",
        status: "NOTIFICATION_SEND_ERR"
      } as IErrorTypes
    }
    return notifications
  }

  async getNotification(filter: { userId: string }, skip: number, limit: number) {
    const notifications = await prisma.notification.findMany({
      where: filter,
      orderBy: {
        createdAt: "desc"
      },
      skip: skip,
      take: limit
    })
    if (!notifications) {
      throw {
        code: 404,
        message: "No notifications found for the user. ",
        status: "NOTIFICATION_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    return notifications
  }

  async updateNotification(filter: { id: string }) {
    const notification = await prisma.notification.update({
      where: filter,
      data: {
        isRead: true
      }
    })
    if (!notification) {
      throw {
        code: 404,
        message: "Notification not found. ",
        status: "NOTIFICATION_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    return notification
  }
}
const notificationService = new NotificationService()
export default notificationService