export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly CUSTOMER: "CUSTOMER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const OrganizationRole: {
    readonly OWNER: "OWNER";
    readonly ADMIN: "ADMIN";
    readonly MEMBER: "MEMBER";
    readonly CREATOR: "CREATOR";
};
export type OrganizationRole = (typeof OrganizationRole)[keyof typeof OrganizationRole];
export declare const EventStatus: {
    readonly PUBLISHED: "PUBLISHED";
    readonly CANCELLED: "CANCELLED";
};
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];
export declare const CreditPackage: {
    readonly SMALL: "SMALL";
    readonly MEDIUM: "MEDIUM";
    readonly LARGE: "LARGE";
};
export type CreditPackage = (typeof CreditPackage)[keyof typeof CreditPackage];
export declare const OtpPurpose: {
    readonly FORGOT_PASSWORD: "FORGOT_PASSWORD";
    readonly RESET_PASSWORD: "RESET_PASSWORD";
};
export type OtpPurpose = (typeof OtpPurpose)[keyof typeof OtpPurpose];
export declare const NotificationType: {
    readonly EVENT_CREATED: "EVENT_CREATED";
    readonly EVENT_UPDATED: "EVENT_UPDATED";
    readonly EVENT_REMINDER: "EVENT_REMINDER";
    readonly EVENT_CANCELLED: "EVENT_CANCELLED";
    readonly ORG_APPROVED: "ORG_APPROVED";
    readonly PAYMENT_SUCCESS: "PAYMENT_SUCCESS";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const NotificationEntity: {
    readonly EVENT: "EVENT";
    readonly ORGANIZATION: "ORGANIZATION";
    readonly USER: "USER";
    readonly PAYMENT: "PAYMENT";
};
export type NotificationEntity = (typeof NotificationEntity)[keyof typeof NotificationEntity];
export declare const OrganizationType: {
    readonly INDIVIDUAL: "INDIVIDUAL";
    readonly COMPANY: "COMPANY";
    readonly EDUCATIONAL: "EDUCATIONAL";
    readonly COMMUNITY: "COMMUNITY";
    readonly NON_PROFIT: "NON_PROFIT";
    readonly GOVERNMENT: "GOVERNMENT";
};
export type OrganizationType = (typeof OrganizationType)[keyof typeof OrganizationType];
export declare const EventType: {
    readonly WORKSHOP: "WORKSHOP";
    readonly MEETUP: "MEETUP";
    readonly CONFERENCE: "CONFERENCE";
    readonly WEBINAR: "WEBINAR";
    readonly HACKATHON: "HACKATHON";
    readonly COMPETITION: "COMPETITION";
    readonly OTHER: "OTHER";
};
export type EventType = (typeof EventType)[keyof typeof EventType];
//# sourceMappingURL=enums.d.ts.map