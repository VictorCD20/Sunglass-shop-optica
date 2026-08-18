"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import type { ProductMedia } from "@/lib/site-data";

export function ProductGallery({ items, productName }: { items: ProductMedia[]; productName: string }) {
  const [current, setCurrent] = useState(0);
  const previous = useCallback(() => setCurrent((value) => (value - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setCurrent((value) => (value + 1) % items.length), [items.length]);
  const active = items[current];

  return (
    <div className="product-gallery" aria-label={`Galería de ${productName}`}>
      <div className="product-gallery-stage" aria-live="polite">
        {active.type === "video" ? (
          <video key={active.src} src={active.src} autoPlay muted loop playsInline preload="metadata" aria-label={active.alt} />
        ) : (
          <img key={active.src} src={active.src} alt={active.alt} />
        )}
        {items.length > 1 && (
          <div className="product-gallery-controls">
            <button type="button" onClick={previous} aria-label="Vista anterior"><ChevronLeft /></button>
            <span>{String(current + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            <button type="button" onClick={next} aria-label="Vista siguiente"><ChevronRight /></button>
          </div>
        )}
      </div>
      {items.length > 1 && (
        <div className="product-gallery-thumbnails" role="tablist" aria-label="Vistas del producto">
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={current === index}
              className={current === index ? "active" : ""}
              onClick={() => setCurrent(index)}
            >
              {item.type === "video" ? <video src={item.src} muted playsInline preload="metadata" /> : <img src={item.src} alt="" />}
              <span className="sr-only">{item.alt}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
