import type {Request, Response, NextFunction } from "express"
import type { ICreateEvent, IEvent } from "../lib/types/event.types.ts"
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

class EventController {
  async createNewEvent(req:Request, res:Response, next :NextFunction){
    const data:ICreateEvent = req.body
    const userDetails:IUserDetails = req.userDetails
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
        image : imageUrl
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
    res.json({
      message : "Event created successfully. ",
      data : newEvent
    })
  }
} 
const eventController = new EventController()
export default eventController