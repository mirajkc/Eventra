import express, { Router } from 'express';
const eventParticipantRouter = express.Router();
import authorize from "../middleware/authorize.middleware.js";
import eventRegistrationController from '../controller/event.registration.controller.js';
eventParticipantRouter.post('/register-new-user/:eventId', authorize({}), eventRegistrationController.registerNewParticipant);
eventParticipantRouter.delete('/remove-registration/:eventId', authorize({}), eventRegistrationController.removeRegistration);
eventParticipantRouter.post('/make-attendance/:eventId', authorize({}), eventRegistrationController.makeAttendance);
eventParticipantRouter.get('/get-all-participants/:eventId', eventRegistrationController.getAllParticipants);
export default eventParticipantRouter;
//# sourceMappingURL=event.registration.route.js.map