"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState, type CSSProperties } from "react";
import type { ProductMedia } from "@/lib/site-data";

function GalleryMedia({ item, decorative = false }: { item: ProductMedia; decorative?: boolean }) {
  if (item.spriteIndex !== undefined) {
    return (
      <span
        className="eyewear-sprite"
        style={{ "--sprite-index": item.spriteIndex } as CSSProperties}
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : item.alt}
        aria-hidden={decorative || undefined}
      >
        <img src={item.src} alt="" />
      </span>
    );
  }
  if (item.type === "video") {
    return <video src={item.src} autoPlay={!decorative} muted loop={!decorative} playsInline preload="metadata" aria-label={decorative ? undefined : item.alt} />;
  }
  return <img src={item.src} alt={decorative ? "" : item.alt} />;
}

export function ProductGallery({ items, productName }: { items: ProductMedia[]; productName: string }) {
  const [current, setCurrent] = useState(0);
  const previous = useCallback(() => setCurrent((value) => (value - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setCurrent((value) => (value + 1) % items.length), [items.length]);
  const active = items[current];

  return (
    <div className="product-gallery" aria-label={`Galería de ${productName}`}>
      <div className="product-gallery-stage" aria-live="polite">
        <GalleryMedia key={`${active.src}-${active.spriteIndex ?? current}`} item={active} />
        {active.spriteIndex !== undefined ? <span className="product-gallery-sample">Imagen temporal de referencia</span> : null}
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
              key={`${item.src}-${item.spriteIndex ?? index}`}
              type="button"
              role="tab"
              aria-selected={current === index}
              className={current === index ? "active" : ""}
              onClick={() => setCurrent(index)}
            >
              <GalleryMedia item={item} decorative />
              <span className="sr-only">{item.alt}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
