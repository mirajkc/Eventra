import type { Request, Response, NextFunction } from "express"
import organizationService from "../service/organization.service.js"
import type { IUserDetails } from "../lib/types/user.types.js"
import type { ICreateOrganization, IOrganizationQuery, IOrganizationsQuery, IOrganizationTypes, IUploadOrganizationData } from "../lib/types/organization.types.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import { uploadImage } from "../service/upload.service.js"
import emailService from "../service/email.service.js"
import { newOrganizationCreation } from "../emailtemplates/newOrganizationTemplate.js"
import notificationService from "../service/notification.service.js"
import creditService from "../service/creditpurchase.service.js"
import organizationMemberService from "../service/organizationmember.service.js"
import type { ICreateMember, IOrganizationMemberTypes, IUpdateMemberRole } from "../lib/types/organizationmember.types.js"
import { joinedOrganizationEmail } from "../emailtemplates/joinedOrganizationTemplate.js"
import { leftOrganizationEmail } from "../emailtemplates/leftOrganizationTemplate.js"
import type { ICreateNotificaion } from "../lib/types/notification.types.js"
import { organizationUpdateTemplate } from "../emailtemplates/organizationUploadTemplate.js"
import userService from "../service/user.service.js"
import { userKickedTemplate } from "../emailtemplates/userKickedTemplate.js"
import { checkForCredit } from "../utilities/checkforcredit.js"



