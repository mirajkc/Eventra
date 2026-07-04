'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

export default function ScrambleHero() {
  const { t } = useTranslation();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Mobile: animate mobile-specific letters
    mm.add('(max-width: 767px)', () => {
      gsap.fromTo(
        '.scramble-letter-mobile',
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
    });

    // Desktop: animate desktop-specific letters
    mm.add('(min-width: 768px)', () => {
      gsap.fromTo(
        '.scramble-letter-desktop',
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
    });

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
        <div className='absolute bottom-0 left-0 w-full md:w-[85%] lg:w-[75%] h-[60%] md:h-[65%] pointer-events-none'>

          {/* Mobile layout - two centered rows: EVEN + TRA */}
          <div className='flex md:hidden flex-col items-center justify-center w-full h-full pb-12'>
            <div className='flex items-center justify-center gap-1 sm:gap-3'>
              {letters.slice(0, 4).map((l, i) => (
                <div
                  key={`m-${i}`}
                  className='scramble-letter-mobile text-[22vw] sm:text-[20vw] font-black leading-none text-[#1a1a1a] dark:text-[#f0f0f0] tracking-tighter'
                >
                  {l.char}
                </div>
              ))}
            </div>
            <div className='flex items-center justify-center gap-1 sm:gap-3 -mt-4 sm:-mt-6'>
              {letters.slice(4).map((l, i) => (
                <div
                  key={`m-${i + 4}`}
                  className='scramble-letter-mobile text-[22vw] sm:text-[20vw] font-black leading-none text-[#1a1a1a] dark:text-[#f0f0f0] tracking-tighter'
                >
                  {l.char}
                </div>
              ))}
              <div className='scramble-letter-mobile text-4xl sm:text-5xl font-bold text-[#1a1a1a] dark:text-[#f0f0f0] self-start mt-2'>
                ®
              </div>
            </div>
          </div>

          {/* Desktop layout - absolute positioned scattered letters */}
          <div className='hidden md:block relative w-full h-full'>
            {letters.map((l, i) => (
              <div
                key={i}
                className={`scramble-letter-desktop absolute text-[18vw] lg:text-[15rem] xl:text-[18rem] font-black leading-none text-[#1a1a1a] dark:text-[#f0f0f0] tracking-tighter ${l.className}`}
              >
                {l.char}
              </div>
            ))}
            <div className='scramble-letter-desktop absolute bottom-[15%] left-[92%] text-3xl md:text-5xl font-bold z-30 text-[#1a1a1a] dark:text-[#f0f0f0]'>
              ®
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
