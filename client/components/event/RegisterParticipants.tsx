"use client"
import { useAppSelector } from "@/state/hooks";
import { TypographyH4 } from "../ui/Typography";
import { ISingleEvent } from "@/types/event.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EventTicketDTO } from "@/rules/event.rules";
import Input from "../form/Input";
import Label from "../form/Label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import getAccessToken from "@/lib/access.token";



export default function RegisterParticipants({ event }: { event: ISingleEvent }) {
  const userDetails = useAppSelector((state) => state.authSlice.userDetails)
  const isCreator = userDetails?.id === event.creatorId
  const {control, handleSubmit, formState:{errors, isSubmitting}, reset} = useForm({
    defaultValues:{
      ticket:""
    },
    resolver: zodResolver(EventTicketDTO)
  })

  const validateToken = async (data:any) => {
    const accessToken = await getAccessToken()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/participant/make-attendance/${event.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if(!result.message){
        toast.error("Error occured while registering the participant pleae try again later. ")
        return
      }
      toast.success(result.message)
      reset()      
    } catch (error) {
      console.log(error);
      toast.error("Error occured while registering the participant pleae try again later. ")
    }
  }

  if(!isCreator){
      return <></>
  }
    return (
        <div className="flex flex-col gap-8 p-4 shadow-sm rounded-2xl mt-4 border dark:border-gray-800 dark:bg-neutral-900">
          <div>
            <TypographyH4> 
              Register the Events Participants
            </TypographyH4>
          </div>
          <div className="mb-4">
            {
              new Date(event.startDate) > new Date() ? (
                <>
                <p className="text-sm text-muted-foreground">The event has not started yet. You can register the participants once the event starts.</p>
                </>
              ) : new Date() > new Date(event.endDate) ? (
                <>
                <p className="text-sm text-muted-foreground">The event has ended. You can not register the participants now.</p>
                </>
              ) : (
                <>
            <form onSubmit={handleSubmit(validateToken)} className="flex flex-col md:flex-row gap-2">
            <div className="flex gap-4 items-center">
            <Label htmlFor="ticket">Enter the event tiket: </Label>
            <Input control={control} name="ticket" type="text" errorMsg={errors.ticket?.message} placeholder="Enter Ticket (eg: TOKEN)" />
          </div>
          <div className="flex gap-2">
            <Button>
              {isSubmitting ? "Registering..." : "Validate"}
            </Button>
            <Button
            type="button"
            onClick={() => reset()}
            variant={"outline"}
            >
              Cancel
            </Button>
          </div>
          </form>
                </>
              )
            }
          </div>
        </div>
    )
}
