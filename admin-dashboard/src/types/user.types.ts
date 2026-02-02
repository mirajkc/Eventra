export interface IUserDetails {
        id: string,
        email:string ,
        name: string,
        phone? : string,
        role: "ADMIN",
        createdAt: Date,
        image? : string 
    }