import express, { Router } from 'express'
import validator from '../middleware/validator.middleware.ts'
import { loginDTO, registerDTO } from '../rules/auth.rules.ts'
import authController from '../controller/auth.controller.ts'
import authorize from '../middleware/authorize.middleware.ts'
const authRouter:Router = express.Router()

authRouter.post('/register', validator(registerDTO), authController.register)
authRouter.post('/login', validator(loginDTO), authController.login)
authRouter.get('/refresh-token', authController.generateAccessToken)
authRouter.get('/logout' ,authorize({}),authController.logout)
// POST /auth/forgot-password
// POST /auth/reset-password
// POST /auth/verify-email
// POST /auth/change-password



export default authRouter 