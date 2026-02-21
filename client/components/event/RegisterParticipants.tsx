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
import { useTranslation } from "react-i18next";


export default function RegisterParticipants({ event }: { event: ISingleEvent }) {
  const { t } = useTranslation();
  const userDetails = useAppSelector((state) => state.authSlice.userDetails)
  const isCreator = userDetails?.id === event.creatorId
  const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: {
      ticket: ""
    },
    resolver: zodResolver(EventTicketDTO)
  })

  const validateToken = async (data: any) => {
    const accessToken = await getAccessToken()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/participant/make-attendance/${event.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (response.status !== 200) {
        toast.error(t("events.single.invalidTicket"))
        return
      }
      toast.success(result.message)
      reset()
    } catch (error) {
      console.log(error);
      toast.error(t("events.single.regError"))
    }
  }

  if (!isCreator) {
    return <></>
  }
  return (
    <div className="flex flex-col gap-8 p-4 shadow-sm rounded-2xl mt-4 border dark:border-gray-800 dark:bg-neutral-900">
      <div>
        <TypographyH4>
          {t("events.single.checkInTitle")}
        </TypographyH4>
      </div>
      <div className="mb-4">
        {
          new Date(event.startDate) > new Date() ? (
            <>
              <p className="text-sm text-muted-foreground">{t("events.single.eventNotStarted")}</p>
            </>
          ) : new Date() > new Date(event.endDate) ? (
            <>
              <p className="text-sm text-muted-foreground">{t("events.single.eventEnded")}</p>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit(validateToken)} className="flex flex-col md:flex-row gap-2">
                <div className="flex gap-4 items-center">
                  <Label htmlFor="ticket">{t("events.single.enterTicket")}</Label>
                  <Input control={control} name="ticket" type="text" errorMsg={errors.ticket?.message} placeholder={t("events.single.enterTicketPlaceholder")} />
                </div>
                <div className="flex gap-2">
                  <Button>
                    {isSubmitting ? t("events.single.validating") : t("events.single.validate")}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => reset()}
                    variant={"outline"}
                  >
                    {t("events.single.cancel")}
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
