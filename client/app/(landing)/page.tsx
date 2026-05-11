"use client";

import PuzzleHero from "@/components/landing/PuzzleHero";
import LandingPricing from "@/components/landing/LandingPricing";
import CallToAction from "@/components/home/CallToAction";
import HowItWorks from "@/components/landing/HowItWorks";

import LargeText from "@/components/landing/LargeText";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import ScreenShotShowcase from "@/components/home/ScreenShotShowcase";

export default function Home() {

  return (
    <main className="w-full">
      <PuzzleHero />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">

          <ScreenShotShowcase />
        </div>
        {/* how it works */}
        <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
          <HowItWorks />
        </div>

        {/* //features section here and remove the ScreenShotShowcase */}
        <Features />

        {/* // testimonials */}
        <Testimonials />


        {/* pricing */}
        <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
          <LandingPricing />
        </div>
        <CallToAction />
        <LargeText />
      </div>
    </main>
  )
}