export interface IUploadProfile {
        name?: string,
        phone?: string,
        image?: File
}

export interface IUserDetails {
        id: string,
        email: string,
        name: string,
        phone: string,
        role: "ADMIN" | "USER"
        createdAt: Date
        image?: string
}

export interface IOrganizationMember { 
        id: string,
        userId: string,
        organizationId: string,
        role: "MEMBER" | "CREATOR" | "ADMIN",
        joinedAt: Date,
        user: {
                    id: string,
                    email: string,
                    name: string,
                    phone?: string,
                    role: "CUSTOMER",
                    createdAt: Date,
                    updatedAt?: Date,
                    image?: string
      }
}

export interface IOrganizationMemberPagination { 
            currentPage: number,
            totalPages: number,
            take: number,
            totalDocs: number,
            hasNextPage: boolean,
            hasPreviousPage: boolean
}