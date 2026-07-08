import type { ICreateNotificaion } from "../lib/types/notification.types.js";
declare class NotificationService {
    getNotificationCount(filter: {
        userId?: string;
        title?: {
            contains: string;
        };
    }): Promise<number>;
    sendNotificaion({ userId, title, message, type, entityId, entityType }: ICreateNotificaion): Promise<{
        id: string;
        createdAt: Date;
        type: import("../generated/prisma/enums.js").NotificationType;
        userId: string;
        title: string;
        message: string;
        entityType: import("../generated/prisma/enums.js").NotificationEntity;
        entityId: string | null;
        isRead: boolean;
    }>;
    sendManyNotification(data: Array<ICreateNotificaion>): Promise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    getNotification(filter: {
        userId?: string;
        title?: {
            contains: string;
        };
    }, skip: number, limit: number): Promise<{
        id: string;
        createdAt: Date;
        type: import("../generated/prisma/enums.js").NotificationType;
        userId: string;
        title: string;
        message: string;
        entityType: import("../generated/prisma/enums.js").NotificationEntity;
        entityId: string | null;
        isRead: boolean;
    }[]>;
    updateNotification(filter: {
        id: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        type: import("../generated/prisma/enums.js").NotificationType;
        userId: string;
        title: string;
        message: string;
        entityType: import("../generated/prisma/enums.js").NotificationEntity;
        entityId: string | null;
        isRead: boolean;
    }>;
}
declare const notificationService: NotificationService;
export default notificationService;
//# sourceMappingURL=notification.service.d.ts.map