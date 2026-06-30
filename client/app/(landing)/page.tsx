'use client';

import dynamic from 'next/dynamic';
import {
  HeroSkeleton,
  ScreenShotShowcaseSkeleton,
  HowItWorksSkeleton,
  FeaturesSkeleton,
  TestimonialsSkeleton,
  LandingPricingSkeleton,
  CallToActionSkeleton,
  LargeTextSkeleton,
} from './skeletons';

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Footer from '@/components/ui/Footer';
import MessageSection from '@/components/landing/MessageSection';

const ScrambleHero = dynamic(() => import('@/components/landing/ScrambleHero'), {
  loading: () => <HeroSkeleton />,
});
const ScreenShotShowcase = dynamic(
  () => import('@/components/home/ScreenShotShowcase'),
  { loading: () => <ScreenShotShowcaseSkeleton /> },
);
const HowItWorks = dynamic(() => import('@/components/landing/HowItWorks'), {
  loading: () => <HowItWorksSkeleton />,
});
const Features = dynamic(() => import('@/components/home/Features'), {
  loading: () => <FeaturesSkeleton />,
});
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), {
  loading: () => <TestimonialsSkeleton />,
});
const LandingPricing = dynamic(
  () => import('@/components/landing/LandingPricing'),
  { loading: () => <LandingPricingSkeleton /> },
);
const CallToAction = dynamic(() => import('@/components/home/CallToAction'), {
  loading: () => <CallToActionSkeleton />,
});
const LargeText = dynamic(() => import('@/components/landing/LargeText'), {
  loading: () => <LargeTextSkeleton />,
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });
  });
  return (
    <main className='w-full' id='smooth-wrapper'>
      <div id='smooth-content'>
        <ScrambleHero />
        <MessageSection />

        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0'>
            <ScreenShotShowcase />
          </div>
          {/* how it works */}
          <div className='min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0'>
            <HowItWorks />
          </div>

          {/* //features section here and remove the ScreenShotShowcase */}
          <Features />

          {/* // testimonials */}
          <Testimonials />

          {/* pricing */}
          <div className='min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0'>
            <LandingPricing />
          </div>
          <CallToAction />
          <LargeText />
          <Footer />
        </div>
      </div>
    </main>
  );
}
