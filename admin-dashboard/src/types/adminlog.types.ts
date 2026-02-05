export interface AdminLog {
    id: string,
    adminId: string,
    action: string,
    entityId: string,
    entityType: string,
    createdAt: string,
    reason: string,
    admin: {
        id: string,
        name: string,
        email: string
    }
}

export interface AdminLogPagination {
    page: number,
    limit: number,
    total: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean
}
