import { TypographyH4, TypographyP } from "../ui/Typography";

export default function EventChatBox() {
    return (
        <div className="flex flex-col h-full">
            <div>
              <TypographyH4>Chat</TypographyH4>
              <TypographyP>Chat with the people who are registerd in the event. </TypographyP>
            </div>
            <div className="flex flex-col h-full w-full mt-4">
                <TypographyP className="text-red-600 text-sm">
                  Note: The chat section is still is development and will be avaliable in the next update.
                </TypographyP>
            </div>
        </div>
    )
}