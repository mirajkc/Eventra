'use client';

import Link from 'next/link';
import { MobileMenu } from './MobileMenu';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const getMenuLinks = (t: any) => [
  { href: '/home', label: t('navbar.home') || 'Home' },
  { href: '/events', label: t('navbar.events') || 'Events' },
  { href: '/about', label: t('navbar.about') || 'About' },
  { href: '/auth/register', label: t('navbar.getStarted') || 'Get Started' },
];

export default function LandingNavbar() {
  const { t, i18n } = useTranslation();
  const menuLinks = getMenuLinks(t);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useGSAP(() => {
    gsap.from('.navbar', {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      delay: 2.2,
    });
  });
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ne' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className='w-full absolute top-0 left-0 z-50 pt-6 px-4 md:px-8 bg-transparent overflow-hidden'>
      <div className='navbar flex justify-between w-full max-w-[1440px] mx-auto items-center text-black dark:text-white relative overflow-hidden'>
        {/* Left - Logo */}
        <div className='flex items-center gap-3 cursor-pointer z-10 lg:w-[200px] justify-start'>
          <h1 className='text-xl font-extrabold tracking-[0.2em] uppercase'>
            Eventra
          </h1>
        </div>

        {/* Middle - Links & Get Started */}
        <div className='hidden lg:flex items-center gap-8 z-10'>
          <div className='flex items-center gap-6'>
            {menuLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className='text-[11px] font-bold tracking-widest uppercase hover:text-gray-500 transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right - Actions */}
        <div className='hidden lg:flex justify-end items-center z-10 lg:w-[200px]'>
          <div className='flex items-center gap-4'>
            <button
              onClick={toggleLanguage}
              className='text-[11px] font-bold tracking-widest uppercase hover:text-gray-500 transition-colors w-8 text-right'
            >
              {mounted && i18n.language === 'ne' ? 'NP' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className='text-[11px] font-bold tracking-widest uppercase hover:text-gray-500 transition-colors w-12 text-right'
            >
              {mounted && theme === 'dark' ? 'DARK' : 'LIGHT'}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div className='flex lg:hidden gap-4 items-center'>
          <button
            onClick={toggleLanguage}
            className='text-[11px] font-bold tracking-widest uppercase w-8 text-center'
          >
            {mounted && i18n.language === 'ne' ? 'NP' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className='text-[11px] font-bold tracking-widest uppercase w-12 text-center'
          >
            {mounted && theme === 'dark' ? 'DARK' : 'LIGHT'}
          </button>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
