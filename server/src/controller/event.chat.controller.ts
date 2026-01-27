import type { NextFunction, Request, Response } from "express"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import type { IUserDetails } from "../lib/types/user.types.js"
import eventParticipantService from "../service/eventParticipants.service.js"
import type ISendEventMessage from "../lib/types/event.chat.types.js"
import eventChatService from "../service/event.chat.service.js"



class EventChatController {
  async sendMessage (req:Request, res : Response, next : NextFunction) {
    try {
      const userDetails:IUserDetails = req.userDetails
      const params = req.params
      const eventId = String(params.eventId)
      const message:string = req.body.message
      if(!eventId){
        throw {
          code : 404, 
          message : "Please enter a valid event id. ",
          status : "EVENT_ID_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      const eventParticipant  = await eventParticipantService.getEventParticipantDetails({filter : {eventId : eventId, userId : userDetails.id}})
      const data : ISendEventMessage = {
         eventId   : eventParticipant.eventId, 
         senderId  : eventParticipant.userId,
         message   : message
      }
      const newMessage = await eventChatService.sendMessage({data : data})
      return res.json({
        message : "Message sent successfully. ",
        data : newMessage
      })
    } catch (error) {
      next(error)
    }
  }

  async fetchMessage (req:Request, res:Response, next :NextFunction) {
    try {
      const params = req.params
      const eventId = String(req.params.eventId)
      const userDetails = req.userDetails
      const eventParticipant  = await eventParticipantService.getEventParticipantDetails({filter : {eventId : eventId, userId : userDetails.id}})
      const groupMessage = await eventChatService.getAllMessage({filter : {eventId : eventId}, include :  {
        sender : {
          select : {
            name : true,
            image : true
          }
        }
      }
      })
      return res.json({
        message : "Messages fetched successfully. ",
        data : groupMessage
      })
    } catch (error) {
      next(error)
    }
  }



  
} 
const eventChatController = new EventChatController()
export default eventChatController