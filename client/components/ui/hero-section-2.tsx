"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from 'motion/react';

interface HeroSectionProps extends Omit<HTMLMotionProps<"section">, 'title'> {
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    onClick?: () => void;
  };
  backgroundImage: string;
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  ({ className, title, subtitle, callToAction, backgroundImage, ...props }, ref) => {

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut" as const,
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row min-h-[600px]",
          className
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        {...props}
      >
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-24">
          <div>
            <motion.main variants={containerVariants}>
              <motion.h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl" variants={itemVariants}>
                {title}
              </motion.h1>
              <motion.div className="my-8 h-1.5 w-24 bg-primary rounded-full" variants={itemVariants}></motion.div>
              <motion.p className="mb-10 max-w-lg text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                {subtitle}
              </motion.p>
              <motion.button
                onClick={callToAction.onClick}
                className="text-xl font-bold tracking-widest text-primary transition-all hover:text-primary/80 hover:translate-x-2 flex items-center group cursor-pointer"
                variants={itemVariants}
              >
                {callToAction.text}
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </motion.button>
            </motion.main>
          </div>
        </div>

        <motion.div
          className="relative w-full min-h-[400px] md:w-1/2 md:min-h-full lg:w-2/5"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          whileInView={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            quality={70}
            loading="lazy"
            className="object-cover"
          />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
