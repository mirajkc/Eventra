import type { Request, Response, NextFunction } from "express";
import type { IUserDetails } from "../lib/types/user.types.js";
import notificationService from "../service/notification.service.js";
import type { IErrorTypes } from "../lib/types/errorhandler.types.js";

class NotificationController {

  async getNotification(req: Request, res: Response, next: NextFunction) {
    try {
      const userDetails: IUserDetails = req.userDetails
      const query: {
        page?: number,
        limit?: number
      } = req.query
      const page: number = Number(req.query.page) || 1
      const limit: number = Number(req.query.limit) || 10
      const skip: number = (page - 1) * limit
      const notifications = await notificationService.getNotification({ userId: userDetails.id }, skip, limit)
      const notificationCount = await notificationService.getNotificationCount({ userId: userDetails.id })
      const totalPages = Math.ceil(notificationCount / limit)
      const hasNext = page > 1
      const hasPrev = page - 1
      const prevPage = page + 1
      const paginationData = {
        page,
        limit,
        skip,
        totalPages,
        hasNext,
        hasPrev,
        prevPage,
      }
      res.json({
        message: "Notifications fetched successfully",
        data: {
          notifications,
          paginationData
        }
      })

    } catch (error) {
      next(error)
    }
  }

  async updateNotification(req: Request, res: Response, next: NextFunction) {
    try {
      const notificationId = req.params.notificationId
      if (!notificationId) {
        throw {
          code: 400,
          message: "Notification ID is required",
          status: "NOTIFICATION_ID_REQUIRED_ERR"
        } as IErrorTypes
      }
      const notification = await notificationService.updateNotification({ id: notificationId })
      res.json({
        message: "Notification updated successfully",
        data: notification
      })
    } catch (error) {
      next(error)
    }
  }

}
const notificationController = new NotificationController()
export default notificationController