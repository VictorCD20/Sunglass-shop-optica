import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/site-data";

export function ProductGrid({
  brand,
  brandId,
  products,
  compact = false,
}: {
  brand: string;
  brandId: string;
  products: Product[];
  compact?: boolean;
}) {
  return (
    <div className={`product-grid ${compact ? "product-grid--compact" : ""}`}>
      {products.map((item) => (
        <Link
          key={`${brandId}-${item.slug}`}
          className="product-card"
          href={`/catalogo/${brandId}/${item.slug}`}
          aria-label={`Ver ficha de ${item.name} de ${brand}`}
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
                <span>{item.code ? "Modelo" : "Selección"}</span>
                <h3>{item.name}</h3>
              </div>
              <ArrowRight aria-hidden="true" />
            </div>
            <dl className="product-availability">
              <div><dt>Referencia</dt><dd>{item.code ?? "Confirmar en sucursal"}</dd></div>
              <div><dt>Acabado</dt><dd>{item.color ?? "Variantes según inventario"}</dd></div>
            </dl>
            <p className="product-card-summary">{item.detail}</p>
            <span className="product-card-link">Ver fotos y ficha técnica</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
