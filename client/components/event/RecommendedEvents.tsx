"use client"
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import getAccessToken from "@/lib/access.token";
import { Spinner } from "../ui/spinner";
import { TypographyH4, TypographyP } from "../ui/Typography";
import { IEventReponse } from "@/types/event.type";
import EventCard from "../events/EventCard";
import { useTranslation } from "react-i18next";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function RecommendedEvents() {
  const { t } = useTranslation();

  const recommendedQ = useQuery({
    queryKey: ["recommended-events-detail"],
    queryFn: async () => {
      const accessToken = await getAccessToken()
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/get-recommended-events`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch recommended events.")
      }
      return response.json()
    },
    staleTime: 100 * 60 * 3,
  })

  const allEventsQ = useQuery({
    queryKey: ["recommended-events-fallback"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/fetchallevents?limit=30&status=PUBLISHED`)
      if (!response.ok) {
        throw new Error("Failed to fetch events.")
      }
      return response.json()
    },
    staleTime: 100 * 60 * 3,
  })

  const recommendedRaw: IEventReponse[] = useMemo(() => {
    const raw = recommendedQ.data?.data ?? recommendedQ.data ?? [];
    return Array.isArray(raw) ? raw : [];
  }, [recommendedQ.data])

  const allEvents: IEventReponse[] = useMemo(() => {
    const raw = allEventsQ.data?.data ?? [];
    return Array.isArray(raw) ? raw : [];
  }, [allEventsQ.data])

  const events: IEventReponse[] = useMemo(() => {
    if (recommendedRaw.length > 0) return recommendedRaw;
    if (allEvents.length === 0) return [];
    return shuffle(allEvents).slice(0, 6);
  }, [recommendedRaw, allEvents])

  const loading = recommendedQ.isLoading || allEventsQ.isLoading

  if (loading) {
    return <div className="flex items-center justify-center h-full w-full">
      <Spinner />
    </div>
  }
  return (
    <div className="flex flex-col gap-8 p-4 shadow-sm rounded-2xl mt-4 border dark:border-gray-800 dark:bg-neutral-900 min-h-[35vh]">
      <div className="flex flex-col gap-4">
        <div>
          <TypographyH4>{t("events.single.recommendedEvents")}</TypographyH4>
          <TypographyP>{t("events.single.seeRecommended")}</TypographyP>
        </div>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="h-full">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
            <p>{t("events.single.noRecommended")}</p>
          </div>
        )}
      </div>
    </div>
  )
}