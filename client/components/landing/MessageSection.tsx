'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useTranslation } from 'react-i18next';

export default function MessageSection() {
  const { t } = useTranslation();

  useGSAP(() => {
    const firstMsgSplit = SplitText.create('.first-message', {
      type: 'chars',
    });
    const secondMsgSplit = SplitText.create('.second-message', {
      type: 'chars',
    });

    const paragraphSplit = SplitText.create('.message-content p', {
      type: 'words, lines',
      linesClass: 'paragraph-line',
    });

    gsap.fromTo(
      firstMsgSplit.chars,
      { opacity: 0.2 },
      {
        opacity: 1,
        ease: 'power1.in',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.message-content',
          start: 'top center',
          end: '30% center',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      secondMsgSplit.chars,
      { opacity: 0.2 },
      {
        opacity: 1,
        ease: 'power1.in',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.second-message',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: '.msg-text-scroll',
        start: 'top 60%',
      },
    });
    revealTl.to('.msg-text-scroll', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'circ.inOut',
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.message-content p',
        start: 'top center',
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: 'power1.inOut',
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section className='message-content bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen w-full overflow-hidden flex flex-col justify-center items-center relative z-20 px-4 py-20'>
      <div className='w-full max-w-[90rem] mx-auto flex flex-col items-center justify-center relative'>
        <div className='message-wrapper w-full 2xl:text-[7.5rem] md:text-8xl sm:text-6xl text-5xl font-bold uppercase leading-[0.9] tracking-tighter flex flex-col justify-center items-center md:gap-16 gap-10 relative'>
          <h1 className='first-message text-center px-4 max-w-7xl mx-auto'>
            {t('landing.messageSection.firstMessage', 'Simplify your event planning process and')}
          </h1>
          <div
            style={{
              clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            }}
            className='msg-text-scroll rotate-[3deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-[4px] border-[#1a1f3c] dark:border-white shadow-xl'
          >
            <div className='bg-[#e8ecff] dark:bg-[#1a1f3c] md:px-8 px-5 py-2 md:py-4 flex items-center justify-center'>
              <h2 className='text-[#7c8fff] dark:text-[#7c8fff] text-4xl md:text-6xl 2xl:text-7xl font-bold uppercase tracking-tight'>
                {t('landing.messageSection.highlight', 'Scale Up')}
              </h2>
            </div>
          </div>
          <h1 className='second-message text-center px-4 max-w-7xl mx-auto'>
            {t('landing.messageSection.secondMessage', 'your organization\'s growth with Eventra')}
          </h1>
        </div>

        <div className='flex justify-center items-center md:mt-16 mt-10'>
          <div className='max-w-2xl px-6 flex justify-center items-center overflow-hidden'>
            <p className="text-center text-gray-600 dark:text-gray-300 font-medium md:text-lg text-base leading-relaxed">
              {t('landing.messageSection.paragraph', 'Empower your team and simplify the complexity of events with Eventra, where you\'re one click away from effortless planning and memorable experiences.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
