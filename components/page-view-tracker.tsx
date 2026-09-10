"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

interface PageViewTrackerProps {
  eventName: string;
  eventCategory?: string;
  eventLabel?: string;
}

export function PageViewTracker({
  eventName,
  eventCategory = "navigation",
  eventLabel,
}: PageViewTrackerProps) {
  useEffect(() => {
    trackEvent({
      event: eventName,
      event_category: eventCategory,
      event_label: eventLabel || eventName,
    });
  }, [eventName, eventCategory, eventLabel]);

  return null;
}
