"use client";

import InvitationComponent from "@/components/event/InvitationComponent";
import { Spinner } from "@/components/ui/spinner";
import getAccessToken from "@/lib/access.token";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Event() {
  const params = useParams()
  const eventId = params.id
  const [isUserJoined, setIsUserJoined] = useState(false)
  const [eventMetadata, setEventMetadata] = useState<any>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getUserEventStatus()
  }, [eventId])
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
      console.log(result);

      if (response.status !== 200) {
        toast.error(result.message)
        return
      }
      setIsUserJoined(result.data.hasJoinedEvent)
    } catch (error) {
      toast.error("Failed to fetch user event status please try again later. ")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  }

  return (
    <div>
      {
        isUserJoined ? (
          <div>
            <h1> This will show the entire event details</h1>
          </div>
        ) : (
          <div>
            <InvitationComponent />
          </div>
        )
      }
    </div>
  )
}
