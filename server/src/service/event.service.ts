import { prisma } from "../config/prisma.config.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import type { IEvent, IUploadEvent } from "../lib/types/event.types.ts"

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

    async createEvent({ data }: { data: IUploadEvent }) {
    return await prisma.$transaction(async (tx) => {
    const updatedOrg = await tx.organization.updateMany({
      where: {
        id: data.organizationId,
        credits: { gte: 5 }
      },
      data: {
        credits: { decrement: 5 }
      }
    })

    if (updatedOrg.count === 0) {
      throw {
        code: 402,
        message: "Insufficient organization credits.",
        status: "OUT_OF_CREDIT_ERR"
      } as IErrorTypes
    }
    const event = await tx.event.create({
      data: data
    })

    if(!event){
      throw {
        code : 500,
        message : "Error while creating the event please try again. ",
        status :"EVENT_CREATION_ERR"
      } as IErrorTypes
    }
    await tx.eventParticipants.create({
      data : {
        eventId : event.id,
        userId : data.creatorId,
        checkInToken : "ADMIN",
      }
    })
    return event
  })
}
   async updateEvent({filter, data}:{filter : {id : string}, data : any}){
    const updatedEvent = await prisma.event.update({
      where : filter,
      data : data
    })
    if(!updatedEvent){
      throw {
        code : 500,
        message : "Error while updating the event please try again. ",
        status : "EVENT_UPDATE_ERR"
      } as IErrorTypes
    }
    return updatedEvent
   }

   async getEvent({filter}:{filter : {id? : string, slug? : string}}){
    return await prisma.event.findFirst({
      where : filter
    })
   }
   

}
const eventService = new EventService()
export default eventService