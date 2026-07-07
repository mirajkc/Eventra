import { prisma } from "../config/prisma.config.js";
class EventParticipantService {
    async getEventParticipants({ filter, select, skip, take }) {
        const paticipants = await prisma.eventParticipants.findMany({
            where: filter,
            select: select,
            ...(skip !== undefined && { skip }),
            ...(take !== undefined && { take })
        });
        return paticipants ?? [];
    }
    async createEvent(eventId, data) {
        return prisma.$transaction(async (tx) => {
            const event = await tx.event.findUnique({
                where: { id: eventId },
                select: { registeredCount: true, capacity: true }
            });
            if (!event) {
                throw {
                    code: 404,
                    message: "Event not found.",
                    status: "EVENT_NOT_FOUND_ERR"
                };
            }
            if (event.registeredCount >= event.capacity) {
                throw {
                    code: 403,
                    message: "Sorry, the maximum capacity is reached for the event. ",
                    status: "MAXIMUM_CAPACITY_REACHED_ERR"
                };
            }
            await tx.event.update({
                where: { id: eventId },
                data: {
                    registeredCount: { increment: 1 }
                }
            });
            const newMember = await tx.eventParticipants.create({
                data: data
            });
            if (!newMember) {
                throw {
                    code: 500,
                    message: "Error occured while registering the new user. ",
                    status: "USER_REGISTRATION_ERR"
                };
            }
            return newMember;
        });
    }
    async removeUserRegistration(userId, eventId) {
        return await prisma.$transaction(async (tx) => {
            const eventParticipantsId = await tx.eventParticipants.findFirst({
                where: {
                    eventId: eventId,
                    userId: userId
                },
                select: {
                    id: true
                }
            });
            if (!eventParticipantsId) {
                throw {
                    code: 404,
                    message: "Unable to find the participated user make sure that you are particioated in the event",
                    status: "USER_NOT_FOUND_ERR"
                };
            }
            const removedUser = await tx.eventParticipants.delete({
                where: eventParticipantsId
            });
            if (!removedUser) {
                throw {
                    code: 500,
                    message: "Error while leaving the event please try again. ",
                    status: "LEAVE_EVENT_ERR"
                };
            }
            await tx.event.update({
                where: {
                    id: eventId,
                },
                data: {
                    registeredCount: { decrement: 1 }
                }
            });
            return removedUser;
        });
    }
    async chekIn(token, eventId, include) {
        const updatedUser = await prisma.eventParticipants.update({
            where: { eventId: eventId, checkInToken: token, attended: false },
            data: {
                attended: true,
                checkedInAt: new Date(Date.now())
            },
            include: include
        });
        if (!updatedUser) {
            throw {
                code: 500,
                message: "Unable to check in user at the momment please try again later. ",
                status: "CHECK_IN_ERR"
            };
        }
        return updatedUser;
    }
    async getParticipantsCount(filter) {
        const count = await prisma.eventParticipants.count({
            where: filter
        });
        return count;
    }
    getEventParticipantDetails = async ({ filter }) => {
        const eventParticipant = await prisma.eventParticipants.findFirst({
            where: filter
        });
        if (!eventParticipant?.id) {
            throw {
                code: 404,
                message: "Unable to find the user make sure you have joined the event. ",
                status: "USER_NOT_FOUND_ERR"
            };
        }
        return eventParticipant;
    };
    async getCountsPerMonth(args) {
        return prisma.eventParticipants.findMany(args);
    }
}
const eventParticipantService = new EventParticipantService;
export default eventParticipantService;
//# sourceMappingURL=eventParticipants.service.js.map