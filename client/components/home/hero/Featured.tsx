"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { format, formatDistanceToNow } from "date-fns";
import { ArrowUpRight, Calendar, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { IEventReponse } from "@/types/event.type";
import {
  fadeUp,
  fontDisplay,
  fontMono,
  inViewProps,
  scaleIn,
  stagger,
} from "./motion";

interface Props {
  event: IEventReponse | null;
  loading?: boolean;
}

export default function Featured({ event, loading }: Props) {
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-x-10 gap-y-6">
        <div className="aspect-[4/3] lg:min-h-[420px] bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
        <div className="flex flex-col gap-4 lg:py-2 animate-pulse">
          <div className="h-3 w-32 bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="h-10 w-5/6 bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="h-3 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="h-3 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded" />
        </div>
      </div>
    );
  }

  if (!event) return null;

  const start = new Date(event.startDate);
  const dateStr = format(start, "EEEE, MMMM d · h:mm a");
  const relative = formatDistanceToNow(start, { addSuffix: true });
  const pct = Math.min(
    100,
    Math.round(((event.registeredCount ?? 0) / (event.capacity || 1)) * 100)
  );

  return (
    <motion.article
      variants={stagger}
      {...inViewProps}
      className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-x-10 gap-y-6"
    >
      <motion.div
        variants={scaleIn}
        className="relative overflow-hidden bg-neutral-900 aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
      >
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <span
          className={`${fontMono} absolute top-4 left-4 bg-white text-neutral-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em]`}
        >
          {event.category}
        </span>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <span
            className={`${fontMono} text-white/85 text-[10px] uppercase tracking-[0.22em]`}
          >
            {relative}
          </span>
          <span
            className={`${fontMono} text-white text-[10px] uppercase tracking-[0.22em] tabular-nums`}
          >
            {pct}% full
          </span>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-col gap-5 lg:py-2">
        <span
          className={`${fontMono} text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400`}
        >
          {format(start, "MMM d, yyyy").toUpperCase()}
        </span>

        <Link href={`/event/${event.id}`} className="group block">
          <h3
            className={`${fontDisplay} font-medium text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[0.95] tracking-[-0.03em] text-neutral-900 dark:text-white`}
          >
            <span className="bg-[length:0%_2px] bg-no-repeat bg-bottom bg-gradient-to-r from-neutral-900 to-neutral-900 dark:from-white dark:to-white transition-[background-size] duration-700 group-hover:bg-[length:100%_2px]">
              {event.title}
            </span>
          </h3>
        </Link>

        <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-3">
          {event.description}
        </p>

        <ul className="flex flex-col gap-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
          <Row icon={<Calendar className="size-3.5" />} value={dateStr} />
          <Row icon={<MapPin className="size-3.5" />} value={event.location} />
          <Row
            icon={<Users className="size-3.5" />}
            value={
              <span className="tabular-nums">
                {event.registeredCount} / {event.capacity}
              </span>
            }
          />
        </ul>

        <Link
          href={`/event/${event.id}`}
          className={`${fontMono} group inline-flex items-center gap-2 self-start text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-900 dark:text-white pt-2`}
        >
          {t("loggedInHome.actions.viewEvent")}
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </motion.article>
  );
}

function Row({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-3">
      <span className="flex h-5 w-5 items-center justify-center text-neutral-400 dark:text-neutral-500 shrink-0">
        {icon}
      </span>
      <span className="text-[13px] text-neutral-800 dark:text-neutral-200 truncate">
        {value}
      </span>
    </li>
  );
}
