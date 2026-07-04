'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);
}

export default function KineticNav() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const menuLinks = [
    { href: '/home', label: t('navbar.home') || 'Home' },
    { href: '/events', label: t('navbar.events') || 'Events' },
    {
      href: '/organizations',
      label: t('navbar.organizations') || 'Organizations',
    },
    { href: '/about', label: t('navbar.about') || 'About' },
    { href: '/auth/register', label: t('navbar.getStarted') || 'Get Started' },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      try {
        if (!gsap.parseEase('main')) {
          CustomEase.create('main', '0.65, 0.01, 0.05, 0.99');
          gsap.defaults({ ease: 'main', duration: 0.7 });
        }
      } catch (e) {
        console.warn('CustomEase failed to load, falling back to default.', e);
        gsap.defaults({ ease: 'power2.out', duration: 0.7 });
      }

      // Floating Button Reveal past Hero section
      gsap.to('.kinetic-toggle-btn', {
        scrollTrigger: {
          trigger: document.documentElement,
          start: '500px top',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.5,
        ease: 'power2.out',
      });

      // 2. Shape Hover & Text Flip
      const menuItems = containerRef.current.querySelectorAll(
        '.menu-list-item[data-shape]',
      );
      const shapesContainer = containerRef.current.querySelector(
        '.ambient-background-shapes',
      );

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute('data-shape');
        const shape = shapesContainer
          ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`)
          : null;
        const shapeEls = shape ? shape.querySelectorAll('.shape-element') : [];
        const linkText = item.querySelector('.nav-link-text');

        let split: any = null;
        if (linkText) {
          split = new SplitText(linkText, { type: 'chars' });
          // Initial setup for perspective
          gsap.set(item, { perspective: 400 });
        }

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer
              .querySelectorAll('.bg-shape')
              .forEach((s) => s.classList.remove('active'));
          }
          if (shape) shape.classList.add('active');

          if (shapeEls.length) {
            gsap.fromTo(
              shapeEls,
              { scale: 0.5, opacity: 0, rotation: -10 },
              {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'back.out(1.7)',
                overwrite: 'auto',
              },
            );
          }

          if (split) {
            gsap.to(split.chars, {
              rotationX: 360,
              duration: 0.8,
              stagger: 0.02,
              ease: 'back.out(1.5)',
              overwrite: 'auto',
            });
          }
        };

        const onLeave = () => {
          if (shapeEls.length && shape) {
            gsap.to(shapeEls, {
              scale: 0.8,
              opacity: 0,
              duration: 0.3,
              ease: 'power2.in',
              onComplete: () => shape.classList.remove('active'),
              overwrite: 'auto',
            });
          }
          if (split) {
            // Reset rotation for next hover seamlessly
            gsap.to(split.chars, {
              rotationX: 0,
              duration: 0.4,
              ease: 'power2.inOut',
              overwrite: 'auto',
            });
          }
        };

        item.addEventListener('mouseenter', onEnter);
        item.addEventListener('mouseleave', onLeave);

        (item as any)._cleanup = () => {
          item.removeEventListener('mouseenter', onEnter);
          item.removeEventListener('mouseleave', onLeave);
          if (split) split.revert();
        };
      });
    },
    { scope: containerRef },
  );

  // Menu Open/Close Animation
  useGSAP(() => {
    if (!containerRef.current) return;

    const navWrap = containerRef.current.querySelector('.nav-overlay-wrapper');
    const menu = containerRef.current.querySelector('.menu-content');
    const overlay = containerRef.current.querySelector('.overlay');
    const bgPanels = containerRef.current.querySelectorAll('.backdrop-layer');
    const menuLinks = containerRef.current.querySelectorAll('.nav-link');
    const menuButtonTexts = containerRef.current.querySelectorAll(
      '.menu-button-text p',
    );
    const menuButtonIcon =
      containerRef.current.querySelector('.menu-button-icon');

    const tl = gsap.timeline();

    if (isMenuOpen) {
      if (navWrap) navWrap.setAttribute('data-nav', 'open');

      tl.set(navWrap, { display: 'block' })
        .set(menu, { xPercent: 0 }, '<')
        .fromTo(
          menuButtonTexts,
          { yPercent: 0 },
          { yPercent: -100, stagger: 0.2 },
        )
        .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, '<')
        .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, '<')
        .fromTo(
          bgPanels,
          { xPercent: 101 },
          { xPercent: 0, stagger: 0.12, duration: 0.575 },
          '<',
        )
        .fromTo(
          menuLinks,
          { yPercent: 140, rotate: 10 },
          { yPercent: 0, rotate: 0, stagger: 0.05 },
          '<+=0.35',
        );
    } else {
      if (navWrap) navWrap.setAttribute('data-nav', 'closed');

      tl.to(overlay, { autoAlpha: 0 })
        .to(menu, { xPercent: 120 }, '<')
        .to(menuButtonTexts, { yPercent: 0 }, '<')
        .to(menuButtonIcon, { rotate: 0 }, '<')
        .set(navWrap, { display: 'none' });
    }
  }, [isMenuOpen]);

  // Clean up split texts on unmount
  useEffect(() => {
    return () => {
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(
          '.menu-list-item[data-shape]',
        );
        items.forEach((item: any) => item._cleanup && item._cleanup());
      }
    };
  }, []);

  return (
    <div ref={containerRef} className='kinetic-nav-root'>
      {/* Floating Toggle Button */}
      <div className='kinetic-toggle-btn fixed top-6 right-6 z-[9999] opacity-0 pointer-events-none'>
        <button
          onClick={toggleMenu}
          className='flex items-center gap-3 bg-background border border-border shadow-lg rounded-full px-3 py-3 hover:bg-muted transition-colors text-foreground'
        >
          <div className='icon-wrap menu-button-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              className='text-foreground'
            >
              <path
                d='M7.33333 16L7.33333 0L8.66667 0L8.66667 16L7.33333 16Z'
                fill='currentColor'
              ></path>
              <path
                d='M16 8.66667L0 8.66667L0 7.33333L16 7.33333L16 8.66667Z'
                fill='currentColor'
              ></path>
            </svg>
          </div>
        </button>
      </div>

      {/* Fullscreen Menu */}
      <section className='fullscreen-menu-container'>
        <div
          data-nav='closed'
          className='nav-overlay-wrapper fixed inset-0 z-[9998] hidden'
        >
          {/* Overlay */}
          <div
            className='overlay absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer'
            onClick={closeMenu}
          ></div>

          <nav className='menu-content absolute top-0 right-0 h-full w-full md:w-[600px] flex flex-col justify-center overflow-hidden'>
            <div className='menu-bg absolute inset-0 -z-10'>
              <div className='backdrop-layer absolute inset-0 w-full h-full bg-primary/80 backdrop-blur-md'></div>
              <div className='backdrop-layer absolute inset-0 w-full h-full bg-accent/90 backdrop-blur-md'></div>
              <div className='backdrop-layer absolute inset-0 w-full h-full bg-background border-l border-border shadow-2xl'></div>

              {/* Abstract shapes container */}
              <div className='ambient-background-shapes absolute inset-0 pointer-events-none overflow-hidden opacity-50 dark:opacity-20 z-10'>
                {/* Shape 1 */}
                <svg
                  className='bg-shape bg-shape-1 absolute top-0 left-0 w-full h-full [&:not(.active)]:hidden'
                  viewBox='0 0 400 400'
                  fill='none'
                >
                  <circle
                    className='shape-element text-primary opacity-20'
                    cx='80'
                    cy='120'
                    r='40'
                    fill='currentColor'
                  />
                  <circle
                    className='shape-element text-secondary opacity-20'
                    cx='300'
                    cy='80'
                    r='60'
                    fill='currentColor'
                  />
                  <circle
                    className='shape-element text-accent opacity-20'
                    cx='200'
                    cy='300'
                    r='80'
                    fill='currentColor'
                  />
                </svg>

                {/* Shape 2 */}
                <svg
                  className='bg-shape bg-shape-2 absolute top-0 left-0 w-full h-full [&:not(.active)]:hidden'
                  viewBox='0 0 400 400'
                  fill='none'
                >
                  <path
                    className='shape-element text-primary opacity-20'
                    d='M0 200 Q100 100, 200 200 T 400 200'
                    stroke='currentColor'
                    strokeWidth='60'
                  />
                </svg>

                {/* Shape 3 */}
                <svg
                  className='bg-shape bg-shape-3 absolute top-0 left-0 w-full h-full [&:not(.active)]:hidden'
                  viewBox='0 0 400 400'
                  fill='none'
                >
                  <circle
                    className='shape-element text-accent opacity-20'
                    cx='50'
                    cy='50'
                    r='20'
                    fill='currentColor'
                  />
                  <circle
                    className='shape-element text-primary opacity-20'
                    cx='150'
                    cy='250'
                    r='30'
                    fill='currentColor'
                  />
                </svg>

                {/* Shape 4 */}
                <svg
                  className='bg-shape bg-shape-4 absolute top-0 left-0 w-full h-full [&:not(.active)]:hidden'
                  viewBox='0 0 400 400'
                  fill='none'
                >
                  <path
                    className='shape-element text-secondary opacity-20'
                    d='M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100'
                    fill='currentColor'
                  />
                </svg>

                {/* Shape 5 */}
                <svg
                  className='bg-shape bg-shape-5 absolute top-0 left-0 w-full h-full [&:not(.active)]:hidden'
                  viewBox='0 0 400 400'
                  fill='none'
                >
                  <line
                    className='shape-element text-primary opacity-20'
                    x1='0'
                    y1='100'
                    x2='300'
                    y2='400'
                    stroke='currentColor'
                    strokeWidth='30'
                  />
                  <line
                    className='shape-element text-accent opacity-20'
                    x1='100'
                    y1='0'
                    x2='400'
                    y2='300'
                    stroke='currentColor'
                    strokeWidth='25'
                  />
                </svg>
              </div>
            </div>

            <div className='menu-content-wrapper p-12'>
              <ul className='menu-list space-y-6 flex flex-col items-center'>
                {menuLinks.map((link, i) => (
                  <li
                    key={i}
                    className='menu-list-item overflow-hidden'
                    data-shape={i + 1}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className='nav-link inline-block origin-left group'
                    >
                      <div className='nav-link-text text-5xl md:text-6xl font-extrabold uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors'>
                        {link.label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
