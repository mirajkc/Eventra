import { prisma } from "../config/prisma.config.js"
import type { ICreateEventeMetrics } from "../lib/types/eventmetrics.types.js"

class EventMetricsService {
  async createNewMetrics(data :ICreateEventeMetrics){
    const metricsExists = await prisma.eventMetric.findFirst({
      where : {
        userId : data.userId,
        eventId : data.eventId
      }
    })
    if( metricsExists && metricsExists?.eventId){
      return
    }
    await prisma.eventMetric.create({
      data : data
    })
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