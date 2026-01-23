
import express, { Router } from 'express'
import authorize from '../middleware/authorize.middleware.js'
import { upload } from '../middleware/uploader.middleware.js'
import validator from '../middleware/validator.middleware.js'
import { createEventDTO, updateEventDTO } from '../rules/event.rules.js'
import eventController from '../controller/event.controller.js'
import eventRegistrationController from '../controller/event.registration.controller.js'
const eventRouter:Router = express.Router()

eventRouter.post('/create-new-event', authorize({}), upload.single('image'), validator(createEventDTO),eventController.createNewEvent)
 eventRouter.put('/update-event-details',authorize({}), upload.single('image'), validator(updateEventDTO), eventController.updateEventDetails )
 eventRouter.get('/get-single-event/:eventId', eventController.getSingleEvent)
 eventRouter.get('/fetchallevents', eventController.getAllEventsByQuery)
 eventRouter.get('/is-logged-in-user-joined/:eventId' , authorize({}), eventController.isLoggedInuserJoined)
 eventRouter.get('/get-attended-users/:eventId', eventRegistrationController.getAttendedUsers)

export default eventRouter
