"use client";

import BlurText from "@/components/BlurText";
import LandingSearch from "@/components/landing/LandingSearch";
import { ChevronDown } from "lucide-react";
import LandingPricing from "@/components/landing/LandingPricing";
import CallToAction from "@/components/home/CallToAction";
import WhatIsEventra from "@/components/landing/WhatIsEventra";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import LargeText from "@/components/landing/LargeText";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
      {/* main landing */}
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] py-12 md:py-0">
        <div className="flex flex-col justify-center items-center text-center w-full max-w-4xl">
          <BlurText
            text={t("landing.welcome")}
            delay={0}
            animateBy="words"
            direction='top'
            className="text-4xl md:text-6xl mb-6 font-bold tracking-tight"
          />
          <BlurText
            text={t("landing.subtitle")}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl md:text-3xl mb-12 text-gray-600 dark:text-gray-300"
          />
          <LandingSearch />
        </div>
        <div className="mt-16 animate-bounce">
          <ChevronDown className="bg-gray-100 size-10 rounded-full p-2.5 dark:bg-gray-800 text-gray-600 dark:text-gray-300" />
        </div>
      </div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
        <WhatIsEventra />
      </div>
      {/* how it works */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
        <HowItWorks />
      </div>

      {/* why choose eventra */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
        <WhyChooseUs />
      </div>

      {/* pricing */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
        <LandingPricing />
      </div>
      <CallToAction />
      <LargeText />
    </main>
  )
}