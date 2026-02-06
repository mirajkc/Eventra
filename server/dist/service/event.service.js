import { prisma } from "../config/prisma.config.js";
class EventService {
    async getTotalEventsCount(filter) {
        return await prisma.event.count({
            where: filter
        });
    }
    async getEventParticipatedCount(filter) {
        return prisma.eventParticipants.count({
            where: filter
        });
    }
    async createEvent({ data, checkInToken }) {
        return await prisma.$transaction(async (tx) => {
            const updatedOrg = await tx.organization.updateMany({
                where: {
                    id: data.organizationId,
                    credits: { gte: 5 }
                },
                data: {
                    credits: { decrement: 5 }
                }
            });
            if (updatedOrg.count === 0) {
                throw {
                    code: 402,
                    message: "Insufficient organization credits.",
                    status: "OUT_OF_CREDIT_ERR"
                };
            }
            const event = await tx.event.create({
                data: data
            });
            if (!event) {
                throw {
                    code: 500,
                    message: "Error while creating the event please try again. ",
                    status: "EVENT_CREATION_ERR"
                };
            }
            await tx.eventParticipants.create({
                data: {
                    eventId: event.id,
                    userId: data.creatorId,
                    checkInToken: checkInToken,
                }
            });
            return event;
        });
    }
    async updateEvent({ filter, data }) {
        const updatedEvent = await prisma.event.update({
            where: filter,
            data: data
        });
        if (!updatedEvent) {
            throw {
                code: 500,
                message: "Error while updating the event please try again. ",
                status: "EVENT_UPDATE_ERR"
            };
        }
        return updatedEvent;
    }
    async getEvent({ filter, include = {} }) {
        return await prisma.event.findFirst({
            where: filter,
            include: include
        });
    }
    async getManyEvents(skip, take, filter, orderBy) {
        const events = await prisma.event.findMany({
            skip,
            take,
            where: filter,
            orderBy: orderBy,
            include: {
                organization: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                        isPremium: true
                    },
                },
                creator: {
                    select: {
                        id: true,
                        name: true,
                        image: true
                    }
                },
                _count: {
                    select: {
                        participants: true
                    }
                }
            }
        });
        if (!events || events.length <= 0) {
            throw {
                code: 500,
                message: "No results found. ",
                status: "NO_RESULTS_FOUND_ERR"
            };
        }
        return events;
    }
    async deleteEvent(id, include) {
        const deletedEvent = await prisma.event.delete({
            where: {
                id: id
            },
            include: include
        });
        if (!deletedEvent) {
            throw {
                code: 500,
                message: "Error occured while deleting the event please try again later. ",
                status: "EVENT_DELETE_ERROR"
            };
        }
        return deletedEvent;
    }
}
const eventService = new EventService();
export default eventService;
//# sourceMappingURL=event.service.js.map