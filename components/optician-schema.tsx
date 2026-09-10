export function OpticianSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Optician",
    "name": "Sunglass Shop Óptica",
    "url": "https://www.opticasunglasshop.com.mx/",
    "telephone": "+529999874504",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plaza Dorada, Calle 50 no. 143 loc. 64, C. 19",
      "addressLocality": "Mérida",
      "addressRegion": "Yucatán",
      "postalCode": "97220",
      "addressCountry": "MX"
    },
    "openingHours": "Mo-Su 10:00-20:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
