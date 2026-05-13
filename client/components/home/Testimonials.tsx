"use client";

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Quote, Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATARS = {
  n1: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  n2: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  n3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  n4: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
} as const;

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Attribution({
  name,
  role,
  src,
}: {
  name: string;
  role: string;
  src: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
      <Avatar className="size-12 ring-1 ring-border">
        <AvatarImage src={src} alt={name} loading="lazy" />
        <AvatarFallback>{initials(name)}</AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <cite className="not-italic block text-sm font-medium text-foreground truncate">
          {name}
        </cite>
        <span className="text-muted-foreground block text-xs sm:text-sm truncate">
          {role}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]"
      />

      <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-16">
        {/* Header */}
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-foreground/40" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              {t("home.testimonials.eyebrow")}
            </span>
            <span className="h-px w-8 bg-foreground/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.02]"
          >
            <span className="text-muted-foreground/60">
              {t("home.testimonials.title1")}
            </span>{" "}
            {t("home.testimonials.title2")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            {t("home.testimonials.subtitle")}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="sm:col-span-2 lg:row-span-2"
          >
            <Card className="grid h-full grid-rows-[auto_1fr] gap-6 sm:p-6 relative overflow-hidden">
              <Quote
                aria-hidden
                className="absolute -top-2 -right-2 w-28 h-28 text-foreground/[0.04] dark:text-foreground/[0.06]"
                strokeWidth={1}
              />
              <CardHeader className="flex flex-row items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-foreground" />
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    {t("home.testimonials.featuredOrg")}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p
                    style={{ fontFamily: "var(--font-fraunces)" }}
                    className="text-xl md:text-2xl font-medium leading-snug tracking-tight text-foreground"
                  >
                    &ldquo;{t("home.testimonials.t1")}&rdquo;
                  </p>
                  <Attribution
                    name={t("home.testimonials.n1")}
                    role={t("home.testimonials.r1")}
                    src={AVATARS.n1}
                  />
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          {/* Wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2"
          >
            <Card className="h-full">
              <CardContent className="h-full">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-base md:text-lg font-medium leading-relaxed text-foreground">
                    &ldquo;{t("home.testimonials.t2")}&rdquo;
                  </p>
                  <Attribution
                    name={t("home.testimonials.n2")}
                    role={t("home.testimonials.r2")}
                    src={AVATARS.n2}
                  />
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          {/* Small */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="h-full">
              <CardContent className="h-full">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-sm md:text-base leading-relaxed text-foreground">
                    &ldquo;{t("home.testimonials.t3")}&rdquo;
                  </p>
                  <Attribution
                    name={t("home.testimonials.n3")}
                    role={t("home.testimonials.r3")}
                    src={AVATARS.n3}
                  />
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          {/* Small */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="h-full">
              <CardContent className="h-full">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-sm md:text-base leading-relaxed text-foreground">
                    &ldquo;{t("home.testimonials.t4")}&rdquo;
                  </p>
                  <Attribution
                    name={t("home.testimonials.n4")}
                    role={t("home.testimonials.r4")}
                    src={AVATARS.n4}
                  />
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
