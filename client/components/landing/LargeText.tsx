"use client";

import BlurText from "../BlurText";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function LargeText() {
    const { t } = useTranslation();

    return (
        <section className="min-h-screen w-full flex items-center justify-center overflow-hidden select-none bg-white dark:bg-neutral-950">
            <div className="flex flex-col items-center justify-center w-full px-4">
                <BlurText
                    text={t("landing.hero.title")}
                    delay={150}
                    animateBy="letters"
                    direction="top"
                    className="text-[18vw] md:text-[18vw] font-[1000] xl:text-[14vw] tracking-[-0.08em] leading-[0.8] text-zinc-900 dark:text-zinc-100 uppercase"
                />

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 1.2, ease: "circOut" }}
                    className="w-full max-w-[90vw] h-[0.5vw] bg-zinc-900 dark:bg-zinc-100 mt-[2vw] origin-left"
                />

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="mt-8 text-sm md:text-xl font-medium tracking-[0.5em] text-zinc-400 dark:text-zinc-600 uppercase"
                >
                    {t("landing.hero.subtitle")}
                </motion.p>
            </div>
        </section>
    );
}