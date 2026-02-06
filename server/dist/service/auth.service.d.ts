declare class AuthService {
    getUserDetails(filter: any, include?: any): Promise<({
        [x: string]: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            accessToken: string;
            refreshToken: string;
            expiresOn: Date;
        } | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            accessToken: string;
            refreshToken: string;
            expiresOn: Date;
        })[] | ({
            id: string;
            role: import("../generated/prisma/enums.js").OrganizationRole;
            userId: string;
            organizationId: string;
            joinedAt: Date;
        } | {
            id: string;
            role: import("../generated/prisma/enums.js").OrganizationRole;
            userId: string;
            organizationId: string;
            joinedAt: Date;
        })[] | ({
            id: string;
            status: import("../generated/prisma/enums.js").EventStatus;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            organizationId: string;
            slug: string;
            creatorId: string;
            title: string;
            description: string;
            location: string;
            startDate: Date;
            endDate: Date;
            capacity: number;
            registeredCount: number;
            category: import("../generated/prisma/enums.js").EventType;
            tags: string[];
            eventScore: number | null;
        } | {
            id: string;
            status: import("../generated/prisma/enums.js").EventStatus;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            organizationId: string;
            slug: string;
            creatorId: string;
            title: string;
            description: string;
            location: string;
            startDate: Date;
            endDate: Date;
            capacity: number;
            registeredCount: number;
            category: import("../generated/prisma/enums.js").EventType;
            tags: string[];
            eventScore: number | null;
        })[] | ({
            id: string;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
            credits: number;
            amount: number;
            purchasedAt: Date;
        } | {
            id: string;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
            credits: number;
            amount: number;
            purchasedAt: Date;
        })[] | ({
            id: string;
            userId: string;
            eventId: string;
            registeredAt: Date;
            checkInToken: string;
            attended: boolean;
            checkedInAt: Date | null;
        } | {
            id: string;
            userId: string;
            eventId: string;
            registeredAt: Date;
            checkInToken: string;
            attended: boolean;
            checkedInAt: Date | null;
        })[] | ({
            id: string;
            message: string;
            createdAt: Date;
            userId: string;
            title: string;
            type: import("../generated/prisma/enums.js").NotificationType;
            entityType: import("../generated/prisma/enums.js").NotificationEntity;
            entityId: string | null;
            isRead: boolean;
        } | {
            id: string;
            message: string;
            createdAt: Date;
            userId: string;
            title: string;
            type: import("../generated/prisma/enums.js").NotificationType;
            entityType: import("../generated/prisma/enums.js").NotificationEntity;
            entityId: string | null;
            isRead: boolean;
        })[] | ({
            id: string;
            otp: string;
            createdAt: Date;
            userId: string;
            purpose: import("../generated/prisma/enums.js").OtpPurpose;
            expiresAt: Date;
            used: boolean;
        } | {
            id: string;
            otp: string;
            createdAt: Date;
            userId: string;
            purpose: import("../generated/prisma/enums.js").OtpPurpose;
            expiresAt: Date;
            used: boolean;
        })[] | ({
            id: string;
            message: string;
            createdAt: Date;
            eventId: string;
            senderId: string;
        } | {
            id: string;
            message: string;
            createdAt: Date;
            eventId: string;
            senderId: string;
        })[] | ({
            id: string;
            createdAt: Date;
            entityType: import("../generated/prisma/enums.js").AdminEntityType;
            entityId: string;
            adminId: string;
            action: import("../generated/prisma/enums.js").AdminAction;
            reason: string;
        } | {
            id: string;
            createdAt: Date;
            entityType: import("../generated/prisma/enums.js").AdminEntityType;
            entityId: string;
            adminId: string;
            action: import("../generated/prisma/enums.js").AdminAction;
            reason: string;
        })[] | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            accessToken: string;
            refreshToken: string;
            expiresOn: Date;
        }[] | {
            id: string;
            role: import("../generated/prisma/enums.js").OrganizationRole;
            userId: string;
            organizationId: string;
            joinedAt: Date;
        }[] | {
            id: string;
            status: import("../generated/prisma/enums.js").EventStatus;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            organizationId: string;
            slug: string;
            creatorId: string;
            title: string;
            description: string;
            location: string;
            startDate: Date;
            endDate: Date;
            capacity: number;
            registeredCount: number;
            category: import("../generated/prisma/enums.js").EventType;
            tags: string[];
            eventScore: number | null;
        }[] | {
            id: string;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
            credits: number;
            amount: number;
            purchasedAt: Date;
        }[] | {
            id: string;
            userId: string;
            eventId: string;
            registeredAt: Date;
            checkInToken: string;
            attended: boolean;
            checkedInAt: Date | null;
        }[] | {
            id: string;
            message: string;
            createdAt: Date;
            userId: string;
            title: string;
            type: import("../generated/prisma/enums.js").NotificationType;
            entityType: import("../generated/prisma/enums.js").NotificationEntity;
            entityId: string | null;
            isRead: boolean;
        }[] | {
            id: string;
            otp: string;
            createdAt: Date;
            userId: string;
            purpose: import("../generated/prisma/enums.js").OtpPurpose;
            expiresAt: Date;
            used: boolean;
        }[] | {
            id: string;
            message: string;
            createdAt: Date;
            eventId: string;
            senderId: string;
        }[] | {
            id: string;
            createdAt: Date;
            entityType: import("../generated/prisma/enums.js").AdminEntityType;
            entityId: string;
            adminId: string;
            action: import("../generated/prisma/enums.js").AdminAction;
            reason: string;
        }[];
        [x: number]: never;
        [x: symbol]: never;
    } & {
        id: string;
        name: string;
        email: string;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
    }) | null>;
    createNewUser(data: any): Promise<{
        id: string;
        name: string;
        email: string;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
    }>;
    updateUser({ filter, data }: {
        filter: {
            id: string;
        };
        data: any;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
    }>;
}
declare const authService: AuthService;
export default authService;
//# sourceMappingURL=auth.service.d.ts.map