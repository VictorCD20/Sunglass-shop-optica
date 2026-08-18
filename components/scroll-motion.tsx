"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = [
  "main > section:not(.home-hero):not(.catalog-experience)",
  ".catalog-experience .section-intro",
  ".catalog-experience .brand-selector",
  ".catalog-experience .feature-carousel",
  ".catalog-experience .availability-note",
  ".catalog-experience .text-link",
  ".collection-section .section-intro",
  ".collection-section .product-card",
  ".home-catalog .product-card",
  ".essential-services article",
  ".sports-service-media",
  ".sports-service-copy > *",
  ".simple-contact-cta > *",
  ".promise-card",
  ".video-frame",
  ".dark-feature > div:last-child",
  ".quote-grid blockquote",
  ".service-grid article",
  ".sun-grid article",
  ".benefit-pair article",
  ".payment-list article",
  ".technology-grid article",
  ".compact-benefits article",
  ".contact-details article",
  ".feature-links a",
  ".page-hero-copy > *",
  ".location-card",
  ".appointment-note",
].join(",");

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

    root.classList.add("motion-ready");
    targets.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.dataset.motion = index % 3 === 0 ? "up" : index % 3 === 1 ? "left" : "right";
      element.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
    });

    if (reducedMotion) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const reveal = (element: HTMLElement) => element.classList.add("is-visible");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -5%" });

    requestAnimationFrame(() => {
      targets.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) reveal(element);
        else observer.observe(element);
      });
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
