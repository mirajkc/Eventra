"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import getAccessToken from "@/lib/access.token";
import type {
  IEventRecentActivities,
  IEventReponse,
} from "@/types/event.type";

import SectionHead from "./hero/SectionHead";
import Featured from "./hero/Featured";
import {
  HeaderSkeleton,
  EventGridSkeleton,
  BrowsePanelSkeleton,
  QuickActionsFooterSkeleton,
} from "./skeletons";

const Header = dynamic(() => import("./hero/Header"), {
  loading: () => <HeaderSkeleton />,
});
const EventGrid = dynamic(() => import("./hero/EventGrid"), {
  loading: () => <EventGridSkeleton />,
});
const BrowsePanel = dynamic(() => import("./hero/BrowsePanel"), {
  loading: () => <BrowsePanelSkeleton />,
});
const QuickActionsFooter = dynamic(() => import("./hero/QuickActionsFooter"), {
  loading: () => <QuickActionsFooterSkeleton />,
});


async function authedFetch(path: string) {
  const token = await getAccessToken();
  if (!token) throw new Error("Not authenticated");
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error(`Request failed: ${path}`);
  return res.json();
}

async function publicFetch(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`Request failed: ${path}`);
  return res.json();
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function LoggedInHome({ userDetails }: { userDetails: any }) {
  const { t } = useTranslation();

  const activitiesQ = useQuery({
    queryKey: ["recentActivities"],
    queryFn: () => authedFetch("/user/recent-activities"),
  });

  const recommendedQ = useQuery({
    queryKey: ["recommendedEvents"],
    queryFn: () => authedFetch("/event/get-recommended-events"),
  });

  const allEventsQ = useQuery({
    queryKey: ["allEventsHome"],
    queryFn: () => publicFetch("/event/fetchallevents?limit=30&status=PUBLISHED"),
  });

  const activities: IEventRecentActivities[] = activitiesQ.data?.data ?? [];

  const recommendedRaw: IEventReponse[] = useMemo(() => {
    const raw = recommendedQ.data?.data ?? recommendedQ.data ?? [];
    return Array.isArray(raw) ? raw : [];
  }, [recommendedQ.data]);

  const allEvents: IEventReponse[] = useMemo(() => {
    const raw = allEventsQ.data?.data ?? [];
    return Array.isArray(raw) ? raw : [];
  }, [allEventsQ.data]);

  const joined: IEventReponse[] = useMemo(
    () =>
      activities
        .filter((a) => a.hasJoined && a.event)
        .map((a) => a.event as unknown as IEventReponse),
    [activities]
  );

  const viewed: IEventReponse[] = useMemo(
    () =>
      activities
        .filter((a) => a.hasClicked && !a.hasJoined && a.event)
        .map((a) => a.event as unknown as IEventReponse),
    [activities]
  );

  const recommended: IEventReponse[] = useMemo(() => {
    if (recommendedRaw.length > 0) return recommendedRaw;
    if (allEvents.length === 0) return [];
    const joinedIds = new Set(joined.map((e) => e.id));
    return shuffle(allEvents.filter((e) => !joinedIds.has(e.id))).slice(0, 6);
  }, [recommendedRaw, allEvents, joined]);

  const trending: IEventReponse[] = useMemo(() => {
    if (allEvents.length === 0) return [];
    return [...allEvents]
      .sort(
        (a, b) => (b.registeredCount ?? 0) - (a.registeredCount ?? 0)
      )
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
      ...joined.map((e) => e.id),
      ...viewed.map((e) => e.id),
      ...recommended.map((e) => e.id),
      ...trending.map((e) => e.id),
    ]);
    const remaining = allEvents.filter((e) => !seen.has(e.id));
    return shuffle(remaining).slice(0, 6);
  }, [allEvents, joined, viewed, recommended, trending]);

  const featured: IEventReponse | null = useMemo(() => {
    const now = Date.now();
    const upcomingJoined = joined
      .filter((e) => new Date(e.startDate).getTime() > now)
      .sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );
    if (upcomingJoined[0]) return upcomingJoined[0];
    if (recommended[0]) return recommended[0];
    if (trending[0]) return trending[0];
    if (allEvents[0]) return allEvents[0];
    return null;
  }, [joined, recommended, trending, allEvents]);

  const featuredLoading =
    activitiesQ.isLoading && recommendedQ.isLoading && allEventsQ.isLoading;

  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 pb-28">
        <Header name={userDetails?.name ?? "Friend"} />

        <div className="flex flex-col gap-24 pt-14">
          {(featured || featuredLoading) && (
            <section id="featured" className="flex flex-col gap-7 scroll-mt-24">
              <SectionHead
                kicker={t("loggedInHome.sections.featuredKicker")}
                title={t("loggedInHome.sections.featured")}
                href={featured ? `/event/${featured.id}` : undefined}
              />
              <Featured event={featured} loading={featuredLoading} />
            </section>
          )}

          <section id="recommended" className="flex flex-col gap-7 scroll-mt-24">
            <SectionHead
              kicker={t("loggedInHome.sections.recommendedKicker")}
              title={t("loggedInHome.sections.recommended")}
              href="/events"
              count={recommended.length}
            />
            <EventGrid
              events={recommended}
              loading={recommendedQ.isLoading && allEventsQ.isLoading}
              empty={t("loggedInHome.empty.recommended")}
            />
          </section>

          {(upcoming.length > 0 || allEventsQ.isLoading) && (
            <section id="upcoming" className="flex flex-col gap-7 scroll-mt-24">
              <SectionHead
                kicker={t("loggedInHome.sections.upcomingKicker")}
                title={t("loggedInHome.sections.upcoming")}
                href="/events"
                count={upcoming.length}
              />
              <EventGrid
                events={upcoming}
                loading={allEventsQ.isLoading}
                empty={t("loggedInHome.empty.upcoming")}
              />
            </section>
          )}

          {(joined.length > 0 || activitiesQ.isLoading) && (
            <section id="joined" className="flex flex-col gap-7 scroll-mt-24">
              <SectionHead
                kicker={t("loggedInHome.sections.recentlyJoinedKicker")}
                title={t("loggedInHome.sections.recentlyJoined")}
                count={joined.length}
              />
              <EventGrid
                events={joined}
                loading={activitiesQ.isLoading}
                empty={t("loggedInHome.empty.joined")}
              />
            </section>
          )}

          {(viewed.length > 0 || activitiesQ.isLoading) && (
            <section id="viewed" className="flex flex-col gap-7 scroll-mt-24">
              <SectionHead
                kicker={t("loggedInHome.sections.recentlyViewedKicker")}
                title={t("loggedInHome.sections.recentlyViewed")}
                count={viewed.length}
              />
              <EventGrid
                events={viewed}
                loading={activitiesQ.isLoading}
                empty={t("loggedInHome.empty.viewed")}
              />
            </section>
          )}

          {(trending.length > 0 || allEventsQ.isLoading) && (
            <section id="trending" className="flex flex-col gap-7 scroll-mt-24">
              <SectionHead
                kicker={t("loggedInHome.sections.trendingKicker")}
                title={t("loggedInHome.sections.trending")}
                href="/events"
                count={trending.length}
              />
              <EventGrid
                events={trending}
                loading={allEventsQ.isLoading}
              />
            </section>
          )}

          {(discover.length > 0 || allEventsQ.isLoading) && (
            <section id="discover" className="flex flex-col gap-7 scroll-mt-24">
              <SectionHead
                kicker={t("loggedInHome.sections.discoverKicker")}
                title={t("loggedInHome.sections.discover")}
                href="/events"
                count={discover.length}
              />
              <EventGrid
                events={discover}
                loading={allEventsQ.isLoading}
              />
            </section>
          )}

          <section id="browse" className="flex flex-col gap-8 scroll-mt-24">
            <SectionHead
              kicker={t("loggedInHome.sections.browseKicker")}
              title={t("loggedInHome.sections.browse")}
            />
            <BrowsePanel />
          </section>

          <section id="quickActions" className="flex flex-col gap-8 scroll-mt-24">
            <SectionHead
              kicker={t("loggedInHome.sections.quickActionsKicker")}
              title={t("loggedInHome.sections.quickActions")}
            />
            <QuickActionsFooter />
          </section>
        </div>
      </div>
    </section>
  );
}
