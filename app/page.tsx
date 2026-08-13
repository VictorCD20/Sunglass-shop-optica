import Link from "next/link";
import { ArrowRight, Award, Eye, HeartHandshake, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { Button } from "@/components/ui/button";
import { whatsapp } from "@/lib/site-data";

export default function Home() {
  return <main>
    <HomeHero />
    <section className="section split-intro"><div><span className="eyebrow">Nuestra promesa</span><h2>Tu visión merece<br/><em>algo extraordinario.</em></h2></div><p>Combinamos criterio clínico, estilo y acompañamiento experto para ayudarte a elegir los lentes que realmente funcionan para ti.</p></section>
    <section className="cards-three section topless">
      {[{icon:<Wrench/>,title:"Mantenimiento 90 Días",text:"Ajustes, limpieza y mantenimiento especializado para conservar tus lentes en las mejores condiciones."},{icon:<ShieldCheck/>,title:"Refacciones Originales",text:"Soluciones y piezas originales, sujetas a modelo, marca y disponibilidad."},{icon:<Eye/>,title:"Visagismo Clínico",text:"Analizamos proporciones, estilo y necesidades visuales para encontrar tu armazón ideal."}].map((card, index) => <article key={card.title} className="promise-card"><span>0{index+1}</span>{card.icon}<h3>{card.title}</h3><p>{card.text}</p></article>)}
    </section>
    <section className="dark-feature section"><div className="video-frame"><video src="/assets/catalogo/RayBan/RayBanVid1.mp4" autoPlay muted loop playsInline /></div><div><span className="eyebrow gold">Todo en un solo lugar</span><h2>Nuestra experiencia,<br/>al servicio de tu mirada.</h2><p>Explora marcas exclusivas, servicios especializados, beneficios y soluciones corporativas con una atención cercana.</p><div className="feature-links"><Link href="/servicios"><Sparkles/>Servicios especializados<ArrowRight/></Link><Link href="/beneficios"><Award/>Beneficios y pagos<ArrowRight/></Link><Link href="/convenios"><HeartHandshake/>Convenios corporativos<ArrowRight/></Link></div></div></section>
    <section className="testimonials section"><div className="section-intro"><span className="eyebrow">Experiencias reales</span><h2>Confianza que<br/><em>se ve y se siente.</em></h2></div><div className="quote-grid"><blockquote>“Excelente atención y asesoría. Me ayudaron a elegir el armazón que mejor se adapta a mi rostro.”<cite>Cliente verificado</cite></blockquote><blockquote>“La atención fue muy profesional y el mantenimiento de mis lentes quedó perfecto.”<cite>Cliente verificado</cite></blockquote></div></section>
    <section className="final-cta"><span className="eyebrow gold">Comienza hoy</span><h2>Encuentra los lentes<br/><em>que hablan de ti.</em></h2><p>Visítanos en Plaza Dorada o recibe atención directa por WhatsApp.</p><Button asChild><a href={whatsapp()} target="_blank">Hablar con un asesor</a></Button></section>
  </main>;
}
