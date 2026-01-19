export type IEventTypes = "WORKSHOP" | "MEETUP" | "CONFERENCE" | "WEBINAR" | "HACKATHON" | "COMPETITION" | "OTHER"
export type IEventStatus = "PUBLISHED" | "CANCELLED"
export interface ICreateEvent {
  organizationId: string
  title: string
  description: string
  location: string
  startDate: string
  endDate: string
  capacity: number
  category: IEventTypes
  tags: Array<any>
}

export interface IUploadEvent {
  slug: string
  organizationId: string
  creatorId: string
  title: string
  description: string
  location: string
  startDate: string
  endDate: string
  capacity: number
  status: IEventStatus
  category: IEventTypes
  tags: Array<any>
  image: string | null
}

export interface IEvent {
  id: string
  slug?: string
  organizationId: string
  creatorId: string
  title: string
  description: string
  location: string
  startDate: Date
  endDate: Date
  capacity: number
  registeredCount: number
  status: IEventStatus
  category: IEventTypes
  tags: Array<any>
  image?: string | null
  createdAt: Date
  updatedAt?: Date
}

export interface IUpdateEvent {
  id: string
  organizationId: string
  title: string
  description: string
  location: string
  startDate: Date
  endDate: Date
  capacity: number
  status: IEventStatus
  category: IEventTypes
  tags: Array<any>
}

export interface IEventQuery {
  page?: number,        // current page
  limit?: number,       // number of items per page
  organizationId?: string, // filter by organization
  creatorId?: string,      // filter by creator (for admin/creator view)
  slug?: string,           // search by slug
  capacity?: number,       // filter by capacity
  category?: IEventTypes,     // filter by category
  createdAt?: "desc" | 'asc',  // filter by creation date
  updatedAt?: "desc" | 'asc',  // filter by last update
  status?: IEventStatus
}