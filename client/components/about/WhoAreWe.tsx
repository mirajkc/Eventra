"use client";

import { Rocket, Lightbulb, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

const WhoAreWe = () => {
    return (
        <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-background text-foreground overflow-hidden">      
            {/* Scattered Circles */}
            <div className="absolute top-[45%] right-[5%] w-5 h-5 bg-teal-200/40 dark:bg-teal-500/20 rounded-full" />
            <div className="absolute bottom-[40%] right-[20%] w-6 h-6 bg-teal-100/30 dark:bg-teal-400/10 rounded-full" />
            <div className="absolute bottom-[35%] right-[4%] w-6 h-6 bg-red-200/40 dark:bg-red-500/20 rounded-full" />
            <div className="absolute bottom-[20%] right-[10%] w-5 h-5 bg-blue-200/40 dark:bg-blue-500/20 rounded-full" />
            <div className="absolute bottom-[10%] right-[25%] w-4 h-4 bg-teal-200/30 dark:bg-teal-500/10 rounded-full" />
            
            {/* Yellow Bar */}
            <div className="absolute bottom-[50%] right-[15%] w-20 h-3 bg-yellow-200/50 dark:bg-yellow-600/20 rounded-full rotate-[-5deg]" />

            <div className="max-w-7xl mx-auto pl-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7"
                    >
                        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-medium">
                            The eventra is the all in one platform for event managemen with the sophisticted technology and user friendly interface. The eventra is Powerful, flexible and data-driven, Eventra makes it easy
                            to build the exact event that you think of.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-5 flex items-start gap-8"
                    >
                        <div className="w-1.5 h-32 bg-foreground/10 self-stretch rounded-full" />
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase leading-[1.1] text-foreground/90">
                           The Eventra is the all in one platform for event management
                        </h2>
                    </motion.div>
                </div>

                {/* Bottom Section - Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {/* Feature 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="mb-8 p-6 rounded-3xl bg-orange-50 dark:bg-orange-500/5 group-hover:bg-orange-100 dark:group-hover:bg-orange-500/10 transition-all duration-300">
                            <Rocket className="w-12 h-12 text-orange-400" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">Performance</h3>
                        <p className="text-muted-foreground leading-relaxed px-4">
                            The eventra uses the latest technology to provide the best performance with the fast loading speed.
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="mb-8 p-6 rounded-3xl bg-teal-50 dark:bg-teal-500/5 group-hover:bg-teal-100 dark:group-hover:bg-teal-500/10 transition-all duration-300">
                            <Lightbulb className="w-12 h-12 text-teal-400" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">Simple and user-friendly interface</h3>
                        <p className="text-muted-foreground leading-relaxed px-4">
                            The eventra has the responsive design and easy to use interface. The eventra also has the both dark mode and light mode support.
                        </p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="mb-8 p-6 rounded-3xl bg-red-50 dark:bg-red-500/5 group-hover:bg-red-100 dark:group-hover:bg-red-500/10 transition-all duration-300">
                            <div className="relative">
                                <RefreshCw className="w-12 h-12 text-red-400" strokeWidth={1.5} />
                                <span className="absolute -top-1 -right-2 text-[10px] font-bold text-red-400 leading-none">360°</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">Security</h3>
                        <p className="text-muted-foreground leading-relaxed px-4">
                            The eventra has the secure and encrypted data storage. The eventra has the rate limit and protection against the attacks.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default WhoAreWe;