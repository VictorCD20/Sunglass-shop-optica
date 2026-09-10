"use client";

import React from "react";
import { trackEvent } from "@/lib/analytics";

interface TrackedMapsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function TrackedMapsLink({ href, children, onClick, ...props }: TrackedMapsLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent({
      event: "click_google_maps",
      event_category: "engagement",
      event_label: "google_maps_location",
    });
    if (onClick) onClick(e);
  };

  return (
    <a href={href} onClick={handleClick} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}
