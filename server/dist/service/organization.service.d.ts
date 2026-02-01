import type { ICreateOrganization, IUploadOrganizationData } from "../lib/types/organization.types.js";
declare class OrganizationService {
    getOrganizationCount(filter: any): Promise<number>;
    getOrganizationByOwner(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string;
        credits: number;
        type: import("../generated/prisma/enums.js").OrganizationType;
        thumbnail: string | null;
        website: string | null;
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
        })[] | {
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
        }[] | {
            id: string;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
            credits: number;
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
        description: string;
        credits: number;
        type: import("../generated/prisma/enums.js").OrganizationType;
        thumbnail: string | null;
        website: string | null;
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
        description: string;
        credits: number;
        type: import("../generated/prisma/enums.js").OrganizationType;
        thumbnail: string | null;
        website: string | null;
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
        description: string;
        credits: number;
        type: import("../generated/prisma/enums.js").OrganizationType;
        thumbnail: string | null;
        website: string | null;
        lastCreditReset: Date;
        isPremium: boolean;
    }>;
    deleteOrganization(id: string, include: any): Promise<{
        [x: string]: ({
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
        })[] | {
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
        }[] | {
            id: string;
            organizationId: string;
            purchasedBy: string;
            package: import("../generated/prisma/enums.js").CreditPackage;
            credits: number;
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
        description: string;
        credits: number;
        type: import("../generated/prisma/enums.js").OrganizationType;
        thumbnail: string | null;
        website: string | null;
        lastCreditReset: Date;
        isPremium: boolean;
    }>;
}
declare const organizationService: OrganizationService;
export default organizationService;
//# sourceMappingURL=organization.service.d.ts.map