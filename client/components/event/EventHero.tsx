"use client";

import { ISingleEvent } from "@/types/event.type";
import {
  Calendar,
  MapPin,
  Users,
  Tag,
  BadgeCheck,
  Trophy,
  Video,
  Users2,
  CalendarDays,
  ChevronLeft,
  Building,
  Info
} from "lucide-react";
import { format } from "date-fns";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import getAccessToken from "@/lib/access.token";
import { toast } from "sonner";
import { useAppSelector } from "@/state/hooks";

interface EventHeroProps {
  event: ISingleEvent;
}

const categoryIcons: Record<string, typeof Trophy> = {
  COMPETITION: Trophy,
  WEBINAR: Video,
  MEETUP: Users2,
  CONFERENCE: CalendarDays,
  HACKATHON: Trophy,
  WORKSHOP: Trophy,
};

export default function EventHero({ event }: EventHeroProps) {
  const loggedInUser = useAppSelector((state) => state.authSlice.userDetails)
  const [leaving, setLeaving] = useState(false);
  const Icon = categoryIcons[event.category] || Tag;
  const now = new Date();
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);

  let status = "CANCELLED";

  if (end < now) status = "COMPLETED";
  else if (start <= now && end >= now) status = "ONGOING";
  else if (start > now) status = "UPCOMING";

  const handleLeaveEvent = async () => {
    try {
      setLeaving(true);
      if (!loggedInUser?.id) {
        toast.error("You must be logged in to leave an event.");
        return;
      }
      const accessToken = await getAccessToken();
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/participant/remove-registration/${event.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      });
      const result = await response.json();
      if (response.status !== 200) {
        toast.error(result.message || "Failed to leave event");
        return;
      }
      toast.success("Successfully left the event!");
      window.location.reload();
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLeaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 mb-6 rounded-2xl">
      {/* Hero Section */}
      <div className="relative h-[40vh] rounded-2xl md:h-[50vh] w-full overflow-hidden">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="10"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-neutral-900">
            <Calendar className="h-24 w-24 text-primary opacity-20" />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-gradient-to-t from-neutral-50 dark:from-neutral-950 via-transparent to-transparent" />

        {/* Navigation Overlays */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <Link href="/events" >
            <Button variant="secondary" size="icon" className="rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md border-none hover:bg-white dark:hover:bg-black hover:cursor-pointer transition hover:scale-105 ">
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </Link>
          <Link href={`/organization/${event.organization.id}`} >
            <Button variant="secondary" size="icon" className="rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md border-none hover:bg-white dark:hover:bg-black hover:cursor-pointer transition hover:scale-105 ">
              <Building className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 mb-4 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 min-h-[60vh] h-full"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none hover:bg-primary/20 px-3 py-1">
                  <Icon className="w-3.5 h-3.5 mr-1.5" />
                  {event.category}
                </Badge>
                <Badge variant="outline" className="border-neutral-200 bg-gray-200 dark:bg-gray-500 dark:border-neutral-700">
                  {
                    event.status === "CANCELLED" ? "Cancelled" : status
                  }
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                {event.title}
              </h1>

              <div className="flex items-center gap-4 mb-8 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50">
                <div className="relative size-12 rounded-full overflow-hidden ring-2 ring-white dark:ring-neutral-900">
                  <Image
                    src={event.organization.image || "https://res.cloudinary.com/dl1hofvgi/image/upload/v1768807648/Eventra/Organization/profile/t50wbbneltzkrxtl3jdm.png"}
                    alt={event.organization.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-lg">{event.organization.name}</span>
                    {event.organization.isPremium && <BadgeCheck className=" hidden md:block w-4 h-4 text-primary fill-primary/10" />}
                    <span className="hidden md:block text-sm text-neutral-500 dark:text-neutral-400 font-medium">Premium organization</span>
                  </div>
                  <span className=" hidden  md:block text-sm text-neutral-500 dark:text-neutral-400 font-medium">Event Organizer</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    About this Event
                  </h3>
                  <textarea defaultValue={event.description} name={event.title} id={event.id} className="w-full h-[200px] overflow-y-auto custom-scrollbar text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg" readOnly>
                  </textarea>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {event.tags?.map((tag, idx) => (
                    <span key={idx} className="px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-sm font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Info Card */}
          <div className="lg:col-span-1 mb-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-8"
            >
              <Card className="border-neutral-200 dark:border-neutral-800 shadow-xl shadow-black/5 dark:shadow-none bg-white dark:bg-neutral-900 overflow-hidden rounded-3xl">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">Start Date & Time</p>
                        <p className="font-bold">{format(start, "d, MMMM , yyyy")}</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{format(start, "h:mm a")} onwards</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">End Date & Time</p>
                        <p className="font-bold">{format(end, "d, MMMM , yyyy")}</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">till {format(end, "h:mm a")}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">Location</p>
                        <p className="font-bold">{event.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">Attendees</p>
                        <p className="font-bold">{event.registeredCount} / {event.capacity} Joined</p>
                        <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full mt-2 overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: `${Math.min((event.registeredCount / event.capacity) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleLeaveEvent}
                      disabled={leaving || event.registeredCount >= event.capacity}
                      className="w-full py-7 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.98]"
                    >
                      {leaving ? "Joining..." : event.registeredCount >= event.capacity ? "Event Full" : "Leave Event"}
                    </Button>
                    <p className="text-center text-xs text-neutral-500 dark:text-neutral-500 mt-4 px-4">
                      By leaving, you agree to our terms and conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Creator Info */}
              <div className="mt-6 p-6 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative size-10 rounded-full overflow-hidden">
                    <Image
                      src={event.creator.image || "https://github.com/shadcn.png"}
                      alt={event.creator.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-bold uppercase tracking-tighter">Organized by</p>
                    <p className="text-sm font-bold">{event.creator.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}