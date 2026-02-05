export interface IOrganization {
            id: string,
            name: string,
            thumbnail?: string,
            image?: string,
            website?: string,
            description?: string,
            type: OrganizationType,
            credits: number,
            lastCreditReset?: string,
            isPremium: boolean,
            createdAt: string,
            updatedAt?: string
}


export type OrganizationType = "INDIVIDUAL" | "COMPANY" | "EDUCATIONAL" | "COMMUNITY" | "NON_PROFIT" | "GOVERNMENT"


export interface OrganizationPagination {
  currentPage: number,
  totalPages: number,
  take: number,
  totalDocs: number,
  hasNextPage: boolean,
  hasPrevPage: boolean
}