import express, { Router } from 'express'
import validator from '../middleware/validator.middleware.ts'
import { changePasswordDTO, emailDTO, forgotPassDTO, loginDTO, OTPDTO, registerDTO } from '../rules/auth.rules.ts'
import authController from '../controller/auth.controller.ts'
import authorize from '../middleware/authorize.middleware.ts'
const authRouter:Router = express.Router()

authRouter.post('/register', validator(registerDTO), authController.register)
authRouter.post('/login', validator(loginDTO), authController.login)
authRouter.get('/refresh-token', authController.generateAccessToken)
authRouter.get('/logout' ,authorize({}),authController.logout)
authRouter.post('/get-forgot-password-otp',validator(emailDTO), authController.getForgotPassword)
authRouter.post('/verify-forgotpass-otp', validator(OTPDTO), authController.verifyForgotPass)
authRouter.post('/forgot-password', validator(forgotPassDTO), authController.forgotPassword )
authRouter.post('/change-password' , authorize({}),validator(changePasswordDTO), authController.changePassword)



export default authRouter 