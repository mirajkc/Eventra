"use client";

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import EventCard from "@/components/events/EventCard";
import type { IEventReponse } from "@/types/event.type";
import { fadeUp, fontMono, inViewProps, stagger } from "./motion";

interface Props {
  events: IEventReponse[];
  loading?: boolean;
  empty?: string;
  limit?: number;
}

export default function EventGrid({ events, loading, empty, limit = 6 }: Props) {
  const { t } = useTranslation();

  if (loading) {
    return <SkeletonGrid count={limit} />;
  }

  if (events.length === 0) {
    return (
      <p
        className={`${fontMono} text-[11px] uppercase tracking-[0.22em] text-neutral-500 py-6`}
      >
        {empty ?? t("loggedInHome.empty.events")}
      </p>
    );
  }

  const visible = events.slice(0, limit);

  return (
    <motion.div
      variants={stagger}
      {...inViewProps}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"
    >
      {visible.map((event) => (
        <motion.div key={event.id} variants={fadeUp} className="h-full">
          <EventCard event={event} />
        </motion.div>
      ))}
    </motion.div>
  );
}

function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-3 animate-pulse">
          <div className="aspect-[5/4] bg-neutral-200 dark:bg-neutral-800 rounded-3xl" />
          <div className="h-3 w-24 bg-neutral-200 dark:bg-neutral-800 rounded mt-2" />
          <div className="h-5 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="h-3 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded" />
        </div>
      ))}
    </div>
  );
}
