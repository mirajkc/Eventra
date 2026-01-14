import authService from "../service/auth.service.js";
import { uploadImage } from "../service/upload.service.js";
import userService from "../service/user.service.js";
import eventService from "../service/event.service.js";
import organizationService from "../service/organization.service.js";
import creditService from "../service/creditpurchase.service.js";
import notificationService from "../service/notification.service.js";
class UserController {
    async getLoggedInUser(req, res, next) {
        try {
            const userDetails = req.userDetails;
            const userData = await authService.getUserDetails({
                id: userDetails.id
            }, {
                organizationMember: true,
                createdEvents: true,
                creditPurchases: true,
                eventParticipants: true,
                notifications: true
            });
            if (!userDetails) {
                throw {
                    code: 404,
                    message: "Unable to fetch the user details. ",
                    status: "USER_DATA_FETCH_ERR"
                };
            }
            res.json({
                message: "User details fetched successfully. ",
                data: userData
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateUser(req, res, next) {
        try {
            const data = req.body;
            const userDetails = req.userDetails;
            let imageUrl = userDetails.image ?? "";
            if (req.file?.buffer) {
                imageUrl = await uploadImage(req.file.buffer, "Eventra/userProfile");
            }
            const updateData = {
                name: data.name ? data.name : userDetails.name,
                phone: data.phone ? data.phone : userDetails.phone,
                image: imageUrl
            };
            await authService.updateUser({ filter: { id: userDetails.id }, data: updateData });
            return res.json({
                message: "User updated successfully"
            });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteUser(req, res, next) {
        try {
            const userDetails = req.userDetails;
            await userService.deleteUser({ id: userDetails.id });
            res.json({
                message: "User deleted successfully. ",
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getUserDetails(req, res, next) {
        try {
            const query = req.query;
            const userDetails = req.userDetails;
            const page = Number(query.page) || 1;
            const take = Number(query.limit) || 10;
            const skip = (page - 1) * take;
            const include = {};
            if (query.createdEvents === 'true') {
                include.createdEvents = {
                    skip,
                    take,
                    orderBy: { createdAt: 'desc' },
                };
            }
            if (query.organizationMember === 'true') {
                include.organizationMember = {
                    skip,
                    take,
                    orderBy: { joinedAt: 'desc' },
                };
            }
            if (query.eventParticipants === 'true') {
                include.eventParticipants = {
                    skip,
                    take,
                    orderBy: { registeredAt: 'desc' },
                };
            }
            if (query.creditPurchases) {
                include.creditPurchases = {
                    skip,
                    take,
                    orderBy: { purchasedAt: 'desc' },
                };
            }
            if (query.notifications === 'true') {
                include.notifications = {
                    skip,
                    take,
                    orderBy: { createdAt: 'desc' },
                };
            }
            const userData = await userService.getUserDetails({ id: userDetails.id }, include);
            const counts = {};
            if (query.createdEvents === 'true') {
                counts.createdEvents = await eventService.getTotalEventsCount({ creatorId: userDetails.id });
            }
            if (query.organizationMember === 'true') {
                counts.organizationMember = await organizationService.getOrganizationCount({ userId: userDetails.id });
            }
            if (query.eventParticipants === 'true') {
                counts.eventParticipants = await eventService.getEventParticipatedCount({ userId: userDetails.id });
            }
            if (query.creditPurchases === 'true') {
                counts.creditPurchases = await creditService.getCreditPurchaseCount({ purchasedBy: userDetails.id });
            }
            if (query.notifications === 'true') {
                counts.notifications = await notificationService.getNotificationCount({ userId: userDetails.id });
            }
            const pagination = {};
            for (const key in counts) {
                pagination[key] = {
                    currentPage: page,
                    totalPages: Math.ceil(counts[key] / take),
                    take,
                    totalDocs: counts[key],
                    hasNextPage: page < Math.ceil(counts[key] / take),
                    hasPreviousPage: page > 1,
                };
            }
            return res.json({
                message: 'User details fetched successfully.',
                data: userData,
                pagination,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
const userController = new UserController();
export default userController;
//# sourceMappingURL=user.controller.js.map