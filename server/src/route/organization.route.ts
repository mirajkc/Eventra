
import express, { Router } from 'express'
import authorize from '../middleware/authorize.middleware.ts'
import { upload } from '../middleware/uploader.middleware.ts'
import validator from '../middleware/validator.middleware.ts'
import {  organizationDTO } from '../rules/organization.rules.ts'
import organizationController from '../controller/organization.controller.ts'
const organizationRouter:Router = express.Router()


//* owner rotutes
organizationRouter.post('/create-organization', authorize({}),upload.fields([{name : "image" , maxCount : 1}, {name : "thumbnail", maxCount : 1 }]), validator(organizationDTO), organizationController.createOrganization )


//* general routes
organizationRouter.get('/get-single-organization/:organizationId', organizationController.getOrganizationDetailsById)
// get all organizaion


export default organizationRouter





// POST /organizations/:organizationId/join
// POST /organizations/:organizationId/leave


// PATCH /organizations/:organizationId/members/:memberId/role
// PATCH /organizations/:organizationId

// DELETE /organizations/:organizationId
// DELETE /organizations/:organizationId/members/:memberId


