
import express, { Router } from 'express'
import authorize from '../middleware/authorize.middleware.ts'
import { upload } from '../middleware/uploader.middleware.ts'
import validator from '../middleware/validator.middleware.ts'
import { createEventDTO } from '../rules/event.rules.ts'
import eventController from '../controller/event.controller.ts'
const eventRouter:Router = express.Router()
// Create an event for an organization
eventRouter.post('/create-new-event', authorize({}), upload.single('image'), validator(createEventDTO),eventController.createNewEvent)





export default eventRouter




// Update event details by event creator

// Publish or cancel an event

// Get event details by event ID

// List all events of an organization

// Register a user for an event

// Cancel event registration

// Verify participant attendance using token

// List all participants of an event

// Get events registered by a user


// EventController

// Create event

// Update event

// Publish / cancel

// Fetch events

// EventRegistrationController

// Register participant

// Cancel registration

// EventAttendanceController

// Verify token

// Mark attendance