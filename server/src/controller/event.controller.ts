import type {Request, Response, NextFunction } from "express"
import type { ICreateEvent, IEvent, IUpdateEvent } from "../lib/types/event.types.ts"
import type { IUserDetails } from "../lib/types/user.types.ts"
import organizationService from "../service/organization.service.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import organizationMemberService from "../service/organizationmember.service.ts"
import { uploadImage } from "../service/upload.service.ts"
import eventService from "../service/event.service.ts"
import notificationService from "../service/notification.service.ts"
import type { ICreateNotificaion } from "../lib/types/notification.types.ts"
import emailService from "../service/email.service.ts"
import  { newEventTemplate } from "../emailtemplates/newEventCreated.ts"
import getSlug from "../utilities/createSlug.ts"
import eventParticipantService from "../service/eventParticipants.service.ts"
import { updateEventTemplate } from "../emailtemplates/updateEventTemplate.ts"


class EventController {
  async createNewEvent(req:Request, res:Response, next :NextFunction){
    const data:ICreateEvent = req.body
    const userDetails:IUserDetails = req.userDetails
    const slug = getSlug(data.title)
    const eventDetials = await eventService.getEvent({
      filter : {slug : slug}
    })
    if(eventDetials){
      throw {
        code : 400, 
        message : "Duplicate event detected please make sure that the title is unique. ",
        status : "DUPLICATE_EVENT_ERR"
      } as IErrorTypes
    }
    const organizationDetails = await organizationService.getOrganizationByFilter({filter : {id : data.organizationId},
      include : {
        members : {
          select : {userId : true}
        }
      }
     })
    if(!organizationDetails){
      throw {
        code : 404, 
        message : "Error organization not found make sure organization exists. ",
        status : "ORGANIZATION_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    const creatorDetails = await organizationMemberService.getMemberByFilter({
      filter : {
        userId  : userDetails.id,
        organizationId : data.organizationId,
        OR : [
          {role : "CREATOR"},
          {role : "OWNER"}
        ]
      }
    })
    if(!creatorDetails){
      throw {
        code : 404,
        message : "Error member not found make sure that you have joined the organization and are authorized to create the events. ",
        status : 'AUTHORIZAED_USER_NOT_FOUND_ERR'
      } as IErrorTypes
    }
    if(organizationDetails.credits <5 ){
      throw {
        code : 406, 
        message : "You are out of organization creadits please purchase the addional credits or wait till the credit resets. ",
        status : "OUT_OF_CREDIT_ERR"
      } as IErrorTypes
    }
    let imageUrl = null;
    if(req.file){
       const imageFile = req.file.buffer
        imageUrl = await uploadImage(imageFile, "Eventra/Event/Thumbnail")
    }
    const newEvent:IEvent = await eventService.createEvent({
      data : {
        organizationId : organizationDetails.id,
        title : data.title,
        location : data.location,
        startDate : data.startDate,
        endDate : data.endDate,
        capacity : Number(data.capacity),
        category : data.category,
        tags : data.tags,
        description : data.description,
        creatorId : userDetails.id,
        image : imageUrl,
        slug : slug,
        status : "PUBLISHED"
      }
    })

    const groupNotification:Array<ICreateNotificaion> =
      organizationDetails.members?.map(m => ({
        userId: (m as { userId: string }).userId,
        title : "New event has been created.",
        message : `Hi, ${userDetails.name} a new event has been posted for ${organizationDetails.name}. `,
        type : 'EVENT_CREATED',
        entityType : "EVENT",
        entityId : newEvent.id
      })) ?? []
      await notificationService.sendManyNotification(groupNotification)
      await emailService.sendEmail({
        to : userDetails.email,
        subject : "New event created",
        message : newEventTemplate(newEvent.title, userDetails.name)
      })
      await notificationService.sendNotificaion({
        userId : userDetails.id,
        title : "Your check in token for the event "+newEvent.title,
        message : `Hello, your check in token for the event ${newEvent.title} is A-D-M-I-N please keep it safe as this token will be needed during the check in proccess. `,
        entityType : "EVENT",
        entityId : newEvent.id,
        type : 'EVENT_CREATED'
      })
    res.json({
      message : "Event created successfully. ",
      data : newEvent
    })
  }

   async updateEventDetails(req:Request, res:Response, next :NextFunction){
    try {
      const data:IUpdateEvent = req.body
      const userDetails:IUserDetails = req.userDetails
      const organizationDetails = await organizationService.getOrganizationByFilter({filter : {id : data.organizationId},
      include : {}
     })
    if(!organizationDetails){
      throw {
        code : 404, 
        message : "Error organization not found make sure organization exists. ",
        status : "ORGANIZATION_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    const eventDetails = await eventService.getEvent({filter : {id : data.id}})
    if(!eventDetails){
      throw {
        code : 404, 
        message : "Error event not found make sure that the event exists. ",
        status : "EVENT_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    let imageUrl = null;
    if(req.file){
       const imageFile = req.file.buffer
        imageUrl = await uploadImage(imageFile, "Eventra/Event/Thumbnail")
    }
    const updatedEvent:IEvent = await eventService.updateEvent({
      filter : {id : data.id},
      data : {
        slug: data.title? getSlug(data.title) : eventDetails.slug,
        title : data.title ? data.title : eventDetails.title,
        description: data.description? data.description : eventDetails.description,
        location: data.location?  data.location : eventDetails.location,
        startDate: data.startDate? data.startDate : eventDetails.startDate,
        endDate: data.endDate? data.endDate : eventDetails.endDate,
        capacity:data.capacity? Number(data.capacity) : eventDetails.capacity,
        status: data.status? data.status : eventDetails.status,
        category: data.category? data.category : eventDetails.category,
        tags: data.tags? data.tags : eventDetails.tags,
        image: imageUrl
      }
    })
    const registerdParticipantsId:Array<any> = await eventParticipantService.getEventParticipants({
      filter : {eventId : updatedEvent.id},
      select : {
        userId : true
      }
    })
    const groupNotifications:Array<ICreateNotificaion> = registerdParticipantsId.map((user)=>({
          userId : user.userId,
          title : "Event update for"+updatedEvent.title,
          message : `The event that you registerd has been changed please make surea that you are fine with the new changes made. `,
          type : "EVENT_UPDATED",
          entityType : "EVENT",
          entityId : updatedEvent.id
          }))
    await notificationService.sendManyNotification(groupNotifications)
    await emailService.sendEmail({
      to : userDetails.email,
      subject : `The event ${updatedEvent.title} has been updated.`,
      message : updateEventTemplate(updatedEvent.title, userDetails.name)
    })
    return res.json({
      message : "Event updated successfully. ",
      data : updatedEvent
    })
    } catch (error) {
      next(error)
    }
  }

} 
const eventController = new EventController()
export default eventController