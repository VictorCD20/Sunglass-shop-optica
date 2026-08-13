"use client";

import { FormEvent } from "react";
import { CONTACT } from "@/lib/site-data";

export function CorporateForm() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hola, quiero solicitar información sobre convenios corporativos.\n\nEmpresa: ${data.get("empresa")}\nNombre: ${data.get("nombre")}\nPuesto: ${data.get("puesto")}\nTeléfono: ${data.get("telefono")}\nNúmero de colaboradores: ${data.get("colaboradores")}\nMensaje: ${data.get("mensaje")}`;
    window.open(`https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };
  return <form className="corporate-form" onSubmit={submit}>
    <label>Nombre de la empresa<input name="empresa" required /></label>
    <div className="form-row"><label>Nombre completo<input name="nombre" required /></label><label>Puesto<input name="puesto" required /></label></div>
    <div className="form-row"><label>Teléfono / WhatsApp<input name="telefono" type="tel" required /></label><label>Número de colaboradores<input name="colaboradores" type="number" min="1" required /></label></div>
    <label>Mensaje<textarea name="mensaje" rows={4} /></label>
    <button type="submit" className="form-submit">Enviar por WhatsApp <span>↗</span></button>
  </form>;
}
