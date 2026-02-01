import type { NextFunction, Request, Response } from "express"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import type { IUserDetails } from "../lib/types/user.types.js"
import organizationService from "../service/organization.service.js"
import emailService from "../service/email.service.js"
import adminDeleteTemplate from "../emailtemplates/adminDeleteTemplate.js"
import notificationService from "../service/notification.service.js"

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
    console.log(deletedOrganization);
    
    await emailService.sendEmail({
      to  : deletedOrganization.members[0].email,
      subject : "Your organization got deleted",
      message : adminDeleteTemplate(deletedOrganization.name, "Organization" )
    })

    await notificationService.sendNotificaion({
      userId : deletedOrganization.members[0].userId,
      title : "You organization has been deleted. ",
      message : `Hi, ${deletedOrganization.members[0].name} your organization has been deleted by one of our admin. Please make sure to follow our platform policies to avoid future deletions.`,
      type : "ORGANIZATION_DELETED",
      entityType : "ORGANIZATION",
      entityId : deletedOrganization.id

    })

    return res.json ({
      message : "Organization deleted successfully. ",
      data : deletedOrganization
    })
      
    } catch (error) {
      next(error)
    }
  }
}
const adminController = new AdminController()
export default adminController