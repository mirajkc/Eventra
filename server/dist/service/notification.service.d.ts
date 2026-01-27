import type { ICreateNotificaion } from "../lib/types/notification.types.js";
declare class NotificationService {
    getNotificationCount(filter: {
        userId: string;
    }): Promise<number>;
    sendNotificaion({ userId, title, message, type, entityId, entityType }: ICreateNotificaion): Promise<{
        id: string;
        message: string;
        createdAt: Date;
        userId: string;
        title: string;
        type: import("../generated/prisma/enums.js").NotificationType;
        entityType: import("../generated/prisma/enums.js").NotificationEntity;
        entityId: string | null;
        isRead: boolean;
    }>;
    sendManyNotification(data: Array<ICreateNotificaion>): Promise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    getNotification(filter: {
        userId: string;
    }, skip: number, limit: number): Promise<{
        id: string;
        message: string;
        createdAt: Date;
        userId: string;
        title: string;
        type: import("../generated/prisma/enums.js").NotificationType;
        entityType: import("../generated/prisma/enums.js").NotificationEntity;
        entityId: string | null;
        isRead: boolean;
    }[]>;
    updateNotification(filter: {
        id: string;
    }): Promise<{
        id: string;
        message: string;
        createdAt: Date;
        userId: string;
        title: string;
        type: import("../generated/prisma/enums.js").NotificationType;
        entityType: import("../generated/prisma/enums.js").NotificationEntity;
        entityId: string | null;
        isRead: boolean;
    }>;
}
declare const notificationService: NotificationService;
export default notificationService;
//# sourceMappingURL=notification.service.d.ts.map