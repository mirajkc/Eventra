"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  Code2,
  Search,
  Ticket,
  Trophy,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { fadeUp, fontDisplay, fontMono, inViewProps, stagger } from "./motion";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { setSearch } from "@/state/slices/search.slice";

const categories = [
  { id: "WORKSHOP", icon: Zap },
  { id: "MEETUP", icon: Users },
  { id: "CONFERENCE", icon: CalendarDays },
  { id: "WEBINAR", icon: Video },
  { id: "HACKATHON", icon: Code2 },
  { id: "COMPETITION", icon: Trophy },
] as const;



export default function BrowsePanel() {
  const { t } = useTranslation();
  const router = useRouter();
  const [q, setQ] = useState("");

  const search = useAppSelector((state) => state.search.search)
  const dispatch = useAppDispatch()
  

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = q.trim();
    dispatch(setSearch(trimmed))
    router.push("/events")
  };

  return (
    <motion.div
      variants={stagger}
      {...inViewProps}
      className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-x-10 gap-y-10"
    >
      <motion.div variants={fadeUp} className="flex flex-col gap-5">
        <span
          className={`${fontMono} text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400`}
        >
          By category
        </span>
        <div className="grid grid-cols-3 grid-rows-2 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.id} variants={fadeUp}>
                <Link
                  href={`/events?category=${cat.id}`}
                  className="group relative flex flex-col justify-between gap-6 p-5 lg:p-6 min-h-[140px] h-full bg-white dark:bg-neutral-950 hover:bg-neutral-900 dark:hover:bg-white transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`${fontMono} text-[10px] font-medium tabular-nums tracking-[0.22em] text-neutral-400 dark:text-neutral-600 group-hover:text-white/60 dark:group-hover:text-neutral-900/60`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="size-4 text-neutral-400 dark:text-neutral-500 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors" />
                  </div>
                  <span
                    className={`${fontDisplay} text-lg md:text-xl font-medium tracking-tight text-neutral-900 dark:text-white group-hover:text-white dark:group-hover:text-neutral-900 transition-colors`}
                  >
                    {t(`loggedInHome.categories.${cat.id}`)}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-col gap-5">
        <span
          className={`${fontMono} text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400`}
        >
          Search
        </span>

        <form
          onSubmit={onSearch}
          className="group flex items-center border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 focus-within:border-neutral-900 dark:focus-within:border-white transition-colors"
        >
          <Search className="ml-4 size-4 shrink-0 text-neutral-400" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("loggedInHome.search.placeholder")}
            className="w-full bg-transparent px-3 py-4 text-[14px] text-neutral-900 placeholder:text-neutral-400 outline-none dark:text-white dark:placeholder:text-neutral-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            aria-label={t("loggedInHome.actions.search")}
            className="m-1 flex h-10 w-10 shrink-0 items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
          >
            <ArrowRight className="size-4" />
          </motion.button>
        </form>

        <div className="flex flex-col">
          <BrowseLink
            href="/events"
            label={t("loggedInHome.actions.browseEvents")}
            icon={<Ticket className="size-4" />}
          />
          <BrowseLink
            href="/organizations"
            label={t("loggedInHome.actions.browseOrganizations")}
            icon={<Building2 className="size-4" />}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function BrowseLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 py-4 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 -mx-2 px-2 transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center size-9 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 dark:group-hover:bg-white dark:group-hover:text-neutral-900 dark:group-hover:border-white transition-colors">
          {icon}
        </span>
        <span className="text-[14px] font-semibold text-neutral-900 dark:text-white">
          {label}
        </span>
      </div>
      <ArrowUpRight className="size-4 text-neutral-400 dark:text-neutral-600 transition-all group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
