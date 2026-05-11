'use client';

import { motion } from 'motion/react';
import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp, inViewProps, stagger } from './motion';

interface Props {
  description: string;
}

export default function EventAbout({ description }: Props) {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={stagger}
      {...inViewProps}
      className="relative rounded-3xl bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 p-6 md:p-8 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-primary/5 blur-3xl" />

      <motion.div
        variants={fadeUp}
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-500"
      >
        <Info className="size-3.5 text-primary" />
        {t('events.single.aboutEvent')}
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-4 text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap"
      >
        {description}
      </motion.p>
    </motion.section>
  );
}
