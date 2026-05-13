"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
  // Kept for API compatibility — single-element animation no longer
  // staggers per word/letter, so these are accepted but ignored.
  animateBy?: "words" | "letters";
  stepDuration?: number;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 0,
  className = "",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  onAnimationComplete,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const offset = direction === "top" ? -40 : 40;

  return (
    <motion.p
      ref={ref}
      className={className}
      initial={{ filter: "blur(12px)", opacity: 0, y: offset }}
      animate={
        inView
          ? { filter: "blur(0px)", opacity: 1, y: 0 }
          : { filter: "blur(12px)", opacity: 0, y: offset }
      }
      transition={{
        duration: 0.9,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      onAnimationComplete={onAnimationComplete}
    >
      {text}
    </motion.p>
  );
};

export default BlurText;
