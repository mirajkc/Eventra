import type { ICreateEventeMetrics, IUserMetrics } from "../lib/types/eventmetrics.types.js";
declare class EventMetricsService {
    createNewMetrics(data: ICreateEventeMetrics, userMetrics: IUserMetrics): Promise<void>;
    updateEventMetrics({ filter }: {
        filter: {
            eventId: string;
            userId: string;
        };
    }): Promise<void>;
}
declare const eventMetricsService: EventMetricsService;
export default eventMetricsService;
//# sourceMappingURL=eventmetrics.service.d.ts.map