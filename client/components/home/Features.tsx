"use client";

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
    Zap,
    Users,
    BarChart3,
    Filter,
    Layers,
    Sparkles,
    ChevronUp,
    ChevronDown,
    ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";

function MockShell({ children }: { children: ReactNode }) {
    return (
        <div className="relative h-44 sm:h-48 -mx-2 mb-6 rounded-xl overflow-hidden border border-border bg-foreground/[0.015] dark:bg-foreground/[0.03]">
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, currentColor 0.7px, transparent 0.7px)",
                    backgroundSize: "14px 14px",
                    backgroundPosition: "0 0",
                }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
                {children}
            </div>
        </div>
    );
}

function QuickActionsMock() {
    return (
        <MockShell>
            <div className="relative w-full max-w-[230px]">
                <div className="rounded-xl border border-border bg-card shadow-[0_18px_40px_-22px_rgba(0,0,0,0.3)] p-3 flex items-center gap-2.5">
                    <span className="font-mono text-[10px] tracking-wider px-1.5 py-0.5 rounded border border-border bg-foreground/[0.04]">
                        ⌘K
                    </span>
                    <div className="flex-1 space-y-1.5">
                        <div className="h-1.5 w-3/4 rounded-full bg-foreground/30" />
                        <div className="h-1.5 w-1/2 rounded-full bg-foreground/12" />
                    </div>
                    <Zap className="w-4 h-4 text-foreground" strokeWidth={2.25} />
                </div>
                <div className="absolute -bottom-7 left-4 right-12 rounded-xl border border-dashed border-border bg-card/70 backdrop-blur-sm p-2.5 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-foreground/85" />
                    <div className="h-1.5 flex-1 rounded-full bg-foreground/15" />
                </div>
            </div>
        </MockShell>
    );
}

function GuestEnrichmentMock() {
    return (
        <MockShell>
            <div className="relative w-full max-w-[220px]">
                <div className="rounded-xl border border-border bg-card p-3 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-md bg-foreground/85" />
                        <div className="flex-1 space-y-1">
                            <div className="h-1.5 w-3/4 rounded-full bg-foreground/30" />
                            <div className="h-1.5 w-1/2 rounded-full bg-foreground/12" />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="h-1.5 w-full rounded-full bg-foreground/8" />
                        <div className="h-1.5 w-5/6 rounded-full bg-foreground/8" />
                    </div>
                    <div className="mt-2.5 flex items-center justify-between">
                        <span className="font-mono text-[9px] tracking-wider text-muted-foreground">
                            PUBLIC
                        </span>
                        <span className="text-[10px] inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 bg-foreground text-background">
                            RSVP <ArrowRight className="w-2.5 h-2.5" />
                        </span>
                    </div>
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-foreground" />
            </div>
        </MockShell>
    );
}

function ResponsiveMock() {
    return (
        <MockShell>
            <div className="flex items-end gap-3">
                <div className="w-16 aspect-[3/5] rounded-[10px] border-[3px] border-foreground/85 bg-card p-1 flex flex-col gap-1">
                    <div className="h-1 w-1/2 mx-auto rounded-full bg-foreground/30" />
                    <div className="flex-1 rounded-sm bg-foreground/8" />
                </div>
                <div className="w-28 aspect-[4/3] rounded-md border-[3px] border-foreground/85 bg-card p-1.5 flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-foreground/30" />
                        <div className="w-1 h-1 rounded-full bg-foreground/30" />
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-1">
                        <div className="rounded-sm bg-foreground/8" />
                        <div className="rounded-sm bg-foreground" />
                        <div className="rounded-sm bg-foreground/8" />
                    </div>
                </div>
            </div>
        </MockShell>
    );
}

