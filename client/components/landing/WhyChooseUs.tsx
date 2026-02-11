"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const features = [
    "Manage events with ease and efficiency.",
    "Secure transactions and instant payouts.",
    "24/7 dedicated support for organizers.",
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl w-full flex flex-col items-center gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="px-5 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest rounded-full">
                        Why Choose Eventra
                    </span>
                </motion.div>

                <div className="flex flex-col items-center gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] text-zinc-900 dark:text-zinc-100 max-w-3xl"
                    >
                        Everything you need to manage events effortlessly.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl"
                    >
                        Whether you're organizing a small meetup or a large-scale conference, Eventra provides the tools and security to make it a success.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                            className="flex flex-col items-center gap-4 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
                        >
                            <div className="p-3 bg-zinc-900 dark:bg-zinc-100 rounded-2xl shadow-lg ring-4 ring-zinc-100 dark:ring-zinc-800">
                                <CheckCircle2 className="w-6 h-6 text-white dark:text-zinc-900" />
                            </div>
                            <span className="text-zinc-700 dark:text-zinc-300 font-semibold group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                                {feature}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
