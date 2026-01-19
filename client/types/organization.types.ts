import { StringDecoder } from "string_decoder"

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
