export interface INotification {
  createdAt: Date,
  entityId: string,
  entityType: INotificationEntity,
  id: string,
  isRead: boolean,
  message: string,
  title: string,
  type: INotificationType,
  userId: string
}
export interface INotificationPaginzation {
  currentPage: number,
  totalPages: number,
  take: number,
  totalDocs: number,
  hasNextPage: boolean,
  hasPreviousPage: boolean
}


export type INotificationEntity = "EVENT" | "ORGANIZATION" | "USER" | "PAYMENT"
export type INotificationType = "EVENT_CREATED" | "EVENT_UPDATED" | "EVENT_REMINDER" | "EVENT_CANCELLED" | "ORG_APPROVED" | "PAYMENT_SUCCESS"