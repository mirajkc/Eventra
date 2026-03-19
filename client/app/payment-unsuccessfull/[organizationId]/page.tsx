"use client";

import React, { use } from "react";
import Link from "next/link";
import { XCircle, RefreshCcw, Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

interface UnsuccessfulPaymentProps {
    params: Promise<{
        organizationId: string;
    }>;
}

export default function UnsuccessfulPaymentPage({
    params,
}: UnsuccessfulPaymentProps) {
    const { organizationId } = use(params);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
            {/* Decorative background elements */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-destructive/10 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-lg px-6"
            >
                <div className="bg-card/40 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] text-center flex flex-col items-center overflow-hidden relative">
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-white/10 to-transparent dark:from-white/5 opacity-50" />

                    {/* Animated Error Icon Container */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                        className="relative mb-8"
                    >
                        <div className="absolute inset-0 bg-destructive/20 rounded-full blur-2xl animate-pulse" />
                        <div className="relative bg-destructive/10 p-5 rounded-full border border-destructive/20 shadow-inner">
                            <XCircle className="w-16 h-16 text-destructive" strokeWidth={1.5} />
                        </div>
                    </motion.div>

                    {/* Heading and Description */}
                    <div className="space-y-4 mb-10 relative z-10">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl md:text-4xl font-bold tracking-tight bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent"
                        >
                            Payment Unsuccessful
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-muted-foreground text-lg max-w-xs mx-auto leading-relaxed font-light"
                        >
                            We couldn't process your transaction. Please check your card or bank details.
                        </motion.p>
                    </div>

                    {/* Detailed Error Box */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="w-full bg-destructive/5 border border-destructive/10 rounded-2xl p-4 mb-10 flex items-start gap-3 text-left relative z-10 group transition-colors hover:bg-destructive/10"
                    >
                        <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <p className="text-sm text-destructive-foreground/80 leading-relaxed">
                            Common reasons include insufficient funds, expired card, or network errors.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10"
                    >
                        <Button
                            asChild
                            className="h-12 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all duration-300"
                        >
                            <Link href={`/organization/${organizationId}`} className="flex items-center justify-center gap-2">
                                <RefreshCcw className="w-4 h-4" />
                                Try Again
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            asChild
                            className="h-12 text-base font-semibold rounded-xl border-border/60 hover:border-border hover:bg-accent/50 active:scale-95 transition-all duration-300"
                        >
                            <Link href="/" className="flex items-center justify-center gap-2">
                                <Home className="w-4 h-4" />
                                Return Home
                            </Link>
                        </Button>
                    </motion.div>

                </div>
            </motion.div>
        </div>
    );
}
