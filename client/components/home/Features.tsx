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
} from "lucide-react";
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";

export default function Features() {
  const { t } = useTranslation();

  const featuresData: TimelineItem[] = [
    {
      id: 1,
      title: t("home.more.features.f1_title"),
      content: t("home.more.features.f1_desc"),
      date: "",
      category: "Feature",
      icon: Zap,
      relatedIds: [2, 4],
      status: "completed",
      energy: 95,
    },
    {
      id: 2,
      title: t("home.more.features.f2_title"),
      content: t("home.more.features.f2_desc"),
      date: "",
      category: "Engagement",
      icon: Sparkles,
      relatedIds: [1, 3],
      status: "completed",
      energy: 85,
    },
    {
      id: 3,
      title: t("home.more.features.f3_title"),
      content: t("home.more.features.f3_desc"),
      date: "",
      category: "Community",
      icon: Users,
      relatedIds: [2, 5],
      status: "completed",
      energy: 100,
    },
    {
      id: 4,
      title: t("home.more.features.f4_title"),
      content: t("home.more.features.f4_desc"),
      date: "",
      category: "Analytics",
      icon: BarChart3,
      relatedIds: [1, 6],
      status: "completed",
      energy: 70,
    },
    {
      id: 5,
      title: t("home.more.features.f5_title"),
      content: t("home.more.features.f5_desc"),
      date: "",
      category: "Management",
      icon: Filter,
      relatedIds: [3, 6],
      status: "completed",
      energy: 80,
    },
    {
      id: 6,
      title: t("home.more.features.f6_title"),
      content: t("home.more.features.f6_desc"),
      date: "",
      category: "Organization",
      icon: Layers,
      relatedIds: [4, 5],
      status: "completed",
      energy: 90,
    },
  ];

  return (
    <section className="bg-background py-24 text-foreground overflow-hidden w-full relative">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {t("home.more.title_discover")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            {t("home.more.subtitle_discover")}
          </motion.p>
        </div>
      </div>

      {/* Orbit Visualization */}
      <div className="w-full relative h-[600px]">
        <RadialOrbitalTimeline timelineData={featuresData} />
      </div>
    </section>
  );
}
