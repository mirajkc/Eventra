import express, { Router } from "express";
import authorize from "../middleware/authorize.middleware.js";
import adminController from "../controller/admin.controller.js";
import adminUpdateRoute from "./admin.update.route.js";
import { adminReasonDTO } from "../rules/admin.rules.js";
import validator from "../middleware/validator.middleware.js";
const adminRouter = express.Router();
//admin crud and content management systm
adminRouter.patch('/deleteorganization/:organizationId', validator(adminReasonDTO), authorize({ role: "ADMIN" }), adminController.deleteOrganization);
adminRouter.patch('/delete-event/:eventId', validator(adminReasonDTO), authorize({ role: "ADMIN" }), adminController.deleteEvent);
adminRouter.patch('/delete-user/:userId', validator(adminReasonDTO), authorize({ role: "ADMIN" }), adminController.deleteUser);
adminRouter.use("/update", authorize({ role: "ADMIN" }), adminUpdateRoute);
//admin read and website data 
adminRouter.get('/website-metadata', authorize({ role: 'ADMIN' }), adminController.getMetadata);
adminRouter.get('/get-all-notifications', authorize({ role: "ADMIN" }), adminController.getAllNotifications);
adminRouter.get('/get-all-error-logs', authorize({ role: "ADMIN" }), adminController.getAllErrorLogs);
adminRouter.get('/get-credit-and-revenue', authorize({ role: "ADMIN" }), adminController.getCreditAndRevenue);
adminRouter.get('/get-all-admin-logs', authorize({ role: "ADMIN" }), adminController.getAllAdminLogs);
export default adminRouter;
//# sourceMappingURL=admin.route.js.map