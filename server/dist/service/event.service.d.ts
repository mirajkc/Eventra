import type { IUploadEvent } from "../lib/types/event.types.js";
declare class EventService {
    getTotalEventsCount(filter: any): Promise<number>;
    getEventParticipatedCount(filter: {
        userId: string;
    }): Promise<number>;
    createEvent({ data, checkInToken }: {
        data: IUploadEvent;
        checkInToken: string;
    }): Promise<any>;
    updateEvent({ filter, data }: {
        filter: {
            id: string;
        };
        data: any;
    }): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").EventStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        organizationId: string;
        slug: string;
        creatorId: string;
        title: string;
        description: string;
        location: string;
        startDate: Date;
        endDate: Date;
        capacity: number;
        registeredCount: number;
        category: import("../generated/prisma/enums.js").EventType;
        tags: string[];
        eventScore: number | null;
    }>;
    getEvent({ filter, include }: {
        filter: {
            id?: string;
            slug?: string;
        };
        include?: any;
    }): Promise<({
        [x: string]: ({
            id: string;
            userId: string;
            eventId: string;
            registeredAt: Date;
            checkInToken: string;
            attended: boolean;
            checkedInAt: Date | null;
        } | {
            id: string;
            userId: string;
            eventId: string;
            registeredAt: Date;
            checkInToken: string;
            attended: boolean;
            checkedInAt: Date | null;
        })[] | ({
            id: string;
            message: string;
            createdAt: Date;
            eventId: string;
            senderId: string;
        } | {
            id: string;
            message: string;
            createdAt: Date;
            eventId: string;
            senderId: string;
        })[] | {
            id: string;
            userId: string;
            eventId: string;
            registeredAt: Date;
            checkInToken: string;
            attended: boolean;
            checkedInAt: Date | null;
        }[] | {
            id: string;
            message: string;
            createdAt: Date;
            eventId: string;
            senderId: string;
        }[];
        [x: number]: never;
        [x: symbol]: never;
    } & {
        id: string;
        status: import("../generated/prisma/enums.js").EventStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        organizationId: string;
        slug: string;
        creatorId: string;
        title: string;
        description: string;
        location: string;
        startDate: Date;
        endDate: Date;
        capacity: number;
        registeredCount: number;
        category: import("../generated/prisma/enums.js").EventType;
        tags: string[];
        eventScore: number | null;
    }) | null>;
    getManyEvents(skip: number, take: number, filter: any, orderBy: any): Promise<({
        _count: {
            participants: number;
        };
        organization: {
            id: string;
            name: string;
            image: string | null;
            isPremium: boolean;
        };
        creator: {
            id: string;
            name: string;
            image: string | null;
        };
    } & {
        id: string;
        status: import("../generated/prisma/enums.js").EventStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        organizationId: string;
        slug: string;
        creatorId: string;
        title: string;
        description: string;
        location: string;
        startDate: Date;
        endDate: Date;
        capacity: number;
        registeredCount: number;
        category: import("../generated/prisma/enums.js").EventType;
        tags: string[];
        eventScore: number | null;
    })[]>;
    deleteEvent(id: string, include: any): Promise<{
        [x: string]: ({
            id: string;
            userId: string;
            eventId: string;
            registeredAt: Date;
            checkInToken: string;
            attended: boolean;
            checkedInAt: Date | null;
        } | {
            id: string;
            userId: string;
            eventId: string;
            registeredAt: Date;
            checkInToken: string;
            attended: boolean;
            checkedInAt: Date | null;
        })[] | ({
            id: string;
            message: string;
            createdAt: Date;
            eventId: string;
            senderId: string;
        } | {
            id: string;
            message: string;
            createdAt: Date;
            eventId: string;
            senderId: string;
        })[] | {
            id: string;
            userId: string;
            eventId: string;
            registeredAt: Date;
            checkInToken: string;
            attended: boolean;
            checkedInAt: Date | null;
        }[] | {
            id: string;
            message: string;
            createdAt: Date;
            eventId: string;
            senderId: string;
        }[];
        [x: number]: never;
        [x: symbol]: never;
    } & {
        id: string;
        status: import("../generated/prisma/enums.js").EventStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        organizationId: string;
        slug: string;
        creatorId: string;
        title: string;
        description: string;
        location: string;
        startDate: Date;
        endDate: Date;
        capacity: number;
        registeredCount: number;
        category: import("../generated/prisma/enums.js").EventType;
        tags: string[];
        eventScore: number | null;
    }>;
}
declare const eventService: EventService;
export default eventService;
//# sourceMappingURL=event.service.d.ts.map