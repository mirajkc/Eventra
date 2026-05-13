"use client";

import dynamic from "next/dynamic";
import {
  PuzzleHeroSkeleton,
  ScreenShotShowcaseSkeleton,
  HowItWorksSkeleton,
  FeaturesSkeleton,
  TestimonialsSkeleton,
  LandingPricingSkeleton,
  CallToActionSkeleton,
  LargeTextSkeleton,
} from "./skeletons";

const PuzzleHero = dynamic(() => import("@/components/landing/PuzzleHero"), {
  loading: () => <PuzzleHeroSkeleton />,
});
const ScreenShotShowcase = dynamic(
  () => import("@/components/home/ScreenShotShowcase"),
  { loading: () => <ScreenShotShowcaseSkeleton /> }
);
const HowItWorks = dynamic(() => import("@/components/landing/HowItWorks"), {
  loading: () => <HowItWorksSkeleton />,
});
const Features = dynamic(() => import("@/components/home/Features"), {
  loading: () => <FeaturesSkeleton />,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  loading: () => <TestimonialsSkeleton />,
});
const LandingPricing = dynamic(
  () => import("@/components/landing/LandingPricing"),
  { loading: () => <LandingPricingSkeleton /> }
);
const CallToAction = dynamic(() => import("@/components/home/CallToAction"), {
  loading: () => <CallToActionSkeleton />,
});
const LargeText = dynamic(() => import("@/components/landing/LargeText"), {
  loading: () => <LargeTextSkeleton />,
});

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
