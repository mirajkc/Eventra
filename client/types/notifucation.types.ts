export interface INotification {
  createdAt: Date,
  entityId: string,
  entityType: string,
  id: string,
  isRead: boolean,
  message: string,
  title: string,
  type: string,
  userId: string
}
export interface INotificationPaginzation {
  hasNext: boolean,
  hasPrev: number,
  limit: number,
  page: number,
  prevPage: number,
  skip: number,
  totalPages: number
}