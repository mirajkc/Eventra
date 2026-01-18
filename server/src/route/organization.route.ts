
import express, { Router } from 'express'
import authorize from '../middleware/authorize.middleware.js'
import { upload } from '../middleware/uploader.middleware.js'
import validator from '../middleware/validator.middleware.js'
import {  memberRoleDTO, organizationDTO, updateOrganizationDTO } from '../rules/organization.rules.js'
import organizationController from '../controller/organization.controller.js'
const organizationRouter:Router = express.Router()

organizationRouter.post('/create-organization', authorize({}),upload.fields([{name : "image" , maxCount : 1}, {name : "thumbnail", maxCount : 1 }]), validator(organizationDTO), organizationController.createOrganization )

organizationRouter.get('/get-single-organization/:organizationId', organizationController.getOrganizationDetailsById)

organizationRouter.get('/get-organizations', organizationController.getAllOrganization)

organizationRouter.put('/update-member-role', authorize({}),validator(memberRoleDTO), organizationController.updateMemberRole )

organizationRouter.put('/update-organization' ,authorize({}),upload.fields([{name : "image" , maxCount : 1}, {name : "thumbnail", maxCount : 1 }]) ,validator(updateOrganizationDTO), organizationController.updateOrganization )

organizationRouter.delete('/delete-organization' , authorize({}), organizationController.deleteOrganization) 


organizationRouter.delete('/kick-member/organization/:organizationId/:memberId',authorize({}), organizationController.kickMember)



organizationRouter.get('/join-organization/:organizationId', authorize({}), organizationController.joinOrganization)
organizationRouter.get('/leave-organization/:organizationId', authorize ({}), organizationController.leaveOrganization)
organizationRouter.get('/get-loggedin-users-organization' , authorize({}), organizationController.getLoggedInUserOrganization)


export default organizationRouter











