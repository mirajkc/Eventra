import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Otpdetails
 *
 */
export type Otpdetails = Prisma.OtpdetailsModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model Organization
 *
 */
export type Organization = Prisma.OrganizationModel;
/**
 * Model OrganizationMember
 *
 */
export type OrganizationMember = Prisma.OrganizationMemberModel;
/**
 * Model Event
 *
 */
export type Event = Prisma.EventModel;
/**
 * Model EventParticipants
 *
 */
export type EventParticipants = Prisma.EventParticipantsModel;
/**
 * Model CreditPurchase
 *
 */
export type CreditPurchase = Prisma.CreditPurchaseModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
/**
 * Model EventMessage
 *
 */
export type EventMessage = Prisma.EventMessageModel;
/**
 * Model UserEmbedding
 *
 */
export type UserEmbedding = Prisma.UserEmbeddingModel;
/**
 * Model EventEmbedding
 *
 */
export type EventEmbedding = Prisma.EventEmbeddingModel;
/**
 * Model UserInteraction
 *
 */
export type UserInteraction = Prisma.UserInteractionModel;
/**
 * Model EventMetrics
 *
 */
export type EventMetrics = Prisma.EventMetricsModel;
/**
 * Model AdminPrediction
 *
 */
export type AdminPrediction = Prisma.AdminPredictionModel;
/**
 * Model ErrorLog
 *
 */
export type ErrorLog = Prisma.ErrorLogModel;
//# sourceMappingURL=client.d.ts.map