export interface ICreditPurchase {
                id: string,
                organizationId: string,
                purchasedBy: string,
                package: string,
                credits: number,
                amount: number,
                purchasedAt: string,
                organization: {
                    name: string
                }
            }