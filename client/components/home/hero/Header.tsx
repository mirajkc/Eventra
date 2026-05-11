"use client";

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { blurIn, fadeUp, fontDisplay, fontMono, stagger } from "./motion";

interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  const { t } = useTranslation();
  const firstName = name.split(" ")[0] || name;

  return (
    <motion.header
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-5 pt-12 pb-10 border-b border-neutral-200 dark:border-neutral-800"
    >
      <motion.span
        variants={fadeUp}
        className={`${fontMono} text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400`}
      >
        Eventra
      </motion.span>

      <motion.h1
        variants={blurIn}
        className={`${fontDisplay} font-light text-neutral-900 dark:text-white leading-[0.95] tracking-[-0.02em] text-[clamp(2.5rem,7vw,5.5rem)]`}
      >
        {t("loggedInHome.welcome")}{" "}
        <span className="italic font-medium">{firstName}.</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="max-w-xl text-[15px] md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        {t("loggedInHome.subtitle")}
      </motion.p>
    </motion.header>
  );
}
