"use client"
import { useEffect, useState } from "react"
import { TypographyH4, TypographyP } from "../ui/Typography"
import { IEventPagination, IEventReponse } from "@/types/event.type"
import OrganizationEventCard from "./OrganizationEventCard"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { toast } from "sonner"
import { useParams } from "next/navigation"

export default function OrganizationEvents() {
  const params = useParams()
  const organizationId = params.id
  const [events, setEvents] = useState<Array<IEventReponse>>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState<IEventPagination>({
    currentPage: 1,
    totalPages: 0,
    take: 5,
    totalDocs: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })
  useEffect(() => {
    fetchEvents()
  }, [organizationId])
  const fetchEvents = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/fetchallevents?organizationId=${organizationId}&limit=${pagination.take}&page=${pagination.currentPage}`)
      const result = await response.json()
      setEvents(result.data)
      setPagination(result.pagination)
      setLoading(false)
    } catch (error) {
      toast.error("Failed to fetch events")
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex  flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50 min-h-[60vh]" >
      <div>
        <TypographyH4>Organization Events</TypographyH4>
        <TypographyP>Find the recent events hosted by the organization.</TypographyP>
      </div>
      {
        pagination?.totalDocs > 0 && (
          <div className="flex w-full mt-2">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Total Events: {pagination.totalDocs}
            </p>
          </div>
        )
      }
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-1 gap-6 p-1 mt-6">

          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 p-4 border rounded-2xl bg-white/40 dark:bg-neutral-900/40">
                <div className="h-48 w-full md:w-72 bg-neutral-200 dark:bg-neutral-800 rounded-xl animate-pulse" />
                <div className="flex flex-1 flex-col gap-4">
                  <div className="h-6 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                  <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                  <div className="mt-auto flex gap-4">
                     <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                     <div className="h-8 w-24 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))
          ) : events?.length > 0 ? (

            events.map((event) => (
              <OrganizationEventCard key={event.id} event={event} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <TypographyH4 className="text-muted-foreground">No events found</TypographyH4>
              <TypographyP>This organization hasn't published any events yet.</TypographyP>
            </div>
          )}
        </div>
        <div className="flex w-full justify-center items-center mt-6">
          {pagination?.totalPages > 1 && (
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                disabled={!pagination.hasPreviousPage}
                onClick={() => {
                  setPagination({
                    ...pagination,
                    currentPage: pagination.currentPage--
                  })
                  fetchEvents()
                }}
                className="rounded-full px-4"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={!pagination.hasNextPage}
                onClick={() => {
                  setPagination({
                    ...pagination,
                    currentPage: pagination.currentPage++
                  })
                  fetchEvents()
                }}
                className="rounded-full px-4"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}