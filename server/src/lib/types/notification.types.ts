export interface ICreateNotificaion {
    userId : string,
    title : string,
    message : string,
    type : "EVENT_CREATED" | "EVENT_UPDATED" | "EVENT_REMINDER" | "EVENT_CANCELLED" | "ORG_APPROVED" | "PAYMENT_SUCCESS",
    entityType : "EVENT" | "ORGANIZATION" |"USER"| "PAYMENT",
    entityId : string
}