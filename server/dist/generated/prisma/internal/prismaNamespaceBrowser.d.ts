import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Otpdetails: "Otpdetails";
    readonly Session: "Session";
    readonly Organization: "Organization";
    readonly OrganizationMember: "OrganizationMember";
    readonly Event: "Event";
    readonly EventParticipants: "EventParticipants";
    readonly CreditPurchase: "CreditPurchase";
    readonly Notification: "Notification";
    readonly EventMessage: "EventMessage";
    readonly AdminLogs: "AdminLogs";
    readonly ErrorLog: "ErrorLog";
    readonly EventMetric: "EventMetric";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly phone: "phone";
    readonly password: "password";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly image: "image";
    readonly userScore: "userScore";
    readonly clickedEventsCount: "clickedEventsCount";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const OtpdetailsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly otp: "otp";
    readonly purpose: "purpose";
    readonly expiresAt: "expiresAt";
    readonly used: "used";
    readonly createdAt: "createdAt";
};
export type OtpdetailsScalarFieldEnum = (typeof OtpdetailsScalarFieldEnum)[keyof typeof OtpdetailsScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly expiresOn: "expiresOn";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const OrganizationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly thumbnail: "thumbnail";
    readonly image: "image";
    readonly website: "website";
    readonly description: "description";
    readonly type: "type";
    readonly credits: "credits";
    readonly lastCreditReset: "lastCreditReset";
    readonly isPremium: "isPremium";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];
export declare const OrganizationMemberScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly organizationId: "organizationId";
    readonly role: "role";
    readonly joinedAt: "joinedAt";
};
export type OrganizationMemberScalarFieldEnum = (typeof OrganizationMemberScalarFieldEnum)[keyof typeof OrganizationMemberScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly organizationId: "organizationId";
    readonly creatorId: "creatorId";
    readonly title: "title";
    readonly description: "description";
    readonly location: "location";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly capacity: "capacity";
    readonly registeredCount: "registeredCount";
    readonly status: "status";
    readonly category: "category";
    readonly tags: "tags";
    readonly image: "image";
    readonly eventScore: "eventScore";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const EventParticipantsScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly userId: "userId";
    readonly registeredAt: "registeredAt";
    readonly checkInToken: "checkInToken";
    readonly attended: "attended";
    readonly checkedInAt: "checkedInAt";
};
export type EventParticipantsScalarFieldEnum = (typeof EventParticipantsScalarFieldEnum)[keyof typeof EventParticipantsScalarFieldEnum];
export declare const CreditPurchaseScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly purchasedBy: "purchasedBy";
    readonly package: "package";
    readonly credits: "credits";
    readonly amount: "amount";
    readonly purchasedAt: "purchasedAt";
};
export type CreditPurchaseScalarFieldEnum = (typeof CreditPurchaseScalarFieldEnum)[keyof typeof CreditPurchaseScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly message: "message";
    readonly type: "type";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const EventMessageScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly senderId: "senderId";
    readonly message: "message";
    readonly createdAt: "createdAt";
};
export type EventMessageScalarFieldEnum = (typeof EventMessageScalarFieldEnum)[keyof typeof EventMessageScalarFieldEnum];
export declare const AdminLogsScalarFieldEnum: {
    readonly id: "id";
    readonly adminId: "adminId";
    readonly action: "action";
    readonly entityId: "entityId";
    readonly entityType: "entityType";
    readonly createdAt: "createdAt";
    readonly reason: "reason";
};
export type AdminLogsScalarFieldEnum = (typeof AdminLogsScalarFieldEnum)[keyof typeof AdminLogsScalarFieldEnum];
export declare const ErrorLogScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly message: "message";
    readonly status: "status";
};
export type ErrorLogScalarFieldEnum = (typeof ErrorLogScalarFieldEnum)[keyof typeof ErrorLogScalarFieldEnum];
export declare const EventMetricScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly eventId: "eventId";
    readonly hasClicked: "hasClicked";
    readonly hasJoined: "hasJoined";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventMetricScalarFieldEnum = (typeof EventMetricScalarFieldEnum)[keyof typeof EventMetricScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map