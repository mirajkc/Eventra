import type { ICreateOTP } from "../lib/types/otp.types.js";
declare class OTPService {
    createOtp(data: ICreateOTP): Promise<{
        id: string;
        otp: string;
        createdAt: Date;
        userId: string;
        purpose: import("../generated/prisma/enums.js").OtpPurpose;
        expiresAt: Date;
        used: boolean;
    }>;
    getOtp({ filter, orderBy }: {
        filter: {
            userId: string;
            purpose: 'FORGOT_PASSWORD' | 'RESET_PASSWORD';
        };
        orderBy?: {
            createdAt: 'desc' | 'asc';
        };
    }): Promise<{
        id: string;
        otp: string;
        createdAt: Date;
        userId: string;
        purpose: import("../generated/prisma/enums.js").OtpPurpose;
        expiresAt: Date;
        used: boolean;
    }>;
    updateOTP({ filter, data }: {
        filter: any;
        data: {
            used: boolean;
        };
    }): Promise<{
        id: string;
        otp: string;
        createdAt: Date;
        userId: string;
        purpose: import("../generated/prisma/enums.js").OtpPurpose;
        expiresAt: Date;
        used: boolean;
    }>;
}
declare const otpService: OTPService;
export default otpService;
//# sourceMappingURL=otp.service.d.ts.map