export type IEventTypes = "WORKSHOP" |"MEETUP" |"CONFERENCE" |"WEBINAR" |"HACKATHON" |"COMPETITION" |"OTHER"
export type IEventStatus = "PUBLISHED"|"CANCELLED"|"COMPLETED"
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
      organizationId : string
      creatorId : string
      title : string
      description : string
      location : string
      startDate : string
      endDate : string
      capacity : number
      status? : "PUBLISHED" | "CANCELLED" | "COMPLETED"
      category : IEventTypes
      tags : Array<any>
      image : string | null
    }

export interface IEvent {
  id : string
  organizationId : string
  creatorId : string
  title   : string
  description : string
  location    : string
  startDate : Date
  endDate   : Date
  capacity : number
  registeredCount : number
  status : IEventStatus
  category : IEventTypes
  tags : Array<any>
  image? : string | null
  createdAt : Date
  updatedAt? : Date
}