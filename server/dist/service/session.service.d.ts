import type { IRegisterSession, ISessionDetails } from "../lib/types/session.types.js";
declare class SessionService {
    createSession(data: IRegisterSession): Promise<ISessionDetails>;
    getSession(filter: {
        refreshToken: string;
    }): Promise<{
        user: {
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        accessToken: string;
        refreshToken: string;
        expiresOn: Date;
    }>;
    updateSession(filter: {
        refreshToken: string;
    }, data: {
        accessToken: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        accessToken: string;
        refreshToken: string;
        expiresOn: Date;
    }>;
    deleteSession(filter: {
        userId: string;
    }): Promise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
}
declare const sessionService: SessionService;
export default sessionService;
//# sourceMappingURL=session.service.d.ts.map