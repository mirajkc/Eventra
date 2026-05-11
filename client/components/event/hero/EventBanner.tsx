'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import {
  CalendarDays,
  Tag,
  Trophy,
  Users2,
  Video,
  type LucideIcon,
} from 'lucide-react';
import { ISingleEvent } from '@/types/event.type';
import { blurIn, fadeDown, scaleIn, staggerSlow } from './motion';
import StatusBadge, { EventStatus } from './StatusBadge';

const categoryIcons: Record<string, LucideIcon> = {
  COMPETITION: Trophy,
  WEBINAR: Video,
  MEETUP: Users2,
  CONFERENCE: CalendarDays,
  HACKATHON: Trophy,
  WORKSHOP: Trophy,
};

interface Props {
  event: ISingleEvent;
  status: EventStatus;
}

export default function EventBanner({ event, status }: Props) {
  const Icon = categoryIcons[event.category] ?? Tag;

  return (
    <motion.div
      variants={staggerSlow}
      initial="hidden"
      animate="show"
      className="relative aspect-[16/10] sm:aspect-[16/8] md:aspect-[21/9] w-full overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800"
    >
      <motion.div variants={scaleIn} className="absolute inset-0">
        {event.image ? (
          <Image
            src={String(event.image)}
            alt={event.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />
        <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-40 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
      </motion.div>

      <motion.div
        variants={fadeDown}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30 text-white text-[11px] font-semibold uppercase tracking-[0.16em]"
      >
        <Icon className="size-3.5" />
        {event.category}
      </motion.div>

      <motion.div
        variants={fadeDown}
        className="absolute top-4 right-4 sm:top-6 sm:right-6"
      >
        <StatusBadge status={status} />
      </motion.div>

      <motion.div
        variants={blurIn}
        className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10"
      >
        <h1 className="max-w-3xl text-2xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.05] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
          {event.title}
        </h1>
      </motion.div>
    </motion.div>
  );
}
