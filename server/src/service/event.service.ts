import { prisma } from "../config/prisma.config.ts"

class EventService {
    async getTotalEventsCount(filter : {creatorId :string}){
    return await prisma.event.count({
      where : filter
    })
    }
    async getEventParticipatedCount(filter : {userId : string}){
      return prisma.eventParticipants.count({
        where : filter
      })
    }
}
const eventService = new EventService()
export default eventService