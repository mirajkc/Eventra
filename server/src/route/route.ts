import express, { Router } from 'express'
import authRouter from './auth.route.js'
import userRouter from './user.route.js'
import organizationRouter from './organization.route.js'
import eventRouter from './event.route.js'
import eventParticipantRouter from './event.registration.route.js'
import creditRouter from './credit.route.js'
import notificationRouter from './notification.route.js'
const router: Router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/organization', organizationRouter)
router.use('/event', eventRouter)
router.use('/event/participant', eventParticipantRouter)
router.use('/credit', creditRouter)
router.use('/notification', notificationRouter)
export default router