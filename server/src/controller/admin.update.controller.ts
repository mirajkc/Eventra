import type { NextFunction, Request, Response } from "express"
import type { IUserDetails } from "../lib/types/user.types.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import userService from "../service/user.service.js"
import { uploadImage } from "../service/upload.service.js"
import authService from "../service/auth.service.js"
import adminLogsService from "../service/admin.logs.service.js"
import notificationService from "../service/notification.service.js"
import emailService from "../service/email.service.js"
import adminUpdateTemplate from "../emailtemplates/adminUpdateTemplate.js"
import type { IEvent, IUpdateEvent } from "../lib/types/event.types.js"
import organizationService from "../service/organization.service.js"
import { checkForCredit } from "../utilities/checkforcredit.js"
import eventService from "../service/event.service.js"
import getSlug from "../utilities/createSlug.js"
import eventParticipantService from "../service/eventParticipants.service.js"
import type { ICreateNotificaion } from "../lib/types/notification.types.js"
import { updateEventTemplate } from "../emailtemplates/updateEventTemplate.js"
import type { ICreateOrganization, IUploadOrganizationData } from "../lib/types/organization.types.js"
import { organizationUpdateTemplate } from "../emailtemplates/organizationUploadTemplate.js"

class AdminUpdateController {
  async updateUser(req:Request, res:Response, next:NextFunction){
     try {
      const adminDetails:IUserDetails = req.userDetails
      const params = req.params
      const userId = String(params.userId)
      const reason = String(params.reason)
      if(!userId){
        throw {
          code : 404,
          message : "User id is required",
          status : "USER_ID_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      if(!reason){
        throw {
          code : 404,
          message : "Reason is required",
          status : "REASON_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      const data = req.body
      const userDetails = await userService.getUserDetails({id : userId}, {})
      let imageUrl: string = userDetails.image ?? ""
      if (req.file?.buffer) {
        imageUrl = await uploadImage(req.file.buffer, "Eventra/userProfile")
      }
      const updateData : {name : string, phone : string, image :  string} = {
        name : data.name? data.name : userDetails.name,
        phone : data.phone? data.phone : userDetails.phone,
        image : imageUrl
      }
      await authService.updateUser({filter : {id : userDetails.id}, data : updateData})
      await adminLogsService.createAdminLog({
        logDetails : {
          adminId : adminDetails.id,
          action : "UPDATE",
          entityId : userDetails.id,
          entityType : "USER",
          reason : reason
        }
      })
      await notificationService.sendNotificaion({
        userId : userDetails.id,
        title : "Your profile has been updated by one of our admin. ",
        message : `The reason for updating your profile is ${reason}. If you have any concerns, please contact our support team.`,
        type : "USER_DELETED",
        entityId : userDetails.id,
        entityType : "USER"
      })
      await emailService.sendEmail({
        to : userDetails.email,
        subject : "Your profile has been updated by one of our admin. ",
        message : adminUpdateTemplate("PROFILE", reason)
      })
       res.json({
        message : "User updated successfully"
      })
    } catch (error) {
      next(error)
    }
  }

  async updateEvent(req:Request, res:Response, next:NextFunction){
    try {
      const params = req.params
      const adminDetails:IUserDetails = req.userDetails
      const data: IUpdateEvent = req.body
      const eventId = String(params.eventId)
      const reason = String(params.reason)
      if(!eventId){
        throw {
          code : 404,
          message : "Event id is required",
          status : "USER_ID_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      if(!reason){
        throw {
          code : 404,
          message : "Reason is required",
          status : "REASON_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      const eventDetails : any  = await eventService.getEvent({ filter: { id: eventId } , include : {
        creator : true,
        _count : {
          select : {
            participants : true
          }
        }
      }})
      if (!eventDetails) {
        throw {
          code: 404,
          message: "Error event not found make sure that the event exists. ",
          status: "EVENT_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      const creatorDetails = eventDetails.creator
      let imageUrl = eventDetails.image;
      if (req.file) {
        const imageFile = req.file.buffer
        imageUrl = await uploadImage(imageFile, "Eventra/Event/Thumbnail")
      }
      const updatedEvent: IEvent = await eventService.updateEvent({
        filter: { id: data.id },
        data: {
          slug: data.title ? getSlug(data.title) : eventDetails.slug,
          title: data.title ? data.title : eventDetails.title,
          description: data.description ? data.description : eventDetails.description,
          location: data.location ? data.location : eventDetails.location,
          startDate: data.startDate ? data.startDate : eventDetails.startDate,
          endDate: data.endDate ? data.endDate : eventDetails.endDate,
          capacity: data.capacity ? Number(data.capacity) : eventDetails.capacity,
          status: data.status ? data.status : eventDetails.status,
          category: data.category ? data.category : eventDetails.category,
          tags: data.tags ? data.tags : eventDetails.tags,
          image: imageUrl
        }
      })
      await adminLogsService.createAdminLog({
        logDetails : {
          adminId : adminDetails.id,
          action : "UPDATE",
          entityId : updatedEvent.id,
          entityType : "EVENT",
          reason : reason
        }
      })

      await emailService.sendEmail({
        to : creatorDetails.email,
        subject : `The event ${updatedEvent.title} has been updated by one of our admin.`,
        message : adminUpdateTemplate("EVENT", reason)
      })

      await notificationService.sendNotificaion({
        userId : creatorDetails.id,
        title : "Your event has been updated by one of our admin. ",
        message : `The reason for updating your event is ${reason}. If you have any concerns, please contact our support team.`,
        type : "EVENT_DELETED",
        entityId : updatedEvent.id,
        entityType : "EVENT"
      })
      const registerdParticipantsId: Array<any> = await eventParticipantService.getEventParticipants({
        filter: { eventId: updatedEvent.id },
        select: {
          userId: true
        }
      })
      const groupNotifications: Array<ICreateNotificaion> = registerdParticipantsId.map((user) => ({
        userId: user.userId,
        title: "Event update for" + updatedEvent.title,
        message: `The event that you registerd has been changed please make surea that you are fine with the new changes made. `,
        type: "EVENT_UPDATED",
        entityType: "EVENT",
        entityId: updatedEvent.id
      }))
      await notificationService.sendManyNotification(groupNotifications)
      await emailService.sendEmail({
        to: creatorDetails.email,
        subject: `The event ${updatedEvent.title} has been updated.`,
        message: updateEventTemplate(updatedEvent.title, creatorDetails.name)
      })
      return res.json({
        message: "Event updated successfully. ",
        data: updatedEvent
      })
    } catch (error) {
      next(error)
    }
  }

  async updateOrganization(req:Request, res:Response, next:NextFunction){
        try {
          const adminDetails:IUserDetails = req.userDetails
          const data: ICreateOrganization = req.body
          const params = req.params
          const organizationId = String(params.organizationId)
          const reason = String(params.reason)
          if(!organizationId){
            throw {
              code : 404,
              message : "Organization id is required",
              status : "ORGANIZATION_ID_NOT_FOUND_ERR"
            } as IErrorTypes
          }
          if(!reason){
            throw {
              code : 404,
              message : "Reason is required",
              status : "REASON_NOT_FOUND_ERR"
            } as IErrorTypes
          }
          const organizationDetails : any = await organizationService.getOrganizationByFilter({
            filter : {id : organizationId},
            include : {
              members : {
                where : {
                  role : "OWNER"
                },
                include : {
                  user : {
                    select : {
                      id : true,
                      name : true,
                      email : true,
                      image : true
                    }
                  }
                }
              }
            }
          })
          if (!organizationDetails) {
            throw {
              code: 403,
              message: "You do not own this organization. ",
              status: "ORGANIZATION_OWNERSHIP_ERR"
            } as IErrorTypes
          }
          const ownerDetails = organizationDetails.members[0].user
          await checkForCredit(organizationDetails.id)
          const profileURL =  organizationDetails.image
          const thumbnailURL =  organizationDetails.thumbnail
          const uploadData: IUploadOrganizationData = {
            ...data,
            thumbnail: thumbnailURL,
            image: profileURL,
          }
          const updatedOrganization = await organizationService.updateOrganization({
            filter: { id: organizationDetails.id },
            data: uploadData,
          })
          await adminLogsService.createAdminLog({
            logDetails : {
              adminId : adminDetails.id,
              action : "UPDATE",
              entityId : updatedOrganization.id,
              entityType : "ORGANIZATION",
              reason : reason
            }
          })
          await notificationService.sendNotificaion({
            userId: ownerDetails.id,
            title: "Organization updated",
            message: `Hello, ${ownerDetails.name} organization named ${updatedOrganization.name} has been updated by one of our admin due to ${reason}. `,
            entityType: 'ORGANIZATION',
            type: "ORG_APPROVED",
            entityId: updatedOrganization.id
          })

          await emailService.sendEmail({
            to : ownerDetails.email,
            subject : "Your organizaation has been updated by one of our admin. ",
            message : adminUpdateTemplate("ORGANIZATION", reason)
          })
          await emailService.sendEmail({
            to: ownerDetails.email,
            subject: "Organization updated successfully",
            message: organizationUpdateTemplate(organizationDetails.name, ownerDetails.name)
          })
          await notificationService.sendNotificaion({
            userId: ownerDetails.id,
            title: "Organization updated",
            message: `Hello, ${ownerDetails.name} you updated  organization named ${updatedOrganization.name}. `,
            entityType: 'ORGANIZATION',
            type: "ORG_APPROVED",
            entityId: updatedOrganization.id
          })
          return res.json({
            message: "organization updated. ",
            data: updatedOrganization
          })
        } catch (error) {
          next(error)
        }
  }
}
const adminUpdateController = new AdminUpdateController()
export default adminUpdateController