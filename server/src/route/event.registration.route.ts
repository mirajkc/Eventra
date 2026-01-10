import express, { Router } from 'express'
const eventParticipantRouter:Router = express.Router()
import authorize from "../middleware/authorize.middleware.ts";
import eventRegistrationController from '../controller/event.registration.controller.ts';
eventParticipantRouter.post('/register-new-user/:eventId', authorize({}),eventRegistrationController.registerNewParticipant)




export default eventParticipantRouter
// Register a user for an event

// Cancel event registration

// Verify participant attendance using token

// List all participants of an event

// Get events registered by a user




// EventRegistrationController

// Register participant

// Cancel registration

// EventAttendanceController

// Verify token

// Mark attendance