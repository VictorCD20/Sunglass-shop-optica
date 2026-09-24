"use client";

import React, { useState, useEffect } from "react";
import { ComingSoonLanding } from "@/components/coming-soon-landing";

interface ComingSoonGuardProps {
  children: React.ReactNode;
}

export function ComingSoonGuard({ children }: ComingSoonGuardProps) {
  const [isComingSoon, setIsComingSoon] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const isComingSoonEnv = process.env.NEXT_PUBLIC_COMING_SOON !== "false";
    const urlParams = new URLSearchParams(window.location.search);
    const previewQuery = urlParams.get("preview");
    const storedOverride = localStorage.getItem("sunglass_dev_preview");

    if (previewQuery === "true" || storedOverride === "true") {
      setIsComingSoon(false);
    } else if (previewQuery === "false" || storedOverride === "false") {
      setIsComingSoon(true);
    } else {
      setIsComingSoon(isComingSoonEnv);
    }
  }, []);

  if (!isMounted) {
    // Before client hydration finishes, default to Coming Soon page if enabled
    const defaultEnv = process.env.NEXT_PUBLIC_COMING_SOON !== "false";
    return defaultEnv ? <ComingSoonLanding /> : <>{children}</>;
  }

  if (isComingSoon) {
    return <ComingSoonLanding />;
  }

  return <>{children}</>;
}
