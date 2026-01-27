import eventParticipantService from "../service/eventParticipants.service.js";
import eventChatService from "../service/event.chat.service.js";
class EventChatController {
    async sendMessage(req, res, next) {
        try {
            const userDetails = req.userDetails;
            const params = req.params;
            const eventId = String(params.eventId);
            const message = req.body.message;
            if (!eventId) {
                throw {
                    code: 404,
                    message: "Please enter a valid event id. ",
                    status: "EVENT_ID_NOT_FOUND_ERR"
                };
            }
            const eventParticipant = await eventParticipantService.getEventParticipantDetails({ filter: { eventId: eventId, userId: userDetails.id } });
            const data = {
                eventId: eventParticipant.eventId,
                senderId: eventParticipant.userId,
                message: message
            };
            const newMessage = await eventChatService.sendMessage({ data: data });
            return res.json({
                message: "Message sent successfully. ",
                data: newMessage
            });
        }
        catch (error) {
            next(error);
        }
    }
    async fetchMessage(req, res, next) {
        try {
            const params = req.params;
            const eventId = String(req.params.eventId);
            const userDetails = req.userDetails;
            const eventParticipant = await eventParticipantService.getEventParticipantDetails({ filter: { eventId: eventId, userId: userDetails.id } });
            let groupMessage = await eventChatService.getAllMessage({ filter: { eventId: eventId }, include: {
                    sender: {
                        select: {
                            name: true,
                            image: true
                        }
                    }
                }
            });
            const modifiedMessage = groupMessage.map((message) => {
                return message.senderId === userDetails.id ? { ...message, isMe: true } : { ...message, isMe: false };
            });
            return res.json({
                message: "Messages fetched successfully. ",
                data: modifiedMessage,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
const eventChatController = new EventChatController();
export default eventChatController;
//# sourceMappingURL=event.chat.controller.js.map