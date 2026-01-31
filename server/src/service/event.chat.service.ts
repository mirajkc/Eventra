import { prisma } from "../config/prisma.config.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import type ISendEventMessage from "../lib/types/event.chat.types.js"

class EventChatService {
  async sendMessage({data} : {data : ISendEventMessage}) {
    const newMessage = await prisma.eventMessage.create({
      data : data
    })
    if(!newMessage.id){
      throw {
        code : 500,
        message  : "Error occured while creating the new message please try again later. ",
        status :"NEW_MESSAGE_CREATION_ERR"
      } as IErrorTypes
    }
    return newMessage
  }

  async getAllMessage({filter, include} : {filter : {eventId:string}, include :any}) {
    const messages = await prisma.eventMessage.findMany({
      where : filter,
      include : include,
      take : 100,
      orderBy : {createdAt : 'asc'}
  })
  if(messages.length < 1){
    throw { 
      messages : "No message found for the event please make sure the message exists",
      status : "NO_MESSAGE_FOUND_ERR",
      code : 404
    } as IErrorTypes
  }  
  return messages
}



} 
const eventChatService =  new EventChatService
export default eventChatService