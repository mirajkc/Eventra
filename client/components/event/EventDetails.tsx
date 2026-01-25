import { ISingleEvent } from "@/types/event.type";
import EventHero from "./EventHero";
import RegisterdMembers from "./RegisterdMembers";
import EventChatBox from "./EventChatBox";
import RegisterParticipants from "./RegisterParticipants";
import AttendedUsers from "./AttendedUsers";


interface EventDetailsProps {
  event: ISingleEvent ;
}

export default function EventDetails({ event }: EventDetailsProps) {
    return (
        <div>
            <div>
              <EventHero event={event} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
              <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 min-h-[60vh]" >
                <RegisterdMembers />
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 min-h-[60vh]" >
                <EventChatBox />
              </div>
            </div>
            <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <RegisterParticipants event={event} />
            </div>
            <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AttendedUsers event={event} />
            </div>
            
        </div>
    )
}



