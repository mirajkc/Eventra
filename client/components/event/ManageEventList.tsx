"use client"
import getAccessToken from "@/lib/access.token"
import { useAppSelector } from "@/state/hooks"
import { IHostedEvents } from "@/types/event.type"
import { IOrganizationActivitiesPagination } from "@/types/organization.types"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import UpdateEventForm from "./UpdateEventForm"

export default function ManageEventList() {
  const { t } = useTranslation()
  const router = useRouter()
  const userDetails = useAppSelector((state) => state.authSlice.userDetails)
  const [events, setEvents] = useState<Array<IHostedEvents>>([])
  const [loading, setLoading] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<IHostedEvents | null>(null)

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
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/me/getdetails?page=${pagination.currentPage}&take=${pagination.take}&createdEvents=true`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      setEvents(result.data.createdEvents)
      setPagination(result.pagination.createdEvents)
    } catch (error) {
      toast.error(t("manageEvents.created.error"))
    } finally {
      setLoading(false)
    }
  }

  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage++,
      }));

    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPreviousPage) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage--,
      }));

    }
  };


  // Handlers
  const handleEditClick = (event: IHostedEvents) => {
    setSelectedEvent(event)
  }

  const handleFormClose = () => {
    setSelectedEvent(null)
  }

  const handleFormSuccess = () => {
    fetchHostedEvents()
    setSelectedEvent(null)
  }

  if (selectedEvent) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handleFormClose} className="gap-1 pl-0 hover:bg-transparent hover:text-primary">
            <ChevronLeft className="w-4 h-4" /> {t("manageEvents.created.table.buttons.back")}
          </Button>
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border border-neutral-200 dark:border-neutral-800">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight">{t("manageEvents.created.table.editTitle")}</h2>
            <p className="text-muted-foreground">{t("manageEvents.created.table.editSubtitle")}</p>
          </div>
          <UpdateEventForm
            event={selectedEvent}
            onClose={handleFormClose}
            onSuccess={handleFormSuccess}
          />
        </div>
      </div>
    )
  }

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
                    <TableHead className="w-[100px]">{t("manageEvents.created.table.name")}</TableHead>
                    <TableHead>{t("manageEvents.created.table.type")}</TableHead>
                    <TableHead>{t("manageEvents.created.table.date")}</TableHead>
                    <TableHead>{t("manageEvents.created.table.location")}</TableHead>
                    <TableHead>{t("manageEvents.created.table.status")}</TableHead>
                    <TableHead>{t("manageEvents.created.table.actions")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events?.map((event) => (
                    <TableRow key={event.id}
                      className="hover:cursor-pointer"
                    // onClick={() => router.push(`/event/${event.id}`)}
                    >
                      <TableCell className="font-medium" onClick={() => router.push(`/event/${event.id}`)}>{event.title}</TableCell>
                      <TableCell onClick={() => router.push(`/event/${event.id}`)}>{event.category}</TableCell>
                      <TableCell onClick={() => router.push(`/event/${event.id}`)}>{format(new Date(event.startDate), "dd/MM/yyyy hh:mm a")}</TableCell>
                      <TableCell onClick={() => router.push(`/event/${event.id}`)}>{event.location}</TableCell>
                      <TableCell onClick={() => router.push(`/event/${event.id}`)}>{event.status === "CANCELLED" ? t("manageEvents.created.table.statuses.cancelled") : new Date(event.endDate) < new Date() ? t("manageEvents.created.table.statuses.completed") : t("manageEvents.created.table.statuses.published")}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          className="ml-auto hover:cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleEditClick(event)
                          }}
                        >
                          {t("manageEvents.created.table.buttons.edit")}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-center text-lg font-semibold">{t("manageEvents.created.noEvents")}</p>
            </div>
          )
        )
      }

      <div>

        <div className="px-2 py-2 flex items-center justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePrevPage()}
            disabled={!pagination.hasPreviousPage || loading}
            className="flex-1 "
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            {t("events.list.previous")}
          </Button>

          <span className="text-sm text-muted-foreground px-2">
            {t("manageEvents.created.pagination.page", { current: pagination.currentPage, total: pagination.totalPages })}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNextPage()}
            disabled={!pagination.hasNextPage || loading}
            className="flex-1"
          >
            {t("events.list.next")}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm text-muted-foreground italic">{t("manageEvents.created.pagination.total", { total: pagination.totalDocs })}</p>
        </div>
      </div>
    </div>
  )
}
