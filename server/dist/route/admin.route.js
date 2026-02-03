import express, { Router } from "express";
import authorize from "../middleware/authorize.middleware.js";
import adminController from "../controller/admin.controller.js";
import adminUpdateRoute from "./admin.update.route.js";
import { adminReasonDTO } from "../rules/admin.rules.js";
import validator from "../middleware/validator.middleware.js";
const adminRouter = express.Router();
adminRouter.patch('/deleteorganization/:organizationId', validator(adminReasonDTO), authorize({ role: "ADMIN" }), adminController.deleteOrganization);
adminRouter.patch('/delete-event/:eventId', validator(adminReasonDTO), authorize({ role: "ADMIN" }), adminController.deleteEvent);
adminRouter.patch('/delete-user/:userId', validator(adminReasonDTO), authorize({ role: "ADMIN" }), adminController.deleteUser);
adminRouter.get('/website-metadata', authorize({ role: 'ADMIN' }), adminController.getMetadata);
adminRouter.use("/update", authorize({ role: "ADMIN" }), adminUpdateRoute);
export default adminRouter;
//# sourceMappingURL=admin.route.js.map