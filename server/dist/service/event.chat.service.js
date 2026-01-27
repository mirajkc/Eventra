import { prisma } from "../config/prisma.config.js";
class EventChatService {
    async sendMessage({ data }) {
        const newMessage = await prisma.eventMessage.create({
            data: data
        });
        if (!newMessage.id) {
            throw {
                code: 500,
                message: "Error occured while creating the new message please try again later. ",
                status: "NEW_MESSAGE_CREATION_ERR"
            };
        }
        return newMessage;
    }
    async getAllMessage({ filter, include }) {
        const messages = await prisma.eventMessage.findMany({
            where: filter,
            include: include,
            take: 100,
            orderBy: { createdAt: 'asc' }
        });
        if (messages.length < 1) {
            throw {
                messages: "No message found for the event please make sure the message exists",
                status: "NO_MESSAGE_FOUND_ERR",
                code: 404
            };
        }
        return messages;
    }
}
const eventChatService = new EventChatService;
export default eventChatService;
//# sourceMappingURL=event.chat.service.js.map