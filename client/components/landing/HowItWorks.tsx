'use client';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {
  UserPlus,
  UserCircle,
  Search,
  CalendarCheck,
  MessageSquare,
  PartyPopper,
} from 'lucide-react';
import { useState, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    titleKey: 'landing.howItWorks.step1_title',
    descKey: 'landing.howItWorks.step1_desc',
    Icon: UserPlus,
  },
  {
    titleKey: 'landing.howItWorks.step2_title',
    descKey: 'landing.howItWorks.step2_desc',
    Icon: UserCircle,
  },
  {
    titleKey: 'landing.howItWorks.step3_title',
    descKey: 'landing.howItWorks.step3_desc',
    Icon: Search,
  },
  {
    titleKey: 'landing.howItWorks.step4_title',
    descKey: 'landing.howItWorks.step4_desc',
    Icon: CalendarCheck,
  },
  {
    titleKey: 'landing.howItWorks.step5_title',
    descKey: 'landing.howItWorks.step5_desc',
    Icon: MessageSquare,
  },
  {
    titleKey: 'landing.howItWorks.step6_title',
    descKey: 'landing.howItWorks.step6_desc',
    Icon: PartyPopper,
  },
] as const;

// Custom character splitter to avoid needing the premium SplitText plugin
const SplitChars = ({ text }: { text: string }) => {
  return (
    <span aria-label={text} className='inline-block'>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className='char-split inline-block whitespace-pre'
          aria-hidden='true'
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  );
};

export default function HowItWorks() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth <= 1024);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const slider = sliderRef.current;
      if (!section || !slider) return;

      // 1. Text Reveals (Bottom to Top characters)
      gsap.from('.first-text-split .char-split', {
        yPercent: 200,
        stagger: 0.02,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        },
      });

      // Highlight box reveal with correctly formatted clip-path
      gsap.fromTo(
        '.flavor-text-scroll',
        { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 50%',
          },
        },
      );

      gsap.from('.second-text-split .char-split', {
        yPercent: 200,
        stagger: 0.02,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top 40%',
        },
      });

      // 2. Horizontal Scroll and Parallax
      if (!isTablet) {
        const scrollAmount = slider.scrollWidth - section.offsetWidth;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${scrollAmount + 1000}px`, // Added extra scroll distance for smooth feel
            scrub: 1,
            pin: true,
          },
        });

        // Translate the entire wrapper to scroll the cards into view
        tl.to(slider, {
          x: -scrollAmount,
          ease: 'none',
        });

        // Title block parallax effect (Slides slightly faster/slower than the background)
        const titleTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${scrollAmount + 1000}px`,
            scrub: 1,
          },
        });

        titleTl
          .to('.first-text-split', { xPercent: -30, ease: 'none' }, 0)
          .to('.flavor-text-scroll', { xPercent: -22, ease: 'none' }, 0)
          .to('.second-text-split', { xPercent: -10, ease: 'none' }, 0);
      }
    },
    { dependencies: [isTablet], revertOnUpdate: true },
  );

  return (
    <section
      ref={sectionRef}
      className='relative w-full mx-auto h-screen overflow-hidden bg-background z-10'
    >
      {/* The wrapper that will be translated horizontally on desktop */}
      <div
        ref={sliderRef}
        className='flex flex-col lg:flex-row h-auto lg:h-full w-full lg:w-max items-center'
      >
        {/* Title Block - Takes full viewport width on mobile, or 45vw on desktop */}
        <div className='w-full lg:w-[45vw] flex-none px-6 py-20 lg:py-0 lg:pl-20 flex flex-col justify-center relative z-10'>
          <div className='general-title flex flex-col gap-4 lg:gap-8'>
            <div className='overflow-hidden first-text-split py-2'>
              <h1
                className='text-5xl lg:text-7xl font-bold uppercase'
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                <SplitChars
                  text={t('landing.howItWorks.eyebrow') || 'DISCOVER'}
                />
              </h1>
            </div>

            <div className='flavor-text-scroll bg-primary px-6 py-4 w-max shadow-xl -rotate-2 origin-left'>
              <h2 className='text-4xl lg:text-6xl font-black text-primary-foreground uppercase tracking-tight'>
                6 SIMPLE STEPS
              </h2>
            </div>

            <div className='overflow-hidden second-text-split py-2'>
              <h1
                className='text-5xl lg:text-7xl font-bold uppercase text-muted-foreground'
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                <SplitChars text={t('landing.howItWorks.title')} />
              </h1>
            </div>

            <p className='mt-6 text-muted-foreground font-medium text-lg lg:text-xl leading-relaxed max-w-xl'>
              {t('landing.howItWorks.subtitle')}
            </p>
          </div>
        </div>

        {/* Huge Cards Container */}
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 px-6 lg:px-20 lg:pr-40 w-full lg:w-max pb-20 lg:pb-0'>
          {STEPS.map((step, i) => {
            const { Icon } = step;
            return (
              <div
                key={i}
                className={`relative w-full lg:w-[45vw] xl:w-[38vw] 2xl:w-[35vw] h-auto lg:h-[70vh] flex-none bg-card border border-border/50 rounded-3xl shadow-2xl p-10 flex flex-col justify-center overflow-hidden transition-transform hover:-translate-y-2 duration-300 group ${
                  i % 2 === 0 ? 'lg:-rotate-2' : 'lg:rotate-2'
                }`}
              >
                {/* Massive Background Icon */}
                <div className='absolute -bottom-10 -right-10 text-muted-foreground/5 group-hover:text-muted-foreground/10 group-hover:scale-110 transition-all duration-500 pointer-events-none'>
                  <Icon className='w-64 h-64 md:w-96 md:h-96' />
                </div>

                <div className='relative z-10'>
                  <span className='font-mono text-xl md:text-2xl tracking-[0.2em] uppercase text-primary font-bold block mb-6'>
                    STEP {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className='text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6'
                    style={{ fontFamily: 'var(--font-fraunces)' }}
                  >
                    {t(step.titleKey)}
                  </h3>
                  <p className='text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-[85%]'>
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
