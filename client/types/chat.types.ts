export interface IEventChatTypes {
            id: string,
            eventId: string,
            senderId: string,
            message: string,
            createdAt: string,
            sender: {
                name: string,
                image?: string
            },
            isMe : boolean
}