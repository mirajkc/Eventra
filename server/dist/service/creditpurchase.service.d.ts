declare class CreditPurchaseService {
    getCreditPurchaseCount(filter: any): Promise<number>;
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
    getRevenue(): Promise<{
        monthlyRevenue: number | null;
        totalRevenue: number | null;
    }>;
    getCreditPurchases(): Promise<{
        monthlyCreditPurchases: number | null;
        totalCreditPurchases: number | null;
    }>;
    getCreditPurchase(filter: any, skip: number, take: number, include: any): Promise<({
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
    } & {
        id: string;
        organizationId: string;
        purchasedBy: string;
        package: import("../generated/prisma/enums.js").CreditPackage;
        credits: number;
        amount: number;
        purchasedAt: Date;
    })[]>;
}
declare const creditService: CreditPurchaseService;
export default creditService;
//# sourceMappingURL=creditpurchase.service.d.ts.map