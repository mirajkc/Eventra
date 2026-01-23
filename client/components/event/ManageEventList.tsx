"use client"
import getAccessToken from "@/lib/access.token"
import { useAppSelector } from "@/state/hooks"
import { useEffect, useState } from "react"
import { toast } from "sonner"
export default function ManageEventList() {
  const userDetails = useAppSelector((state) => state.authSlice.userDetails)
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  })
  useEffect(() => {
    fetchHostedEvents()
  }, [])
  const fetchHostedEvents = async () => {
    try {
      setLoading(true)
      const accessToken = await getAccessToken()
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/event/hosted-events`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      console.log(result);
    } catch (error) {
      toast.error("Failed to fetch hosted events please try again later. ")
    }finally {
      setLoading(false)
    }
  }

    return (
        <div>
            Manage Event List
        </div>
    )
}