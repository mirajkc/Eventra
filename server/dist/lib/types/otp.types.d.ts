export interface ICreateOTP {
    userId: string;
    otp: string;
    purpose: "FORGOT_PASSWORD" | "RESET_PASSWORD";
    expiresAt: Date;
}
//# sourceMappingURL=otp.types.d.ts.map