'use client';
import { useGSAP } from '@gsap/react';
import PricingCard from '../ui/PricingCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
export default function LandingPricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={containerRef} className='container'>
      <PricingCard />
    </div>
  );
}
