
import averageUserScore from "../Algorithms/averageScore.js"
import { prisma } from "../config/prisma.config.js"
import type { ICreateEventeMetrics, IUserMetrics } from "../lib/types/eventmetrics.types.js"

class EventMetricsService {
  async createNewMetrics(data :ICreateEventeMetrics, userMetrics : IUserMetrics){
    const metricsExists = await prisma.eventMetric.findFirst({
      where : {
        userId : data.userId,
        eventId : data.eventId
      }
    })
    if( metricsExists && metricsExists?.eventId){
      return
    }
    const newMetrics = await prisma.eventMetric.create({
      data : data
    })
    if(newMetrics){
      await averageUserScore({
        userId : newMetrics.userId,
        previousScore : userMetrics.previousScore,
        previosClickedEventsCount : userMetrics.previosClickedEventsCount,
        currentClickedEventScore : userMetrics.currentClickedEventScore
      })
    }

    return
  }

  async updateEventMetrics({filter} : {filter : {eventId : string, userId : string}}){
    await prisma.eventMetric.updateMany({
      where : filter,
      data : {
        hasJoined : true
      }
    })

    return
  }

}
const eventMetricsService = new EventMetricsService()
export default eventMetricsService