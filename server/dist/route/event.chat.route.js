import express, { Router } from "express";
import validator from "../middleware/validator.middleware.js";
import { sendMessageDTO } from "../rules/message.rules.js";
import authorize from "../middleware/authorize.middleware.js";
import eventChatController from "../controller/event.chat.controller.js";
const eventChatRouter = express.Router();
eventChatRouter.post('/sendMessage/:eventId', validator(sendMessageDTO), authorize({}), eventChatController.sendMessage);
eventChatRouter.get('/recieve-message/:eventId', authorize({}), eventChatController.fetchMessage);
export default eventChatRouter;
//# sourceMappingURL=event.chat.route.js.map