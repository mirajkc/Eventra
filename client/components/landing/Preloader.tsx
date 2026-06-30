'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';
    
    let currentProgress = 0;
    // Animate to 100% over roughly 1.2 seconds
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 4; 
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Wait a tiny bit at 100%, then slide up to reveal the site
        gsap.to('.preloader-container', {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
          delay: 0.3,
          onComplete: () => {
            // Unlock scrolling once the preloader is totally gone
            document.body.style.overflow = '';
          }
        });
      }
      setProgress(currentProgress);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader-container fixed inset-0 z-[9999] bg-background text-foreground flex items-end justify-end px-8 md:px-16 pb-12 overflow-hidden">
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20">
        <h1 className="text-7xl md:text-[10rem] font-serif font-bold tracking-tighter leading-none">
          {progress}%
        </h1>
      </div>
    </div>
  );
}
