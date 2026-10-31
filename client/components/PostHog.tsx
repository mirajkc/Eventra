"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

type PostHogProps = {
  apiKey?: string;
  host?: string;
};

export default function PostHog({ apiKey, host }: PostHogProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!apiKey || !host) return;

    if (!posthog.__loaded) {
      posthog.init(apiKey, {
        api_host: host,
        defaults: "2026-08-30",
        person_profiles: "always",
        autocapture: true,
        capture_pageview: "history_change",
        capture_pageleave: true,
        enable_heatmaps: true,
        disable_session_recording: false,
        session_recording: {
          maskAllInputs: true,
        },
      });
    }

    posthog.opt_in_capturing();
  }, [apiKey, host]);

  useEffect(() => {
    if (!apiKey || !host || !posthog.__loaded) return;

    const segments = pathname.split("/").filter(Boolean);
    const routeType = segments[0];
    const routeId = segments[1];

    posthog.unregister("event_id");
    posthog.unregister("organization_id");

    if (!routeId) return;

    if (routeType === "event") {
      posthog.register({ event_id: routeId });
    } else if (routeType === "organization") {
      posthog.register({ organization_id: routeId });
    }
  }, [apiKey, host, pathname]);

  return null;
}
