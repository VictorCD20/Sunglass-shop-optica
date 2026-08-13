"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = [
  "main > section:not(.home-hero):not(.catalog-experience)",
  ".collection-section .section-intro",
  ".collection-section .product-card",
  ".promise-card",
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
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });

    if (reducedMotion) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

    requestAnimationFrame(() => targets.forEach((element) => observer.observe(element)));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
