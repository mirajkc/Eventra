"use client";

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

function ProfileMockup() {
    return (
        <div className="relative w-full max-w-[240px] mx-auto">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-foreground/[0.04] to-transparent blur-xl" aria-hidden />
            <div className="relative aspect-[5/4] rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] overflow-hidden">
                <div className="h-7 bg-foreground/[0.04] dark:bg-foreground/[0.06] border-b border-border flex items-center px-3 gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/25" />
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/25" />
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/25" />
                    <div className="ml-auto h-2 w-14 rounded-full bg-foreground/10" />
                </div>
                <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-foreground/85" />
                        <div className="flex-1 space-y-1.5">
                            <div className="h-1.5 w-3/4 rounded-full bg-foreground/30" />
                            <div className="h-1.5 w-1/2 rounded-full bg-foreground/15" />
                        </div>
                    </div>
                    <div className="space-y-1.5 pt-1">
                        <div className="h-2 rounded-sm bg-foreground/8" />
                        <div className="h-2 rounded-sm bg-foreground/8 w-11/12" />
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                        <div className="h-5 w-16 rounded-md bg-foreground" />
                        <div className="h-5 w-10 rounded-md border border-border" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function DiscoverMockup() {
    return (
        <div className="relative w-full max-w-[240px] mx-auto">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-foreground/[0.04] to-transparent blur-xl" aria-hidden />
            <div className="relative h-[180px]">
                <div className="absolute left-0 top-6 w-[78%] aspect-[5/2.2] rounded-xl border border-border bg-card shadow-[0_18px_40px_-22px_rgba(0,0,0,0.3)] flex items-center gap-3 px-3">
                    <div className="w-9 h-9 rounded-md bg-foreground/85" />
                    <div className="flex-1 space-y-1.5">
                        <div className="h-1.5 w-3/4 rounded-full bg-foreground/30" />
                        <div className="h-1.5 w-1/2 rounded-full bg-foreground/12" />
                    </div>
                </div>
                <div className="absolute right-0 top-[58px] w-[78%] aspect-[5/2.2] rounded-xl border border-border bg-card shadow-[0_18px_40px_-22px_rgba(0,0,0,0.3)] flex items-center gap-3 px-3">
                    <div className="w-9 h-9 rounded-md border border-border bg-foreground/[0.04]" />
                    <div className="flex-1 space-y-1.5">
                        <div className="h-1.5 w-2/3 rounded-full bg-foreground/30" />
                        <div className="h-1.5 w-2/5 rounded-full bg-foreground/12" />
                    </div>
                    <div className="h-5 w-10 rounded-md bg-foreground" />
                </div>
                <div className="absolute left-3 top-[110px] w-[78%] aspect-[5/2.2] rounded-xl border border-border bg-card shadow-[0_18px_40px_-22px_rgba(0,0,0,0.3)] flex items-center gap-3 px-3">
                    <div className="w-9 h-9 rounded-md bg-foreground/[0.12]" />
                    <div className="flex-1 space-y-1.5">
                        <div className="h-1.5 w-2/3 rounded-full bg-foreground/30" />
                        <div className="h-1.5 w-1/3 rounded-full bg-foreground/12" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ReserveMockup() {
    return (
        <div className="relative w-full max-w-[240px] mx-auto">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-foreground/[0.04] to-transparent blur-xl" aria-hidden />
            <div className="relative aspect-[5/4] rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] overflow-hidden p-3">
                <div className="grid grid-cols-2 gap-2 h-full">
                    <div className="rounded-lg border border-border bg-foreground/[0.02] p-2 flex flex-col gap-1.5">
                        <div className="h-1.5 w-2/3 rounded-full bg-foreground/30" />
                        <div className="flex-1 grid grid-cols-4 gap-1 mt-1">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`rounded-[3px] ${i === 5 ? "bg-foreground" : "bg-foreground/8"}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="rounded-lg border border-border bg-foreground/[0.02] p-2 flex flex-col gap-1.5">
                        <div className="h-1.5 w-3/4 rounded-full bg-foreground/30" />
                        <div className="h-1.5 w-1/2 rounded-full bg-foreground/12" />
                        <div className="mt-auto space-y-1.5">
                            <div className="h-1.5 w-full rounded-full bg-foreground/8" />
                            <div className="h-1.5 w-5/6 rounded-full bg-foreground/8" />
                            <div className="h-5 w-full rounded-md bg-foreground mt-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LiveMockup() {
    return (
        <div className="relative w-full max-w-[240px] mx-auto">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-foreground/[0.04] to-transparent blur-xl" aria-hidden />
            <div className="absolute -left-2 top-3 w-[55%] aspect-[3/4] rounded-xl border border-border bg-card shadow-[0_14px_30px_-20px_rgba(0,0,0,0.3)] rotate-[-6deg]" aria-hidden />
            <div className="absolute -right-2 top-1 w-[55%] aspect-[3/4] rounded-xl border border-border bg-card shadow-[0_14px_30px_-20px_rgba(0,0,0,0.3)] rotate-[6deg]" aria-hidden />
            <div className="relative mx-auto w-[78%] aspect-[3/4] rounded-2xl border border-border bg-card shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)] dark:shadow-[0_36px_90px_-30px_rgba(0,0,0,0.7)] overflow-hidden p-3 flex flex-col gap-2">
                <div className="h-2 w-1/2 rounded-full bg-foreground/30" />
                <div className="h-1.5 w-2/3 rounded-full bg-foreground/12" />
                <div className="mt-1 flex-1 rounded-lg bg-foreground/[0.04] border border-dashed border-border grid grid-cols-5 grid-rows-5 gap-[2px] p-1.5">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div
                            key={i}
                            className={`rounded-[1px] ${[0, 1, 4, 5, 9, 11, 13, 16, 19, 20, 21, 24].includes(i) ? "bg-foreground/85" : "bg-transparent"}`}
                        />
                    ))}
                </div>
                <div className="h-1.5 w-3/4 rounded-full bg-foreground/12" />
            </div>
            <motion.div
                initial={{ scale: 0, rotate: -30, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.55, type: "spring", stiffness: 220, damping: 16 }}
                className="absolute -top-3 -right-3 w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center shadow-[0_12px_30px_-10px_rgba(0,0,0,0.45)] ring-4 ring-background"
            >
                <Check className="w-5 h-5" strokeWidth={3} />
            </motion.div>
        </div>
    );
}

const STEPS = [
    {
        titleKey: "landing.howItWorks.step1_title",
        descKey: "landing.howItWorks.step1_desc",
        Mockup: ProfileMockup,
        lift: "lg:translate-y-6",
    },
    {
        titleKey: "landing.howItWorks.step2_title",
        descKey: "landing.howItWorks.step2_desc",
        Mockup: DiscoverMockup,
        lift: "lg:-translate-y-3",
    },
    {
        titleKey: "landing.howItWorks.step3_title",
        descKey: "landing.howItWorks.step3_desc",
        Mockup: ReserveMockup,
        lift: "lg:translate-y-4",
    },
    {
        titleKey: "landing.howItWorks.step4_title",
        descKey: "landing.howItWorks.step4_desc",
        Mockup: LiveMockup,
        lift: "lg:-translate-y-10",
    },
] as const;

export default function HowItWorks() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full py-20 lg:py-28 overflow-hidden">
            {/* atmosphere */}
            <div
                className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]"
                aria-hidden
            />

            {/* header */}
            <div className="relative text-center max-w-2xl mx-auto px-6 mb-16 lg:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 mb-7"
                >
                    <span className="h-px w-8 bg-foreground/40" />
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                        {t("landing.howItWorks.eyebrow")}
                    </span>
                    <span className="h-px w-8 bg-foreground/40" />
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontFamily: "var(--font-fraunces)" }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[0.95]"
                >
                    {t("landing.howItWorks.title")}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto"
                >
                    {t("landing.howItWorks.subtitle")}
                </motion.p>
            </div>

            {/* steps row */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                {/* desktop curve overlay */}
                <svg
                    aria-hidden
                    className="hidden lg:block absolute left-0 right-0 top-[80px] w-full h-[280px] pointer-events-none text-foreground/35"
                    viewBox="0 0 1200 280"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                        d="M 180 200 C 240 270 320 270 380 195 C 430 130 470 80 540 80 C 610 80 640 175 700 200 C 760 225 800 240 870 200 C 930 165 950 110 1010 70"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="2 7"
                        strokeLinecap="round"
                    />
                    <motion.circle
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ delay: 1.6, duration: 0.4 }}
                        cx="180"
                        cy="200"
                        r="3.5"
                        fill="currentColor"
                    />
                    <motion.circle
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ delay: 1.7, duration: 0.4 }}
                        cx="1010"
                        cy="70"
                        r="3.5"
                        fill="currentColor"
                    />
                </svg>

                <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-4 gap-y-20 lg:gap-y-0 relative">
                    {STEPS.map((step, i) => {
                        const { Mockup } = step;
                        return (
                            <li key={i} className="relative flex flex-col items-center">
                                {/* mobile vertical connector */}
                                {i < STEPS.length - 1 && (
                                    <span
                                        aria-hidden
                                        className="sm:hidden absolute left-1/2 -translate-x-1/2 -bottom-[68px] h-14 w-px border-l border-dashed border-foreground/30"
                                    />
                                )}

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{
                                        duration: 0.7,
                                        delay: i * 0.12,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className={`w-full flex justify-center ${step.lift}`}
                                >
                                    <Mockup />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                                    className={`mt-7 lg:mt-10 text-center px-2 max-w-[240px] ${step.lift}`}
                                >
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="h-px w-4 bg-foreground/30" />
                                    </div>
                                    <h3
                                        style={{ fontFamily: "var(--font-fraunces)" }}
                                        className="text-xl md:text-2xl font-medium tracking-tight text-foreground"
                                    >
                                        {t(step.titleKey)}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                        {t(step.descKey)}
                                    </p>
                                </motion.div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
