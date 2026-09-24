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

  const handleDisableComingSoon = () => {
    setIsComingSoon(false);
    localStorage.setItem("sunglass_dev_preview", "true");
  };

  const handleEnableComingSoon = () => {
    setIsComingSoon(true);
    localStorage.setItem("sunglass_dev_preview", "false");
  };

  if (!isMounted) {
    // Before client hydration finishes, default to Coming Soon page if enabled
    const defaultEnv = process.env.NEXT_PUBLIC_COMING_SOON !== "false";
    return defaultEnv ? <ComingSoonLanding /> : <>{children}</>;
  }

  if (isComingSoon) {
    return <ComingSoonLanding onDisableComingSoon={handleDisableComingSoon} />;
  }

  return (
    <>
      <div className="bg-[#111] border-b border-[#d8a62f]/30 px-4 py-1.5 text-center text-xs text-[#d8a62f] flex items-center justify-center gap-3">
        <span>⚡ Modo Desarrollador: Estás viendo el sitio completo.</span>
        <button
          onClick={handleEnableComingSoon}
          className="underline font-bold text-white hover:text-[#d8a62f] transition-colors"
        >
          Activar modo &quot;Próximamente&quot;
        </button>
      </div>
      {children}
    </>
  );
}
