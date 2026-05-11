'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, BadgeCheck, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ISingleEvent } from '@/types/event.type';
import GoogleMaps from '../GoogleMap';
import { fadeUp, inViewProps, stagger } from './motion';

interface Props {
  event: ISingleEvent;
}

export default function EventVenue({ event }: Props) {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <motion.section
      variants={stagger}
      {...inViewProps}
      className="rounded-3xl bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 p-6 md:p-8"
    >
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-500"
      >
        <MapPin className="size-3.5 text-primary" />
        {t('events.single.location')}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-5">
        <GoogleMaps
          latitude={event.latitude}
          longitude={event.longitude}
          address={event.location}
        />
      </motion.div>

      {event.tags && event.tags.length > 0 && (
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap gap-2"
        >
          {event.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 ring-1 ring-neutral-200/60 dark:ring-neutral-700/40 transition-colors hover:bg-neutral-200/80 dark:hover:bg-neutral-700/70"
            >
              <span className="text-neutral-400 dark:text-neutral-500 mr-0.5">#</span>
              {tag}
            </span>
          ))}
        </motion.div>
      )}

      <motion.button
        variants={fadeUp}
        onClick={() => router.push(`/organization/${event.organization.id}`)}
        className="group mt-7 w-full flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/40 ring-1 ring-neutral-200/70 dark:ring-neutral-800 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800/70 hover:ring-neutral-300 dark:hover:ring-neutral-700"
      >
        <div className="relative size-12 rounded-full overflow-hidden ring-2 ring-white dark:ring-neutral-900 shrink-0">
          <Image
            src={
              event.organization.image ||
              'https://res.cloudinary.com/dl1hofvgi/image/upload/v1768807648/Eventra/Organization/profile/t50wbbneltzkrxtl3jdm.png'
            }
            alt={event.organization.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-base truncate">
              {event.organization.name}
            </span>
            {event.organization.isPremium && (
              <BadgeCheck className="size-4 text-primary fill-primary/15 shrink-0" />
            )}
          </div>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {t('events.single.eventOrganizer')}
          </span>
        </div>
        <ArrowUpRight className="size-4 text-neutral-400 transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </motion.button>
    </motion.section>
  );
}