class OrganizationController {
  async createOrganization(req: Request, res: Response, next: NextFunction) {
    try {
      const userDetails: IUserDetails = req.userDetails
      const data: ICreateOrganization = req.body
      const organizationDetails = await organizationService.getOrganizationByOwner(userDetails.id)
      if (organizationDetails) {
        throw {
          code: 409,
          message: "Organization is already exists. ",
          status: "ORGANIZATION_ALREADY_EXISTS_ERR"
        } as IErrorTypes
      }
      const files = req.files as {
        image?: Express.Multer.File[],
        thumbnail?: Express.Multer.File[],
      }
      const imageFile = files.image?.[0]
      const thumbnailFile = files.thumbnail?.[0]
      let profileURL: string | null
      let thumbnailURL: string | null
      profileURL = imageFile ? await uploadImage(imageFile.buffer, "Eventra/Organization/profile") : null
      thumbnailURL = thumbnailFile ? await uploadImage(thumbnailFile.buffer, "Eventra/Organization/thumbnail") : null
      const uploadData: IUploadOrganizationData = {
        ...data,
        thumbnail: thumbnailURL,
        image: profileURL,
      }
      const newOrganization = await organizationService.createNewOrganization({
        data: uploadData,
        userId: userDetails.id
      })
      await emailService.sendEmail({
        to: userDetails.email,
        subject: "New organization created. ",
        message: newOrganizationCreation(newOrganization.name, userDetails.name)
      })
      await notificationService.sendNotificaion({
        userId: userDetails.id,
        title: "New Organization created",
        message: `Hello, ${userDetails.name} you created a new organization named ${newOrganization.name} and 20 credits has been awarded. `,
        entityType: 'ORGANIZATION',
        type: "ORG_APPROVED",
        entityId: newOrganization.id
      })
      return res.json({
        message: "New organization created. ",
        data: newOrganization
      })
    } catch (error) {
      next(error)
    }
  }
  async getOrganizationDetailsById(req: Request, res: Response, next: NextFunction) {
    try {
      const data: IOrganizationQuery = req.query
      const organizationId = String(req.params.organizationId)
      if (!organizationId) {
        throw {
          code: 403,
          message: "Organization id is required",
          status: "ORGANIZATIONIT_NOTFOUND_ERR"
        } as IErrorTypes
      }
      await checkForCredit(organizationId)
      const page = Number(data.page) || 1
      const take = Math.min(Math.max(Number(data.take) || 10, 1), 50);
      const skip = (page - 1) * take
      const include: any = {}
      if (data.credits === 'true') {
        include.creditPurchases = {
          skip,
          take,
          orderBy: { purchasedAt: 'desc' },
          include: {
            user: true
          }
        }
      }
      if (data.members === 'true') {
        include.members = {
          skip,
          take,
          orderBy: { joinedAt: 'desc' },
          include: {
            user: true
          }
        }
      }
      const organizationData = await organizationService.getOrganizationByFilter({ filter: { id: organizationId }, include: include })
      const counts: any = {}
      if (data.credits === 'true') {
        counts.creditPurchasesCount = await creditService.getCreditPurchaseCount({ organizationId: organizationData.id })
      }
      if (data.members === 'true') {
        counts.memberCount = await organizationMemberService.getMemberCount({
          filter: {
            organizationId: organizationData.id
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
  async getAllOrganization(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as unknown as IOrganizationsQuery
      const page: number = Number(query.page) || 1
      const take: number = Number(query.take) || 10
      const skip: number = (page - 1) * take
      let filter: any = {}
      if (query.name) {
        filter["name"] = { contains: query.name, mode: 'insensitive' }
      }
      if (query.type) {
        filter["type"] = query.type
      }
      if (query.premium !== undefined) {
        filter["isPremium"] = query.premium === 'true';
      }
      let orderBy: any = []
      if (query.createdAt) {
        orderBy.push({ "createdAt": query.createdAt })
      }

      if (query.updatedAt) {
        orderBy.push({ "updatedAt": query.updatedAt })
      }

      const fetchedOrganizations = await organizationService.getAllOrganizationByFilter({
        filter: filter,
        orderBy: orderBy,
        take: take,
        skip: skip
      })
      const totalCount = await organizationService.getOrganizationCount(filter)
      return res.json({
        message: "Successfullt fetched the organizations data. ",
        data: fetchedOrganizations,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(totalCount / take),
          take,
          totalDocs: totalCount,
          hasNextPage: page < Math.ceil(totalCount / take),
          hasPrevPage: page > 1
        }
      })

    } catch (error) {
      next(error)
    }
  }
  async joinOrganization(req: Request, res: Response, next: NextFunction) {
    try {
      const userDetails: IUserDetails = req.userDetails
      const organizationId: string = String(req.params.organizationId)
      await checkForCredit(organizationId)
      const organizationDetails = await organizationService.getOrganizationByFilter({
        filter: { id: organizationId },
        include: {
          members: {
            select: { userId: true }
          }
        }
      })
      if (!organizationDetails) {
        throw {
          code: 404,
          message: "Organization not found. ",
          status: "ORGANIZATION_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      const memberDetails = await organizationMemberService.getMemberByFilter({
        filter: {
          userId: userDetails.id,
          organizationId: organizationId
        }
      })
      if (memberDetails) {
        throw {
          code: 403,
          message: "You are already in the organization. ",
          status: "ALREADY_IN_ORGANIZATION_ERR"
        } as IErrorTypes
      }
      const newMemberDetail: ICreateMember = {
        userId: userDetails.id,
        organizationId: organizationId,
      }
      const newMember = await organizationMemberService.createNewMember(newMemberDetail)
      await notificationService.sendNotificaion({
        userId: userDetails.id,
        title: "Joined a new organization" + organizationDetails.name,
        message: `Hello ${userDetails.name} you joined a new organization ${organizationDetails.name}. You will get notified for activites related to this organization`,
        type: "ORG_APPROVED",
        entityType: "ORGANIZATION",
        entityId: organizationDetails.id
      })
      const groupNotification: Array<ICreateNotificaion> =
        organizationDetails.members?.map((m: any) => ({
          userId: (m as { userId: string }).userId,
          title: "New user joined the organization.",
          message: `${userDetails.name} has joined the organization ${organizationDetails.name}`,
          type: 'ORG_APPROVED',
          entityType: "ORGANIZATION",
          entityId: organizationDetails.id
        })) ?? []
      await notificationService.sendManyNotification(groupNotification)
      await emailService.sendEmail({
        to: userDetails.email,
        subject: "Joined the new organization",
        message: joinedOrganizationEmail(organizationDetails.name, userDetails.name)
      })
      return res.json({
        message: "Successfully joined the organization",
        data: newMember
      })
    } catch (error) {
      next(error)
    }
  }
  async leaveOrganization(req: Request, res: Response, next: NextFunction) {
    try {
      const userDetails: IUserDetails = req.userDetails
      const organizationId: string = String(req.params.organizationId)
      await checkForCredit(organizationId)
      const organizationDetails = await organizationService.getOrganizationByFilter({
        filter: { id: organizationId },
        include: {
          members: {
            select: { userId: true }
          }
        }
      })
      if (!organizationDetails) {
        throw {
          code: 404,
          message: "Organization not found. ",
          status: "ORGANIZATION_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      const memberDetails = await organizationMemberService.getMemberByFilter({
        filter: {
          userId: userDetails.id,
          organizationId: organizationId
        }
      })
      if (!memberDetails) {
        throw {
          code: 403,
          message: "You are not in the organization please join before leaving the organization. ",
          status: "NOT_IN_ORGANIZATION_ERR"
        } as IErrorTypes
      }
      if (memberDetails.role === "OWNER") {
        throw {
          code: 403,
          message: "Error, owner can't leave their own organization",
          status: "OWNER_CANT_LEAVE_ERR"
        } as IErrorTypes
      }
      const leavedUser = await organizationMemberService.deleteMember({
        filter: { id: memberDetails.id }
      })
      await notificationService.sendNotificaion({
        userId: leavedUser.userId,
        title: `Left the organization ${organizationDetails.name}`,
        message: `Hello ${userDetails.name} you left a  organization ${organizationDetails.name}. You are always free to join organization if you change your mind. `,
        type: "ORG_APPROVED",
        entityType: "ORGANIZATION",
        entityId: organizationDetails.id
      })
      const groupNotification: Array<ICreateNotificaion> =
        organizationDetails.members?.map((m: any) => ({
          userId: (m as { userId: string }).userId,
          title: "User has the organization.",
          message: `${userDetails.name} has left the organization ${organizationDetails.name}`,
          type: 'ORG_APPROVED',
          entityType: "ORGANIZATION",
          entityId: organizationDetails.id
        })) ?? []
      await notificationService.sendManyNotification(groupNotification)
      await emailService.sendEmail({
        to: userDetails.email,
        subject: "You left an organization",
        message: leftOrganizationEmail(organizationDetails.name, userDetails.name)
      })
      return res.json({
        message: "Successfully left the organization",
        data: leavedUser
      })
    } catch (error) {
      next(error)
    }
  }
  async updateMemberRole(req: Request, res: Response, next: NextFunction) {
    try {
      const userDetails: IUserDetails = req.userDetails
      const data: IUpdateMemberRole = req.body as IUpdateMemberRole
      const usersOrganization = await organizationService.getOrganizationByOwner(userDetails.id)
      if (!usersOrganization) {
        throw {
          code: 404,
          message: "Organization not found make sure that you have created the organization. ",
          status: "ORGANIZATION_NOT_FOUND_ERR"
        } as IErrorTypes // this also does the ownership check as it only return organization by userdetails id and userdetails id comes from accessToken and authorization middleware
      }
      const memberDetails = await organizationMemberService.getMemberByFilter({ filter: { id: data.id, organizationId: usersOrganization.id } })
      if (!memberDetails) {
        throw {
          code: 404,
          message: "Member not found in organization. ",
          status: "MEMBER_NOT_FOUND_ERR"
        } as IErrorTypes
      }
      if (userDetails.id === memberDetails.userId) {
        throw {
          code: 400,
          message: "You cannot change your own role.",
          status: "SELF_ROLE_UPDATE_ERR"
        }
      }
      if (data.role === 'OWNER') {
        throw {
          code: 400,
          message: "Owner role cannot be modified.",
          status: "OWNER_ROLE_LOCKED_ERR"
        }
      }
      const updatedMember = await organizationMemberService.updateMember({
        filter: { id: data.id, organizationId: usersOrganization.id },
        data: { role: data.role }
      })
      await notificationService.sendNotificaion({
        userId: updatedMember.userId,
        title: "You role has been updated",
        message: `Hello your role has been updated for ${usersOrganization.name} to ${updatedMember.role} please vist the organzation to see the changes. `,
        type: 'ORG_APPROVED',
        entityId: updatedMember.organizationId,
        entityType: "ORGANIZATION"
      })
      return res.json({
        message: "Member role updated successfully",
        data: updatedMember.role
      })
    } catch (error) {
      next(error)
    }
  }
  async updateOrganization(req: Request, res: Response, next: NextFunction) {
    try {
      const userDetails: IUserDetails = req.userDetails
      const data: ICreateOrganization = req.body
      // contains name description types
      const organizationDetails = await organizationService.getOrganizationByOwner(userDetails.id)
      // this service finds the single org details where member is some userId and is "OWNER" so no need to check owbership 
      // Also the form will be prefilled so the iputs such as name description and organization types
      if (!organizationDetails) {
        throw {
          code: 403,
          message: "You do not own this organization. ",
          status: "ORGANIZATION_OWNERSHIP_ERR"
        } as IErrorTypes
      }
      await checkForCredit(organizationDetails.id)
      const files = req.files as {
        image?: Express.Multer.File[],
        thumbnail?: Express.Multer.File[],
      }
      const imageFile = files.image?.[0]
      const thumbnailFile = files.thumbnail?.[0]
      const profileURL = imageFile ? await uploadImage(imageFile.buffer, "Eventra/Organization/profile") : organizationDetails.image
      const thumbnailURL = thumbnailFile ? await uploadImage(thumbnailFile.buffer, "Eventra/Organization/thumbnail") : organizationDetails.thumbnail
      const uploadData: IUploadOrganizationData = {
        ...data,
        thumbnail: thumbnailURL,
        image: profileURL,
      }
      const updatedOrganization = await organizationService.updateOrganization({
        filter: { id: organizationDetails.id },
        data: uploadData,
      })
      await emailService.sendEmail({
        to: userDetails.email,
        subject: "Organization updated successfully",
        message: organizationUpdateTemplate(organizationDetails.name, userDetails.name)
      })
      await notificationService.sendNotificaion({
        userId: userDetails.id,
        title: "Organization updated",
        message: `Hello, ${userDetails.name} you updated  organization named ${updatedOrganization.name}. `,
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

  async deleteOrganization(req: Request, res: Response, next: NextFunction) {
    try {
      const userDetails: IUserDetails = req.userDetails
      const organizationDetails = await organizationService.getOrganizationByOwner(userDetails.id)
      if (!organizationDetails) {
        throw {
          code: 403,
          message: "You do not own this organization. ",
          status: "ORGANIZATION_OWNERSHIP_ERR"
        } as IErrorTypes
      }
      const deletedOrganization = await organizationService.deleteOrganization(organizationDetails.id)
      return res.json({
        message: "Organization deleted successfully. ",
        data: deletedOrganization.name
      })
    } catch (error) {
      next(error)
    }
  }
  async kickMember(req: Request, res: Response, next: NextFunction) {
    try {
      const memberId = String(req.params.memberId)
      const organizationId = String(req.params.organizationId)
      const userDetails: IUserDetails = req.userDetails
      const organization = await organizationService.getOrganizationByFilter({
        filter: { id: organizationId }, include: {
          members: {
            select: {
              userId: true
            }
          }
        }
      })
      if (!organization) {
        throw {
          code: 404,
          message: "Organization not found",
          status: "ORGANIZATION_NOT_FOUND"
        } as IErrorTypes
      }
      const requester = await organizationMemberService.getMemberByFilter({
        filter: {
          userId: userDetails.id,
          organizationId: organizationId
        }
      })

      if (!requester || !["OWNER", "ADMIN"].includes(requester.role)) {
        throw {
          code: 403,
          message: "You are not permitted to kick members",
          status: "NOT_PERMITTED_ERR"
        } as IErrorTypes
      }

      const targetMember = await organizationMemberService.getMemberByFilter({
        filter: {
          id: memberId,
          organizationId: organizationId
        }
      })

      if (!targetMember) {
        throw {
          code: 404,
          message: "Member not found in organization",
          status: "MEMBER_NOT_FOUND"
        } as IErrorTypes
      }

      if (targetMember.userId === userDetails.id) {
        throw {
          code: 400,
          message: "You cannot remove yourself from the organization",
          status: "SELF_KICK_ERR"
        } as IErrorTypes
      }

      if (requester.role === "ADMIN" && targetMember.role !== "MEMBER") {
        throw {
          code: 403,
          message: "Admins can only kick members",
          status: "ROLE_RESTRICTION_ERR"
        } as IErrorTypes
      }

      if (targetMember.role === "OWNER") {
        throw {
          code: 403,
          message: "Owner cannot be removed",
          status: "OWNER_REMOVAL_ERR"
        } as IErrorTypes
      }
      const kickedUser = await organizationMemberService.deleteMember({
        filter: {
          id: memberId,
          organizationId: organizationId
        }
      })

      const kickedUserDetails = await userService.getUserDetails({
        id: kickedUser.userId,
      }, {})

      await notificationService.sendNotificaion({
        userId: kickedUser.userId,
        title: "You have been kicked from the organization. ",
        message: `Hello you have been kicked from the organization ${organization.name}. `,
        type: "ORG_APPROVED",
        entityId: organization.id,
        entityType: 'ORGANIZATION'
      })

      await emailService.sendEmail({
        to: kickedUserDetails.email,
        subject: "Kicked from the organization",
        message: userKickedTemplate(organization.name, kickedUserDetails.name)
      })

      const groupNotification: Array<ICreateNotificaion> =
        organization.members?.map((m: any) => ({
          userId: (m as { userId: string }).userId,
          title: "User has the organization.",
          message: `${userDetails.name} has been kikcked the organization ${organization.name}`,
          type: 'ORG_APPROVED',
          entityType: "ORGANIZATION",
          entityId: organization.id
        })) ?? []

      return res.json({
        message: "User kicked from the organization successfully",
        data: kickedUser
      })

    } catch (error) {
      next(error)
    }
  }

  async getLoggedInUserOrganization(req: Request, res: Response, next: NextFunction) {
    try {
      const userDetails: IUserDetails = req.userDetails
      const organizationDetails = await organizationService.getOrganizationByOwner(userDetails.id)
      if (!organizationDetails) {
        return res.json({
          message: "User has not created the organization yet. ",
          hasOrganization: false,
          data: null
        })
      }
      await checkForCredit(organizationDetails.id)
      return res.json({
        message: "User's organization details fetched successfully. ",
        data: organizationDetails,
        hasOrganization: true
      })
    } catch (error) {
      next(error)
    }
  }


  checkIfUserIsJoined = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userDetails: IUserDetails = req.userDetails
      const organizationId = req.params.organizationId
      if (!organizationId) {
        throw {
          code: 404,
          message: "Error organization Id not found",
          status: "ORGANIZATION_ID_NOT_FOUND"
        } as IErrorTypes
      }
      const organizationDetails = await organizationService.getOrganizationByFilter({
        filter: { id: organizationId },
        include: {
          members: {
            where: {
              userId: userDetails.id
            }
          }
        }
      })

      const hasJoined = organizationDetails.members?.some((member: any) => member.userId === userDetails.id)

      return res.json({
        message: "fetched the joined status of logged in user successfully. ",
        data: {
          hasJoined: hasJoined,
          loggedInUserDetails: organizationDetails.members
        }
      })
    } catch (error) {
      next(error)
    }
  }

  getLoggedInUserOrganizationRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userDetails: IUserDetails = req.userDetails
      const organizationId = req.params.organizationId
      if (!organizationId) {
        throw {
          code: 404,
          message: "Error organization Id not found",
          status: "ORGANIZATION_ID_NOT_FOUND"
        } as IErrorTypes
      }
      const organizationDetails = await organizationService.getOrganizationByFilter({
        filter: { id: organizationId },
        include: {
          members: {
            where: {
              userId: userDetails.id
            }
          }
        }
      })

      return res.json({
        message: "fetched the role of logged in user successfully. ",
        data: organizationDetails
      })
    } catch (error) {
      next(error)
    }
  }

}
const organizationController = new OrganizationController()
export default organizationController