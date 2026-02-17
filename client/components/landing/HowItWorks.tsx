"use client";

import { motion } from "motion/react";
import { UserPlus, Search, Users } from "lucide-react";

const steps = [
    {
        title: "Create Account",
        description: "Enter your information and ensure your details are safe and secure with our platform.",
        icon: <UserPlus className="w-10 h-10 text-zinc-900 dark:text-zinc-100" />,
        delay: 0.2
    },
    {
        title: "Visit Events",
        description: "Explore thousands of events happening around you or globally with ease.",
        icon: <Search className="w-10 h-10 text-zinc-900 dark:text-zinc-100" />,
        delay: 0.4
    },
    {
        title: "Join Them",
        description: "Join the community, participate in events, and create memories that last a lifetime.",
        icon: <Users className="w-10 h-10 text-zinc-900 dark:text-zinc-100" />,
        delay: 0.6
    }
];

export default function HowItWorks() {
    return (
        <section className="py-32 w-full max-w-7xl mx-auto px-6 relative overflow-visible">
            {/* Header */}
            <div className="text-center mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight"
                >
                    How it works
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                >
                    Simple steps to start your journey with Eventra
                </motion.p>
            </div>

            {/* Steps Container */}
            <div className="relative">
                {/* Dotted Connection Path (Desktop) */}
                <div className="hidden lg:block absolute top-[20%] left-[15%] right-[15%] h-32 -z-10 overflow-visible">
                    <svg width="100%" height="100%" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
                        <motion.path
                            d="M0,60 C150,60 150,10 333,10 C516,10 516,110 666,110 C816,110 816,60 1000,60"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            className="text-zinc-200 dark:text-zinc-800"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: step.delay }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon Wrapper */}
                            <div className="relative mb-10">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white dark:bg-zinc-900/50 backdrop-blur-xl rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500"
                                >
                                    <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

                                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                                        {step.icon}
                                    </div>

                                    {/* Number Badge (Neutral) */}
                                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 text-sm font-bold shadow-lg border-2 border-white dark:border-zinc-900">
                                        {index + 1}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
                                {step.title}
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[300px] text-lg">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}