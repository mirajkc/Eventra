'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AVATARS = {
  n1: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  n2: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
  n3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  n4: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
} as const;

const STAR_KEYS = ['s0', 's1', 's2', 's3', 's4'];

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className='flex items-center gap-0.5'>
      {STAR_KEYS.map((key, i) => (
        <Star
          key={key}
          className={`size-4 ${
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-muted-foreground/20 text-muted-foreground/20'
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: t('home.testimonials.n1'),
      role: t('home.testimonials.r1'),
      text: t('home.testimonials.t1'),
      avatar: AVATARS.n1,
      rating: 5,
    },
    {
      name: t('home.testimonials.n2'),
      role: t('home.testimonials.r2'),
      text: t('home.testimonials.t2'),
      avatar: AVATARS.n2,
      rating: 5,
    },
    {
      name: t('home.testimonials.n3'),
      role: t('home.testimonials.r3'),
      text: t('home.testimonials.t3'),
      avatar: AVATARS.n3,
      rating: 4,
    },
    {
      name: t('home.testimonials.n4'),
      role: t('home.testimonials.r4'),
      text: t('home.testimonials.t4'),
      avatar: AVATARS.n4,
      rating: 5,
    },
  ];

  useGSAP(() => {
    if (!sectionRef.current || !cardsContainerRef.current) return;

    const cards =
      cardsContainerRef.current.querySelectorAll<HTMLElement>(
        '.testimonial-card',
      );
    const total = cards.length;

    gsap.set(cards[0], { opacity: 1, y: 0, scale: 1 });
    for (let i = 1; i < total; i++) {
      gsap.set(cards[i], { opacity: 0, y: 80, scale: 0.85 });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${total * 80}%`,
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    for (let i = 1; i < total; i++) {
      tl.to(
        cards[i - 1],
        {
          opacity: 0,
          y: -80,
          scale: 0.85,
          duration: 1,
          ease: 'power2.inOut',
        },
        '+=0.3',
      );

      tl.fromTo(
        cards[i],
        { opacity: 0, y: 80, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.inOut',
        },
        '<',
      );

      tl.to({}, { duration: 0.5 });
    }
  });

  return (
    <section ref={sectionRef} className='relative w-full bg-background'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]'
      />

      <div className='mx-auto max-w-6xl px-6'>
        <div className='mx-auto max-w-2xl space-y-6 py-20 text-center lg:py-12'>
          <h2
            style={{ fontFamily: 'var(--font-fraunces)' }}
            className='text-4xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-6xl'
          >
            <span className='text-muted-foreground/60'>
              {t('home.testimonials.title1')}
            </span>{' '}
            {t('home.testimonials.title2')}
          </h2>

          <p className='mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg'>
            {t('home.testimonials.subtitle')}
          </p>
        </div>

        <div
          ref={cardsContainerRef}
          className='relative mx-auto flex h-[420px] w-full max-w-lg items-center justify-center'
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className='testimonial-card absolute inset-0 flex flex-col items-center justify-center gap-8 rounded-2xl border bg-background/80 p-8 shadow-xl backdrop-blur-md'
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <Quote
                aria-hidden
                className='absolute -right-2 -top-2 size-28 text-foreground/[0.04] dark:text-foreground/[0.06]'
                strokeWidth={1}
              />

              <StarRating rating={testimonial.rating} />

              <blockquote
                style={{ fontFamily: 'var(--font-fraunces)' }}
                className='max-w-md text-center text-xl font-medium leading-snug tracking-tight text-foreground md:text-2xl'
              >
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <div className='flex items-center gap-4'>
                <Avatar className='size-14 ring-2 ring-border'>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{initials(testimonial.name)}</AvatarFallback>
                </Avatar>
                <div className='text-left'>
                  <cite className='not-italic block text-lg font-semibold text-foreground'>
                    {testimonial.name}
                  </cite>
                  <span className='block text-sm text-muted-foreground'>
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
