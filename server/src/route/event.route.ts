
import express, { Router } from 'express'
import authorize from '../middleware/authorize.middleware.ts'
import { upload } from '../middleware/uploader.middleware.ts'
import validator from '../middleware/validator.middleware.ts'
import { createEventDTO, updateEventDTO } from '../rules/event.rules.ts'
import eventController from '../controller/event.controller.ts'
const eventRouter:Router = express.Router()

eventRouter.post('/create-new-event', authorize({}), upload.single('image'), validator(createEventDTO),eventController.createNewEvent)
 eventRouter.put('/update-event-details',authorize({}), upload.single('image'), validator(updateEventDTO), eventController.updateEventDetails )
 eventRouter.get('/get-single-event/:eventId', eventController.getSingleEvent)
 eventRouter.get('/fetchallevents', eventController.getAllEventsByQuery)


export default eventRouter
