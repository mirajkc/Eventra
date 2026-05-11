"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Building2, CalendarPlus, UserCog } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  fadeUp,
  fontDisplay,
  fontMono,
  inViewProps,
  stagger,
} from "./motion";

const actions = [
  {
    key: "organization",
    href: "/manage-organization/organization",
    icon: Building2,
  },
  {
    key: "events",
    href: "/manage-events/created-events",
    icon: CalendarPlus,
  },
  {
    key: "profile",
    href: "/user/profile",
    icon: UserCog,
  },
] as const;

export default function QuickActionsFooter() {
  const { t } = useTranslation();

  return (
    <motion.ul
      variants={stagger}
      {...inViewProps}
      className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800"
    >
      {actions.map((action, i) => {
        const Icon = action.icon;
        return (
          <motion.li key={action.key} variants={fadeUp}>
            <Link
              href={action.href}
              className="group relative flex flex-col justify-between gap-8 p-7 lg:p-8 min-h-[220px] h-full bg-white dark:bg-neutral-950 hover:bg-neutral-900 dark:hover:bg-white transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`${fontMono} text-[10px] font-medium tabular-nums tracking-[0.22em] text-neutral-400 dark:text-neutral-600 group-hover:text-white/60 dark:group-hover:text-neutral-900/60`}
                >
                  {String(i + 1).padStart(2, "0")} / {String(actions.length).padStart(2, "0")}
                </span>
                <Icon className="size-5 text-neutral-400 dark:text-neutral-500 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors" />
              </div>

              <div className="flex flex-col gap-3">
                <h3
                  className={`${fontDisplay} text-[1.5rem] md:text-[1.75rem] font-medium leading-[1.05] tracking-tight text-neutral-900 dark:text-white group-hover:text-white dark:group-hover:text-neutral-900 transition-colors`}
                >
                  {t(`loggedInHome.quick.${action.key}.title`)}
                </h3>
                <p className="text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-400 group-hover:text-white/70 dark:group-hover:text-neutral-900/70 transition-colors">
                  {t(`loggedInHome.quick.${action.key}.description`)}
                </p>
                <span
                  className={`${fontMono} inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-900 dark:text-white group-hover:text-white dark:group-hover:text-neutral-900 transition-colors pt-2`}
                >
                  Open
                  <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
