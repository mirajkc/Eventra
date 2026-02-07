
export interface ICreateEventeMetrics{
  userId : string
  eventId : string
  hasClicked : boolean
  hasJoined : boolean
}

export interface IUserMetrics { 
  previousScore: number
  previosClickedEventsCount: number
  currentClickedEventScore: number
}