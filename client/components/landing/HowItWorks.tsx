"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { UserPlus, Search, Users, Activity, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const getSteps = (t: any) => [
    {
        title: t("landing.howItWorks.step1_title"),
        description: t("landing.howItWorks.step1_desc"),
        icon: <UserPlus className="w-8 h-8 text-primary" />,
    },
    {
        title: t("landing.howItWorks.step2_title"),
        description: t("landing.howItWorks.step2_desc"),
        icon: <Search className="w-8 h-8 text-primary" />,
    },
    {
        title: t("landing.howItWorks.step3_title"),
        description: t("landing.howItWorks.step3_desc"),
        icon: <Users className="w-8 h-8 text-primary" />,
    },
    {
        title: t("landing.howItWorks.step4_title"),
        description: t("landing.howItWorks.step4_desc"),
        icon: <Activity className="w-8 h-8 text-primary" />,
    },
    {
        title: t("landing.howItWorks.step5_title"),
        description: t("landing.howItWorks.step5_desc"),
        icon: <Star className="w-8 h-8 text-primary" />,
    }
];

export default function HowItWorks() {
    const { t } = useTranslation();
    const steps = getSteps(t);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // For tracking the scroll progress across the entire timeline wrapper
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="py-24 w-full max-w-5xl mx-auto px-6 overflow-x-hidden">
            {/* Header */}
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                >
                    {t("landing.howItWorks.title")}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
                >
                    {t("landing.howItWorks.subtitle")}
                </motion.p>
            </div>

            {/* Vertical Timeline Container */}
            <div ref={containerRef} className="relative mt-8 w-full pb-10">
                {/* Background vertical line */}
                <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-border/50 transform -translate-x-1/2 rounded-full z-0"></div>
                
                {/* Automated Animated filled vertical line */}
                <motion.div 
                    className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-primary transform -translate-x-1/2 origin-top rounded-full z-0"
                    style={{ scaleY }}
                />

                <div className="flex flex-col gap-16 relative z-10 w-full pt-4">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className="relative flex items-center w-full group min-h-[120px]">
                                {/* Number Circle (Center Point) */}
                                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground border-4 border-background shadow-sm transition-transform duration-300 z-20 group-hover:scale-110">
                                    {index + 1}
                                </div>

                                {/* Desktop: The Alternating Layout Container */}
                                <div className="w-full flex sm:flex-row flex-col relative justify-center">
                                    
                                    {/* Text Content Block */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-full sm:w-[45%] pl-14 sm:pl-0 pt-1 sm:pt-0 ${
                                            isEven 
                                                ? "sm:absolute sm:right-0 sm:text-left sm:pl-10" 
                                                : "sm:absolute sm:left-0 sm:text-right sm:pr-10"
                                        }`}
                                    >
                                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                            {step.description}
                                        </p>
                                        
                                        {/* Mobile Inline Icon */}
                                        <div className="sm:hidden mt-4">
                                            <div className="w-16 h-16 border-[3px] border-border rounded-full flex items-center justify-center bg-card">
                                                {step.icon}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Icon Decoration Block (Desktop Only) */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        className={`hidden sm:flex absolute top-1/2 -translate-y-1/2 items-center justify-center ${
                                            isEven 
                                                ? "left-0 w-[45%] pr-10 justify-end" 
                                                : "right-0 w-[45%] pl-10 justify-start"
                                        }`}
                                    >
                                        <div className="w-28 h-28 border-4 border-border rounded-full flex items-center justify-center bg-card group-hover:border-primary/40 group-hover:shadow-lg transition-all duration-500 z-10">
                                            {step.icon}
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}