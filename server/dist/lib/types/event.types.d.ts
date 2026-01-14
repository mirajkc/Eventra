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
}
export interface IEvent {
    id: string;
    slug: string;
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
//# sourceMappingURL=event.types.d.ts.map