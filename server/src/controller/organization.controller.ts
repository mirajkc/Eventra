import type {Request, Response, NextFunction } from "express"
import organizationService from "../service/organization.service.ts"
import type { IUserDetails } from "../lib/types/user.types.ts"
import type { ICreateOrganization, IUploadOrganizationData } from "../lib/types/organization.types.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import { uploadImage } from "../service/upload.service.ts"
import emailService from "../service/email.service.ts"
import  { newOrganizationCreation } from "../emailtemplates/newOrganizationTemplate.ts"
import notificationService from "../service/notification.service.ts"

class OrganizationController  {
  async createOrganization(req:Request, res:Response, next : NextFunction){
    try {
      const userDetails:IUserDetails = req.userDetails
      const data:ICreateOrganization = req.body
      const organizationDetails = await organizationService.getOrganizationByOwner(userDetails.id)
      if(organizationDetails){
        throw {
          code : 409,
          message : "Organization is already exists. ",
          status : "ORGANIZATION_ALREADY_EXISTS_ERR"
        } as IErrorTypes
      }

      const files = req.files as {
        image? : Express.Multer.File[],
        thumbnail? : Express.Multer.File[],
      }
      const imageFile = files.image?.[0]
      const thumbnailFile = files.thumbnail?.[0]
      let profileURL: string | null 
      let thumbnailURL: string | null 
      profileURL = imageFile ? await uploadImage(imageFile.buffer, "Eventra/Organization/profile") : null
      thumbnailURL = thumbnailFile ? await uploadImage(thumbnailFile.buffer, "Eventra/Organization/thumbnail") : null
      const uploadData:IUploadOrganizationData = {
        ...data,
        thumbnail : thumbnailURL,
        image : profileURL,
      }
       const newOrganization = await organizationService.createNewOrganization({
        data : uploadData,
        userId : userDetails.id
       })
       await emailService.sendEmail({
        to : userDetails.email,
        subject : "New organization created. ",
        message : newOrganizationCreation(newOrganization.name, userDetails.name)
       })
       await notificationService.sendNotificaion( {
        userId : userDetails.id,
        title : "New Organization created",
        message : `Hello, ${userDetails.name} you created a new organization named ${newOrganization.name} and 20 credits has been awarded. `
       })
       return res.json({
        message : "New organization created. ",
        data : newOrganization
       })
    } catch (error) {
      next(error)
    }
  }
}
const organizationController = new OrganizationController()
export default organizationController