"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BRANDS } from "@/lib/site-data";

const slides = [
  { src: "/assets/catalogo/RayBan/RayBan10.jpeg", label: "Ray-Ban · Colección disponible", position: "center top", type: "image" },
  { src: "/assets/catalogo/Guess/Guess11.jpeg", label: "Guess · Estilo contemporáneo", position: "center 28%", type: "image" },
  { src: "/assets/catalogo/RayBan/RayBanVid2.mp4", label: "Armazones en movimiento", position: "center", type: "video" },
  { src: "/assets/catalogo/RayBan/RayBan11.jpeg", label: "Asesoría óptica especializada", position: "center top", type: "image" },
];

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const next = useCallback(() => setIndex((value) => (value + 1) % slides.length), []);
  const previous = useCallback(() => setIndex((value) => (value - 1 + slides.length) % slides.length), []);
  useEffect(() => { if (!playing) return; const timer = window.setInterval(next, 5000); return () => window.clearInterval(timer); }, [next, playing]);
  return <section className="home-hero">
    <div className="hero-slides" aria-live="polite">{slides.map((slide, slideIndex) => <div key={slide.src} className={`hero-slide ${slideIndex === index ? "active" : ""}`} aria-hidden={slideIndex !== index}>{slide.type === "video" ? <video className="hero-slide-visual" src={slide.src} autoPlay muted loop playsInline preload="metadata" /> : <><div className="hero-slide-backdrop" style={{ backgroundImage: `url('${slide.src}')` }} /><img className="hero-slide-visual" src={slide.src} alt="" style={{ objectPosition: slide.position }} /></>}<span className="sr-only">{slide.label}</span></div>)}</div>
    <div className="hero-shade" />
    <div className="home-hero-copy">
      <h1>SUNGLASS SHOP ÓPTICA<br/><em>Visión, estilo y atención personalizada.</em></h1>
      <p>Visita nuestra óptica en Mérida para recibir orientación en la elección de tus armazones y taller de servicio.</p>
      <div className="hero-actions"><Button asChild><a href="#catalogo-inicio">Ver modelos</a></Button><Button asChild variant="outline"><Link href="/servicios">Conocer servicios</Link></Button></div>
      <div className="trust-row"><span>Óptica en Plaza Dorada</span><span>Prueba presencial</span><span>Asesoría por tipo de rostro</span><span>Marcas reconocidas</span></div>
    </div>
    <div className="hero-controls" aria-label="Controles del hero">
      <button type="button" onClick={previous} aria-label="Imagen anterior"><ChevronLeft /></button>
      <div className="hero-dots">{slides.map((slide, dotIndex) => <button type="button" key={slide.src} className={dotIndex === index ? "active" : ""} aria-current={dotIndex === index ? "true" : undefined} onClick={() => setIndex(dotIndex)} aria-label={`Mostrar imagen ${dotIndex + 1}`}><span /></button>)}</div>
      <span className="hero-counter">0{index + 1} / 0{slides.length}</span>
      <button type="button" onClick={next} aria-label="Imagen siguiente"><ChevronRight /></button>
      <button type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pausar carrusel" : "Reproducir carrusel"}>{playing ? <Pause /> : <Play />}</button>
    </div>
    <div className="hero-brand-rail">
      <span className="brand-rail-label">Marcas disponibles</span>
      <div className="brand-marquee-viewport">
        <div className="brand-marquee-track">
          {[0, 1].map((copy) => <div className="brand-marquee-group" aria-hidden={copy === 1} key={copy}>{BRANDS.map((brand) => <Link key={`${copy}-${brand.id}`} tabIndex={copy === 1 ? -1 : 0} href={`/catalogo/${brand.id}`} aria-label={copy === 0 ? `Ver catálogo ${brand.name}` : undefined}>{brand.logo ? <img src={brand.logo} alt={copy === 0 ? brand.name : ""}/> : <span className="brand-name-mark">{brand.name}</span>}</Link>)}</div>)}
        </div>
      </div>
    </div>
  </section>;
}
