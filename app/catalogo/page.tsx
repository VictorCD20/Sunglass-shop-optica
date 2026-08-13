import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogExperience } from "@/components/catalog-experience";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { COLLECTIONS, whatsapp } from "@/lib/site-data";

export const metadata: Metadata = { title: "Catálogo", description: "Colecciones de lentes disponibles en Sunglass Shop Óptica." };

function CollectionGrid({ id, title, intro }: { id: string; title: string; intro: string }) {
  return <section className={`collection-section ${id === "guess" ? "dark" : ""}`}><div className="section-intro"><span className="eyebrow">Colección</span><h2>{title}</h2><p>{intro}</p></div><div className="product-grid">{COLLECTIONS[id].map((item) => <a key={item.name} className="product-card" href={whatsapp(`Hola, quiero agendar una visita para probarme ${item.name} de ${title} en sucursal.`)} target="_blank">{item.type === "video" ? <video src={item.src} muted loop autoPlay playsInline /> : <img src={item.src} alt={`${title} ${item.name}`} />}<div><span>{title}</span><h3>{item.name}</h3><p>{item.detail}</p><b>↗</b></div></a>)}</div></section>;
}

export default function Catalogo() {
  return <main><PageHero eyebrow="Catálogo 2026" title="Colección Ray-Ban" text="Iconos que trascienden generaciones. Descubre modelos 100% originales disponibles en nuestra sucursal." media="/assets/catalogo/RayBan/RayBan11.jpeg"><Button asChild><a href="#catalogo-marcas">Ver colecciones</a></Button><Button asChild variant="outline"><a href={whatsapp("Hola, quiero información de los lentes Ray-Ban de la sucursal.")} target="_blank">Contactar óptica</a></Button></PageHero>
    <Suspense fallback={<div className="section">Cargando colecciones…</div>}><CatalogExperience /></Suspense>
    <CollectionGrid id="ray-ban" title="Ray-Ban Legacy" intro="Explora las siluetas que marcaron la historia de la moda y la óptica. Haz clic en tu favorito para agendar tu prueba." />
    <section className="video-banner"><video src="/assets/catalogo/Vogue/VogueVid4.mp4" autoPlay muted loop playsInline/><div><span className="eyebrow gold">Editorial Runway</span><h2>Vogue Eyewear</h2><p>Moda, color y siluetas pensadas para expresar tu estilo.</p></div></section>
    <CollectionGrid id="vogue" title="Vogue Eyewear" intro="Visita nuestra óptica en Mérida y prueba la colección con la asesoría de nuestros profesionales." />
    <CollectionGrid id="guess" title="Colección Guess" intro="Estilo audaz, seductor y sofisticado. Explora los modelos disponibles en sucursal y agenda tu prueba presencial." />
  </main>;
}
