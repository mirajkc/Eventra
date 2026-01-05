import express, { Router } from 'express'
const userRouter:Router = express.Router()
// ===== User Profile =====
// GET    /user/me
// PATCH  /user/me
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