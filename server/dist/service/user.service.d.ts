declare class UserService {
    getPublicUser(userDetails: any): any;
    deleteUser(filter: {
        id: string;
    }): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        userScore: number;
        clickedEventsCount: number;
    }>;
    getUserDetails(filter: {
        id: string;
    }, include: any): Promise<{
        [x: string]: ({
            id: string;
            role: import("../generated/prisma/enums.js").OrganizationRole;
            joinedAt: Date;
            userId: string;
            organizationId: string;
        } | {
            id: string;
            role: import("../generated/prisma/enums.js").OrganizationRole;
            joinedAt: Date;
            userId: string;
            organizationId: string;
        })[] | ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string;
            organizationId: string;
            slug: string;
            title: string;
            location: string;
            latitude: number | null;
            longitude: number | null;
            startDate: Date;
            endDate: Date;
            capacity: number;
            registeredCount: number;
            status: import("../generated/prisma/enums.js").EventStatus;
            category: import("../generated/prisma/enums.js").EventType;
            tags: string[];
            eventScore: number | null;
            creatorId: string;
        } | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string;
            organizationId: string;
            slug: string;
            title: string;
            location: string;
            latitude: number | null;
            longitude: number | null;
            startDate: Date;
            endDate: Date;
            capacity: number;
            registeredCount: number;
            status: import("../generated/prisma/enums.js").EventStatus;
            category: import("../generated/prisma/enums.js").EventType;
            tags: string[];
            eventScore: number | null;
            creatorId: string;
        })[] | ({
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
            credits: number;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
            amount: number;
            purchasedAt: Date;
        } | {
            id: string;
            credits: number;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
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
            createdAt: Date;
            type: import("../generated/prisma/enums.js").NotificationType;
            userId: string;
            title: string;
            message: string;
            entityType: import("../generated/prisma/enums.js").NotificationEntity;
            entityId: string | null;
            isRead: boolean;
        } | {
            id: string;
            createdAt: Date;
            type: import("../generated/prisma/enums.js").NotificationType;
            userId: string;
            title: string;
            message: string;
            entityType: import("../generated/prisma/enums.js").NotificationEntity;
            entityId: string | null;
            isRead: boolean;
        })[] | ({
            id: string;
            createdAt: Date;
            userId: string;
            otp: string;
            purpose: import("../generated/prisma/enums.js").OtpPurpose;
            expiresAt: Date;
            used: boolean;
        } | {
            id: string;
            createdAt: Date;
            userId: string;
            otp: string;
            purpose: import("../generated/prisma/enums.js").OtpPurpose;
            expiresAt: Date;
            used: boolean;
        })[] | ({
            id: string;
            createdAt: Date;
            message: string;
            eventId: string;
            senderId: string;
        } | {
            id: string;
            createdAt: Date;
            message: string;
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
        })[] | ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            hasClicked: boolean;
            hasJoined: boolean;
        } | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            hasClicked: boolean;
            hasJoined: boolean;
        })[] | {
            id: string;
            role: import("../generated/prisma/enums.js").OrganizationRole;
            joinedAt: Date;
            userId: string;
            organizationId: string;
        }[] | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string;
            organizationId: string;
            slug: string;
            title: string;
            location: string;
            latitude: number | null;
            longitude: number | null;
            startDate: Date;
            endDate: Date;
            capacity: number;
            registeredCount: number;
            status: import("../generated/prisma/enums.js").EventStatus;
            category: import("../generated/prisma/enums.js").EventType;
            tags: string[];
            eventScore: number | null;
            creatorId: string;
        }[] | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            accessToken: string;
            refreshToken: string;
            expiresOn: Date;
        }[] | {
            id: string;
            credits: number;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
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
            createdAt: Date;
            type: import("../generated/prisma/enums.js").NotificationType;
            userId: string;
            title: string;
            message: string;
            entityType: import("../generated/prisma/enums.js").NotificationEntity;
            entityId: string | null;
            isRead: boolean;
        }[] | {
            id: string;
            createdAt: Date;
            userId: string;
            otp: string;
            purpose: import("../generated/prisma/enums.js").OtpPurpose;
            expiresAt: Date;
            used: boolean;
        }[] | {
            id: string;
            createdAt: Date;
            message: string;
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
        }[] | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            hasClicked: boolean;
            hasJoined: boolean;
        }[];
        [x: number]: never;
        [x: symbol]: never;
    } & {
        id: string;
        email: string;
        name: string;
        phone: string | null;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        userScore: number;
        clickedEventsCount: number;
    }>;
    getUserDetailsByName(filter: {
        name?: {
            contains: string;
            mode: 'insensitive';
        };
    }, include: any): Promise<{
        [x: string]: ({
            id: string;
            role: import("../generated/prisma/enums.js").OrganizationRole;
            joinedAt: Date;
            userId: string;
            organizationId: string;
        } | {
            id: string;
            role: import("../generated/prisma/enums.js").OrganizationRole;
            joinedAt: Date;
            userId: string;
            organizationId: string;
        })[] | ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string;
            organizationId: string;
            slug: string;
            title: string;
            location: string;
            latitude: number | null;
            longitude: number | null;
            startDate: Date;
            endDate: Date;
            capacity: number;
            registeredCount: number;
            status: import("../generated/prisma/enums.js").EventStatus;
            category: import("../generated/prisma/enums.js").EventType;
            tags: string[];
            eventScore: number | null;
            creatorId: string;
        } | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string;
            organizationId: string;
            slug: string;
            title: string;
            location: string;
            latitude: number | null;
            longitude: number | null;
            startDate: Date;
            endDate: Date;
            capacity: number;
            registeredCount: number;
            status: import("../generated/prisma/enums.js").EventStatus;
            category: import("../generated/prisma/enums.js").EventType;
            tags: string[];
            eventScore: number | null;
            creatorId: string;
        })[] | ({
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
            credits: number;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
            amount: number;
            purchasedAt: Date;
        } | {
            id: string;
            credits: number;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
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
            createdAt: Date;
            type: import("../generated/prisma/enums.js").NotificationType;
            userId: string;
            title: string;
            message: string;
            entityType: import("../generated/prisma/enums.js").NotificationEntity;
            entityId: string | null;
            isRead: boolean;
        } | {
            id: string;
            createdAt: Date;
            type: import("../generated/prisma/enums.js").NotificationType;
            userId: string;
            title: string;
            message: string;
            entityType: import("../generated/prisma/enums.js").NotificationEntity;
            entityId: string | null;
            isRead: boolean;
        })[] | ({
            id: string;
            createdAt: Date;
            userId: string;
            otp: string;
            purpose: import("../generated/prisma/enums.js").OtpPurpose;
            expiresAt: Date;
            used: boolean;
        } | {
            id: string;
            createdAt: Date;
            userId: string;
            otp: string;
            purpose: import("../generated/prisma/enums.js").OtpPurpose;
            expiresAt: Date;
            used: boolean;
        })[] | ({
            id: string;
            createdAt: Date;
            message: string;
            eventId: string;
            senderId: string;
        } | {
            id: string;
            createdAt: Date;
            message: string;
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
        })[] | ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            hasClicked: boolean;
            hasJoined: boolean;
        } | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            hasClicked: boolean;
            hasJoined: boolean;
        })[] | {
            id: string;
            role: import("../generated/prisma/enums.js").OrganizationRole;
            joinedAt: Date;
            userId: string;
            organizationId: string;
        }[] | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string;
            organizationId: string;
            slug: string;
            title: string;
            location: string;
            latitude: number | null;
            longitude: number | null;
            startDate: Date;
            endDate: Date;
            capacity: number;
            registeredCount: number;
            status: import("../generated/prisma/enums.js").EventStatus;
            category: import("../generated/prisma/enums.js").EventType;
            tags: string[];
            eventScore: number | null;
            creatorId: string;
        }[] | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            accessToken: string;
            refreshToken: string;
            expiresOn: Date;
        }[] | {
            id: string;
            credits: number;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
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
            createdAt: Date;
            type: import("../generated/prisma/enums.js").NotificationType;
            userId: string;
            title: string;
            message: string;
            entityType: import("../generated/prisma/enums.js").NotificationEntity;
            entityId: string | null;
            isRead: boolean;
        }[] | {
            id: string;
            createdAt: Date;
            userId: string;
            otp: string;
            purpose: import("../generated/prisma/enums.js").OtpPurpose;
            expiresAt: Date;
            used: boolean;
        }[] | {
            id: string;
            createdAt: Date;
            message: string;
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
        }[] | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            hasClicked: boolean;
            hasJoined: boolean;
        }[];
        [x: number]: never;
        [x: symbol]: never;
    } & {
        id: string;
        email: string;
        name: string;
        phone: string | null;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        userScore: number;
        clickedEventsCount: number;
    }>;
    getAllUsers(skip: number, take: number, filter: any): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        userScore: number;
        clickedEventsCount: number;
    }[]>;
    getTotalUsersCount(filter?: any): Promise<number>;
    getUserActivity({ filter }: {
        filter: {
            id: string;
        };
    }): Promise<{
        event: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string;
            organizationId: string;
            slug: string;
            title: string;
            location: string;
            latitude: number | null;
            longitude: number | null;
            startDate: Date;
            endDate: Date;
            capacity: number;
            registeredCount: number;
            status: import("../generated/prisma/enums.js").EventStatus;
            category: import("../generated/prisma/enums.js").EventType;
            tags: string[];
            eventScore: number | null;
            creatorId: string;
        };
        hasClicked: boolean;
        hasJoined: boolean;
    }[]>;
}
declare const userService: UserService;
export default userService;
//# sourceMappingURL=user.service.d.ts.map