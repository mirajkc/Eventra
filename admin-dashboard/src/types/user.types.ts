export interface IUserDetails {
        id: string,
        email:string ,
        name: string,
        phone? : string,
        role: "ADMIN",
        createdAt: Date,
        image? : string 
}

export interface IUserPagination {
     currentPage: number,
     totalPages: number,
     take: number,
     totalDocs: number,
     hasNextPage: boolean,
     hasPreviousPage: boolean
}