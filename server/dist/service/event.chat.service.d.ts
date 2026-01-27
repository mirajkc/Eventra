import type ISendEventMessage from "../lib/types/event.chat.types.js";
declare class EventChatService {
    sendMessage({ data }: {
        data: ISendEventMessage;
    }): Promise<{
        id: string;
        message: string;
        createdAt: Date;
        eventId: string;
        senderId: string;
    }>;
    getAllMessage({ filter, include }: {
        filter: {
            eventId: string;
        };
        include: any;
    }): Promise<({
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
    } & {
        id: string;
        message: string;
        createdAt: Date;
        eventId: string;
        senderId: string;
    })[]>;
}
declare const eventChatService: EventChatService;
export default eventChatService;
//# sourceMappingURL=event.chat.service.d.ts.map