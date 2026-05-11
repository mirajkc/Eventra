"use client"

import { IEventReponse } from "@/types/event.type"
import { MapPin, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next";

interface EventCardProps {
  event: IEventReponse
}

export default function EventCard({ event }: EventCardProps) {
  const { t } = useTranslation();
  const startDate = new Date(event.startDate)
  const now = new Date();
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);

  let status = "CANCELLED";
  if (end < now) status = "COMPLETED";
  else if (start <= now && end >= now) status = "ONGOING";
  else if (start > now) status = "UPCOMING";

  const capacity = event.capacity || 1;
  const registeredCount = event.registeredCount || 0;
  const percentage = Math.min(Math.round((registeredCount / capacity) * 100), 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="h-full z-10"
    >
      <div className="group relative h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-neutral-100 dark:border-neutral-800/60 dark:bg-neutral-950/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-neutral-200 dark:hover:border-neutral-700">
        <Link href={`/event/${event.id}`} className="absolute inset-0 z-10">
          <span className="sr-only">View Event Details</span>
        </Link>
        <div className="relative h-[180px] w-full p-2.5 pb-0">
          <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-neutral-100 dark:ring-neutral-800">
            {event.image ? (
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
                <span className="text-neutral-400 font-medium">No Image</span>
              </div>
            )}
            {/* Overlay Badges */}
            <div className="absolute top-2.5 left-2.5">
              <div className="px-2.5 py-1 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md rounded-full text-[10px] font-bold text-neutral-800 dark:text-neutral-100 shadow-sm border border-black/5 dark:border-white/5">
                {event.category || "Event"}
              </div>
            </div>
            <div className="absolute top-2.5 right-2.5">
              <div className="px-2.5 py-1 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md rounded-full flex items-center gap-1.5 shadow-sm border border-black/5 dark:border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white animate-pulse" />
                <span className="text-[10px] font-bold text-neutral-800 dark:text-neutral-100">
                  {event.status === "CANCELLED" ? t("events.card.status.CANCELLED") : t(`events.card.status.${status}`)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <div className="text-[12px] font-semibold tracking-tight text-neutral-500 dark:text-neutral-400 mb-1.5">
            {format(startDate, "MMM d, yyyy • h:mm a")}
          </div>
          <h3 className="text-[17px] font-bold text-neutral-900 dark:text-white leading-snug mb-2 line-clamp-2 transition-colors">
            {event.title}
          </h3>
          <div className="flex items-center gap-1.5 text-[13px] text-neutral-500 dark:text-neutral-400 mb-3 font-medium">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-neutral-400" />
            <span className="truncate">{event.location}</span>
          </div>

          <div className="mt-auto flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800/50">
            <div className="flex items-center gap-3 flex-1 overflow-hidden pr-4">
              <div className="h-1.5 w-full max-w-[100px] bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-neutral-900 dark:bg-white rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-[13px] font-bold text-neutral-900 dark:text-white shrink-0">
                {percentage}%
              </span>
            </div>
            <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 group-hover:bg-neutral-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-neutral-900 transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
