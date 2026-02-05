export interface IEventTypes {
            id: string,
            slug: string,
            organizationId: string,
            creatorId: string,
            title: string,
            description: string,
            location: string,
            startDate: string,
            endDate: string,
            capacity: number,
            registeredCount: number,
            status: string,
            category: IEventCategory,
            tags: string[],
            image: string,
            createdAt: string,
            updatedAt: string,
            organization: {
                id: string,
                name: string,
                image: string,
                isPremium: boolean
            },
            creator: {
                id: string,
                name: string,
                image: string
            },
            _count: {
                participants: number
            }
        }


export interface IPagination {
    currentPage: number,
    totalPages: number,
    take: number,
    totalDocs: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean
}

export type IEventCategory = "WORKSHOP" | "MEETUP" | "CONFERENCE" | "WEBINAR" | "HACKATHON" | "COMPETITION" | "OTHER" 