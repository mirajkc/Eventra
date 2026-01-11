import express, { Router } from 'express'
import creditController from '../controller/credit.controller.ts'
import authorize from '../middleware/authorize.middleware.ts'
import validator from '../middleware/validator.middleware.ts'
import { creditPurchaseDTO } from '../rules/credit.rules.ts'
const creditRouter:Router = express.Router()

creditRouter.get('/get-credit/:organizationId' ,  creditController.getCredit)
creditRouter.post('/purcahse-credit/:organizationId',validator(creditPurchaseDTO), authorize({}), creditController.purchaseCredit)
export default creditRouter
