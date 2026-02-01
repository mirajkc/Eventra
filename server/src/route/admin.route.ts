import express, { Router } from "express"
import authorize from "../middleware/authorize.middleware.js"
import adminController from "../controller/admin.controller.js"


const adminRouter:Router = express.Router()

//delete an organization 
adminRouter.delete('/deleteorganization/:organizationId', authorize({role : "ADMIN"}), adminController.deleteOrganization)
// delete an event 
// delete an user 

export default adminRouter