"use client"
import getAccessToken from "@/lib/access.token"
import { useAppSelector } from "@/state/hooks"
import { IJoinedEvents } from "@/types/event.type"
import { IOrganizationActivitiesPagination } from "@/types/organization.types"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
export default function JoinedEventList() {
  const router = useRouter()
  const userDetails = useAppSelector((state) => state.authSlice.userDetails)
  const [events, setEvents] = useState<Array<IJoinedEvents>>([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState<IOrganizationActivitiesPagination>({
    currentPage: 1,
    totalPages: 0,
    take: 10,
    totalDocs: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })
  useEffect(() => {
    fetchHostedEvents()
  }, [])

  useEffect(() => {
    fetchHostedEvents()
  }, [pagination.currentPage])
  const fetchHostedEvents = async () => {
    try {
      setLoading(true)
      const accessToken = await getAccessToken()
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/me/getdetails?page=${pagination.currentPage}&take=${pagination.take}&eventParticipants=true`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      setEvents(result.data.eventParticipants)
      setPagination(result.pagination.eventParticipants)
    } catch (error) {
      toast.error("Failed to fetch hosted events please try again later. ")
    }finally {
      setLoading(false)
    }
  }

      const handleNextPage = () => {
    if (pagination.hasNextPage) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage ++,
      }));

    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPreviousPage) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage --,
      }));

    }
  };





    return (
        <div className="flex h-full w-full flex-col gap-4" >
          {
            loading ? (
              <div className="flex min-h-[60vh] w-full  items-center justify-center">
                <Spinner className="size-8 text-center" />
              </div>
            ) : (
              events?.length > 0 ? (
                <div className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Event Name</TableHead>
                        <TableHead className="text-center">Event CheckInToken</TableHead>
                        <TableHead>Registered At</TableHead>
                        <TableHead>Attended</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {events?.map((event) => (
                        <TableRow key={event.id}
                        className="hover:cursor-pointer"
                        onClick={() => router.push(`/event/${event.eventId}`)}>
                          <TableCell className="font-medium">{event.event.title}</TableCell>
                          <TableCell className="text-center">{event.checkInToken}</TableCell>
                          <TableCell>{format(new Date(event.registeredAt), "dd/MM/yyyy")}</TableCell>
                          <TableCell>{event.attended ? "Attended" : "Not Attended"}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-center text-lg font-semibold">No events found</p>
                </div>
              )
            )
          }
          <div>
            <div className="px-2 py-2 flex items-center justify-between gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={ () => handlePrevPage()}
                disabled={!pagination.hasPreviousPage || loading}
                className="flex-1 "
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>

              <span className="text-sm text-muted-foreground px-2">
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={ () => handleNextPage()}
                disabled={!pagination.hasNextPage || loading}
                className="flex-1"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-sm text-muted-foreground italic">Total Hosted Events : {pagination.totalDocs}</p>
            </div>
          </div>
        </div>
    )
}