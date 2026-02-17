"use client"
import { TypographyH4, TypographyP } from "../ui/Typography"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { IEventAttendedUser, IEventParticipantsPagination, ISingleEvent } from "@/types/event.type"
import { Spinner } from "../ui/spinner"
import { formatDistanceToNow } from "date-fns"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AttendedUsers({ event }: { event: ISingleEvent }) {
  const [attendedUsers, setAttendedUsers] = useState<Array<IEventAttendedUser>>([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState<IEventParticipantsPagination>({
    currentPage: 1,
    take: 10,
    totalDoccuments: 0,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false
  })
  const eventId = event.id

  useEffect(() => {
    if (eventId) {
      fetchAttendedUsers(pagination.currentPage)
    }
  }, [eventId, pagination.currentPage])

  const fetchAttendedUsers = async (page: number) => {
    try {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/get-attended-users/${eventId}?page=${page}&take=${pagination.take}`)
      const result = await response.json()
      if (!response.ok) {
        setAttendedUsers([])
        return
      }
      setAttendedUsers(result.data.attendedUsers)
      setPagination(result.pagination)
    } catch (error) {
      console.log("Error occured while fetching the attended users data please try again later. ");
    } finally {
      setLoading(false)
    }
  }


  if (new Date(event.startDate) > new Date()) {
    return null
  }

  return (
    <div className="flex flex-col gap-8 p-4 shadow-sm rounded-2xl mt-4 border dark:border-gray-800 dark:bg-neutral-900 min-h-[35vh]">
      <div>
        <TypographyH4>Attended Users</TypographyH4>
        <TypographyP>See who all attended the event</TypographyP>
      </div>


      {loading ? (
        <div className="flex flex-col items-center justify-center flex-1 min-h-[200px]">
          <Spinner />
        </div>
      ) : new Date(event.startDate) > new Date() ? <div className="flex flex-col items-center justify-center flex-1 min-h-[200px] text-neutral-500 italic">Event is not started yet.</div> : attendedUsers?.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 min-h-[200px] text-neutral-500 italic">
          No attended users found.
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {attendedUsers.map((user) => (
              <div
                key={`${user.user.name}`}
                className="flex flex-col gap-3 p-2 bg-white/40 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-sm hover:border-primary/20 transition-all backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={user.user.image || "https://github.com/shadcn.png"}
                    alt={user.user.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-neutral-800 shadow-sm"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate">
                      {user.user.name}
                    </h4>
                    <p className="text-[10px] text-neutral-500 font-medium">
                      Attended
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="text-[10px] text-neutral-400">Attended at: </span>
                  <span className="text-[10px] text-neutral-600 dark:text-neutral-300 font-medium">
                    {formatDistanceToNow(user.checkedInAt, { addSuffix: true })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center items-center mt-auto pt-6">
            {pagination.totalPages > 1 && (
              <div className="flex gap-4">
                <Button
                  variant={"outline"}
                  size="sm"
                  disabled={!pagination.hasPreviousPage}
                  onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage - 1 }))}
                  className="rounded-full px-4"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  disabled={!pagination.hasNextPage}
                  onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage + 1 }))}
                  className="rounded-full px-4"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </div>

        </>
      )}
    </div>
  )
}