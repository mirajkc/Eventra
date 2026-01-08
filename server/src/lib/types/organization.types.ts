export interface ICreateOrganization  {
        name :string  
        description :string 
        website? :string 
      }
export interface IUploadOrganizationData {
        name :string  
        description :string 
        website? :string 
        thumbnail? :string  | null,
        image? : string | null,
}

export interface IOrganizationQuery{
        take? : number | string,
        page?: number | string,
        members? : 'true',
        credits? : 'true',
        type? : "INDIVIDUAL"| "COMPANY" | "EDUCATIONAL" | "COMMUNITY" |  "NON_PROFIT" | "GOVERNMENT"
}
