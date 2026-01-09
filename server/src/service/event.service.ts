import { prisma } from "../config/prisma.config.ts"
import type { IUploadEvent } from "../lib/types/event.types.ts"

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

    async createEvent({data}:{data : IUploadEvent}){
      const newEvent = await prisma.event.create({
        data : data
      })
    }
}
const eventService = new EventService()
export default eventService