
import express, { Router } from 'express'
import authorize from '../middleware/authorize.middleware.ts'
import { upload } from '../middleware/uploader.middleware.ts'
import validator from '../middleware/validator.middleware.ts'
import {  memberRoleDTO, organizationDTO, updateOrganizationDTO } from '../rules/organization.rules.ts'
import organizationController from '../controller/organization.controller.ts'
const organizationRouter:Router = express.Router()

organizationRouter.post('/create-organization', authorize({}),upload.fields([{name : "image" , maxCount : 1}, {name : "thumbnail", maxCount : 1 }]), validator(organizationDTO), organizationController.createOrganization )

organizationRouter.get('/get-single-organization/:organizationId', organizationController.getOrganizationDetailsById)

organizationRouter.get('/get-organizations', organizationController.getAllOrganization)

//! not yet tested
organizationRouter.put('/update-member-role/:organizationId', authorize({}),validator(memberRoleDTO), organizationController.updateMemberRole )

//! has not been tested 
organizationRouter.put('/update-organization' ,authorize({}),validator(updateOrganizationDTO),upload.fields([{name : "image" , maxCount : 1}, {name : "thumbnail", maxCount : 1 }]) , organizationController.updateOrganization )

//!needs testing 
organizationRouter.delete('/delete-organization' , authorize({}), organizationController.deleteOrganization) 


//! needs testing
organizationRouter.delete('/kick-member/organization/:organizationId/:memberId',authorize({}), organizationController.kickMember)



organizationRouter.get('/join-organization/:organizationId', authorize({}), organizationController.joinOrganization)
organizationRouter.get('/leave-organization/:organizationId', authorize ({}), organizationController.leaveOrganization)


export default organizationRouter











