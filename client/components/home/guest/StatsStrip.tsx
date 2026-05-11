"use client";

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  fadeUp,
  fontDisplay,
  fontMono,
  inViewProps,
  stagger,
} from "../hero/motion";

interface Stat {
  value: number;
  labelKey: string;
}

interface Props {
  events: number;
  organizers: number;
  attendees: number;
  categories: number;
}

function formatCompact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
}

export default function StatsStrip({ events, organizers, attendees, categories }: Props) {
  const { t } = useTranslation();

  const stats: Stat[] = [
    { value: events, labelKey: "nonLoggedInHome.stats.eventsLabel" },
    { value: organizers, labelKey: "nonLoggedInHome.stats.organizersLabel" },
    { value: attendees, labelKey: "nonLoggedInHome.stats.attendeesLabel" },
    { value: categories, labelKey: "nonLoggedInHome.stats.categoriesLabel" },
  ];

  return (
    <motion.section
      variants={stagger}
      {...inViewProps}
      className="flex flex-col gap-5"
    >
      <motion.span
        variants={fadeUp}
        className={`${fontMono} text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400`}
      >
        {t("nonLoggedInHome.stats.kicker")}
      </motion.span>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.labelKey}
            variants={fadeUp}
            className="bg-white dark:bg-neutral-950 p-6 lg:p-7 flex flex-col gap-4 min-h-[140px]"
          >
            <span
              className={`${fontMono} text-[10px] tabular-nums tracking-[0.22em] text-neutral-400 dark:text-neutral-600`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1.5 mt-auto">
              <span
                className={`${fontDisplay} text-[2.25rem] md:text-[2.75rem] font-medium leading-none tracking-tight text-neutral-900 dark:text-white tabular-nums`}
              >
                {formatCompact(stat.value)}
              </span>
              <span
                className={`${fontMono} text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400`}
              >
                {t(stat.labelKey)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
