import type { NextFunction, Request, Response } from "express"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import organizationService from "../service/organization.service.js"
import emailService from "../service/email.service.js"
import adminDeleteTemplate from "../emailtemplates/adminDeleteTemplate.js"
import notificationService from "../service/notification.service.js"
import eventService from "../service/event.service.js"
import userService from "../service/user.service.js"

class AdminController {
  async deleteOrganization(req : Request, res:Response, next:NextFunction){
    try {
    const params = req.params
    const organizationId = String(params.organizationId)
    if(organizationId.length < 1){
      throw {
        code : 404, 
        message : "Unable to fetchfethch organization details please try again. ",
        status : "ORGANIZATION_ID_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    const organizationDetails = await organizationService.getOrganizationByFilter({
      filter : {id  : organizationId},
      include : {}
    })
    const include = {
        members : {
          where : {
            role : "OWNER"
          },
          include : {
            user : {
              select : {
                id : true,
                name : true,
                email : true
              }
            }
          }
        }
      }
    const deletedOrganization:any = await organizationService.deleteOrganization(organizationDetails.id,include )    
    const creator = deletedOrganization.members[0]?.user;

if (creator) {
  await emailService.sendEmail({
    to: creator.email,
    subject: "Your organization got deleted",
    message: adminDeleteTemplate(deletedOrganization.name, "Organization"),
  });

  await notificationService.sendNotificaion({
    userId: creator.id,
    title: "Your organization has been deleted",
    message: `Hi, ${creator.name}, your organization has been deleted by one of our admins. Please make sure to follow our platform policies to avoid future deletions.`,
    type: "ORGANIZATION_DELETED",
    entityType: "ORGANIZATION",
    entityId: deletedOrganization.id,
  });
}

    return res.json ({
      message : "Organization deleted successfully. ",
      data : deletedOrganization
    })
      
    } catch (error) {
      next(error)
    }
  }

  async deleteEvent(req : Request, res:Response, next:NextFunction){
    try {
    const params = req.params
    const eventId = String(params.eventId)
    if(eventId.length < 1){
      throw {
        code : 404, 
        message : "Unable to fetchfethch event details please try again. ",
        status : "EVENT_ID_NOT_FOUND_ERR"
      } as IErrorTypes
    }

    const eventDetails = await eventService.getEvent({filter : {id : eventId}, include : {}})
    if(!eventDetails?.id){
      throw {
        code : 404,
        message : "Event not found please make sure that event exists. ",
        status : "EVENT_NOT_FOUND_ERR"
      } as IErrorTypes
    }

    const deletedEvent : any = await eventService.deleteEvent(eventDetails.id , {
        creator : {
          select : {
            id : true,
            name : true,
            email : true
          }
        }
      })

       await emailService.sendEmail({
    to: deletedEvent.creator?.email,
    subject: "Your Event got deleted",
    message: adminDeleteTemplate(deletedEvent.title, "Event"),
  });

  await notificationService.sendNotificaion({
    userId: deletedEvent.creator?.id,
    title: "Your Event has been deleted",
    message: `Hi, ${deletedEvent.creator?.name}, your Event has been deleted by one of our admins. Please make sure to follow our platform policies to avoid future deletions.`,
    type: "EVENT_DELETED",
    entityType: "EVENT",
    entityId: deletedEvent.id,
  });

  return res.json  ({
    message : "Event deleted successfully",
    data : deletedEvent
  })
    } catch (error) {
      next(error)
    }
  }

  async deleteUser(req : Request, res :Response, next :NextFunction){
    try {
    const params = req.params
    const userId = String(params.userId)
    if(userId.length < 1){
      throw {
        code : 404, 
        message : "Unable to fetchfethch user details please try again. ",
        status : "USER_ID_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    const userDetails = await userService.getUserDetails({ id : userId}, {})
    if(userDetails.role === "ADMIN"){
      throw {
        code : 403,
        status : "DELTE_OPTION_NOT_PERMITTED",
        message : "Admin are not allowed to delete other admins. "
      } as IErrorTypes
    }
    const deletedUser = await userService.deleteUser({id : userDetails.id})
    await emailService.sendEmail({
      to : deletedUser.email,
      subject : "You have been removed from Eventra",
      message : adminDeleteTemplate(deletedUser.name, "Account")
    })

    return res.json({
      message : "User deleted successfully. ",
      data :deletedUser
    })
    } catch (error) {
      next(error)
    }
  }
}
const adminController = new AdminController()
export default adminController