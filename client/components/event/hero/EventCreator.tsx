'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ISingleEvent } from '@/types/event.type';
import { fadeUp, inViewProps } from './motion';

interface Props {
  creator: ISingleEvent['creator'];
}

export default function EventCreator({ creator }: Props) {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeUp}
      {...inViewProps}
      className="mt-5 p-5 rounded-2xl bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 flex items-center gap-3 mb-2 mx-2"
    >
      <div className="relative size-10 rounded-full overflow-hidden ring-2 ring-white dark:ring-neutral-900 shrink-0">
        <Image
          src={creator.image || 'https://github.com/shadcn.png'}
          alt={creator.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
          {t('events.single.organizedBy')}
        </p>
        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
          {creator.name}
        </p>
      </div>
    </motion.div>
  );
}
