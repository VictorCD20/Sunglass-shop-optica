import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/site-data";
import { whatsapp } from "@/lib/site-data";

export function ProductGrid({
  brand,
  products,
  compact = false,
}: {
  brand: string;
  products: Product[];
  compact?: boolean;
}) {
  return (
    <div className={`product-grid ${compact ? "product-grid--compact" : ""}`}>
      {products.map((item) => (
        <a
          key={`${brand}-${item.name}`}
          className="product-card"
          href={whatsapp(`Hola, quiero agendar una visita para probarme ${item.name} de ${brand} en sucursal.`)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Consultar ${item.name} de ${brand}`}
        >
          <div className="product-media">
            {item.type === "video" ? (
              <video src={item.src} muted loop autoPlay playsInline preload="metadata" />
            ) : (
              <img src={item.src} alt={`${brand} ${item.name}`} />
            )}
            <span className="product-brand">{brand}</span>
          </div>
          <div className="product-information">
            <div className="product-heading">
              <div>
                <span>Modelo</span>
                <h3>{item.name}</h3>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
            <dl className="product-availability">
              <div><dt>Colores</dt><dd>Consultar variantes disponibles</dd></div>
              <div><dt>Precio</dt><dd>Disponible en sucursal</dd></div>
            </dl>
            <ul className="product-points">
              <li>{item.detail}</li>
              <li>Disponibilidad sujeta al inventario de la óptica</li>
              <li>Prueba y ajuste presencial recomendado</li>
            </ul>
          </div>
        </a>
      ))}
    </div>
  );
}
