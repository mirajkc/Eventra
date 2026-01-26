"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
    {
        question: "What is Eventra?",
        answer: "Eventra is an all-in-one event management platform designed to help organizations and individuals create, manage, and promote events with ease."
    },
    {
        question: "How do I create an event on Eventra?",
        answer: "Creating an event is simple! You need to create an organization and in that organization you can create events. However, if you want to create the event from other organizations the owner of that organization should promote you as the creator.  "
    },
    {
        question: "Is Eventra responsive and mobile-friendly?",
        answer: "Yes, Eventra is built with a mobile-first approach. Whether you're an organizer managing from your phone or an attendee browsing events, the interface is fully responsive across all devices."
    },
    {
        question: "Does Eventra support both Light and Dark modes?",
        answer: "Absolutely! We focus on user experience, providing a sleek interface that supports both light and dark themes to ensure comfortable browsing in any environment."
    },
    {
        question: "Can I manage registered members and certificates?",
        answer: "Yes, Eventra allows you to track registered members in real-time. You can manage attendee lists, send notifications."
    },
    {
        question: "Is my data secure with Eventra?",
        answer: "Security is our top priority. Eventra uses industry-standard encryption and secure data storage practices. We also implement rate limiting and protection against common web attacks to keep your information safe."
    }
];

export default function FreqentlyAskedQuestions() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-background text-foreground overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-400/20 dark:bg-green-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-10 -left-10 w-32 h-32 bg-green-400/60 dark:bg-green-500/30 rounded-full -z-10" />
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-red-400/60 dark:bg-red-500/30 rounded-full -z-10" />
            <div className="absolute top-20 right-10 w-20 h-10 bg-purple-500/80 dark:bg-purple-600/40 rounded-full rotate-[30deg] -z-10 skew-x-12" />

            <div className="max-w-4xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-6">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full text-left p-8 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                                    openIndex === index 
                                    ? "bg-secondary/50 dark:bg-secondary/20 shadow-sm" 
                                    : "bg-secondary/20 dark:bg-secondary/10 hover:bg-secondary/30"
                                }`}
                            >
                                <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground/90">
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full border border-foreground/20 group-hover:border-foreground/40 transition-colors ${
                                    openIndex === index ? "bg-foreground text-background" : ""
                                }`}>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-6 h-6" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 pt-2 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}