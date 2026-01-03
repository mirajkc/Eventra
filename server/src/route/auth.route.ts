import express, { Router } from 'express'
import validator from '../middleware/validator.middleware.ts'
import { registerDTO } from '../rules/auth.rules.ts'
import authController from '../controller/auth.controller.ts'
const authRouter:Router = express.Router()

authRouter.post('/register', validator(registerDTO), authController.register)


export default authRouter 