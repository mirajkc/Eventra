import { ISingleEvent } from "@/types/event.type";
import EventHero from "./EventHero";
import RegisterdMembers from "./RegisterdMembers";
import EventChatBox from "./EventChatBox";
import RegisterParticipants from "./RegisterParticipants";
import AttendedUsers from "./AttendedUsers";
import RecommendedEvents from "./RecommendedEvents";
import { Button } from "../ui/button";


export interface EventDetailsProps {
  event: ISingleEvent;
}

export default function EventDetails({ event }: EventDetailsProps) {
  return (
    <div>
      <div>
        <EventHero event={event} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto lg:h-[80vh]" >
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 h-[500px] lg:h-auto overflow-y-auto custom-scrollbar" >
          <RegisterdMembers />
        </div>
        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-sm border border-neutral-200 dark:border-neutral-800 h-[600px] lg:h-auto overflow-hidden" >
          <EventChatBox event={event} />
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RegisterParticipants event={event} />
      </div>
      <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RecommendedEvents />
      </div>
      <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AttendedUsers event={event} />
      </div>
      <div
        onClick={() => window.history.back()}
        className="w-full flex items-center justify-center m-4" >
        <Button type="button" className="w-35 hover:cursor-pointer  " >
          Go Back
        </Button>
      </div>
    </div>
  )
}



