import express, { Router } from 'express';
import adminUpdateController from '../controller/admin.update.controller.js';
import { upload } from '../middleware/uploader.middleware.js';
import validator from '../middleware/validator.middleware.js';
import { userUpdateDTO } from '../rules/user.rules.js';
import { updateEventDTO } from '../rules/event.rules.js';
import { updateOrganizationDTO } from '../rules/organization.rules.js';
const adminUpdateRoute = express.Router();
//update the user
adminUpdateRoute.patch('/update-user/:userId/:reason', upload.single("image"), validator(userUpdateDTO), adminUpdateController.updateUser);
//update the event 
adminUpdateRoute.patch('/update-event/:userId/:reason', upload.single("image"), validator(updateEventDTO), adminUpdateController.updateEvent);
//update the organization
adminUpdateRoute.patch('/update-organization/:userId/:reason', upload.fields([{ name: "image", maxCount: 1 }, { name: "thumbnail", maxCount: 1 }]), validator(updateOrganizationDTO), adminUpdateController.updateOrganization);
export default adminUpdateRoute;
//# sourceMappingURL=admin.update.route.js.map