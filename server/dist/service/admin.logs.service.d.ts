import type { IAdminLog } from "../lib/types/admin.types.js";
declare class AdminLogsService {
    createAdminLog({ logDetails }: {
        logDetails: IAdminLog;
    }): Promise<{
        id: string;
        createdAt: Date;
        entityType: import("../generated/prisma/enums.js").AdminEntityType;
        entityId: string;
        adminId: string;
        action: import("../generated/prisma/enums.js").AdminAction;
        reason: string;
    }>;
    getAdminLogs(skip: number, take: number, filter: any): Promise<({
        admin: {
            id: string;
            name: string;
            email: string;
        };
    } & {
        id: string;
        createdAt: Date;
        entityType: import("../generated/prisma/enums.js").AdminEntityType;
        entityId: string;
        adminId: string;
        action: import("../generated/prisma/enums.js").AdminAction;
        reason: string;
    })[]>;
    getAdminLogsCount(filter: any): Promise<number>;
}
declare const adminLogsService: AdminLogsService;
export default adminLogsService;
//# sourceMappingURL=admin.logs.service.d.ts.map