"use client";

import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function LargeText() {
  const { t } = useTranslation();

  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
         start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.to(headingRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      duration: 1,
    })
      .fromTo(
        dividerRef.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          transformOrigin: "left center",
           ease: "circ.inOut",
          duration: 0.4,
        },
        "-=0.3"
      )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.5,
        },
        "-=0.2"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full z-50 min-h-screen flex items-center justify-center overflow-hidden select-none bg-white dark:bg-neutral-950"
    >
      <div className="flex flex-col items-center justify-center w-full px-4">
        <h1
          ref={headingRef}
          className="text-[18vw] md:text-[18vw] xl:text-[14vw] font-[1000] tracking-[-0.08em] leading-[0.8] uppercase text-zinc-900 dark:text-zinc-100 p-4"
          style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          }}
        >
          {t("landing.hero.title")}
        </h1>

        <div
          ref={dividerRef}
          className="w-full max-w-[90vw] h-[0.5vw] bg-zinc-900 dark:bg-zinc-100 mt-[2vw]"
          style={{
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />

        <p
          ref={subtitleRef}
          className="mt-8 text-sm md:text-xl font-medium tracking-[0.5em] uppercase text-zinc-400 dark:text-zinc-600"
          style={{
            opacity: 0,
            transform: "translateY(40px)",
          }}
        >
          {t("landing.hero.subtitle")}
        </p>
      </div>
    </section>
  );
}