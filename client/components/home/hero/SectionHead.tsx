"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { fadeUp, fontDisplay, fontMono, inViewProps, stagger } from "./motion";

interface Props {
  id?: string;
  kicker: string;
  title: string;
  href?: string;
  count?: number;
}

export default function SectionHead({ id, kicker, title, href, count }: Props) {
  const { t } = useTranslation();
  return (
    <motion.div
      id={id}
      variants={stagger}
      {...inViewProps}
      className="flex flex-col gap-3 scroll-mt-24"
    >
      <motion.div
        variants={fadeUp}
        className="flex items-center justify-between gap-4"
      >
        <span
          className={`${fontMono} text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400`}
        >
          {kicker}
        </span>
        {typeof count === "number" && count > 0 && (
          <span
            className={`${fontMono} text-[10px] tabular-nums text-neutral-400 dark:text-neutral-600`}
          >
            {String(count).padStart(2, "0")}
          </span>
        )}
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="flex items-baseline justify-between gap-6 flex-wrap"
      >
        <h2
          className={`${fontDisplay} text-3xl md:text-4xl lg:text-[2.5rem] font-medium leading-[1] tracking-tight text-neutral-900 dark:text-white`}
        >
          {title}
        </h2>
        {href && (
          <Link
            href={href}
            className={`${fontMono} group inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors`}
          >
            {t("loggedInHome.actions.seeAll")}
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
}
