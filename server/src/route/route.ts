import express, { Router } from 'express'
import authRouter from './auth.route.ts'
import userRouter from './user.route.ts'
import organizationRouter from './organization.route.ts'
import eventRouter from './event.route.ts'
import eventParticipantRouter from './event.registration.route.ts'
import creditRouter from './credit.route.ts'
const router:Router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/organization', organizationRouter)
router.use('/event', eventRouter)
router.use('/event/participant', eventParticipantRouter)
router.use('/credit', creditRouter)
export default router