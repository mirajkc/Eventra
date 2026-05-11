'use client';

import { format } from 'date-fns';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ISingleEvent } from '@/types/event.type';
import { Button } from '../../ui/button';
import { ease, fadeUp, slideRight, stagger } from './motion';
import EventCreator from './EventCreator';

interface Props {
  event: ISingleEvent;
  mode: 'join' | 'leave';
  onAction: () => void;
  loading: boolean;
}

export default function EventInfoCard({ event, mode, onAction, loading }: Props) {
  const { t } = useTranslation();
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  const isFull = event.registeredCount >= event.capacity;
  const pct = Math.min((event.registeredCount / event.capacity) * 100, 100);

  const isJoin = mode === 'join';
  const actionLabel = loading
    ? isJoin
      ? t('events.single.joining')
      : t('events.single.leaving')
    : isFull
      ? t('events.single.eventFull')
      : isJoin
        ? t('events.single.joinNow')
        : t('events.single.leaveEvent');
  const termsLabel = isJoin
    ? t('events.single.terms')
    : t('events.single.leaveTerms');

  return (
    <motion.aside
      variants={slideRight}
      initial="hidden"
      animate="show"
      className="lg:sticky lg:top-24 self-start"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(0,0,0,0.12)] dark:shadow-none"
      >
        <div className="pointer-events-none absolute -top-32 -right-24 size-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative p-6 md:p-7 space-y-5">
          <Row
            icon={<Calendar className="size-4" />}
            label={t('events.single.startDateAndTime')}
            primary={format(start, 'd MMMM, yyyy')}
            secondary={`${format(start, 'h:mm a')} ${t('events.single.onwards')}`}
          />
          <Row
            icon={<Clock className="size-4" />}
            label={t('events.single.endDateAndTime')}
            primary={format(end, 'd MMMM, yyyy')}
            secondary={`${t('events.single.till')} ${format(end, 'h:mm a')}`}
          />
          <Row
            icon={<MapPin className="size-4" />}
            label={t('events.single.location')}
            primary={event.location}
          />

          <motion.div variants={fadeUp} className="pt-1">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center size-9 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Users className="size-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  {t('events.single.attendees')}
                </p>
                <p className="text-sm font-semibold tabular-nums text-neutral-900 dark:text-neutral-100">
                  {event.registeredCount}{' '}
                  <span className="text-neutral-400 dark:text-neutral-600 font-normal">
                    /
                  </span>{' '}
                  {event.capacity}{' '}
                  <span className="font-normal text-neutral-500 dark:text-neutral-400">
                    {t('events.single.joined')}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-3 ml-12 h-1 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 1.1, ease, delay: 0.4 }}
                className="h-full bg-gradient-to-r from-primary to-primary/70"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-2">
            <Button
              onClick={onAction}
              disabled={loading || isFull}
              className="group relative w-full h-12 rounded-2xl text-sm font-semibold tracking-wide overflow-hidden transition-all active:scale-[0.985]"
            >
              <span className="relative z-10">{actionLabel}</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </Button>
            <p className="mt-3 text-[11px] leading-relaxed text-center text-neutral-500 dark:text-neutral-500">
              {termsLabel}
            </p>
          </motion.div>
        </div>

        <EventCreator creator={event.creator} />
      </motion.div>
    </motion.aside>
  );
}

interface RowProps {
  icon: React.ReactNode;
  label: string;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}

function Row({ icon, label, primary, secondary }: RowProps) {
  return (
    <motion.div variants={fadeUp} className="flex items-start gap-3">
      <div className="grid place-items-center size-9 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
          {primary}
        </p>
        {secondary && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
            {secondary}
          </p>
        )}
      </div>
    </motion.div>
  );
}
