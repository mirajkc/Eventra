import express, { Router } from "express";
import authorize from "../middleware/authorize.middleware.js";
import adminController from "../controller/admin.controller.js";
const adminRouter = express.Router();
adminRouter.delete('/deleteorganization/:organizationId', authorize({ role: "ADMIN" }), adminController.deleteOrganization);
adminRouter.delete('/delete-event/:eventId', authorize({ role: "ADMIN" }), adminController.deleteEvent);
adminRouter.delete('/delete-user/:userId', authorize({ role: "ADMIN" }), adminController.deleteUser);
export default adminRouter;
//# sourceMappingURL=admin.route.js.map