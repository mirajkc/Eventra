declare class CreditPurchaseService {
    getCreditPurchaseCount(filter: {
        purchasedBy?: string;
        organizationId?: string;
    }): Promise<number>;
    updateCredit({ filter, data }: {
        filter: {
            id: string;
        };
        data: {
            credits?: number;
            lastCreditReset?: Date;
            isPremium?: boolean;
        };
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string;
        credits: number;
        type: import("../generated/prisma/enums.js").OrganizationType;
        thumbnail: string | null;
        website: string | null;
        lastCreditReset: Date;
        isPremium: boolean;
    }>;
    purchaseCredit(data: {
        userId: string;
        organizationId: string;
        isPremium: boolean;
        now: Date;
        credits: number;
        amount: number;
        package: "SMALL" | "MEDIUM" | "LARGE";
    }): Promise<{
        organization: any;
        creditPurchase: any;
    }>;
}
declare const creditService: CreditPurchaseService;
export default creditService;
//# sourceMappingURL=creditpurchase.service.d.ts.map