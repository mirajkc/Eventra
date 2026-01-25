"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background Grid Pattern */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]" />

      <div className="container relative mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="group flex items-center gap-2 rounded-full border border-border bg-background/50 p-1 pr-3 text-sm backdrop-blur-sm transition-all hover:bg-muted/50">
            <Badge className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900">
              New
            </Badge>
            <span className="flex items-center gap-1 text-muted-foreground transition-colors group-hover:text-foreground">
              Eventra is now live! 🎉
              <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TypographyH1 className="max-w-4xl text-5xl font-bold tracking-[-0.03em] text-foreground sm:text-7xl lg:text-8xl">
            Event management magic.
          </TypographyH1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypographyP className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Powerful, flexible and data-driven, Eventra makes it easy <br className="hidden md:block" />
            to build the exact event that you think of.
          </TypographyP>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          <Button
          onClick={() => router.push("/events")}
           size="lg" className="h-14 rounded-xl bg-slate-900 px-10 text-base font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">
            Explore Events
          </Button>
          <Button 
          onClick={() => router.push("/organizations")}
          variant="outline" size="lg" className="h-14 rounded-xl border-border px-10 text-base font-semibold shadow-sm transition-all hover:bg-muted hover:scale-[1.02] active:scale-[0.98]">
            Join Organizations
          </Button>
        </motion.div>
      </div>

      {/* Decorative Gradients for depth */}
      <div className="absolute top-0 -z-20 h-full w-full bg-background" />
      <div className="absolute -top-[10%] left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
    </section>
  );
}