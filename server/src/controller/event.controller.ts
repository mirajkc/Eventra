import type {Request, Response, NextFunction } from "express"
import type { ICreateEvent, IEvent, IEventQuery, IUpdateEvent } from "../lib/types/event.types.js"
import type { IUserDetails } from "../lib/types/user.types.js"
import organizationService from "../service/organization.service.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import organizationMemberService from "../service/organizationmember.service.js"
import { uploadImage } from "../service/upload.service.js"
import eventService from "../service/event.service.js"
import notificationService from "../service/notification.service.js"
import type { ICreateNotificaion } from "../lib/types/notification.types.js"
import emailService from "../service/email.service.js"
import  { newEventTemplate } from "../emailtemplates/newEventCreated.js"
import getSlug from "../utilities/createSlug.js"
import eventParticipantService from "../service/eventParticipants.service.js"
import { updateEventTemplate } from "../emailtemplates/updateEventTemplate.js"


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

  async getSingleEvent(req:Request, res:Response, next :NextFunction){
    try {
      const eventId = String(req.params.eventId)
      if(!eventId){
        throw {
          code : 404, 
          message : "A valid event Id is required. ",
          status :"EVENTID_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      const eventDetails = await eventService.getEvent({
        filter : {id : eventId},
        include : {
        organization : {
          select : {id : true, name : true,image : true,isPremium : true }
        },
        creator : {
          select : { id : true,name : true,  image : true}
        },
        participants : {
          select : {userId : true}
        }
      }
      })
      if(!eventDetails){
        throw {
          code : 500, 
          message : "Unable to fetch the event details please try again. ",
          status : "EVENT_DATA_FETCH_ERR"
        } as IErrorTypes
      }
      const totalParticipants = eventDetails.participants?.length
      eventDetails.status === "CANCELLED" ? "CANCELLED" : eventDetails.endDate < new Date()? "COMPLETED" : "PUBLISHED"
      return res.json({
        message : "Event details fetched successfully",
        data : {
          eventDetails : eventDetails,
          totalParticipants :totalParticipants
        }
      })
    } catch (error) {
      next(error)
    }
  }

async getAllEventsByQuery(req: Request, res: Response, next: NextFunction) {
  try {
    const filters: IEventQuery = req.query;

    const page: number = Number(filters.page) || 1;
    const take: number = Number(filters.limit) || 10;
    const skip: number = (page - 1) * take;

    const where: any = {};

    if (filters.creatorId) where.creatorId = filters.creatorId;
    if (filters.organizationId) where.organizationId = filters.organizationId;
    if (filters.slug) where.slug = { contains: filters.slug, mode: 'insensitive' };
    if (filters.capacity) where.capacity = { lte: Number(filters.capacity) };
    if (filters.category) where.category = filters.category;
    if (filters.status === 'PUBLISHED') where.status = 'PUBLISHED';


    const orderBy: Array<any> = [];
    if (filters.createdAt === 'asc') orderBy.push({ createdAt: 'asc' });
    if (filters.createdAt === 'desc') orderBy.push({ createdAt: 'desc' });
    if (filters.updatedAt === 'asc') orderBy.push({ updatedAt: 'asc' });
    if (filters.updatedAt === 'desc') orderBy.push({ updatedAt: 'desc' });

    if (orderBy.length === 0) orderBy.push({ createdAt: 'desc' });

    const constEventDetails = await eventService.getManyEvents(skip, take, where, orderBy);
    const totalDocument = await eventService.getTotalEventsCount(where);

    return res.json({
      message: "Events fetched successfully.",
      data: constEventDetails,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalDocument / take),
        take,
        totalDocs: totalDocument,
        hasNextPage: page < Math.ceil(totalDocument / take),
        hasPreviousPage: page > 1,
      },
    });
  } catch (error) {
    next(error);
  }
}

  


} 
const eventController = new EventController()
export default eventController