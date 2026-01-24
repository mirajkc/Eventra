import JoinedEventList from "@/components/event/JoinedEventList";
import { TypographyH4, TypographyP } from "@/components/ui/Typography";

export default function ParticipatedEvents() {
    return (
        <div className="flex flex-col gap-4 p-4 shadow rounded-md dark:bg-neutral-900 min-h-[80vh]">
                    <div>
                        <TypographyH4>The List of all events that you have paticipated in. </TypographyH4>
                        <TypographyP>This section covers the history of all the events that you have paticipated so far. </TypographyP>
                    </div>
                    <div>
                        <JoinedEventList />
                    </div>
                </div>
    )
}