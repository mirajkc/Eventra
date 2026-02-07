export interface IRegisterTypes {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    role?: "ADMIN" | 'CUSTOMER';
}
export interface IUserLogin {
    email: string;
    password: string;
}
export interface IUserDetails {
    id: string;
    email: string;
    name: string;
    phone?: string;
    password: string;
    role: "CUSTOMER" | "ADMIN";
    createdAt: Date;
    updatedAt?: Date;
    image?: string;
    userScore: number;
    clickedEventsCount: number;
}
export interface IUserQuery {
    page?: string;
    limit?: string;
    organizationMember?: string;
    createdEvents?: string;
    eventParticipants?: string;
    creditPurchases?: string;
    notifications?: string;
}
//# sourceMappingURL=user.types.d.ts.map