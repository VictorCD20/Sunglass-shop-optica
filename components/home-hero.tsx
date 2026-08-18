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
  useEffect(() => { if (!playing) return; const timer = window.setInterval(next, 5000); return () => window.clearInterval(timer); }, [next, playing]);
  return <section className="home-hero">
    <div className="hero-slides" aria-live="polite">{slides.map((slide, slideIndex) => <div key={slide.src} className={`hero-slide ${slideIndex === index ? "active" : ""}`} style={slide.type === "image" ? { backgroundImage: `url('${slide.src}')`, backgroundPosition: slide.position } : undefined} aria-hidden={slideIndex !== index}>{slide.type === "video" && <video src={slide.src} autoPlay muted loop playsInline preload="metadata" />}<span className="sr-only">{slide.label}</span></div>)}</div>
    <div className="hero-shade" />
    <div className="home-hero-copy">
      <span className="eyebrow gold">Regreso a clases · Mérida</span>
      <h1>El lente correcto<br/><em>se elige en persona.</em></h1>
      <p>Explora modelos disponibles y visita la sucursal para encontrar el armazón que mejor funciona con las proporciones de tu rostro.</p>
      <div className="hero-actions"><Button asChild><a href="#catalogo-inicio">Ver modelos disponibles</a></Button><Button asChild variant="outline"><Link href="/contacto">Visitar la óptica</Link></Button></div>
      <div className="trust-row"><span>Más de 11 años</span><span>Prueba presencial</span><span>Asesoría por tipo de rostro</span><span>Marcas originales</span></div>
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
