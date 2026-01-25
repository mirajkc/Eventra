import CreateEventForm from "@/components/event/CreateEventForm";
import { TypographyH3, TypographyP } from "@/components/ui/Typography";

export default function CreateEvent() {
  return (
    <div>
      <div>
        <TypographyH3>
          Create a new Event
        </TypographyH3>
        <TypographyP>
          Fill the form below to create a new event
        </TypographyP>
      </div>
      <div>
        <CreateEventForm />
      </div>
    </div>
  )
}

// organizationId: string
//   title: string
//   description: string
//   location: string
//   startDate: string
//   endDate: string
//   capacity: number
//   category: IEventTypes
//   tags: Array<any>