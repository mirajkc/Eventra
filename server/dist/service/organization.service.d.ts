import type { ICreateOrganization, IUploadOrganizationData } from "../lib/types/organization.types.js";
declare class OrganizationService {
    getOrganizationCount(filter: any): Promise<number>;
    getOrganizationByOwner(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        thumbnail: string | null;
        website: string | null;
        description: string;
        type: import("../generated/prisma/enums.js").OrganizationType;
        credits: number;
        lastCreditReset: Date;
        isPremium: boolean;
    } | null>;
    addNewMember({ data }: {
        data: {
            userId: string;
            organizationId: string;
            role: "OWNER" | "ADMIN" | "MEMBER" | "CREATOR";
        };
    }): Promise<void>;
    createNewOrganization({ data, userId }: {
        data: ICreateOrganization;
        userId: string;
    }): Promise<any>;
    getOrganizationByFilter({ filter, include }: {
        filter: {
            id: string;
        };
        include: any;
    }): Promise<{
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
            credits: number;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
            amount: number;
            purchasedAt: Date;
        }[];
        [x: number]: never;
        [x: symbol]: never;
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        thumbnail: string | null;
        website: string | null;
        description: string;
        type: import("../generated/prisma/enums.js").OrganizationType;
        credits: number;
        lastCreditReset: Date;
        isPremium: boolean;
    }>;
    getAllOrganizationByFilter({ filter, orderBy, take, skip }: {
        filter: any;
        orderBy: any;
        take: number;
        skip: number;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        thumbnail: string | null;
        website: string | null;
        description: string;
        type: import("../generated/prisma/enums.js").OrganizationType;
        credits: number;
        lastCreditReset: Date;
        isPremium: boolean;
    }[]>;
    updateOrganization({ filter, data }: {
        filter: {
            id: string;
        };
        data: IUploadOrganizationData;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        thumbnail: string | null;
        website: string | null;
        description: string;
        type: import("../generated/prisma/enums.js").OrganizationType;
        credits: number;
        lastCreditReset: Date;
        isPremium: boolean;
    }>;
    deleteOrganization(id: string, include: any): Promise<{
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
            credits: number;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
            amount: number;
            purchasedAt: Date;
        }[];
        [x: number]: never;
        [x: symbol]: never;
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        thumbnail: string | null;
        website: string | null;
        description: string;
        type: import("../generated/prisma/enums.js").OrganizationType;
        credits: number;
        lastCreditReset: Date;
        isPremium: boolean;
    }>;
}
declare const organizationService: OrganizationService;
export default organizationService;
//# sourceMappingURL=organization.service.d.ts.map