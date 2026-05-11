"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import type { IEventReponse } from "@/types/event.type";

import SectionHead from "./hero/SectionHead";
import Featured from "./hero/Featured";
import EventGrid from "./hero/EventGrid";
import BrowsePanel from "./hero/BrowsePanel";

import HeroIntro from "./guest/HeroIntro";
import StatsStrip from "./guest/StatsStrip";
import PromisesGrid from "./guest/PromisesGrid";
import JoinBanner from "./guest/JoinBanner";

async function publicFetch(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`Request failed: ${path}`);
  return res.json();
}

const KNOWN_CATEGORIES = 6;

export default function NonLoggedInHome() {
  const { t } = useTranslation();

  const allEventsQ = useQuery({
    queryKey: ["allEventsHomeGuest"],
    queryFn: () => publicFetch("/event/fetchallevents?limit=30&status=PUBLISHED"),
  });

  const allEvents: IEventReponse[] = useMemo(() => {
    const raw = allEventsQ.data?.data ?? [];
    return Array.isArray(raw) ? raw : [];
  }, [allEventsQ.data]);

  const trending: IEventReponse[] = useMemo(() => {
    if (allEvents.length === 0) return [];
    return [...allEvents]
      .sort((a, b) => (b.registeredCount ?? 0) - (a.registeredCount ?? 0))
      .slice(0, 6);
  }, [allEvents]);

  const upcoming: IEventReponse[] = useMemo(() => {
    if (allEvents.length === 0) return [];
    const now = Date.now();
    const weekFromNow = now + 7 * 24 * 60 * 60 * 1000;
    return allEvents
      .filter((e) => {
        const ts = new Date(e.startDate).getTime();
        return ts > now && ts <= weekFromNow;
      })
      .sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      )
      .slice(0, 6);
  }, [allEvents]);

  const discover: IEventReponse[] = useMemo(() => {
    if (allEvents.length === 0) return [];
    const seen = new Set([
      ...trending.map((e) => e.id),
      ...upcoming.map((e) => e.id),
    ]);
    return allEvents.filter((e) => !seen.has(e.id)).slice(0, 6);
  }, [allEvents, trending, upcoming]);

  const featured: IEventReponse | null = useMemo(() => {
    if (trending[0]) return trending[0];
    if (upcoming[0]) return upcoming[0];
    if (allEvents[0]) return allEvents[0];
    return null;
  }, [trending, upcoming, allEvents]);

  const stats = useMemo(() => {
    const events = allEvents.length;
    const organizers = new Set(
      allEvents.map((e) => e.organization?.id).filter(Boolean)
    ).size;
    const attendees = allEvents.reduce(
      (sum, e) => sum + (e.registeredCount ?? 0),
      0
    );
    return {
      events,
      organizers,
      attendees,
      categories: KNOWN_CATEGORIES,
    };
  }, [allEvents]);

  const loading = allEventsQ.isLoading;

  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 pb-28">
        <HeroIntro /> 

        <div className="flex flex-col gap-24 pt-14">
          <StatsStrip
            events={stats.events}
            organizers={stats.organizers}
            attendees={stats.attendees}
            categories={stats.categories}
          />

          {(featured || loading) && (
            <section
              id="featured"
              className="flex flex-col gap-7 scroll-mt-24"
            >
              <SectionHead
                kicker={t("nonLoggedInHome.sections.featuredKicker")}
                title={t("nonLoggedInHome.sections.featured")}
                href={featured ? `/event/${featured.id}` : undefined}
              />
              <Featured event={featured} loading={loading} />
            </section>
          )}

          {(trending.length > 0 || loading) && (
            <section
              id="trending"
              className="flex flex-col gap-7 scroll-mt-24"
            >
              <SectionHead
                kicker={t("nonLoggedInHome.sections.trendingKicker")}
                title={t("nonLoggedInHome.sections.trending")}
                href="/events"
                count={trending.length}
              />
              <EventGrid
                events={trending}
                loading={loading}
                empty={t("nonLoggedInHome.empty.events")}
              />
            </section>
          )}

          {(upcoming.length > 0 || loading) && (
            <section
              id="upcoming"
              className="flex flex-col gap-7 scroll-mt-24"
            >
              <SectionHead
                kicker={t("nonLoggedInHome.sections.upcomingKicker")}
                title={t("nonLoggedInHome.sections.upcoming")}
                href="/events"
                count={upcoming.length}
              />
              <EventGrid
                events={upcoming}
                loading={loading}
                empty={t("nonLoggedInHome.empty.events")}
              />
            </section>
          )}

          <section id="browse" className="flex flex-col gap-8 scroll-mt-24">
            <SectionHead
              kicker={t("nonLoggedInHome.sections.browseKicker")}
              title={t("nonLoggedInHome.sections.browse")}
            />
            <BrowsePanel />
          </section>

          {(discover.length > 0 || loading) && (
            <section
              id="discover"
              className="flex flex-col gap-7 scroll-mt-24"
            >
              <SectionHead
                kicker={t("nonLoggedInHome.sections.discoverKicker")}
                title={t("nonLoggedInHome.sections.discover")}
                href="/events"
                count={discover.length}
              />
              <EventGrid
                events={discover}
                loading={loading}
                empty={t("nonLoggedInHome.empty.events")}
              />
            </section>
          )}

          <section id="promises" className="flex flex-col gap-8 scroll-mt-24">
            <SectionHead
              kicker={t("nonLoggedInHome.sections.promisesKicker")}
              title={t("nonLoggedInHome.sections.promises")}
            />
            <PromisesGrid />
          </section>

          <section id="join" className="scroll-mt-24">
            <JoinBanner />
          </section>
        </div>
      </div>
    </section>
  );
}
