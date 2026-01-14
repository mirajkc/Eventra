declare class OrganizationMember {
    getMemberCount({ filter }: {
        filter: {
            organizationId?: string;
        };
    }): Promise<number>;
    getMemberByFilter({ filter }: {
        filter: any;
    }): Promise<{
        id: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
        userId: string;
        organizationId: string;
        joinedAt: Date;
    } | null>;
    createNewMember(data: any): Promise<{
        id: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
        userId: string;
        organizationId: string;
        joinedAt: Date;
    }>;
    deleteMember({ filter }: {
        filter: {
            id: string;
            organizationId?: string;
        };
    }): Promise<{
        id: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
        userId: string;
        organizationId: string;
        joinedAt: Date;
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
        userId: string;
        organizationId: string;
        joinedAt: Date;
    }>;
}
declare const organizationMemberService: OrganizationMember;
export default organizationMemberService;
//# sourceMappingURL=organizationmember.service.d.ts.map