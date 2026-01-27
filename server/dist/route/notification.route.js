import express, { Router } from "express";
import authorize from "../middleware/authorize.middleware.js";
import notificationController from "../controller/notification.controller.js";
const notificationRouter = express.Router();
notificationRouter.get('/get-notification', authorize({}), notificationController.getNotification);
notificationRouter.get('/update-notification/:notificationId', authorize({}), notificationController.updateNotification);
export default notificationRouter;
//# sourceMappingURL=notification.route.js.map