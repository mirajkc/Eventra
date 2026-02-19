import type { Prisma } from "../generated/prisma/client.js";
declare class EventParticipantService {
    getEventParticipants({ filter, select, skip, take }: {
        filter: {
            eventId: string;
            attended?: boolean;
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
        checkInToken: string;
        attended: boolean;
        checkedInAt: Date | null;
    }>;
    chekIn(token: string, eventId: string, include: any): Promise<{
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
    } & {
        id: string;
        userId: string;
        eventId: string;
        registeredAt: Date;
        checkInToken: string;
        attended: boolean;
        checkedInAt: Date | null;
    }>;
    getParticipantsCount(filter: any): Promise<number>;
    getEventParticipantDetails: ({ filter }: {
        filter: {
            eventId: string;
            userId: string;
        };
    }) => Promise<{
        id: string;
        userId: string;
        eventId: string;
        registeredAt: Date;
        checkInToken: string;
        attended: boolean;
        checkedInAt: Date | null;
    }>;
    getCountsPerMonth<T extends Prisma.EventParticipantsFindManyArgs>(args: Prisma.SelectSubset<T, Prisma.EventParticipantsFindManyArgs>): Promise<import("@prisma/client/runtime/client").GetFindResult<Prisma.$EventParticipantsPayload<import("@prisma/client/runtime/client").DefaultArgs>, T, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>[]>;
}
declare const eventParticipantService: EventParticipantService;
export default eventParticipantService;
//# sourceMappingURL=eventParticipants.service.d.ts.map