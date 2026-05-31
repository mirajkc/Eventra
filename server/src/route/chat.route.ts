import express, { Router } from "express"
import validator from "../middleware/validator.middleware.js"
import chatController from "../controller/chat.controller.js"
import { chatRequestDTO } from "../rules/chat.rules.js"

const chatRouter: Router = express.Router()

chatRouter.post("/", validator(chatRequestDTO), chatController.chat)

export default chatRouter
