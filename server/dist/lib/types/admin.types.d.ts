export type IAdminLogAction = "CREATE" | "UPDATE" | "DELETE";
export type IAdminLogEntityType = "EVENT" | "ORGANIZATION" | "USER";
export interface IAdminLog {
    adminId: string;
    action: IAdminLogAction;
    entityId: string;
    entityType: IAdminLogEntityType;
    reason: string;
}
//# sourceMappingURL=admin.types.d.ts.map