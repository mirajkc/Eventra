import express, { Router } from 'express'
import authorize from '../middleware/authorize.middleware.ts'
import userController from '../controller/user.controller.ts'
import { upload } from '../middleware/uploader.middleware.ts'
import validator from '../middleware/validator.middleware.ts'
import { userUpdateDTO } from '../rules/user.rules.ts'
const userRouter:Router = express.Router()
// ===== User Profile =====
userRouter.get('/me', authorize({}), userController.getLoggedInUser)
userRouter.post('/update-user', authorize({}),upload.single('image'),validator(userUpdateDTO), userController.updateUser)
userRouter.delete('/delete-user' , authorize({}), userController.deleteUser)
userRouter.get('/me/getdetails', authorize({}), userController.getUserDetails)

export default userRouter