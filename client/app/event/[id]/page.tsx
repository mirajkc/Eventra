"use client";

import EventDetails from "@/components/event/EventDetails";
import InvitationComponent from "@/components/event/InvitationComponent";
import { Spinner } from "@/components/ui/spinner";
import getAccessToken from "@/lib/access.token";
import { ISingleEvent } from "@/types/event.type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Event() {
  const params = useParams()
  const eventId = params.id
  const [isUserJoined, setIsUserJoined] = useState(false)
  const [eventMetadata, setEventMetadata] = useState<ISingleEvent>()
  const [paticipantsCount, setParticipantsCount] = useState(0)

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getUserEventStatus()
    getEventData()
  }, [eventId]);
  const getUserEventStatus = async () => {
    try {
      setLoading(true)
      const accessToken = await getAccessToken()
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/is-logged-in-user-joined/${eventId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      if (!result?.message) {
        setIsUserJoined(false)
        return
      }
      setIsUserJoined(result.data.hasJoinedEvent)
    } catch (error) {
      // toast.error("Failed to fetch user event status please try again later. ")
    } finally {
      setLoading(false)
    }
  }
  const getEventData = async () => {
    try {
      setLoading(true)      
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/get-single-event/${eventId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const result = await response.json()
      if (response.status !== 200) {
        toast.error(result.message)
        return
      }
      setEventMetadata(result.data.eventDetails)
      setParticipantsCount(result.data.totalParticipants)
    } catch (error) {
      toast.error("Failed to fetch event data please try again later. ")
    } finally {
      setLoading(false)
    }
  }

if (loading || !eventMetadata) {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  );
}

  return (
    <div>
      {
        isUserJoined ? (
          <div>
            <EventDetails event={eventMetadata as any} />
          </div>
        ) : (
          <div>
            {eventMetadata && (
              <InvitationComponent event={eventMetadata}  />
            )}
          </div>
        )
      }
    </div>
  )
}
