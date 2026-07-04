'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const container = useRef(null);
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  useGSAP(
    () => {
      const revealTl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 60%',
          end: 'top top',
          scrub: 1.5,
        },
      });

      revealTl
        .to('.first-title', {
          duration: 1,
          opacity: 1,
          clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)',
          ease: 'circ.out',
        })
        .to('.second-title', {
          duration: 1,
          opacity: 1,
          clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)',
          ease: 'circ.out',
        })
        .to('.third-title', {
          duration: 1,
          opacity: 1,
          clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)',
          ease: 'circ.out',
        })
        .to('.fourth-title', {
          duration: 1,
          opacity: 1,
          clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)',
          ease: 'circ.out',
        });
      if (!isMobile) {
        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: '1% top',
            end: 'bottom top',
          },
        });
        t1.to(container.current, {
          rotate: 7,
          scale: 0.9,
          yPercent: 30,
          ease: 'power1.inOut',
        });
      }
    },
    { scope: container, dependencies: [isMobile], revertOnUpdate: true },
  );

  return (
    <section ref={container} className='benefit-section'>
      <div className='container mx-auto pt-20'>
        <div className='col-center  flex flex-col justify-center items-center'>
          <p className='text-center text-xl md:text-3xl font-bold tracking-tight'>
            {t('landing.featuresSection.title', 'Unlock the Advantages:')}{' '}
            <br />
            {t(
              'landing.featuresSection.subtitle',
              'Explore the Key Benefits of Choosing EVENTRA',
            )}
          </p>

          <div className='col-center  flex flex-col justify-center items-center mt-20 gap-4 md:gap-0'>
            <ClipPathTitle
              title={t('landing.featuresSection.quickActions', 'Quick actions')}
              bgClassName='bg-primary text-primary-foreground'
              containerClassName='first-title rotate-[3deg] relative z-10'
            />
            <ClipPathTitle
              title={t(
                'landing.featuresSection.fastResponsive',
                'Fast + Responsive',
              )}
              bgClassName='bg-secondary text-secondary-foreground'
              containerClassName='second-title rotate-[-1deg] md:-translate-y-2'
            />
            <ClipPathTitle
              title={t(
                'landing.featuresSection.eventAnalysis',
                'Event analysis',
              )}
              bgClassName='bg-accent text-accent-foreground'
              containerClassName='third-title rotate-[1deg] md:-translate-y-4 relative z-10'
            />
            <ClipPathTitle
              title={t(
                'landing.featuresSection.dynamicFilters',
                'Dynamic Filters',
              )}
              bgClassName='bg-muted text-muted-foreground'
              containerClassName='fourth-title rotate-[-5deg] md:-translate-y-6'
            />
          </div>
          <div className='md:mt-8 mt-10 text-xl font-medium'>
            <p>
              {t('landing.featuresSection.andMuchMore', 'And much more ...')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const ClipPathTitle = ({
  title,
  bgClassName,
  containerClassName,
}: {
  title: string;
  bgClassName: string;
  containerClassName: string;
}) => {
  return (
    <div className='general-title 2xl:text-7xl md:text-6xl text-4xl font-bold uppercase leading-tight tracking-tight'>
      <div
        style={{
          clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
        }}
        className={`${containerClassName} border-2 border-foreground text-nowrap opacity-0`}
      >
        <div className={`pb-2 md:px-10 px-4 md:pt-2 pt-2 ${bgClassName}`}>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};
