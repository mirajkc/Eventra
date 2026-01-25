import { StringDecoder } from "string_decoder"
import { IUserDetails } from "./user.types"

export interface IOrganizationResponse {
  message: string,
  data: IOrganizationDetails | null
  hasOrganization: boolean
}

export interface IOrganizationDetails {
  id: string,
  name: string,
  thumbnail?: string,
  image?: string,
  website?: string,
  description?: string,
  type: IOrganizationType,
  credits: number,
  lastCreditReset: Date,
  isPremium: boolean,
  createdAt: Date,
}

export type IOrganizationType = "INDIVIDUAL" | "COMPANY" | "EDUCATIONAL" | "COMMUNITY" | "NON_PROFIT" | "GOVERNMENT"


export interface ICreateOrganization {
  image?: File,
  thumbnail?: File,
  name: string,
  description: string,
  website?: string | null,
  type: IOrganizationType
}

export interface IUpdateOrganization {
  image?: File,
  thumbnail?: File,
  name?: string,
  description?: string,
  website?: string,
  type?: IOrganizationType
}


export interface IOrganizationsPagination {
  currentPage: number,
  take: number,
  totalPages: number,
  totalDocs: number,
  hasNextPage: boolean,
  hasPrevPage: boolean
}

export interface IOrganizationDetails {
  id: string,
  name: string,
  thumbnail?: string,
  image?: string,
  website?: string,
  description?: string,
  type: IOrganizationType,
  credits: number,
  lastCreditReset: Date,
  isPremium: boolean,
  createdAt: Date,
  updatedAt: Date
}


export interface ISingleOrganization {
  id: string,
  name: string,
  thumbnail?: string,
  image?: string,
  website: string,
  description: string,
  type: IOrganizationType,
  credits: number,
  lastCreditReset: Date,
  isPremium: boolean,
  createdAt: Date,
  updatedAt: Date
}

export interface IUserPurchaseCredit {
  id: string,
  organizationId: string,
  purchasedBy: string,
  package: string,
  credits: number,
  amount: number,
  purchasedAt: Date,
  user: IUserDetails
}

export interface JoinedMember {
  id: string,
  userId: string,
  organizationId: string,
  role: string,
  joinedAt: Date,
  user: IUserDetails
}

export interface IOrganizationActivitiesPagination {
  currentPage: number,
  totalPages: number,
  take: number,
  totalDocs: number,
  hasNextPage: boolean,
  hasPreviousPage: boolean
}