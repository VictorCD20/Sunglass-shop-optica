"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/site-data";

export function FeatureCarousel({ items, brand }: { items: Product[]; brand: string }) {
  const [current, setCurrent] = useState(Math.floor(items.length / 2));
  const next = useCallback(() => setCurrent((value) => (value + 1) % items.length), [items.length]);
  const prev = () => setCurrent((value) => (value - 1 + items.length) % items.length);
  useEffect(() => { const timer = window.setInterval(next, 5000); return () => window.clearInterval(timer); }, [next]);
  return <div className="feature-carousel">
    <div className="carousel-stage" style={{ perspective: "1100px" }}>{items.map((item, itemIndex) => {
      let position = (itemIndex - current + items.length) % items.length;
      if (position > Math.floor(items.length / 2)) position -= items.length;
      const center = position === 0;
      const adjacent = Math.abs(position) === 1;
      return <article key={`${item.name}-${itemIndex}`} className="carousel-card" aria-hidden={Math.abs(position) > 1} style={{
        transform: `translateX(${position * 54}%) scale(${center ? 1 : adjacent ? .84 : .68}) rotateY(${position * -11}deg)`,
        zIndex: center ? 10 : adjacent ? 5 : 1, opacity: center ? 1 : adjacent ? .34 : 0,
        filter: center ? "none" : "blur(4px)", visibility: Math.abs(position) > 1 ? "hidden" : "visible",
      }}>
        {item.type === "video" ? <video src={item.src} autoPlay muted loop playsInline /> : <img src={item.src} alt={`${brand} ${item.name}`} />}
        <div className="carousel-caption"><span>{brand}</span><h3>{item.name}</h3><p>{item.detail}</p></div>
      </article>;
    })}</div>
    <Button size="icon" variant="dark" className="carousel-prev" onClick={prev} aria-label="Modelo anterior"><ChevronLeft /></Button>
    <Button size="icon" variant="dark" className="carousel-next" onClick={next} aria-label="Modelo siguiente"><ChevronRight /></Button>
  </div>;
}
