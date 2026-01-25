"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TypographyH3, TypographyP } from "../ui/Typography";

export default function ScreenShotShowcase() {
  return (
    <section className="relative px-6 py-12 lg:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <TypographyH3 className="mb-4">A event management system created to be yours. </TypographyH3>
      <TypographyP className="mb-12">Tweak anything and everything to your liking.
        <br /> See how our platform can transform your event planning and management.</TypographyP>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Desktop Showcase */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)]">
              {/* Browser Header */}
              <div className="flex items-center gap-1.5 border-b border-border bg-muted/30 px-5 py-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="ml-4 h-5 w-48 rounded-md bg-muted/50" />
              </div>
              
             
              <div className="relative aspect-video">
                <Image
                  src="/event_desktop.png"
                  alt="Eventra Dashboard Desktop"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile Showcase */}
          <div className="md:hidden flex justify-center">
             <div className="relative w-full max-w-[300px] overflow-hidden rounded-[2.5rem] border-slate-900 bg-slate-900 shadow-2xl dark:border-slate-800">
                <Image
                  src="/event_mobile.png"
                  alt="Eventra Dashboard Mobile"
                  width={300}
                  height={650}
                  className="w-full rounded-[1.8rem]"
                  priority
                />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}