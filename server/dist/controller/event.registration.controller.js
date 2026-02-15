import eventService from "../service/event.service.js";
import generateString from "../utilities/randomstring.generator.js";
import eventParticipantService from "../service/eventParticipants.service.js";
import notificationService from "../service/notification.service.js";
import emailService from "../service/email.service.js";
import { newMemberRegistrationTemplate } from "../emailtemplates/newMemberRegistrationTemplate.js";
import { leftEventTemplate } from "../emailtemplates/leaveEventTemplate.js";
import { userCheckIn } from "../emailtemplates/userCheckedIn.js";
import eventMetricsService from "../service/eventmetrics.service.js";
class EventRegistrationController {
    async registerNewParticipant(req, res, next) {
        try {
            const eventId = String(req.params.eventId);
            const userDetails = req.userDetails;
            const eventDetails = await eventService.getEvent({
                filter: { id: eventId },
                include: {
                    participants: {
                        select: {
                            userId: true
                        }
                    }
                }
            });
            if (!eventDetails) {
                throw {
                    code: 404,
                    message: "Unable to get the event details please make sure that event exists. ",
                    status: "EVENT_NOT_FOUND_ERR"
                };
            }
            if (new Date(eventDetails.endDate).getTime() < Date.now()) {
                throw {
                    code: 403,
                    message: "The event is already completed you cannot join a event that has been completed. ",
                    status: "EVENT_COMPLETED_ERR"
                };
            }
            if (eventDetails.status === "CANCELLED") {
                throw {
                    code: 403,
                    message: "The event has been cancelled. ",
                    status: "EVENT_CANCELLED_ERR"
                };
            }
            if (eventDetails.participants && eventDetails.participants.map((p) => p.userId).includes(userDetails.id)) {
                throw {
                    code: 403,
                    message: "Error you have already participated int the event. ",
                    status: "ALREADY_PARTICIPATED_ERR"
                };
            }
            if (eventDetails.registeredCount >= eventDetails.capacity) {
                throw {
                    code: 403,
                    message: "Sorry, the maximum capacity is reached for the event. ",
                    status: "MAXIMUM_CAPACITY_REACHED_ERR"
                };
            }
            const token = generateString({ length: 5, charset: 'alphanumeric' }).toUpperCase();
            const eventData = {
                eventId: eventDetails.id,
                userId: userDetails.id,
                checkInToken: token
            };
            const newRegistration = await eventParticipantService.createEvent(eventDetails.id, eventData);
            await eventMetricsService.updateEventMetrics({
                filter: {
                    userId: userDetails.id,
                    eventId: eventDetails.id
                }
            });
            await notificationService.sendNotificaion({
                userId: userDetails.id,
                title: "You registerd for a new event. ",
                message: `Hello, ${userDetails.name} you are successfully registed for the event ${eventDetails.title}. Here is the token ${token} please keep it safe as this is needed on checkin proccess. `,
                type: "EVENT_REMINDER",
                entityType: "EVENT",
                entityId: eventDetails.id
            });
            const groupNotification = eventDetails.participants?.map((m) => ({
                userId: m.userId,
                title: "New participant joined the event",
                message: `${userDetails.name} has joined the event ${eventDetails.title}. ${eventDetails.title}`,
                type: 'EVENT_UPDATED',
                entityType: 'EVENT',
                entityId: eventDetails.id
            })) ?? [];
            await notificationService.sendManyNotification(groupNotification);
            await emailService.sendEmail({
                to: userDetails.email,
                subject: "You are registed for new event",
                message: newMemberRegistrationTemplate(userDetails.name, eventDetails.title, token)
            });
            return res.json({
                message: "Successfully registerd for new event. ",
                data: newRegistration.userId
            });
        }
        catch (error) {
            next(error);
        }
    }
    async removeRegistration(req, res, next) {
        try {
            const userDetails = req.userDetails;
            const eventId = String(req.params.eventId);
            const eventDetails = await eventService.getEvent({
                filter: { id: eventId },
                include: {
                    participants: {
                        select: {
                            userId: true
                        }
                    }
                }
            });
            if (!eventDetails) {
                throw {
                    code: 404,
                    message: 'Error event not found make sure that the event exits. ',
                    status: "EVENT_NOT_FOUND"
                };
            }
            if (new Date(eventDetails.endDate).getTime() < Date.now()) {
                throw {
                    code: 403,
                    message: "The event is already completed you cannot leave a event that has been completed. ",
                    status: "EVENT_COMPLETED_ERR"
                };
            }
            if (eventDetails.status === "CANCELLED") {
                throw {
                    code: 403,
                    message: "The event has been cancelled unable to leave the event. ",
                    status: "EVENT_CANCELLED_ERR"
                };
            }
            if (!(eventDetails.participants && eventDetails.participants.map((p) => p.userId).includes(userDetails.id))) {
                throw {
                    code: 403,
                    message: "Error you have not participated in the event. ",
                    status: "NOT_PARTICIPATED_ERR"
                };
            }
            const removedUser = await eventParticipantService.removeUserRegistration(userDetails.id, eventDetails.id);
            await notificationService.sendNotificaion({
                userId: userDetails.id,
                title: "You left an event " + eventDetails.title,
                message: `Hello, ${userDetails.name} you have left an event ${eventDetails.title}. We are always welcome to have you back at the event`,
                type: "EVENT_UPDATED",
                entityId: eventDetails.id,
                entityType: "EVENT"
            });
            await emailService.sendEmail({
                to: userDetails.email,
                subject: `You left the event: ${eventDetails.title}`,
                message: leftEventTemplate(userDetails.name, eventDetails.title)
            });
            const groupNotification = eventDetails.participants
                ?.filter((p) => p.userId !== userDetails.id)
                .map((p) => ({
                userId: p.userId,
                title: "Participant left the event",
                message: `${userDetails.name} has left the event ${eventDetails.title}.`,
                type: 'EVENT_UPDATED',
                entityType: 'EVENT',
                entityId: eventDetails.id
            })) ?? [];
            await notificationService.sendManyNotification(groupNotification);
            return res.json({
                message: "Successfully left the event.",
                data: removedUser.userId
            });
        }
        catch (error) {
            next(error);
        }
    }
    async makeAttendance(req, res, next) {
        try {
            const ticket = String(req.body.ticket);
            const eventId = String(req.params.eventId);
            const userDetails = req.userDetails;
            const eventDetails = await eventService.getEvent({
                filter: { id: eventId },
                include: {}
            });
            if (!eventDetails) {
                throw {
                    code: 404,
                    message: "Error the event that you are loooking for is not available.",
                    status: "EVENT_NOT_FOUND_ERR"
                };
            }
            if (eventDetails.creatorId !== userDetails.id) {
                throw {
                    code: 403,
                    message: "Error only the event creator can take attendance",
                    status: "NOT_PERMITTED_TO_TAKE_ATTENDANCE"
                };
            }
            if (eventDetails.startDate > new Date(Date.now())) {
                throw {
                    code: 403,
                    message: "The attendance can only be taken after the event starts",
                    status: "EVENT_NOT_STARTED_ERR"
                };
            }
            if (eventDetails.endDate < new Date(Date.now())) {
                throw {
                    code: 403,
                    message: "Unable to take the attendace after the event has ended. ",
                    status: "EVENT_ENDED_ERR"
                };
            }
            const checkedInUser = await eventParticipantService.chekIn(ticket, eventDetails.id);
            await notificationService.sendNotificaion({
                userId: checkedInUser.userId,
                title: "Successfully checked in for the event. ",
                message: `Hello, you have successfully cheched in for the event ${eventDetails.title}. We hope that you enjoy your event`,
                type: "EVENT_CREATED",
                entityId: eventDetails.id,
                entityType: 'EVENT'
            });
            await emailService.sendEmail({
                to: userDetails.email,
                subject: "Successfully, cheched in. ",
                message: userCheckIn("User", eventDetails.title, checkedInUser.checkedInAt.toISOString())
            });
            return res.json({
                message: "User successfully checked in. ",
                data: checkedInUser.userId
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getAllParticipants(req, res, next) {
        try {
            const eventId = String(req.params.eventId);
            if (!eventId) {
                throw {
                    code: 404,
                    message: "Please enter a valid event id. ",
                    status: "EVENT_ID_NOT_FOUND_ERR"
                };
            }
            const data = req.query;
            const page = Number(data.page) || 1;
            const take = Number(data.take) || 10;
            const skip = (page - 1) * take;
            const participants = await eventParticipantService.getEventParticipants({
                filter: { eventId: eventId },
                select: {
                    registeredAt: true,
                    user: {
                        select: {
                            name: true,
                            image: true
                        }
                    }
                },
                take: take,
                skip: skip
            });
            const participantsCount = await eventParticipantService.getParticipantsCount({ eventId: eventId });
            return res.json({
                message: "User details fetched successfullly. ",
                data: participants,
                pagination: {
                    currentPage: page,
                    take: take,
                    totalDoccuments: participantsCount,
                    totalPages: Math.ceil(participantsCount / take),
                    hasNextPage: page < Math.ceil(participantsCount / take),
                    hasPreviousPage: page > 1,
                }
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getAttendedUsers(req, res, next) {
        try {
            const eventId = req.params.eventId;
            if (!eventId) {
                throw {
                    code: 404,
                    message: "Unable to get the event details. ",
                    status: "EVENT_ID_NOT_FOUND_ERR"
                };
            }
            const query = req.query;
            const page = Number(query.page) | 1;
            const take = Number(query.take) | 10;
            const skip = Math.floor((page - 1) * take);
            const attendedUsers = await eventParticipantService.getEventParticipants({
                filter: {
                    eventId: String(eventId),
                    attended: true
                },
                select: {
                    checkedInAt: true,
                    user: {
                        select: {
                            name: true,
                            image: true
                        }
                    }
                },
                skip: skip,
                take: take
            });
            const totalAttendedUsers = await eventParticipantService.getParticipantsCount({
                eventId: eventId,
                attended: true
            });
            return res.json({
                message: "Participated users fetched successfully. ",
                data: {
                    attendedUsers: attendedUsers
                },
                pagination: {
                    currentPage: page,
                    take: take,
                    totalDoccuments: totalAttendedUsers,
                    totalPages: Math.ceil(totalAttendedUsers / take),
                    hasNextPage: page < Math.ceil(totalAttendedUsers / take),
                    hasPreviousPage: page > 1,
                }
            });
        }
        catch (error) {
            next(error);
        }
    }
}
const eventRegistrationController = new EventRegistrationController();
export default eventRegistrationController;
//# sourceMappingURL=event.registration.controller.js.map