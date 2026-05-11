'use client';

import { format } from 'date-fns';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { ISingleEvent } from '@/types/event.type';
import ShareButton from '../ShareButton';
import { fadeUp, stagger } from './motion';

interface Props {
  event: ISingleEvent;
}

export default function EventMetaStrip({ event }: Props) {
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  const sameDay = start.toDateString() === end.toDateString();
  const dateLabel = sameDay
    ? format(start, 'PPP')
    : `${format(start, 'MMM d')} — ${format(end, 'MMM d, yyyy')}`;

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="mt-6 sm:mt-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 sm:divide-x sm:divide-neutral-200/70 sm:dark:divide-neutral-800/70">
        <Item
          icon={<Calendar className="size-4" />}
          label="When"
          value={dateLabel}
        />
        <Item
          icon={<MapPin className="size-4" />}
          label="Where"
          value={event.location}
          truncate
        />
        <Item
          icon={<Users className="size-4" />}
          label="Capacity"
          value={
            <span className="tabular-nums">
              <span className="font-semibold">{event.participants.length}</span>
              <span className="text-neutral-400 dark:text-neutral-600 mx-1">/</span>
              <span className="text-neutral-500 dark:text-neutral-500">
                {event.capacity}
              </span>
            </span>
          }
        />
      </div>

      <motion.div
        variants={fadeUp}
        className="flex items-center justify-between gap-3 mt-5 pt-5 border-t border-neutral-200/70 dark:border-neutral-800/70"
      >
        <p className="text-[11px] text-neutral-500 dark:text-neutral-500 uppercase tracking-[0.22em]">
          Event details
        </p>
        <ShareButton variant="outline" size="sm" />
      </motion.div>
    </motion.div>
  );
}

interface ItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  truncate?: boolean;
}

function Item({ icon, label, value, truncate }: ItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-start gap-3 px-1 sm:px-5 sm:first:pl-1"
    >
      <div className="mt-0.5 grid place-items-center size-9 rounded-xl bg-neutral-100 text-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-300 ring-1 ring-neutral-200/70 dark:ring-neutral-700/50 shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
          {label}
        </p>
        <div
          className={`mt-0.5 text-sm font-medium text-neutral-900 dark:text-neutral-100 ${
            truncate ? 'truncate' : ''
          }`}
        >
          {value}
        </div>
      </div>
    </motion.div>
  );
}
