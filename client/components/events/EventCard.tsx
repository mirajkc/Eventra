"use client"

import { IEventReponse } from "@/types/event.type"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Badge } from "../ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowRight,
  Trophy,
  Video,
  Users2,
  CalendarDays,
  Tag,
  BadgeCheck
} from "lucide-react"
import { format } from "date-fns"
import { motion } from "motion/react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"

interface EventCardProps {
  event: IEventReponse
}

const categoryIcons: Record<string, typeof Trophy> = {
  COMPETITION: Trophy,
  WEBINAR: Video,
  MEETUP: Users2,
  CONFERENCE: CalendarDays,
  HACKATHON: Trophy,
  WORKSHOP: Trophy,
}

export default function EventCard({ event }: EventCardProps) {
  const startDate = new Date(event.startDate)
  const Icon = categoryIcons[event.category] || Tag

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="group relative h-full flex flex-col overflow-hidden border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
        {/* Banner/Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden">
          {event.image ? (
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes='w-10'
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              loading="eager"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-li-to-br from-neutral-100 border to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
              <Calendar className="h-12 w-12 text-neutral-400 opacity-50" />
            </div>
          )}

          {/* Category Overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <Badge className="bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-neutral-100 backdrop-blur-md border-none flex items-center gap-1.5 py-1 px-3">
              <Icon className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold tracking-tight uppercase">{event.category}</span>
            </Badge>
          </div>

          <div className="absolute top-3 right-3">
           {
            event.endDate < new Date().toISOString() ? (
              <Badge variant="outline" className="border-neutral-200 bg-gray-200 dark:bg-gray-500 dark:border-neutral-700">
                COMPLETED
              </Badge>
            ) : event.status === "PUBLISHED" ? (
              <Badge variant="outline" className="border-neutral-200 bg-green-500 dark:bg-green-500 dark:border-neutral-700">
                ONGOING
              </Badge>
            ) : (
              <Badge variant="destructive" className="border-red-500 bg-red-500 dark:border-red-500">
                CANCELLED
              </Badge>
            )
           }
          </div>

          {/* Organization Mini Badge */}
          <div className="absolute bottom-3 left-3">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full pl-1 pr-3 py-1 border border-white/10">
              <div className="relative size-6 rounded-full overflow-hidden border border-white/20">
                <Image
                  src={event.organization.image || "/organization_profile.jpg"}
                  alt={event.organization.name}
                  fill
                  sizes="w-10"
                  className="object-cover"
                />
              </div>
              <span className="text-[10px] font-semibold text-white truncate max-w-25 flex items-center gap-1">
                {event.organization.name}
                {event.organization.isPremium && <BadgeCheck className="w-3 h-3 text-amber-400 fill-amber-400/20" />}
              </span>
            </div>
          </div>
        </div>

        <CardHeader className="p-5 pb-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/5 dark:bg-primary/10 w-fit px-2 py-0.5 rounded-full">
              <Clock className="w-3 h-3" />
              <span>{format(startDate, "h:mm a")} • {format(startDate, "MMM d, yyyy")}</span>
            </div>
            <Link href={`/event/${event.slug}`}>
              <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                {event.title}
              </h3>
            </Link>
          </div>
        </CardHeader>

        <CardContent className="p-5 pt-0 grow">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4">
            {event.description}
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-[13px] text-neutral-500 dark:text-neutral-500">
              <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                <MapPin className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="truncate">{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-neutral-500 dark:text-neutral-500">
              <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                <Users className="w-3.5 h-3.5 text-primary" />
              </div>
              <span>{event.registeredCount}/{event.capacity}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {event.tags?.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0 mt-auto border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="relative size-8 rounded-full overflow-hidden">
              <Image
                src={event.creator.image || "https://github.com/shadcn.png"}
                alt={event.creator.name}
                fill
                sizes="w-10"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider leading-none">Organized by</span>
              <span className="text-xs font-semibold">{event.creator.name}</span>
            </div>
          </div>

          <Link href={`/event/${event.id}`}>
            <Button size="sm" className="rounded-full px-4 h-9 font-semibold group/btn">
              Details
              <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
