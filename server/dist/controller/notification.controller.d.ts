import type { Request, Response, NextFunction } from "express";
declare class NotificationController {
    getNotification(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateNotification(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const notificationController: NotificationController;
export default notificationController;
//# sourceMappingURL=notification.controller.d.ts.map