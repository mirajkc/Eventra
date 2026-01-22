export interface IEventTypes {
  organizationId: string
  title: string
  description: string
  location: string
  startDate: Date
  endDate: Date
  capacity: any
  category: IEventCategory
  tags?: string | string[]
  image?: any
}


export type IEventCategory = "WORKSHOP" | "MEETUP" | "CONFERENCE" | "WEBINAR" | "HACKATHON" | "COMPETITION" | "OTHER"


export interface IEventReponse {
  id: string
  slug: string
  organizationId: string
  creatorId: string
  title: string
  description: string
  location: string
  startDate: string
  endDate: string
  capacity: number
  registeredCount: number
  status: string
  category: IEventCategory
  tags?: string[]
  image?: string
  createdAt: string
  updatedAt?: string
  organization: {
    id: string
    name: string
    image?: string
    isPremium: boolean
  }
  creator: {
    id: string
    name: string
    image?: string
  }
  _count: {
    participants: number
  }
}

export interface IEventPagination {
  currentPage: number
  totalPages: number
  take: number
  totalDocs: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}