export type IOrganizationMemberTypes = "OWNER" | "ADMIN" | "MEMBER" | "CREATOR";
export interface ICreateMember {
    userId: string;
    organizationId: string;
    role?: IOrganizationMemberTypes;
}
export interface IUpdateMemberRole {
    id: string;
    role: IOrganizationMemberTypes;
    organizationId: string;
}
//# sourceMappingURL=organizationmember.types.d.ts.map