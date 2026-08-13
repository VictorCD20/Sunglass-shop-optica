"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { BRANDS, COLLECTIONS, whatsapp } from "@/lib/site-data";

export function CatalogExperience() {
  const params = useSearchParams();
  const queryBrand = params.get("marca") || "ray-ban";
  const [brandId, setBrandId] = useState(BRANDS.some((brand) => brand.id === queryBrand) ? queryBrand : "ray-ban");
  const brand = BRANDS.find((item) => item.id === brandId)!;
  const items = useMemo(() => COLLECTIONS[brandId] || [{ name: brand.name, detail: "Colección disponible en sucursal", src: brand.logoDark }], [brandId, brand]);
  return <section id="catalogo-marcas" className="catalog-experience">
    <div className="section-intro centered"><span className="eyebrow">Colecciones destacadas</span><h2>Elige una marca.<br/><em>Descubre su universo.</em></h2><p>Selecciona una de las marcas registradas en el catálogo para explorar sus modelos y agendar una prueba en sucursal.</p></div>
    <div className="brand-selector" role="tablist" aria-label="Marcas de lentes">{BRANDS.map((item) => <button key={item.id} role="tab" aria-selected={brandId === item.id} className={brandId === item.id ? "active" : ""} onClick={() => setBrandId(item.id)}><img src={item.logoDark} alt={item.name}/></button>)}</div>
    <FeatureCarousel key={brandId} items={items} brand={brand.name} />
    {!COLLECTIONS[brandId] && <p className="availability-note">La colección {brand.name} está disponible en nuestra sucursal. Consulta modelos y disponibilidad directamente con nuestro equipo.</p>}
    <a className="text-link" href={whatsapp(`Hola, quiero información de los lentes ${brand.name} de la sucursal.`)} target="_blank">Consultar {brand.name} por WhatsApp <span>↗</span></a>
  </section>;
}
