"use client";

import React from "react";
import { trackEvent } from "@/lib/analytics";

interface TrackedWhatsappLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  eventName: string;
  eventCategory?: string;
  eventLabel?: string;
  children: React.ReactNode;
}

export function TrackedWhatsappLink({
  href,
  eventName,
  eventCategory = "lead",
  eventLabel,
  children,
  onClick,
  ...props
}: TrackedWhatsappLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent({
      event: eventName,
      event_category: eventCategory,
      event_label: eventLabel || eventName,
    });
    if (onClick) onClick(e);
  };

  return (
    <a href={href} onClick={handleClick} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}
