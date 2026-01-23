import ManageEventList from "@/components/event/ManageEventList";
import { TypographyH4, TypographyP } from "@/components/ui/Typography";

export default function CreatedEvents() {
    return (
        <div className="flex flex-col gap-4 p-4 shadow rounded-md dark:bg-neutral-900 min-h-[80vh]">
            <div>
                <TypographyH4>The List of all events that you have hosted. </TypographyH4>
                <TypographyP>Manage your events here. You cannot update event that has been already completed. </TypographyP>
            </div>
            <div>
                <ManageEventList />
            </div>
        </div>
    )
}