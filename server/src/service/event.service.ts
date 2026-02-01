import { prisma } from "../config/prisma.config.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import type { IEvent, IUploadEvent } from "../lib/types/event.types.js"

class EventService {
  async getTotalEventsCount(filter: any) {
    return await prisma.event.count({
      where: filter
    })
  }
  async getEventParticipatedCount(filter: { userId: string }) {
    return prisma.eventParticipants.count({
      where: filter
    })
  }

  async createEvent({ data, checkInToken }: { data: IUploadEvent, checkInToken:string }) {
    return await prisma.$transaction(async (tx: any) => {
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
      await tx.eventMetrics.create({
        data: { eventId: event.id }
      });
      await tx.eventEmbedding.create({
        data: {
          eventId: event.id,
        }
      });

      if (!event) {
        throw {
          code: 500,
          message: "Error while creating the event please try again. ",
          status: "EVENT_CREATION_ERR"
        } as IErrorTypes
      }
      await tx.eventParticipants.create({
        data: {
          eventId: event.id,
          userId: data.creatorId,
          checkInToken: checkInToken,
        }
      })
      return event
    })
  }
  async updateEvent({ filter, data }: { filter: { id: string }, data: any }) {
    const updatedEvent = await prisma.event.update({
      where: filter,
      data: data
    })
    if (!updatedEvent) {
      throw {
        code: 500,
        message: "Error while updating the event please try again. ",
        status: "EVENT_UPDATE_ERR"
      } as IErrorTypes
    }
    return updatedEvent
  }

  async getEvent({ filter, include = {} }: { filter: { id?: string, slug?: string }, include?: any }) {
    return await prisma.event.findFirst({
      where: filter,
      include:  include
    })
  }

  async getManyEvents(skip: number, take: number, filter: any, orderBy: any) {
    const events = await prisma.event.findMany({
      skip,
      take,
      where: filter,
      orderBy: orderBy,
      include: {
        organization: {
          select: {
            id: true,
            name: true,
            image: true,
            isPremium: true
          },
        },
        creator: {
          select: {
            id: true,
            name: true,
            image: true
          }
        },
        _count: {
          select: {
            participants: true
          }
        }
      }
    })
    if (!events || events.length <= 0) {
      throw {
        code: 500,
        message: "No results found. ",
        status: "NO_RESULTS_FOUND_ERR"
      } as IErrorTypes
    }
    return events
  }


  async deleteEvent (id :string, include : any ) {
    const deletedEvent = await prisma.event.delete({
      where : {
        id : id
      },
      include : include
    })

    if(!deletedEvent){
      throw {
        code : 500,
        message : "Error occured while deleting the event please try again later. ",
        status : "EVENT_DELETE_ERROR"
      } as IErrorTypes
    }
    return deletedEvent
  }


}
const eventService = new EventService()
export default eventService