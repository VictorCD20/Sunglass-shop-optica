import Link from "next/link";
import { Bike, Eye, Glasses, Sparkles, Sun, Wrench } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { BRANDS, COLLECTIONS, whatsapp } from "@/lib/site-data";

export default function Home() {
  return <main>
    <HomeHero />
    <section id="catalogo-inicio" className="home-catalog section">
      <div className="catalog-heading">
        <div><span className="eyebrow">Catálogo real</span><h2>Modelos disponibles.<br/><em>Sin navegación infinita.</em></h2></div>
        <div><p>Una selección rápida del inventario registrado. Los colores, precios y existencias se confirman directamente en la sucursal antes de tu visita.</p><div className="catalog-brand-list">{BRANDS.map((brand) => <Link href={`/catalogo?marca=${brand.id}#catalogo-marcas`} key={brand.id}>{brand.name}</Link>)}</div></div>
      </div>
      <div className="home-product-groups">
        <ProductGrid brand="Ray-Ban" products={COLLECTIONS["ray-ban"].slice(0, 3)} compact />
        <ProductGrid brand="Guess" products={COLLECTIONS.guess.slice(0, 3)} compact />
        <ProductGrid brand="Vogue Eyewear" products={COLLECTIONS.vogue.slice(0, 3)} compact />
      </div>
      <div className="catalog-actions"><Button asChild variant="dark"><Link href="/catalogo">Ver catálogo completo</Link></Button><p>La prueba presencial permite evaluar proporciones, puente, ajuste y comodidad.</p></div>
    </section>
    <section id="servicios-inicio" className="home-services section">
      <div className="section-intro"><span className="eyebrow gold">Servicios de la óptica</span><h2>Más que un armazón.<br/><em>Una solución para tu visión.</em></h2><p>La atención continúa en sucursal con evaluación, ajuste y soluciones especializadas.</p></div>
      <div className="essential-services">
        <article><Eye/><span>01</span><h3>Optometría integral</h3><p>Evaluación visual profesional y asesoría para definir la graduación y el tipo de lente adecuado.</p></article>
        <article><Wrench/><span>02</span><h3>Reparación de lentes</h3><p>Ajuste, mantenimiento, reparación y sustitución de piezas, sujetos al modelo y disponibilidad.</p></article>
      </div>
      <div className="sports-service">
        <div className="sports-service-media"><video src="/assets/catalogo/RayBan/RayBanVid4.mp4" autoPlay muted loop playsInline preload="metadata" /></div>
        <div className="sports-service-copy"><span className="eyebrow gold">Servicio especializado</span><div className="sports-icon"><Bike/><Sparkles/></div><h2>Fabricación de lentes deportivas graduadas</h2><p>Soluciones para quienes necesitan visión clara durante la actividad deportiva, incluso en diseños envolventes.</p><ul><li><Glasses/>Graduación de micas curvas</li><li><Sun/>Acabados espejeados</li><li><Sparkles/>Tecnología fotocromática que se oscurece con el sol</li></ul><Button asChild><a href={whatsapp("Hola, quiero información sobre lentes deportivas graduadas.")} target="_blank">Consultar este servicio</a></Button></div>
      </div>
    </section>
  </main>;
}
