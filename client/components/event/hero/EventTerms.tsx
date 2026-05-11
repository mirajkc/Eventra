'use client';

import { motion } from 'motion/react';
import { ScrollText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp, inViewProps, stagger } from './motion';

const clauses = [
  'Registration is per individual and not transferable.',
  'Event details may change; you will be notified by email.',
  'No refunds after the registration window closes.',
  'Behave respectfully toward organizers and other attendees.',
];

export default function EventTerms() {
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
        <ScrollText className="size-3.5 text-primary" />
        Terms &amp; conditions
      </motion.div>

      <motion.ul variants={stagger} className="mt-5 space-y-3">
        {clauses.map((clause, idx) => (
          <motion.li
            key={idx}
            variants={fadeUp}
            className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
          >
            <span className="mt-1.5 size-1.5 rounded-full bg-primary/70 shrink-0" />
            <span className="leading-relaxed">{clause}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        variants={fadeUp}
        className="mt-6 pt-5 border-t border-neutral-200/70 dark:border-neutral-800/70 text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed"
      >
        {t('events.single.leaveTerms')}
      </motion.p>
    </motion.section>
  );
}
