"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BRANDS, whatsapp } from "@/lib/site-data";

const slides = [
  { src: "/assets/catalogo/RayBan/RayBan10.jpeg", label: "Ray-Ban · Colección disponible", position: "center top" },
  { src: "/assets/catalogo/Guess/Guess11.jpeg", label: "Guess · Estilo contemporáneo", position: "center 28%" },
  { src: "/assets/catalogo/RayBan/RayBan11.jpeg", label: "Asesoría óptica especializada", position: "center top" },
];

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const next = useCallback(() => setIndex((value) => (value + 1) % slides.length), []);
  useEffect(() => { if (!playing) return; const timer = window.setInterval(next, 5000); return () => window.clearInterval(timer); }, [next, playing]);
  return <section className="home-hero">
    <div className="hero-slides" aria-live="polite">{slides.map((slide, slideIndex) => <div key={slide.src} className={`hero-slide ${slideIndex === index ? "active" : ""}`} style={{ backgroundImage: `url('${slide.src}')`, backgroundPosition: slide.position }}><span className="sr-only">{slide.label}</span></div>)}</div>
    <div className="hero-shade" />
    <div className="home-hero-copy">
      <span className="eyebrow gold">Óptica especializada · Mérida</span>
      <h1>Visión perfecta.<br/><em>Estilo auténtico.</em></h1>
      <p>Asesoría experta. Más de 11 años cuidando tu salud visual con las mejores marcas y tecnología.</p>
      <div className="hero-actions"><Button asChild><a href={whatsapp()} target="_blank">Contáctanos por WhatsApp</a></Button><Button asChild variant="outline"><Link href="/catalogo">Explorar catálogo</Link></Button></div>
      <div className="trust-row"><span>Más de 11 años</span><span>Garantía Real</span><span>Asesoría Experta</span><span>Mantenimiento Especializado</span><span>Marcas Originales</span></div>
    </div>
    <div className="hero-controls" aria-label="Controles del hero">
      <button onClick={() => setIndex((index - 1 + slides.length) % slides.length)} aria-label="Imagen anterior"><ChevronLeft /></button>
      <div className="hero-dots">{slides.map((slide, dotIndex) => <button key={slide.src} className={dotIndex === index ? "active" : ""} onClick={() => setIndex(dotIndex)} aria-label={`Mostrar imagen ${dotIndex + 1}`}><span /></button>)}</div>
      <span className="hero-counter">0{index + 1} / 0{slides.length}</span>
      <button onClick={next} aria-label="Imagen siguiente"><ChevronRight /></button>
      <button onClick={() => setPlaying(!playing)} aria-label={playing ? "Pausar carrusel" : "Reproducir carrusel"}>{playing ? <Pause /> : <Play />}</button>
    </div>
    <div className="hero-brand-rail">
      <span className="brand-rail-label">Marcas disponibles</span>
      <div className="brand-marquee-viewport">
        <div className="brand-marquee-track">
          {[0, 1].map((copy) => <div className="brand-marquee-group" aria-hidden={copy === 1} key={copy}>{BRANDS.map((brand) => <Link key={`${copy}-${brand.id}`} tabIndex={copy === 1 ? -1 : 0} href={`/catalogo?marca=${brand.id}#catalogo-marcas`}><img src={brand.logo} alt={copy === 0 ? brand.name : ""}/></Link>)}</div>)}
        </div>
      </div>
    </div>
  </section>;
}
