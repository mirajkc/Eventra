export type IOrganizationMemberTypes  =  "OWNER" |"ADMIN"| "MEMBER" |"CREATOR"
export interface ICreateMember {
        userId : string, 
        organizationId : string,
        role? : IOrganizationMemberTypes
 }