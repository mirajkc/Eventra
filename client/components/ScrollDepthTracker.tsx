"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

type ScrollDepthTrackerProps = {
  enabled: boolean;
};

export default function ScrollDepthTracker({ enabled }: ScrollDepthTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!enabled) return;

    const thresholds = [25, 50, 75, 100];
    const triggeredThresholds = new Set<number>();

    const handleScroll = () => {
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );
      if (documentHeight <= 0) return;

      const depth = Math.min(
        100,
        Math.round(((window.scrollY + window.innerHeight) / documentHeight) * 100),
      );

      for (const threshold of thresholds) {
        if (depth >= threshold && !triggeredThresholds.has(threshold)) {
          triggeredThresholds.add(threshold);
          posthog.capture("scroll trigger", {
            scroll_depth: threshold,
            actual_scroll_depth: depth,
            page_path: pathname,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [enabled, pathname]);

  return null;
}
