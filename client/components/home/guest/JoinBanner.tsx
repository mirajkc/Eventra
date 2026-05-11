"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  fadeUp,
  fontDisplay,
  fontMono,
  inViewProps,
  stagger,
} from "../hero/motion";

export default function JoinBanner() {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={stagger}
      {...inViewProps}
      className="relative overflow-hidden bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-x-12 gap-y-10 p-8 md:p-12 lg:p-16">
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <span
            className={`${fontMono} text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 dark:text-neutral-500`}
          >
            {t("nonLoggedInHome.banner.kicker")}
          </span>
          <h2
            className={`${fontDisplay} font-light leading-[0.95] tracking-[-0.02em] text-[clamp(2.25rem,5vw,4rem)]`}
          >
            {t("nonLoggedInHome.banner.title")}{" "}
            <span className="italic font-medium">
              {t("nonLoggedInHome.banner.titleAccent")}
            </span>
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-7 lg:py-2">
          <p className="text-[15px] leading-relaxed text-white/75 dark:text-neutral-700 max-w-md">
            {t("nonLoggedInHome.banner.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/auth/register"
              className={`${fontMono} group inline-flex items-center justify-center gap-2 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white hover:opacity-90 transition-opacity`}
            >
              {t("nonLoggedInHome.banner.primaryCta")}
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/auth/login"
              className={`${fontMono} inline-flex items-center justify-center gap-2 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] border border-white/30 dark:border-neutral-900/30 text-white dark:text-neutral-900 hover:border-white dark:hover:border-neutral-900 transition-colors`}
            >
              {t("nonLoggedInHome.banner.secondaryCta")}
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
