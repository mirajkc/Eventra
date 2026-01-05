import express, { Router } from 'express'
import authRouter from './auth.route.ts'
import userRouter from './user.route.ts'
const router:Router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
export default router