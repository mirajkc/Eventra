"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import PuzzleGraphic from "./PuzzleGraphic";
import { Network, ShieldCheck, Zap, ArrowRight, Shapes } from "lucide-react";
import { motion } from "motion/react"

const PuzzleHero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-transparent transition-colors duration-300 relative z-10 pt-24 md:pt-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-12 flex flex-col justify-center">

        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-16 lg:mb-20">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}

            className="flex-1 w-full flex flex-col items-start justify-center max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
              {t("landing.puzzleHero.topText", "Discover the joy of")}
              <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-[#7c8fff] ml-2 lg:ml-3 align-middle -translate-y-1 transition-transform hover:scale-110 duration-300">
                <Shapes className="w-6 h-6 md:w-8 md:h-8 fill-current" />
              </span><br />
              <span className="inline-block bg-[#e8ecff] dark:bg-[#1a1f3c] text-gray-900 dark:text-white px-3 py-1 md:px-5 md:py-1.5 rounded-full whitespace-nowrap mt-2 shadow-sm">
                {t("landing.puzzleHero.highlight1", "effortless")}
              </span>{" "}
              {t("landing.puzzleHero.midText", "event management sourcing")}<br />
              <span className="inline-block bg-[#e8ecff] dark:bg-[#1a1f3c] text-gray-900 dark:text-white px-3 py-1 md:px-5 md:py-1.5 rounded-full whitespace-nowrap mt-2 shadow-sm">
                {t("landing.puzzleHero.highlight2", "with Eventra.")}
              </span>
            </h1>

            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed font-normal">
              {t("landing.puzzleHero.subtitle", "Eventra's event management platform is now available and ready to revolutionize the way you think about organizing and attending events.")}
            </p>
          </motion.div>

          {/* Right Puzzle Graphic */}
          <div className="flex-1 w-full relative flex items-center justify-end max-w-lg scale-90 md:scale-100 origin-center">
            <PuzzleGraphic />
          </div>
        </div>

        {/* Feature Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full border-t border-gray-100 dark:border-gray-800/60 pt-8 pb-4"
        >
          {/* Feature 1 */}
          <div className="flex flex-col items-start group cursor-pointer p-2 rounded-2xl hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800/80 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 border border-gray-100 dark:border-gray-800">
              <Network className="w-5 h-5 text-black dark:text-white" />
            </div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black dark:text-white mb-2 flex items-center gap-1.5">
              {t("home.more.features.f1_title", "Quick actions")} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-relaxed max-w-[250px]">
              {t("home.more.features.f1_desc", "Streamline your event workflow with easy navigation and quick actions.")}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start group cursor-pointer p-2 rounded-2xl hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors border-t border-transparent md:border-l md:border-t-0 md:border-gray-100 dark:md:border-gray-800/60 md:pl-8">
            <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800/80 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 border border-gray-100 dark:border-gray-800">
              <ShieldCheck className="w-5 h-5 text-black dark:text-white" />
            </div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black dark:text-white mb-2 flex items-center gap-1.5">
              {t("home.more.features.f2_title", "Guest enrichment")} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-relaxed max-w-[250px]">
              {t("home.more.features.f2_desc", "Guest are free to visit the event page and organizations page before considering to join us.")}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start group cursor-pointer p-2 rounded-2xl hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors border-t border-transparent md:border-l md:border-t-0 md:border-gray-100 dark:md:border-gray-800/60 md:pl-8">
            <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800/80 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 border border-gray-100 dark:border-gray-800">
              <Zap className="w-5 h-5 text-black dark:text-white" />
            </div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black dark:text-white mb-2 flex items-center gap-1.5">
              {t("home.more.features.f3_title", "Mobile responsive")} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-relaxed max-w-[250px]">
              {t("home.more.features.f3_desc", "Eventra is fully responsive and can be accessed from any device.")}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PuzzleHero;
