import express, { Router } from 'express'
import authRouter from './auth.route.ts'
const router:Router = express.Router()

router.use('/user', authRouter)
export default router