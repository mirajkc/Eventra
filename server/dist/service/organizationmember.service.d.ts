declare class OrganizationMember {
    getMemberCount({ filter }: {
        filter: {
            organizationId?: string;
            userId?: string;
        };
    }): Promise<number>;
    getMemberByFilter({ filter }: {
        filter: any;
    }): Promise<{
        id: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
        joinedAt: Date;
        userId: string;
        organizationId: string;
    } | null>;
    createNewMember(data: any): Promise<{
        id: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
        joinedAt: Date;
        userId: string;
        organizationId: string;
    }>;
    deleteMember({ filter }: {
        filter: {
            id: string;
            organizationId?: string;
        };
    }): Promise<{
        id: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
        joinedAt: Date;
        userId: string;
        organizationId: string;
    }>;
    updateMember({ filter, data }: {
        filter: {
            id: string;
            organizationId: string;
        };
        data: {
            role: "OWNER" | "ADMIN" | "MEMBER" | "CREATOR";
        };
    }): Promise<{
        id: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
        joinedAt: Date;
        userId: string;
        organizationId: string;
    }>;
}
declare const organizationMemberService: OrganizationMember;
export default organizationMemberService;
//# sourceMappingURL=organizationmember.service.d.ts.map