
import express, { Router } from 'express'
import authorize from '../middleware/authorize.middleware.ts'
import { upload } from '../middleware/uploader.middleware.ts'
import validator from '../middleware/validator.middleware.ts'
import {  organizationDTO } from '../rules/organization.rules.ts'
import organizationController from '../controller/organization.controller.ts'
const organizationRouter:Router = express.Router()


// create new organization
organizationRouter.post('/create-organization', authorize({}),upload.fields([{name : "image" , maxCount : 1}, {name : "thumbnail", maxCount : 1 }]), validator(organizationDTO), organizationController.createOrganization )

//get single organizatazions
organizationRouter.get('/get-single-organization/:organizationId', organizationController.getOrganizationDetailsById)

//get multiple organization {query : name (for search), types (for filtering), premium (for filtering), createdAt ("desc" || "asc") , updatedAt} so 1 for search and 3 for sort

organizationRouter.get('/get-organizations', organizationController.getAllOrganization)

// PATCH /organizations/:organizationId/members/:memberId/role  role update
// PATCH /organizations/:organizationId                         update the org 
// DELETE /organizations/:organizationId                        delete 
// DELETE /organizations/:organizationId/members/:memberId      remove the members 


// POST /organizations/:organizationId/join                    join the org
organizationRouter.get('/join-organization/:organizationId', authorize({}), organizationController.joinOrganization)

// POST /organizations/:organizationId/leave                   leave the org




export default organizationRouter











