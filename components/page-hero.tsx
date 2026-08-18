import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, text, children, media, position = "center 28%" }: { eyebrow: string; title: string; text: string; children?: ReactNode; media?: string; position?: string }) {
  return <section className="page-hero">
    <div className="page-hero-media">
      <div className="page-hero-backdrop" style={{ backgroundImage: `url('${media || "/assets/catalogo/RayBan/RayBan10.jpeg"}')` }} />
      <img src={media || "/assets/catalogo/RayBan/RayBan10.jpeg"} alt="" style={{ objectPosition: position }} />
      <span className="page-hero-overlay" />
    </div>
    <div className="page-hero-copy"><span className="eyebrow gold">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children && <div className="hero-actions">{children}</div>}</div>
  </section>;
}
