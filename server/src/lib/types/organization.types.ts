export interface ICreateOrganization  {
        name :string  
        description :string 
        website? :string
        type : IOrganizationTypes 
      }
export interface IUploadOrganizationData {
        name :string  
        description :string 
        website? :string 
        thumbnail? :string  | null,
        image? : string | null,
        type : IOrganizationTypes 

}

export type IOrganizationTypes = "INDIVIDUAL"| "COMPANY" | "EDUCATIONAL" | "COMMUNITY" |  "NON_PROFIT" | "GOVERNMENT"


export interface IOrganizationQuery{
        take? : number | string,
        page?: number | string,
        members? : 'true',
        credits? : 'true',
        type? : IOrganizationTypes
}
export interface IOrganizationsQuery {
        page? : string,
        take? : string,
        name? :string,
        type? : IOrganizationTypes,
        premium? :  'true' | 'false',
        createdAt : 'asc' | "desc",
        updatedAt : 'asc' | "desc",
      }