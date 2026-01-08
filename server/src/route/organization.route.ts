
import express, { Router } from 'express'
import authorize from '../middleware/authorize.middleware.ts'
import { upload } from '../middleware/uploader.middleware.ts'
import validator from '../middleware/validator.middleware.ts'
import { organizationDTO } from '../rules/organization.rules.ts'
import organizationController from '../controller/organization.controller.ts'
const organizationRouter:Router = express.Router()

organizationRouter.post('/create-organization', authorize({}),upload.fields([{name : "image" , maxCount : 1}, {name : "thumbnail", maxCount : 1 }]), validator(organizationDTO), organizationController.createOrganization )


export default organizationRouter

// GET /organizations/:organizationId the detials can be fetched such as the (all users info )
// GET /organizations / may be admin only route


// POST /organizations/:organizationId/join
// POST /organizations/:organizationId/leave


// PATCH /organizations/:organizationId/members/:memberId/role
// PATCH /organizations/:organizationId

// DELETE /organizations/:organizationId
// DELETE /organizations/:organizationId/members/:memberId


// GET /organizations/:organizationId/events
// List all events created by the organization. Could also be fetched via EventController. Event creation triggers notifications in EventController.
