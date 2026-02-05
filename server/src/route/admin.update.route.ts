import express, { Router } from 'express'
import adminUpdateController from '../controller/admin.update.controller.js'
import validator from '../middleware/validator.middleware.js'
import { userUpdateDTO } from '../rules/user.rules.js'
import { updateEventByAdminDTO } from '../rules/event.rules.js'
import { updateOrganizationDTO } from '../rules/organization.rules.js'
import { upload } from '../middleware/uploader.middleware.js'
const adminUpdateRoute:Router = express.Router()

//update the user
adminUpdateRoute.patch('/update-user/:userId/:reason',validator(userUpdateDTO), adminUpdateController.updateUser)

//update the event 
adminUpdateRoute.patch('/update-event/:eventId/:reason',upload.none(),validator(updateEventByAdminDTO), adminUpdateController.updateEvent)

//update the organization
adminUpdateRoute.patch('/update-organization/:organizationId/:reason',upload.none() ,validator(updateOrganizationDTO), adminUpdateController.updateOrganization)
export default adminUpdateRoute