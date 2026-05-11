"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  blurIn,
  fadeUp,
  fontDisplay,
  fontMono,
  stagger,
} from "../hero/motion";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { setSearch } from "@/state/slices/search.slice";

export default function HeroIntro() { 
  const { t } = useTranslation();
  const router = useRouter();
  const [q, setQ] = useState("");
  const search = useAppSelector((state) => state.search.search)
  const dispatcher = useAppDispatch()

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = q.trim();
    dispatcher(setSearch(trimmed));
    router.push(`/events`)  
  };

  return (
    <motion.header
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-7 pt-12 pb-12 border-b border-neutral-200 dark:border-neutral-800"
    >
      <motion.span
        variants={fadeUp}
        className={`${fontMono} text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400`}
      >
        {t("nonLoggedInHome.eyebrow")}
      </motion.span>

      <motion.h1
        variants={blurIn}
        className={`${fontDisplay} font-light text-neutral-900 dark:text-white leading-[0.95] tracking-[-0.02em] text-[clamp(2.5rem,7vw,5.5rem)]`}
      >
        {t("nonLoggedInHome.headlineLead")}{" "}
        <span className="italic font-medium">
          {t("nonLoggedInHome.headlineAccent")}
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="max-w-xl text-[15px] md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        {t("nonLoggedInHome.subtitle")}
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-4 sm:flex-row sm:items-stretch pt-3"
      >
        <form
          onSubmit={onSearch}
          className="group flex flex-1 items-center border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 focus-within:border-neutral-900 dark:focus-within:border-white transition-colors"
        >
          <Search className="ml-4 size-4 shrink-0 text-neutral-400" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("nonLoggedInHome.search.placeholder")}
            className="w-full bg-transparent px-3 py-4 text-[14px] text-neutral-900 placeholder:text-neutral-400 outline-none dark:text-white dark:placeholder:text-neutral-500"
          />
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            aria-label={t("nonLoggedInHome.actions.search")}
            className="m-1 flex h-11 w-11 shrink-0 items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
          >
            <ArrowRight className="size-4" />
          </motion.button>
        </form>

        <div className="flex items-stretch gap-3 sm:gap-2">
          <button
            onClick={() => router.push("/auth/register")}
            className={`${fontMono} flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-opacity`}
          >
            {t("nonLoggedInHome.actions.signUp")}
          </button>
          <button
            onClick={() => router.push("/auth/login")}
            className={`${fontMono} flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:border-neutral-900 dark:hover:border-white transition-colors`}
          >
            {t("nonLoggedInHome.actions.signIn")}
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
}
