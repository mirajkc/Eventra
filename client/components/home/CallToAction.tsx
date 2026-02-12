"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { TypographyH1, TypographyP } from "@/components/ui/Typography";

export default function CallToAction() {
  const router = useRouter();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Background Grid Pattern - Matching Hero */}
      <div className="absolute inset-x-0 top-0 -z-10 h-full w-full bg-size-[40px_40px] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]" />

      <div className="container relative mx-auto px-6 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TypographyH1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
              Ready to experience <br className="hidden sm:block" />
              <span className="text-muted-foreground/60">the magic?</span>
            </TypographyH1>
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <TypographyP className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Join thousands of organizers building incredible events with Eventra.
              Start for free and see how easily you can scale your vision.
            </TypographyP>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button
              onClick={() => router.push("/auth/register")}
              size="lg"
              className="w-full sm:w-auto h-14 rounded-xl bg-slate-900 px-10 text-base font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 shadow-xl shadow-slate-900/10 dark:shadow-none hover:cursor-pointer"
            >
              Get started for free
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => router.push("/events")}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-14 rounded-xl border-border px-10 text-base font-semibold shadow-sm transition-all hover:bg-muted hover:scale-[1.02] active:scale-[0.98] hover:cursor-pointer"
            >
              Explore events
            </Button>
          </motion.div>

          {/* Trust Badge / Footer Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-sm text-muted-foreground/60 font-medium"
          >
            No credit card required. Instant access.
          </motion.p>
        </div>
      </div>

      {/* Decorative Gradient - Matching Hero */}
      <div className="absolute bottom-0 -z-20 h-full w-full bg-background" />
      <div className="absolute -bottom-[20%] left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
    </section>
  );
}