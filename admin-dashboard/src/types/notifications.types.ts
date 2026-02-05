export interface INotification {
  id: string,
  userId: string,
  title: string,
  message: string,
  type: INotificationType,
  entityType: INotificationEntityType,
  entityId: string,
  isRead: boolean,
  createdAt: Date
}

export type INotificationType =   "EVENT_CREATED"
  | "EVENT_UPDATED"
  | "EVENT_REMINDER"
  | "EVENT_CANCELLED"
  | "ORG_APPROVED"
  | "PAYMENT_SUCCESS"
  | "ORGANIZATION_DELETED"
  | "EVENT_DELETED"
  | "USER_DELETED"

export type INotificationEntityType = "EVENT"
  | "ORGANIZATION"
  | "USER"
  | "PAYMENT"

export interface INotificationPagination {
  page: number,
  limit: number,
  total: number,
  hasNextPage: boolean,
  hasPreviousPage: boolean
}  