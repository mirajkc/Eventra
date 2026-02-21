"use client"
import getAccessToken from "@/lib/access.token";
import { Spinner } from "../ui/spinner";
import { TypographyH4, TypographyP } from "../ui/Typography";
import { useState, useEffect } from "react";
import { IEventReponse } from "@/types/event.type";
import EventCard from "../events/EventCard";
import { useTranslation } from "react-i18next";

export default function RecommendedEvents() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Array<IEventReponse>>([]);
  useEffect(() => {
    fetchRecommendedEvents();
  }, []);


  const fetchRecommendedEvents = async () => {
    setLoading(true);
    const accessToken = await getAccessToken()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/get-recommended-events`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const result = await response.json();
      setEvents(result.data);
    } catch (error) {
      console.error('Error fetching recommended events:', error);
    } finally {
      setLoading(false);
    }
  }

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