
export interface ICreateEventeMetrics{
  userId : string
  eventId : string
  hasClicked : boolean
  hasJoined : boolean
  previousScore: number
  previosClickedEventsCount: number
  currentClickedEventScore: number
}