import notificationService from "../service/notification.service.js";
class NotificationController {
    async getNotification(req, res, next) {
        try {
            const userDetails = req.userDetails;
            const query = req.query;
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const skip = (page - 1) * limit;
            const notifications = await notificationService.getNotification({ userId: userDetails.id }, skip, limit);
            const notificationCount = await notificationService.getNotificationCount({ userId: userDetails.id });
            res.json({
                message: "Notifications fetched successfully",
                data: {
                    notifications,
                    paginationData: {
                        currentPage: page,
                        totalPages: Math.ceil(notificationCount / limit),
                        take: limit,
                        totalDocs: notificationCount,
                        hasNextPage: page < Math.ceil(notificationCount / limit),
                        hasPreviousPage: page > 1,
                    }
                }
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateNotification(req, res, next) {
        try {
            const notificationId = req.params.notificationId;
            if (!notificationId) {
                throw {
                    code: 400,
                    message: "Notification ID is required",
                    status: "NOTIFICATION_ID_REQUIRED_ERR"
                };
            }
            const notification = await notificationService.updateNotification({ id: notificationId });
            res.json({
                message: "Notification updated successfully",
                data: notification
            });
        }
        catch (error) {
            next(error);
        }
    }
}
const notificationController = new NotificationController();
export default notificationController;
//# sourceMappingURL=notification.controller.js.map