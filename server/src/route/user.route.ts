import express, { Router } from 'express'
import authorize from '../middleware/authorize.middleware.ts'
import userController from '../controller/user.controller.ts'
import { upload } from '../middleware/uploader.middleware.ts'
import validator from '../middleware/validator.middleware.ts'
import { userUpdateDTO } from '../rules/user.rules.ts'
const userRouter:Router = express.Router()
// ===== User Profile =====
userRouter.get('/me', authorize({}), userController.getLoggedInUser)
// PATCH  /user/me
userRouter.post('/update-user', authorize({}),upload.single('image'),validator(userUpdateDTO), userController.updateUser)
// DELETE /user/me

// // ===== Admin =====
// GET    /user

// // ===== Notifications =====
// GET    /user/me/notifications
// PATCH  /user/me/notifications/:notificationId/read
// PATCH  /user/me/notifications/read-all

// // ===== Organizations =====
// GET    /user/me/organizations

// // ===== Events (optional) =====
// GET    /user/me/events
export default userRouter