'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

export default function ScrambleHero() {
  const { t } = useTranslation();

  useGSAP(() => {
    // Animate letters falling
    gsap.fromTo(
      '.scramble-letter',
      { y: '-150vh', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.8,
        ease: 'bounce.out',
        stagger: 0.1,
        delay: 1.5,
      },
    );

    // Fade in "We Are" from left
    gsap.fromTo(
      '.we-are-text',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 2.2,
      },
    );

    // Fade in text content from bottom
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, yPercent: 50 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 2.2,
      },
    );

    // Scroll trigger for the hero rotation effect
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-container',
        scrub: true,
        start: '1% top',
        end: 'bottom top',
      },
    });
    t1.to('.hero-container', {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: 'power1.inOut',
    });
  });

  const letters = [
    { char: 'E', className: 'bottom-[0%] left-[0%] -rotate-[8deg] z-10' },
    { char: 'V', className: 'bottom-[35%] left-[12%] rotate-[15deg] z-30' },
    { char: 'E', className: 'bottom-[-5%] left-[22%] -rotate-[6deg] z-20' },
    { char: 'N', className: 'bottom-[30%] left-[35%] rotate-[10deg] z-10' },
    { char: 'T', className: 'bottom-[5%] left-[48%] -rotate-[4deg] z-30' },
    { char: 'R', className: 'bottom-[25%] left-[62%] rotate-[18deg] z-20' },
    { char: 'A', className: 'bottom-[0%] left-[75%] rotate-[2deg] z-10' },
  ];

  return (
    <section className='hero-container relative w-full h-screen bg-white dark:bg-black overflow-hidden pt-32 px-4 md:px-8'>
      <div className='max-w-[1440px] mx-auto w-full h-full relative flex flex-col justify-between'>
        {/* Right side - Content */}
        <div className='hero-content w-full flex justify-end z-40 relative'>
          <div className='max-w-lg md:mr-10'>
            <span className='we-are-text text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block text-gray-500 dark:text-gray-400'>
              {t('landing.hero.weAre', '(We Are)')}
            </span>
            <h1 className='hero-title text-4xl md:text-6xl lg:text-7xl font-serif text-[#1a1a1a] dark:text-[#f0f0f0] leading-[1.1] tracking-tight'>
              {t('landing.hero.title1', 'The ultimate')} <br />
              {t('landing.hero.title2', 'platform for')} <br />
              {t('landing.hero.title3', 'event management.')}
            </h1>
          </div>
        </div>

        {/* Left side - Scrambled Letters Container */}
        <div className='absolute bottom-0 left-0 w-[120%] md:w-[85%] lg:w-[75%] h-[60%] md:h-[65%] pointer-events-none -ml-[5%] md:ml-0'>
          {letters.map((l, i) => (
            <div
              key={i}
              className={`scramble-letter absolute text-[24vw] md:text-[18vw] lg:text-[15rem] xl:text-[18rem] font-black leading-none text-[#1a1a1a] dark:text-[#f0f0f0] tracking-tighter ${l.className}`}
            >
              {l.char}
            </div>
          ))}
          {/* Trademark/Registered Circle similar to the reference */}
          <div className='scramble-letter absolute bottom-[15%] left-[92%] text-3xl md:text-5xl font-bold z-30 text-[#1a1a1a] dark:text-[#f0f0f0]'>
            ®
          </div>
        </div>
      </div>
    </section>
  );
}
