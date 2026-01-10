import { prisma } from "../config/prisma.config.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"

class EventParticipantService {
  async getEventParticipants({filter,select} : {filter : {eventId : string}, select : any}){
    const paticipants = await prisma.eventParticipants.findMany({
      where : filter,
      select : select
    })
    if(!paticipants || paticipants.length <=0 ){
      throw {
        code : 500,
        message : "Error while fetching registerd users detials for this event",
        status : "USER_DATA_FETCH_ERR"
      } as IErrorTypes
    }
    return paticipants
  }

  async createEvent (eventId:string, data : { eventId : string, userId:string, checkInToken : string }) {
    return prisma.$transaction(async(tx) => {
      await tx.event.update({
        where : {id :eventId },
        data : {
          registeredCount : {increment : 1}
        }
      })
      const newMember = await tx.eventParticipants.create({
        data : data
      })
      if(!newMember){
        throw {
          code : 500, 
          message : "Error occured while registering the new user. ",
          status : "USER_REGISTRATION_ERR"
        } as IErrorTypes
      }
      return newMember
    })
  }
}
const eventParticipantService = new EventParticipantService
export default eventParticipantService