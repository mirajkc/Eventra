"use client"
import { IEventReponse } from "@/types/event.type"
import { TypographyH4, TypographyP } from "../ui/Typography"
import { Badge } from "../ui/badge"
import { Calendar, MapPin, Users, Tag, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import * as motion from "motion/react-client"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next";

interface OrganizationEventCardProps {
  event: IEventReponse
}
export default function OrganizationEventCard({ event }: OrganizationEventCardProps) {
  const { t } = useTranslation();
  const startDate = new Date(event.startDate)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white/50 shadow-sm transition-all hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/50 md:flex-row"
    >
      {/* Event Image */}
      <div className="relative h-48 w-full overflow-hidden md:h-auto md:w-64 lg:w-72">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="10"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-100 dark:bg-neutral-800">
            <Calendar className="h-12 w-12 text-neutral-400" />
          </div>
        )}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {event.category}
          </Badge>
          <Badge variant={event.status === "PUBLISHED" ? "default" : "secondary"} className="backdrop-blur-sm">
            {event.status}
          </Badge>
        </div>
      </div>

      {/* Event Content */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {event.organization.image && (
                <div className="relative h-6 w-6">
                  <Image
                    src={event.organization.image}
                    alt={event.organization.name}
                    fill
                    sizes="10"
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <span className="text-xs font-medium text-muted-foreground">
                {event.organization.name}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
              <Users className="h-3.5 w-3.5" />
              <span>{event.registeredCount}/{event.capacity} {t("organizations.eventCard.registered")}</span>
            </div>
          </div>

          <Link href={`/event/${event.id}`}>
            <TypographyH4 className="line-clamp-1 group-hover:text-primary transition-colors">
              {event.title}
            </TypographyH4>
          </Link>

          <TypographyP className="line-clamp-2 text-sm">
            {event.description}
          </TypographyP>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{format(startDate, "MMM dd, yyyy")}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags?.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
            >
              <Tag className="h-2.5 w-2.5" />
              {tag}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              {event.creator.image ? (
                <Image
                  src={event.creator.image}
                  alt={event.creator.name}
                  fill
                  sizes="10"
                  className="rounded-full object-cover ring-2 ring-white dark:ring-neutral-900"
                />
              ) : (
                <div className="h-full w-full rounded-full bg-neutral-200 dark:bg-neutral-800" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold leading-none">{t("organizations.eventCard.creator")}</span>
              <span className="text-xs font-semibold">{event.creator.name}</span>
            </div>
          </div>

          <Link href={`/event/${event.id}`}>
            <Button size="sm" variant="ghost" className="group/btn gap-2 rounded-full">
              {t("organizations.eventCard.viewDetails")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
