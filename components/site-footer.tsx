import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { CONTACT, NAV, whatsapp } from "@/lib/site-data";

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.7 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8h1.9V2.4c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.4H6.8V13h3.1v9h3.8Z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.4" cy="6.7" r="1.15" fill="currentColor" /></svg>;
}

export function SiteFooter() {
  return <>
    <footer className="footer">
      <div className="footer-brand"><img src="/assets/logo.png" alt="Sunglass Shop Óptica" /><p>Visión perfecta. Estilo auténtico. Asesoría experta.</p></div>
      <div><h3>Menú</h3>{NAV.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div><h3>Contacto</h3><p><MapPin size={16} /> {CONTACT.address}</p><a href={`tel:${CONTACT.phoneDigits}`}>{CONTACT.phone}</a><a href={whatsapp()} target="_blank" rel="noreferrer">WhatsApp directo</a></div>
      <div><h3>Síguenos</h3><div className="socials"><a href="https://www.facebook.com/p/Sunglass-Shop-Optica-100095025335468/" target="_blank" rel="noreferrer" aria-label="Facebook de Sunglass Shop Óptica" title="Facebook"><FacebookIcon /></a><a href="https://www.instagram.com/sunglass.shop.optica/" target="_blank" rel="noreferrer" aria-label="Instagram de Sunglass Shop Óptica" title="Instagram"><InstagramIcon /></a></div></div>
    </footer>
    <a className="whatsapp-float" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle /></a>
  </>;
}
