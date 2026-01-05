import express, { Router } from 'express'
import validator from '../middleware/validator.middleware.ts'
import { emailDTO, loginDTO, OTPDTO, registerDTO } from '../rules/auth.rules.ts'
import authController from '../controller/auth.controller.ts'
import authorize from '../middleware/authorize.middleware.ts'
const authRouter:Router = express.Router()

authRouter.post('/register', validator(registerDTO), authController.register)
authRouter.post('/login', validator(loginDTO), authController.login)
authRouter.get('/refresh-token', authController.generateAccessToken)
authRouter.get('/logout' ,authorize({}),authController.logout)
authRouter.post('/forgot-password',validator(emailDTO), authController.forgotPassword)
authRouter.post('/verify-forgotpass-route', validator(OTPDTO), authController.verifyForgotPass)
// POST /auth/reset-password
// POST /auth/change-password



export default authRouter 