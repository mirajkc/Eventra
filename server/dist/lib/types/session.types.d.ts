export interface IRegisterSession {
    accessToken: string;
    refreshToken: string;
    userId: string;
    expiresOn: Date;
}
export interface ISessionDetails {
    id: string;
    userId: string;
    accessToken: string;
    refreshToken: string;
    expiresOn: Date;
    createdAt: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=session.types.d.ts.map