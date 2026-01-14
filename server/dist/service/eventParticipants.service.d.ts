declare class EventParticipantService {
    getEventParticipants({ filter, select, skip, take }: {
        filter: {
            eventId: string;
        };
        select: any;
        skip?: number;
        take?: number;
    }): Promise<{
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
    }[]>;
    createEvent(eventId: string, data: {
        eventId: string;
        userId: string;
        checkInToken: string;
    }): Promise<any>;
    removeUserRegistration(userId: string, eventId: string): Promise<{
        id: string;
        userId: string;
        eventId: string;
        registeredAt: Date;
        checkInToken: string | null;
        attended: boolean;
        checkedInAt: Date | null;
    }>;
    chekIn(token: string, eventId: string): Promise<{
        id: string;
        userId: string;
        eventId: string;
        registeredAt: Date;
        checkInToken: string | null;
        attended: boolean;
        checkedInAt: Date | null;
    }>;
    getParticipantsCount(filter: any): Promise<number>;
}
declare const eventParticipantService: EventParticipantService;
export default eventParticipantService;
//# sourceMappingURL=eventParticipants.service.d.ts.map