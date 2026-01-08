import type {Request, Response, NextFunction } from "express"
import organizationService from "../service/organization.service.ts"
import type { IUserDetails } from "../lib/types/user.types.ts"
import type { ICreateOrganization, IOrganizationQuery, IOrganizationsQuery, IOrganizationTypes, IUploadOrganizationData } from "../lib/types/organization.types.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import { uploadImage } from "../service/upload.service.ts"
import emailService from "../service/email.service.ts"
import  { newOrganizationCreation } from "../emailtemplates/newOrganizationTemplate.ts"
import notificationService from "../service/notification.service.ts"
import creditService from "../service/creditpurchase.service.ts"
import organizationMemberService from "../service/organizationmember.service.ts"
import type { ICreateMember } from "../lib/types/organizationmember.types.ts"
import { joinedOrganizationEmail } from "../emailtemplates/joinedOrganizationTemplate.ts"

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
        message : `Hello, ${userDetails.name} you created a new organization named ${newOrganization.name} and 20 credits has been awarded. `,
        entityType :'EVENT',
        type : "ORG_APPROVED",
        entityId : newOrganization.id
       })
       return res.json({
        message : "New organization created. ",
        data : newOrganization
       })
    } catch (error) {
      next(error)
    }
  }

  async getOrganizationDetailsById(req:Request, res:Response, next :NextFunction){
    try {
      const data : IOrganizationQuery = req.query
      const organizationId = String(req.params.organizationId)
      if(!organizationId){
        throw {
          code :  403,
          message : "Organization id is required",
          status :"ORGANIZATIONIT_NOTFOUND_ERR"
        } as IErrorTypes
      }
      const page = Number(data.page) || 1
      const take = Math.min(Math.max(Number(data.take) || 10, 1), 50);
      const skip = (page -1) * take
      const include:any = {}
      if(data.credits === 'true'){
        include.creditPurchases  = {
          skip,
          take, 
          orderBy: { purchasedAt: 'desc' },
        }
      }
      if(data.members === 'true'){
        include.members = {
          skip,
          take, 
          orderBy: { joinedAt: 'desc' },
        }
      }
      const organizationData = await organizationService.getOrganizationByFilter({filter : {id: organizationId}, include : include})
      const counts :any = {}
      if(data.credits === 'true'){
        counts.creditPurchasesCount = await creditService.getCreditPurchaseCount({organizationId  : organizationData.id})
      }
      if(data.members === 'true'){
        counts.memberCount = await organizationMemberService.getMemberCount({
          filter : {
            organizationId : organizationData.id
          }
        })
      }

    const pagination: any = {};
    for (const key in counts) {
      pagination[key] = {
        currentPage: page,
        totalPages: Math.ceil(counts[key] / take),
        take,
        totalDocs: counts[key],
        hasNextPage: page < Math.ceil(counts[key] / take),
        hasPreviousPage: page > 1,
      };
    }
    return res.json({
      message: 'Organization details fetched successfully.',
      data: organizationData,
      pagination,
    });
    } catch (error) {
      next(error)
    }
  }
  async getAllOrganization(req:Request, res:Response, next :NextFunction){
    try {
      const query = req.query as unknown as IOrganizationsQuery
      const page:number = Number(query.page) || 1
      const take:number = Number(query.take) || 10
      const  skip:number = (page -1 )*take
      let filter: any = {}
      if(query.name){
        filter["name"] = {contains : query.name , mode : 'insensitive'}
      }
       if(query.type){
        filter["type"] =  query.type
      }
       if (query.premium !== undefined) {
            filter["isPremium"] = query.premium === 'true';
      }
      let orderBy:any =[]
      if(query.createdAt){
        orderBy.push({"createdAt" : query.createdAt})
      }

      if(query.updatedAt){
        orderBy.push({"updatedAt" : query.updatedAt})
      }
      
      const fetchedOrganizations = await organizationService.getAllOrganizationByFilter({
        filter : filter, 
        orderBy : orderBy,
        take : take, 
        skip : skip
      })
      const totalCount = await organizationService.getOrganizationCount(filter)
      return res.json({
        message : "Successfullt fetched the organizations data. ",
        data : fetchedOrganizations,
        pagination : {
          currentPage : page,
          totalPages : Math.ceil(totalCount/take),
          take, 
          totalDocs : totalCount,
          hasNextPage : page < Math.ceil(totalCount/take),
          hasPrevPage : page > 1
        }
      })

    } catch (error) {
      next(error)
    }
  }
  async joinOrganization(req:Request, res:Response, next :NextFunction){
    try {
      const userDetails:IUserDetails = req.userDetails
      const organizationId:string = String(req.params.organizationId)
      const organizationDetails = await organizationService.getOrganizationByFilter({
        filter : {id : organizationId},
        include : {}
      })
      if(!organizationDetails){
        throw {
          code : 404, 
          message : "Organization not found. ",
          status : "ORGANIZATION_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      const memberDetails = await organizationMemberService.getMemberByFilter({
          userId : userDetails.id,
          organizationId : organizationId
      })
      if(memberDetails){
        throw {
          code : 403, 
          message : "You are already in the organization. ",
          status : "ALREADY_IN_ORGANIZATION_ERR"
        } as IErrorTypes
      }
      const newMemberDetail : ICreateMember = {
        userId : userDetails.id,
        organizationId : organizationId,
      }
      const newMember = await organizationMemberService.createNewMember(newMemberDetail)
      await notificationService.sendNotificaion({
        userId : userDetails.id,
        title : "Joined a new organization"+organizationDetails.name,
        message : `Hello ${userDetails.name} you joined a new organization ${organizationDetails.name}. You will get notified for activites related to this organization`,
        type : "ORG_APPROVED",
        entityType : "ORGANIZATION",
        entityId : organizationDetails.id
      })
      await emailService.sendEmail({
        to : userDetails.email,
        subject : "Joined the new organization",
        message : joinedOrganizationEmail(organizationDetails.name, userDetails.name)
      })
      return res.json({
        message : "Successfully joined the organization",
        data : newMember
      })
    } catch (error) {
      next(error)
    }
  }

  

}
const organizationController = new OrganizationController()
export default organizationController