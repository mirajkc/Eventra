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