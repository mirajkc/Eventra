export interface ICredit {
  creditPurchases: ICreditPurchase[]
  totalRevenue?: number,
  totalCredits?: number,
  monthlyRevenue?: number,
  monthlyCredits?: number
}

export interface ICreditPurchase {
    id: string,
    organizationId: string,
    purchasedBy: string,
    package: string,
    credits: number,
    amount: number,
    purchasedAt: string,
    user: {
        name: string,
        id: string,
        email: string
    },
    organization: {
        name: string,
        id: string,
        credits: number,
        lastCreditReset: string
    }
}

export interface ICreditPurchasePagination {
   page: number,
   limit: number,
   total: number,
   hasNextPage: boolean,
   hasPreviousPage: boolean
}