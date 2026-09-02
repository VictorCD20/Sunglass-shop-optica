"use client";

import { useEffect, useState } from "react";

export type HeroCarouselSlide = {
  src: string;
  alt: string;
  brand: string;
  name: string;
};

export function HeroCarousel({ slides }: { slides: HeroCarouselSlide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <div className="hero-carousel" aria-label="Galería rotativa de lentes del catálogo">
      <div className="hero-carousel-stage">
        {slides.map((slide, i) => (
          <button
            key={`${slide.src}-${i}`}
            type="button"
            className={`hero-carousel-slide ${i === index ? "is-active" : ""}`}
            aria-label={`${slide.brand} — ${slide.name}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          >
            <span className="hero-carousel-frame">
              <img src={slide.src} alt={slide.alt} loading={i === 0 ? "eager" : "lazy"} />
            </span>
          </button>
        ))}
      </div>
      <div className="hero-carousel-info">
        <span className="hero-carousel-caption">
          <strong>{slides[index].brand}</strong>
          <span>{slides[index].name}</span>
        </span>
        {slides.length > 1 && (
          <div className="hero-carousel-dots" role="tablist" aria-label="Seleccionar lente">
            {slides.map((slide, i) => (
              <button
                key={`dot-${slide.src}-${i}`}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${slide.brand} — ${slide.name}`}
                className={i === index ? "is-active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
