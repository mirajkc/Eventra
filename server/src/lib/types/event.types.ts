export type IEventTypes = "WORKSHOP" |"MEETUP" |"CONFERENCE" |"WEBINAR" |"HACKATHON" |"COMPETITION" |"OTHERS"

export interface ICreateEvent {
  organizationId: string
    creatorId: string
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
      capacity : string
      status : "PUBLISHED" | "CANCELLED" | "COMPLETED"
      category : IEventTypes
      tags : Array<any>
      image : string | null
    }