"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [open]);
  return <header className="site-header">
    <Link href="/" className="brand-mark" aria-label="Sunglass Shop Óptica, inicio">
      <img src="/assets/logo.png" alt="Sunglass Shop Óptica" />
    </Link>
    <nav className="desktop-nav" aria-label="Navegación principal">
      {NAV.map(([label, href]) => <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>)}
    </nav>
    <button className="menu-button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <div className={`mobile-panel ${open ? "open" : ""}`} aria-hidden={!open}>
      <span className="eyebrow">Sunglass Shop · Mérida</span>
      {NAV.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)} style={{ transitionDelay: `${index * 35}ms` }}>{label}<span>0{index + 1}</span></Link>)}
    </div>
  </header>;
}
