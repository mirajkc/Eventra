import { EventDetailsProps } from "./EventDetails";
import ChatHeader from "../chat/ChatHeader";
import ChatField from "../chat/ChatField";
import ChatBody from "../chat/ChatBody";

export default function EventChatBox({ event }: EventDetailsProps) {
    return (
        <div className="flex flex-col h-full w-full bg-white dark:bg-neutral-900 overflow-hidden">
            <ChatHeader />
            <div className="flex-1 h-0 w-full">
                <ChatBody />
            </div>
            <ChatField />
        </div>
    );
}
