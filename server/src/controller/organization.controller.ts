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
import type { ICreateMember, IUpdateMemberRole } from "../lib/types/organizationmember.types.ts"
import { joinedOrganizationEmail } from "../emailtemplates/joinedOrganizationTemplate.ts"
import { leftOrganizationEmail } from "../emailtemplates/leftOrganizationTemplate.ts"
import type { ICreateNotificaion } from "../lib/types/notification.types.ts"


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
        entityType :'ORGANIZATION',
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
        include : {
        members : {
          select : {userId : true}
        }
      }
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
      const groupNotification:Array<ICreateNotificaion> =
      organizationDetails.members?.map(m => ({
        userId: (m as { userId: string }).userId,
        title : "New user joined the organization.",
        message : `${userDetails.name} has joined the organization ${organizationDetails.name}`,
        type : 'ORG_APPROVED',
        entityType : "ORGANIZATION",
        entityId : organizationDetails.id
      })) ?? []
      await notificationService.sendManyNotification(groupNotification)
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
  async leaveOrganization(req:Request, res:Response, next :NextFunction){
    try {
      const userDetails:IUserDetails = req.userDetails
      const organizationId:string = String(req.params.organizationId)
      const organizationDetails = await organizationService.getOrganizationByFilter({
        filter : {id : organizationId},
        include : {
        members : {
          select : {userId : true}
        }
      }
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
      if(!memberDetails){
        throw {
          code : 403, 
          message : "You are not in the organization please join before leaving the organization. ",
          status : "NOT_IN_ORGANIZATION_ERR"
        } as IErrorTypes
      }
      if(memberDetails.role === "OWNER"){
        throw {
          code : 403,
          message : "Error, owner can't leave their own organization",
          status : "OWNER_CANT_LEAVE_ERR"
        } as IErrorTypes
      }
      const leavedUser = await organizationMemberService.deleteMember({
        filter : {id : memberDetails.id}
      })
      await notificationService.sendNotificaion({
        userId : leavedUser.userId,
        title: `Left the organization ${organizationDetails.name}`,
        message : `Hello ${userDetails.name} you left a  organization ${organizationDetails.name}. You are always free to join organization if you change your mind. `,
        type : "ORG_APPROVED",
        entityType : "ORGANIZATION",
        entityId : organizationDetails.id
      })
      const groupNotification:Array<ICreateNotificaion> =
      organizationDetails.members?.map(m => ({
        userId: (m as { userId: string }).userId,
        title : "User has the organization.",
        message : `${userDetails.name} has left the organization ${organizationDetails.name}`,
        type : 'ORG_APPROVED',
        entityType : "ORGANIZATION",
        entityId : organizationDetails.id
      })) ?? []
      await notificationService.sendManyNotification(groupNotification)
      await emailService.sendEmail({
        to : userDetails.email,
        subject: "You left an organization",
        message : leftOrganizationEmail(organizationDetails.name, userDetails.name)
      })
      return res.json({
        message: "Successfully left the organization",
        data : leavedUser
      })
    } catch (error) {
      next(error)
    }
  }
//! has not been tested  
  async updateMemberRole (req:Request, res:Response, next :NextFunction){
    try {
      const userDetails:IUserDetails = req.userDetails
      const data:IUpdateMemberRole  = req.body as IUpdateMemberRole
      const usersOrganization = await organizationService.getOrganizationByOwner(userDetails.id)
      if(!usersOrganization){
        throw {
          code : 404,
          message : "Organization not found make sure that you have created the organization. ",
          status : "ORGANIZATION_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      if(usersOrganization.id !== data.organizationId){
        throw {
          code : 403,
          message : "You do not own the organization. ",
          status : "ORGANIZATION_OWNERSHIP_ERR"
        } as IErrorTypes
      }
      const updatedMember = await organizationMemberService.updateMember( {
        filter : {id : data.id},
        data : data
      })
      await notificationService.sendNotificaion({
        userId : updatedMember.userId,
        title : "You role has been updated",
        message : `Hello your role has been updated for ${usersOrganization.name} to ${updatedMember.role} please vist the organzation to see the changes. `,
        type : 'ORG_APPROVED',
        entityId : updatedMember.organizationId,
        entityType : "ORGANIZATION"
      })

      return res.json({
        message : "Member role updated successfully",
        data : updatedMember
      })
    } catch (error) {
      next(error)
    }
  }

  //! has not been tested and needs a proper edge case scenario
    async updateOrganization(req:Request, res:Response, next : NextFunction){
    try {
      const userDetails:IUserDetails = req.userDetails
      const data:ICreateOrganization = req.body
      const organizationDetails = await organizationService.getOrganizationByOwner(userDetails.id) // this service finds the single org details where member is some userId and is "OWNER" so no need to check owbership 
      if(!organizationDetails){
        throw {
          code : 409,
          message : "Organization is does not exists please create a organozation before updating it. ",
          status : "ORGANIZATION_DOESNOT_EXISTS_ERR"
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
       const updatedOrganization = await organizationService.uploadOrganization ({
        filter : {id : organizationDetails.id},
        data : uploadData,
       })
       await emailService.sendEmail({
        to : userDetails.email,
        subject : "New organization created. ",
        message : newOrganizationCreation(updatedOrganization.name, userDetails.name) //!needs new message service
       })
       await notificationService.sendNotificaion( {
        userId : userDetails.id,
        title : "Organization updated",
        message : `Hello, ${userDetails.name} you updated  organization named ${updatedOrganization.name}. `,
        entityType :'ORGANIZATION',
        type : "ORG_APPROVED",
        entityId : updatedOrganization.id
       })
       return res.json({
        message : "organization updated. ",
        data : updatedOrganization
       })
    } catch (error) {
      next(error)
    }
  }
  
//! has not been tested 
  async deleteOrganization(req:Request, res:Response, next : NextFunction){
    try {
      const userDetails:IUserDetails = req.userDetails
       const organizationDetails = await organizationService.getOrganizationByOwner(userDetails.id) // this service finds the single org details where member is some userId and is "OWNER" so no need to check owbership 
      if(!organizationDetails){
        throw {
          code : 409,
          message : "Organization is does not exists please create a organozation before updating it. ",
          status : "ORGANIZATION_DOESNOT_EXISTS_ERR"
        } as IErrorTypes
      }
      const deletedOrganization = await organizationService.deleteOrganization(organizationDetails.id)
      return res.json({
        message : "Organization deleted successfully. ",
        data : this.deleteOrganization
      })
    } catch (error) {
      next(error)
    }
  }

  //! has not been tested
  async kickMember(req:Request, res:Response, next : NextFunction){
    try {
      const memberId = String(req.params.memberId)
      const organizationId = String(req.params.organizationId)
      const userDetails:IUserDetails= req.userDetails
      const organizationDetails = await organizationService.getOrganizationByFilter({
        filter :{id :organizationId},
        include :  {
        members : {
          where : {
            OR : [
              {role : "ADMIN"},
              {role : 'OWNER'}
            ],
            AND : [
              {userId : userDetails.id}
            ]
          }
        }
      }
      })
      if(!organizationDetails){
        throw {
          code : 403, 
          message : "You are not permitted to kick the user",
          status :"NOT_PERMITED_ERR"
        } as IErrorTypes
      }
      const kickedUser = await organizationMemberService.deleteMember({filter : {id : memberId}})
      return res.json({
        message : 'User kicked from the organization successfully. ',
        data : kickedUser
      })
      
    } catch (error) {
      next(error)
    }
  }

}
const organizationController = new OrganizationController()
export default organizationController