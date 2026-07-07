"use client"
import { useEffect, useState } from "react"
import { TypographyH4, TypographyP } from "../ui/Typography"
import { IEventPagination, IEventReponse } from "@/types/event.type"
import OrganizationEventCard from "./OrganizationEventCard"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useParams } from "next/navigation"
import { useTranslation } from "react-i18next"
import { useQuery } from "@tanstack/react-query"

export default function OrganizationEvents() {
  const { t } = useTranslation()
  const params = useParams()
  const organizationId = params.id
  const [page, setPage] = useState(1)
  const [take] = useState(5)
  const [paginationMeta, setPaginationMeta] = useState<Omit<IEventPagination, "currentPage" | "take">>({
    totalPages: 0,
    totalDocs: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })

  const { data: rawResponse, isLoading: loading, error, refetch: refetchEvents } = useQuery({
    queryKey: ["organization-events", organizationId, page, take],
    enabled: Boolean(organizationId),
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/fetchallevents?organizationId=${organizationId}&limit=${take}&page=${page}`)
      if (!response.ok) {
        throw new Error(t("organizations.single.events.failedToFetch"))
      }
      return response.json()
    },
    staleTime: 100 * 60 * 3
  })

  const events: IEventReponse[] | undefined = rawResponse?.data

  useEffect(() => {
    if (rawResponse?.pagination) {
      setPaginationMeta({
        totalPages: rawResponse.pagination.totalPages ?? 0,
        totalDocs: rawResponse.pagination.totalDocs ?? 0,
        hasNextPage: rawResponse.pagination.hasNextPage ?? false,
        hasPreviousPage: rawResponse.pagination.hasPreviousPage ?? false
      })
    }
  }, [rawResponse?.pagination])

  if (error) {
    return (
      <div className="flex flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50">
        <div className="flex flex-col items-center justify-center py-12 text-neutral-500 italic gap-3">
          <p>{t("organizations.single.events.failedToFetch")}</p>
          <Button variant="outline" size="sm" onClick={() => refetchEvents()}>
            Try again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50" >
      <div>
        <TypographyH4>{t("organizations.single.events.title")}</TypographyH4>
        <TypographyP>{t("organizations.single.events.subtitle")}</TypographyP>
      </div>
      {
        paginationMeta.totalDocs > 0 && (
          <div className="flex w-full mt-2">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {t("organizations.single.events.totalEvents")} {paginationMeta.totalDocs}
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
          ) : events && events.length > 0 ? (

            events.map((event) => (
              <OrganizationEventCard key={event.id} event={event} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <TypographyH4 className="text-muted-foreground">{t("organizations.single.events.noEventsFound")}</TypographyH4>
              <TypographyP>{t("organizations.single.events.noEventsSubtitle")}</TypographyP>
            </div>
          )}
        </div>
        <div className="flex w-full justify-center items-center mt-6">
          {paginationMeta.totalPages > 1 && (
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                disabled={!paginationMeta.hasPreviousPage}
                onClick={() => setPage(prev => prev - 1)}
                className="rounded-full px-4"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                {t("organizations.single.events.previous")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={!paginationMeta.hasNextPage}
                onClick={() => setPage(prev => prev + 1)}
                className="rounded-full px-4"
              >
                {t("organizations.single.events.next")}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}