function AnalyticsMock() {
    const bars = [40, 70, 55, 95, 65, 80];
    return (
        <MockShell>
            <div className="w-full max-w-[230px]">
                <div className="rounded-xl border border-border bg-card p-3 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center justify-between mb-3">
                        <div className="h-1.5 w-16 rounded-full bg-foreground/30" />
                        <BarChart3 className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                        {bars.map((h, i) => (
                            <div
                                key={i}
                                style={{ height: `${h}%` }}
                                className={`flex-1 rounded-sm ${i === 3 ? "bg-foreground" : "bg-foreground/15"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                        <span className="font-mono text-[9px] tracking-wider text-muted-foreground">
                            APR — SEP
                        </span>
                        <span className="font-mono text-[10px] font-medium">+24%</span>
                    </div>
                </div>
            </div>
        </MockShell>
    );
}

function FiltersMock() {
    const chips = [
        { label: "Workshop", active: true },
        { label: "Today", active: false },
        { label: "Free", active: true },
        { label: "Online", active: false },
        { label: "Near me", active: false },
    ];
    return (
        <MockShell>
            <div className="w-full max-w-[220px] flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Filter className="w-3.5 h-3.5 text-foreground" />
                    <div className="h-1.5 w-14 rounded-full bg-foreground/30" />
                    <div className="ml-auto h-1.5 w-6 rounded-full bg-foreground/15" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {chips.map((c) => (
                        <span
                            key={c.label}
                            className={`text-[10px] px-2 py-1 rounded-full border ${c.active
                                    ? "bg-foreground text-background border-foreground"
                                    : "border-border text-muted-foreground bg-card"
                                }`}
                        >
                            {c.label}
                        </span>
                    ))}
                </div>
            </div>
        </MockShell>
    );
}

function SortingMock() {
    const rows = [
        { rank: 1, w: "75%", up: true },
        { rank: 2, w: "55%", up: true },
        { rank: 3, w: "85%", up: false },
    ];
    return (
        <MockShell>
            <div className="w-full max-w-[220px] space-y-1.5">
                {rows.map((row) => (
                    <div
                        key={row.rank}
                        className="flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5"
                    >
                        <span className="font-mono text-[10px] w-4 text-muted-foreground">
                            0{row.rank}
                        </span>
                        <div className="flex-1">
                            <div
                                className="h-1.5 rounded-full bg-foreground/30"
                                style={{ width: row.w }}
                            />
                        </div>
                        {row.up ? (
                            <ChevronUp className="w-3 h-3 text-foreground" />
                        ) : (
                            <ChevronDown className="w-3 h-3 text-muted-foreground" />
                        )}
                    </div>
                ))}
                <div className="flex items-center gap-1.5 pt-0.5">
                    <Layers className="w-3 h-3 text-muted-foreground" />
                    <span className="font-mono text-[9px] tracking-wider text-muted-foreground">
                        SORTED BY ATTENDANCE
                    </span>
                </div>
            </div>
        </MockShell>
    );
}

export default function Features() {
    const { t } = useTranslation();

    const features = [
        {
            titleKey: "home.more.features.f1_title",
            descKey: "home.more.features.f1_desc",
            Mockup: QuickActionsMock,
        },
        {
            titleKey: "home.more.features.f2_title",
            descKey: "home.more.features.f2_desc",
            Mockup: GuestEnrichmentMock,
        },
        {
            titleKey: "home.more.features.f3_title",
            descKey: "home.more.features.f3_desc",
            Mockup: ResponsiveMock,
        },
        {
            titleKey: "home.more.features.f4_title",
            descKey: "home.more.features.f4_desc",
            Mockup: AnalyticsMock,
        },
        {
            titleKey: "home.more.features.f5_title",
            descKey: "home.more.features.f5_desc",
            Mockup: FiltersMock,
        },
        {
            titleKey: "home.more.features.f6_title",
            descKey: "home.more.features.f6_desc",
            Mockup: SortingMock,
        },
    ];

    return (
        <section className="relative w-full py-20 lg:py-28 overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-40 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]"
            />

            {/* header */}
            <div className="relative max-w-2xl mx-auto px-6 text-center mb-14 lg:mb-20">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 mb-7"
                >
                    <Sparkles className="w-3 h-3" />
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                        Features
                    </span>
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontFamily: "var(--font-fraunces)" }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.02]"
                >
                    {t("home.more.title_discover")}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto"
                >
                    {t("home.more.subtitle_discover")}
                </motion.p>
            </div>

            {/* cards */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {features.map((f, i) => {
                        const { Mockup } = f;
                        return (
                            <motion.li
                                key={f.titleKey}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: (i % 3) * 0.08 + Math.floor(i / 3) * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="group rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-7 transition-colors duration-300 hover:border-foreground/30"
                            >
                                <Mockup />
                                <h3
                                    style={{ fontFamily: "var(--font-fraunces)" }}
                                    className="text-xl sm:text-2xl font-medium tracking-tight text-foreground"
                                >
                                    {t(f.titleKey)}
                                </h3>
                                <p className="mt-2.5 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                                    {t(f.descKey)}
                                </p>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
