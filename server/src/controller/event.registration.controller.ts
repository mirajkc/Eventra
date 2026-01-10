import type { Request, Response, NextFunction } from "express"
import type { IUserDetails } from "../lib/types/user.types.ts"
import eventService from "../service/event.service.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import generateString from "../utilities/randomstring.generator.ts"
import bcrypt from 'bcrypt'
import eventParticipantService from "../service/eventParticipants.service.ts"
import type { ICreateNotificaion } from "../lib/types/notification.types.ts"
import notificationService from "../service/notification.service.ts"
import emailService from "../service/email.service.ts"
import  { newMemberRegistrationTemplate } from "../emailtemplates/newMemberRegistrationTemplate.ts"

class EventRegistrationController {

  async registerNewParticipant(req:Request, res:Response, next:NextFunction){
    try {
      const eventId:string = String(req.params.eventId)
      const userDetails:IUserDetails = req.userDetails
      const eventDetails = await eventService.getEvent({
        filter : {id : eventId},
        include : {
        participants : {
          select : {
            userId : true
          }
        }
      }
      })
      if(!eventDetails){
        throw {
          code : 404, 
          message : "Unable to get the event details please make sure that event exists. ",
          status : "EVENT_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      if(new Date(eventDetails.endDate).getTime() < Date.now()){
        throw {
          code : 403, 
          message : "The event is already completed you cannot join a event that has been completed. ",
          status : "EVENT_COMPLETED_ERR"
        } as IErrorTypes
      }
      if(eventDetails.status === "CANCELLED"){
        throw {
          code : 403, 
          message : "The event has been cancelled. ",
          status : "EVENT_CANCELLED_ERR"
        } as IErrorTypes
      }
      if(eventDetails.participants && eventDetails.participants.map(p => p.userId).includes(userDetails.id)){
        throw {
          code : 403, 
          message : "Error you have already participated int the event. ",
          status : "ALREADY_PARTICIPATED_ERR"
        } as IErrorTypes
      }
      if (eventDetails.registeredCount >= eventDetails.capacity) {
        throw {
          code : 403, 
          message : "Sorry, the maximum capacity is reached for the event. ",
          status : "MAXIMUM_CAPACITY_REACHED_ERR"
        } as IErrorTypes
      }
      const token =generateString({length : 5, charset : 'alphanumeric'}).toUpperCase()
      const eventData = {
        eventId : eventDetails.id,
        userId : userDetails.id,
        checkInToken : await bcrypt.hash(token, 12)
      } // this will trigger a tranasction that also increases the registeredCount

      const newRegistration = await eventParticipantService.createEvent(eventDetails.id,eventData )

      await notificationService.sendNotificaion({
        userId : userDetails.id,
        title : "You registerd for a new event. ",
        message : `Hello, ${userDetails.name} you are successfully registed for the event ${eventDetails.title}. Here is the token ${token} please keep it safe as this is needed on checkin proccess. `,
        type : "EVENT_REMINDER",
        entityType : "EVENT",
        entityId : eventDetails.id
      })

      const groupNotification:Array<ICreateNotificaion> =
      eventDetails.participants?.map(m => ({
        userId: (m as { userId: string }).userId,
        title : "New participant joined the event",
        message : `${userDetails.name} has joined the event ${eventDetails.title}. ${eventDetails.title}`,
        type : 'ORG_APPROVED',
        entityType : "ORGANIZATION",
        entityId : eventDetails.id
      })) ?? []
      await notificationService.sendManyNotification(groupNotification)
      await emailService.sendEmail({
        to : userDetails.email,
        subject : "You are registed for new event",
        message : newMemberRegistrationTemplate(userDetails.name, eventDetails.title, token)
      })

      return res.json({
        message : "Successfully registerd for new event. ",
        data : newRegistration.userId
      })

    } catch (error) {
      next(error)
    }
  }
}
const eventRegistrationController = new EventRegistrationController()
export default eventRegistrationController