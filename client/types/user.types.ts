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