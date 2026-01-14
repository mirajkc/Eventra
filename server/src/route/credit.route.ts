import express, { Router } from 'express'
import creditController from '../controller/credit.controller.js'
import authorize from '../middleware/authorize.middleware.js'
import validator from '../middleware/validator.middleware.js'
import { creditPurchaseDTO } from '../rules/credit.rules.js'
const creditRouter:Router = express.Router()

creditRouter.get('/get-credit/:organizationId' ,  creditController.getCredit)
creditRouter.post('/purcahse-credit/:organizationId',validator(creditPurchaseDTO), authorize({}), creditController.purchaseCredit)
export default creditRouter
