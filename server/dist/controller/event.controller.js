import organizationService from "../service/organization.service.js";
import organizationMemberService from "../service/organizationmember.service.js";
import { uploadImage } from "../service/upload.service.js";
import eventService from "../service/event.service.js";
import notificationService from "../service/notification.service.js";
import emailService from "../service/email.service.js";
import { newEventTemplate } from "../emailtemplates/newEventCreated.js";
import getSlug from "../utilities/createSlug.js";
import eventParticipantService from "../service/eventParticipants.service.js";
import { updateEventTemplate } from "../emailtemplates/updateEventTemplate.js";
import generateString from "../utilities/randomstring.generator.js";
import { checkForCredit } from "../utilities/checkforcredit.js";
import getEventScore from "../Algorithms/getEventScore.js";
import eventMetricsService from "../service/eventmetrics.service.js";
import averageRecomendationScore from "../Algorithms/averageRecomendationScore.js";
class EventController {
    async createNewEvent(req, res, next) {
        const data = req.body;
        const userDetails = req.userDetails;
        const slug = getSlug(data.title);
        if (new Date(data.startDate) < new Date()) {
            throw {
                code: 400,
                message: "Event start date cannot be in the past. ",
                status: "EVENT_START_DATE_ERR"
            };
        }
        const eventDetials = await eventService.getEvent({
            filter: { slug: slug }
        });
        if (eventDetials) {
            throw {
                code: 400,
                message: "Duplicate event detected please make sure that the title is unique. ",
                status: "DUPLICATE_EVENT_ERR"
            };
        }
        const organizationDetails = await organizationService.getOrganizationByFilter({
            filter: { id: data.organizationId },
            include: {
                members: {
                    select: { userId: true }
                }
            }
        });
        if (!organizationDetails) {
            throw {
                code: 404,
                message: "Error organization not found make sure organization exists. ",
                status: "ORGANIZATION_NOT_FOUND_ERR"
            };
        }
        await checkForCredit(organizationDetails.id);
        const creatorDetails = await organizationMemberService.getMemberByFilter({
            filter: {
                userId: userDetails.id,
                organizationId: data.organizationId,
                OR: [
                    { role: "CREATOR" },
                    { role: "OWNER" }
                ]
            }
        });
        if (!creatorDetails) {
            throw {
                code: 404,
                message: "Error member not found make sure that you have joined the organization and are authorized to create the events. ",
                status: 'AUTHORIZAED_USER_NOT_FOUND_ERR'
            };
        }
        if (organizationDetails.credits < 5) {
            throw {
                code: 406,
                message: "You are out of organization creadits please purchase the addional credits or wait till the credit resets. ",
                status: "OUT_OF_CREDIT_ERR"
            };
        }
        let imageUrl = null;
        if (req.file) {
            const imageFile = req.file.buffer;
            imageUrl = await uploadImage(imageFile, "Eventra/Event/Thumbnail");
        }
        const token = generateString({ length: 5, charset: 'alphanumeric' }).toUpperCase();
        const newEvent = await eventService.createEvent({
            data: {
                organizationId: organizationDetails.id,
                title: data.title,
                location: data.location,
                startDate: data.startDate,
                endDate: data.endDate,
                capacity: Number(data.capacity),
                category: data.category,
                tags: data.tags,
                description: data.description,
                creatorId: userDetails.id,
                image: imageUrl,
                slug: slug,
                status: "PUBLISHED"
            },
            checkInToken: token
        });
        // generate the event score for newly created event
        const eventScore = getEventScore({
            title: newEvent.title,
            description: newEvent.description,
            category: newEvent.category,
            tags: newEvent.tags,
            image: newEvent.image,
            premium: organizationDetails.isPremium
        });
        await eventService.updateEvent({
            filter: { id: newEvent.id },
            data: {
                eventScore: eventScore
            }
        });
        const groupNotification = organizationDetails.members?.map((m) => ({
            userId: m.userId,
            title: "New event has been created.",
            message: `Hi, ${userDetails.name} a new event has been posted for ${organizationDetails.name}. `,
            type: 'EVENT_CREATED',
            entityType: "EVENT",
            entityId: newEvent.id
        })) ?? [];
        await notificationService.sendManyNotification(groupNotification);
        await emailService.sendEmail({
            to: userDetails.email,
            subject: "New event created",
            message: newEventTemplate(newEvent.title, userDetails.name)
        });
        await notificationService.sendNotificaion({
            userId: userDetails.id,
            title: "Your check in token for the event " + newEvent.title,
            message: `Hello, your check in token for the event ${newEvent.title} is ${token} please keep it safe as this token will be needed during the check in proccess. `,
            entityType: "EVENT",
            entityId: newEvent.id,
            type: 'EVENT_CREATED'
        });
        res.json({
            message: "Event created successfully. ",
            data: newEvent
        });
    }
    async updateEventDetails(req, res, next) {
        try {
            const data = req.body;
            const userDetails = req.userDetails;
            const organizationDetails = await organizationService.getOrganizationByFilter({
                filter: { id: data.organizationId },
                include: {}
            });
            if (!organizationDetails) {
                throw {
                    code: 404,
                    message: "Error organization not found make sure organization exists. ",
                    status: "ORGANIZATION_NOT_FOUND_ERR"
                };
            }
            await checkForCredit(organizationDetails.id);
            const eventDetails = await eventService.getEvent({ filter: { id: data.id } });
            if (!eventDetails) {
                throw {
                    code: 404,
                    message: "Error event not found make sure that the event exists. ",
                    status: "EVENT_NOT_FOUND_ERR"
                };
            }
            let imageUrl = eventDetails.image;
            if (req.file) {
                const imageFile = req.file.buffer;
                imageUrl = await uploadImage(imageFile, "Eventra/Event/Thumbnail");
            }
            const updatedEvent = await eventService.updateEvent({
                filter: { id: data.id },
                data: {
                    slug: data.title ? getSlug(data.title) : eventDetails.slug,
                    title: data.title ? data.title : eventDetails.title,
                    description: data.description ? data.description : eventDetails.description,
                    location: data.location ? data.location : eventDetails.location,
                    startDate: data.startDate ? data.startDate : eventDetails.startDate,
                    endDate: data.endDate ? data.endDate : eventDetails.endDate,
                    capacity: data.capacity ? Number(data.capacity) : eventDetails.capacity,
                    status: data.status ? data.status : eventDetails.status,
                    category: data.category ? data.category : eventDetails.category,
                    tags: data.tags ? data.tags : eventDetails.tags,
                    image: imageUrl
                }
            });
            const eventScore = getEventScore({
                title: updatedEvent.title,
                description: updatedEvent.description,
                category: updatedEvent.category,
                tags: updatedEvent.tags,
                image: updatedEvent.image,
                premium: organizationDetails.isPremium
            });
            await eventService.updateEvent({
                filter: { id: updatedEvent.id },
                data: {
                    eventScore: eventScore
                }
            });
            const registerdParticipantsId = await eventParticipantService.getEventParticipants({
                filter: { eventId: updatedEvent.id },
                select: {
                    userId: true
                }
            });
            const groupNotifications = registerdParticipantsId.map((user) => ({
                userId: user.userId,
                title: "Event update for" + updatedEvent.title,
                message: `The event that you registerd has been changed please make surea that you are fine with the new changes made. `,
                type: "EVENT_UPDATED",
                entityType: "EVENT",
                entityId: updatedEvent.id
            }));
            await notificationService.sendManyNotification(groupNotifications);
            await emailService.sendEmail({
                to: userDetails.email,
                subject: `The event ${updatedEvent.title} has been updated.`,
                message: updateEventTemplate(updatedEvent.title, userDetails.name)
            });
            return res.json({
                message: "Event updated successfully. ",
                data: updatedEvent
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getSingleEvent(req, res, next) {
        try {
            const eventId = String(req.params.eventId);
            if (!eventId) {
                throw {
                    code: 404,
                    message: "A valid event Id is required. ",
                    status: "EVENTID_NOT_FOUND_ERR"
                };
            }
            const query = req.query;
            const page = Number(query.page) || 1;
            const take = Number(query.take) || 10;
            const skip = Math.ceil((page - 1) * take);
            const eventDetails = await eventService.getEvent({
                filter: { id: eventId },
                include: {
                    organization: {
                        select: { id: true, name: true, image: true, isPremium: true }
                    },
                    creator: {
                        select: { id: true, name: true, image: true }
                    },
                    participants: {
                        take: take,
                        skip: skip,
                    }
                }
            });
            if (!eventDetails) {
                throw {
                    code: 500,
                    message: "Unable to fetch the event details please try again. ",
                    status: "EVENT_DATA_FETCH_ERR"
                };
            }
            const totalParticipants = eventDetails.participants?.length;
            eventDetails.status === "CANCELLED" ? "CANCELLED" : eventDetails.endDate < new Date() ? "COMPLETED" : "PUBLISHED";
            return res.json({
                message: "Event details fetched successfully",
                data: {
                    eventDetails: eventDetails,
                    totalParticipants: totalParticipants
                },
                participantsPagination: {
                    page: page,
                    take: take,
                    totalDoccuments: totalParticipants,
                    totalPages: Math.ceil(totalParticipants / take),
                    hasPreviousPage: page > 1,
                    hasNextPage: page < Math.ceil(totalParticipants / take),
                }
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getAllEventsByQuery(req, res, next) {
        try {
            const filters = req.query;
            const page = Number(filters.page) || 1;
            const take = Number(filters.limit) || 10;
            const skip = (page - 1) * take;
            const where = {};
            if (filters.creatorId)
                where.creatorId = filters.creatorId;
            if (filters.organizationId)
                where.organizationId = filters.organizationId;
            if (filters.slug)
                where.slug = { contains: filters.slug, mode: 'insensitive' };
            if (filters.capacity)
                where.capacity = { lte: Number(filters.capacity) };
            if (filters.category)
                where.category = filters.category;
            if (filters.status === 'PUBLISHED')
                where.status = 'PUBLISHED';
            const orderBy = [];
            if (filters.createdAt === 'asc')
                orderBy.push({ createdAt: 'asc' });
            if (filters.createdAt === 'desc')
                orderBy.push({ createdAt: 'desc' });
            if (filters.updatedAt === 'asc')
                orderBy.push({ updatedAt: 'asc' });
            if (filters.updatedAt === 'desc')
                orderBy.push({ updatedAt: 'desc' });
            if (orderBy.length === 0)
                orderBy.push({ createdAt: 'desc' });
            const constEventDetails = await eventService.getManyEvents(skip, take, where, orderBy);
            const totalDocument = await eventService.getTotalEventsCount(where);
            return res.json({
                message: "Events fetched successfully.",
                data: constEventDetails,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(totalDocument / take),
                    take,
                    totalDocs: totalDocument,
                    hasNextPage: page < Math.ceil(totalDocument / take),
                    hasPreviousPage: page > 1,
                },
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getRecommendedEvents(req, res, next) {
        try {
            const userDetails = req.userDetails;
            const recommendedEvents = await averageRecomendationScore(userDetails.id);
            return res.status(200).json({
                message: "Recommended events fetched successfully.",
                data: recommendedEvents
            });
        }
        catch (error) {
            next(error);
        }
    }
    async isLoggedInuserJoined(req, res, next) {
        try {
            const eventId = String(req.params.eventId);
            const userData = req.userDetails;
            if (!eventId) {
                throw {
                    code: 404,
                    message: "Please enter a valid event Id. ",
                    status: "EVENT_ID_NOT_FOUND_ERR"
                };
            }
            const eventDetails = await eventService.getEvent({
                filter: { id: eventId },
                include: {
                    participants: {
                        where: {
                            userId: userData.id
                        }
                    }
                }
            });
            await eventMetricsService.createNewMetrics({
                userId: userData.id,
                eventId: eventDetails.id,
                hasClicked: true,
                hasJoined: false,
            }, {
                previousScore: userData.userScore,
                previosClickedEventsCount: userData.clickedEventsCount,
                currentClickedEventScore: eventDetails.eventScore
            });
            const hasJoinedEvent = eventDetails?.participants?.length > 0 ? true : false;
            return res.json({
                message: "User status fetched successfully. ",
                data: {
                    hasJoinedEvent: hasJoinedEvent,
                }
            });
        }
        catch (error) {
            next(error);
        }
    }
}
const eventController = new EventController();
export default eventController;
//# sourceMappingURL=event.controller.js.map