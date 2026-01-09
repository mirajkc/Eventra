import type {Request, Response, NextFunction } from "express"
import type { ICreateEvent } from "../lib/types/event.types.ts"
import type { IUserDetails } from "../lib/types/user.types.ts"
import organizationService from "../service/organization.service.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import organizationMemberService from "../service/organizationmember.service.ts"
import { uploadImage } from "../service/upload.service.ts"
import eventService from "../service/event.service.ts"

class EventController {
  async createNewEvent(req:Request, res:Response, next :NextFunction){
    const data:ICreateEvent = req.body
    const userDetails:IUserDetails = req.userDetails
    const organizationDetails = await organizationService.getOrganizationByFilter({filter : {id : data.organizationId}, include : {}})
    if(!organizationDetails){
      throw {
        code : 404, 
        message : "Error organization not found make sure organization exists. ",
        status : "ORGANIZATION_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    const creatorDetails = await organizationMemberService.getMemberByFilter({
      filter : {
        userId  : "",
        organizationId : "",
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
    let imageUrl;
    if(req.file){
       const imageFile = req.file.buffer
        imageUrl = await uploadImage(imageFile, "Eventra/Event/Thumbnail")
    }
    const newEvent = await eventService.createEvent({
      ...data,
      
    })

    
  }
} 
const eventController = new EventController()
export default eventController