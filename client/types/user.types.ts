export interface IUserDetails {
        id: string,
        email: string,
        name: string,
        phone: string,
        role : "ADMIN" | "USER"
        createdAt:Date,
        image?: string
}