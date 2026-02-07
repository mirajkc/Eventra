import { prisma } from "../config/prisma.config.js";
class EventMetricsService {
    async createNewMetrics(data) {
        const metricsExists = await prisma.eventMetric.findFirst({
            where: {
                userId: data.userId,
                eventId: data.eventId
            }
        });
        if (metricsExists && metricsExists?.eventId) {
            return;
        }
        await prisma.eventMetric.create({
            data: data
        });
        return;
    }
    async updateEventMetrics({ filter }) {
        await prisma.eventMetric.updateMany({
            where: filter,
            data: {
                hasJoined: true
            }
        });
        return;
    }
}
const eventMetricsService = new EventMetricsService();
export default eventMetricsService;
//# sourceMappingURL=eventmetrics.service.js.map