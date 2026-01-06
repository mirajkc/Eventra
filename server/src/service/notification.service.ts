import { prisma } from "../config/prisma.config.ts"

class NotificationService {
  async getNotificationCount(filter : {userId : string}){
      return prisma.notification.count({
        where : filter
      })
    }
}
const notoficationService = new NotificationService()
export default notoficationService