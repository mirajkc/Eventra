export type IEventTypes = "WORKSHOP" | "MEETUP" | "CONFERENCE" | "WEBINAR" | "HACKATHON" | "COMPETITION" | "OTHER";
export type IEventStatus = "PUBLISHED" | "CANCELLED";
export interface ICreateEvent {
    organizationId: string;
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    capacity: number;
    category: IEventTypes;
    tags: Array<any>;
}
export interface IUploadEvent {
    slug: string;
    organizationId: string;
    creatorId: string;
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    capacity: number;
    status: IEventStatus;
    category: IEventTypes;
    tags: Array<any>;
    image: string | null;
    latitude: number;
    longitude: number;
}
export interface IEvent {
    id: string;
    slug?: string;
    organizationId: string;
    creatorId: string;
    title: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
    capacity: number;
    registeredCount: number;
    status: IEventStatus;
    category: IEventTypes;
    tags: Array<any>;
    image?: string | null;
    createdAt: Date;
    updatedAt?: Date;
    latitude?: number;
    longitude?: number;
}
export interface IUpdateEvent {
    id: string;
    organizationId: string;
    title: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
    capacity: number;
    status: IEventStatus;
    category: IEventTypes;
    tags: Array<any>;
}
export interface IEventQuery {
    page?: number;
    limit?: number;
    organizationId?: string;
    creatorId?: string;
    slug?: string;
    capacity?: number;
    category?: IEventTypes;
    createdAt?: "desc" | 'asc';
    updatedAt?: "desc" | 'asc';
    status?: IEventStatus;
}
export interface IEventScore {
    title: string;
    description: string;
    category: IEventTypes;
    tags: Array<any>;
    image?: string | null | undefined;
    premium: boolean;
}
//# sourceMappingURL=event.types.d.ts.map