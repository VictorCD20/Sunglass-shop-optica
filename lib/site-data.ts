export const CONTACT = {
  phone: "+52 999 987 4504",
  phoneDigits: "529999874504",
  address: "Plaza Dorada, Calle 50 no. 143 loc. 64, C. 19, 97220 Mérida, Yuc.",
  hours: "Lunes a domingo · 10:00 AM – 8:00 PM",
};

export const NAV = [
  ["Inicio", "/"], ["Catálogo", "/catalogo"], ["Servicios", "/servicios"],
  ["Beneficios", "/beneficios"], ["Convenios", "/convenios"], ["Contacto", "/contacto"],
] as const;

export const whatsapp = (message = "Hola, quiero información de Sunglass Shop Óptica.") =>
  `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(message)}`;

export const BRANDS = [
  { id: "ray-ban", name: "Ray-Ban", logo: "/assets/logos/RayBan blanco.png", logoDark: "/assets/logos/RayBan Negro.png", media: "/assets/catalogo/RayBan/RayBan11.jpeg" },
  { id: "prada", name: "Prada", logo: "/assets/logos/Prada Blanco.png", logoDark: "/assets/logos/Prada negro.png", media: null },
  { id: "carolina-herrera", name: "Carolina Herrera", logo: "/assets/logos/Carolina-Herrera-Logo-PNG.png", logoDark: "/assets/logos/Carolina-Herrera-Logo-PNG.png", media: null },
  { id: "guess", name: "Guess", logo: "/assets/logos/Guess Blanco.png", logoDark: "/assets/logos/Guess negro.png", media: "/assets/catalogo/Guess/Guess11.jpeg" },
  { id: "vogue", name: "Vogue Eyewear", logo: "/assets/logos/Vogue eyewear blanco.png", logoDark: "/assets/logos/Vogue eyewear negro.png", media: null },
  { id: "oakley", name: "Oakley", logo: "/assets/logos/1785030723724.png", logoDark: "/assets/logos/1785030723724.png", media: null },
] as const;

export type ProductMedia = {
  src: string;
  alt: string;
  type?: "image" | "video";
};

export type ProductSpecs = {
  shape: string;
  material: string;
  lensWidth: string;
  bridgeWidth: string;
  templeLength: string;
  lensHeight: string;
  fit: string;
  bridgeFit: string;
  clipOn: string;
};

export type Product = {
  slug: string;
  name: string;
  detail: string;
  src: string;
  type?: "image" | "video";
  code?: string;
  color?: string;
  specs?: ProductSpecs;
  gallery: ProductMedia[];
  officialSource?: string;
};

const rayBan = (product: Omit<Product, "gallery"> & { gallery: string[] }): Product => ({
  ...product,
  gallery: product.gallery.map((src, index) => ({
    src,
    alt: `${product.name}, vista ${index + 1}`,
    type: src.endsWith(".mp4") ? "video" : "image",
  })),
});

export const COLLECTIONS: Record<string, Product[]> = {
  "ray-ban": [
    rayBan({
      slug: "aviator-classic-rb3025",
      name: "Aviator Classic",
      detail: "La silueta piloto original de Ray-Ban, con doble puente y almohadillas ajustables.",
      src: "/assets/catalogo/RayBan/RayBan11.jpeg",
      code: "RB3025 L0205 58-14",
      color: "Oro arista · Verde G-15",
      specs: { shape: "Piloto", material: "Metal", lensWidth: "58 mm", bridgeWidth: "14 mm", templeLength: "135 mm", lensHeight: "50.1 mm", fit: "Estándar", bridgeFit: "Almohadillas nasales ajustables", clipOn: "No" },
      gallery: ["/assets/catalogo/RayBan/RayBan11.jpeg", "/assets/catalogo/RayBan/RayBan9.jpeg", "/assets/catalogo/RayBan/RayBanVid1.mp4"],
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/0RB3025-AVIATOR%20CLASSIC-Oro%20arista/805289602057",
    }),
    rayBan({
      slug: "original-wayfarer-classic-rb2140",
      name: "Original Wayfarer Classic",
      detail: "Diseño cuadrado de acetato, reconocido por su perfil inclinado y presencia atemporal.",
      src: "/assets/catalogo/RayBan/RayBan7.jpeg",
      code: "RB2140 901 50-22",
      color: "Negro pulido · Verde G-15",
      specs: { shape: "Cuadrada", material: "Acetato", lensWidth: "50 mm", bridgeWidth: "22 mm", templeLength: "150 mm", lensHeight: "41 mm", fit: "Estándar", bridgeFit: "Ajuste de puente alto", clipOn: "No" },
      gallery: ["/assets/catalogo/RayBan/RayBan7.jpeg", "/assets/catalogo/RayBan/Rayban5.jpeg", "/assets/catalogo/RayBan/RayBanVid3.mp4"],
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/0RB2140-WAYFARER-Negro/805289126577",
    }),
    rayBan({
      slug: "clubmaster-classic-rb3016",
      name: "Clubmaster Classic",
      detail: "Estética browline de inspiración retro con puente metálico y ajuste nasal regulable.",
      src: "/assets/catalogo/RayBan/RayBan1.jpeg",
      code: "RB3016 901/58 51-21",
      color: "Negro y dorado · G-15 verde polarizado",
      specs: { shape: "Cuadrada", material: "Acetato", lensWidth: "51 mm", bridgeWidth: "21 mm", templeLength: "145 mm", lensHeight: "43.9 mm", fit: "Estándar", bridgeFit: "Almohadillas nasales ajustables", clipOn: "No" },
      gallery: ["/assets/catalogo/RayBan/RayBan1.jpeg", "/assets/catalogo/RayBan/RayBan6.jpeg", "/assets/catalogo/RayBan/RayBanVid2.mp4"],
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/RB3016clubmaster%20classic-negro%20y%20dorado/805289346883",
    }),
    rayBan({
      slug: "round-metal-rb3447",
      name: "Round Metal",
      detail: "Armazón metálico redondo, ligero y con almohadillas nasales ajustables.",
      src: "/assets/catalogo/RayBan/RayBan2.jpeg",
      code: "RB3447 919671 50-21",
      color: "Dorado pulido · Gris degradé",
      specs: { shape: "Redonda", material: "Metal", lensWidth: "50 mm", bridgeWidth: "21 mm", templeLength: "145 mm", lensHeight: "46.9 mm", fit: "Pequeño", bridgeFit: "Almohadillas nasales ajustables", clipOn: "No" },
      gallery: ["/assets/catalogo/RayBan/RayBan2.jpeg", "/assets/catalogo/RayBan/RayBan3.jpeg", "/assets/catalogo/RayBan/RayBan10.jpeg"],
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/RB3447%20MALE%20round%20metal%20online%20exclusive-dorado/8056597409162",
    }),
    rayBan({
      slug: "justin-classic-rb4165",
      name: "Justin Classic",
      detail: "Perfil cuadrado de inspiración urbana con estructura ligera y ajuste de puente alto.",
      src: "/assets/catalogo/RayBan/RayBan8.jpeg",
      code: "RB4165 687380 54-16",
      color: "Gris ópalo mate · Azul oscuro",
      specs: { shape: "Cuadrada", material: "Nailon", lensWidth: "54 mm", bridgeWidth: "16 mm", templeLength: "145 mm", lensHeight: "43.9 mm", fit: "Estándar", bridgeFit: "Ajuste de puente alto", clipOn: "No" },
      gallery: ["/assets/catalogo/RayBan/RayBan8.jpeg", "/assets/catalogo/RayBan/RayBan7.jpeg", "/assets/catalogo/RayBan/Rayban5.jpeg"],
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/RB4165justin%20classic-gris%20%C3%B3palo/8056262898789",
    }),
    rayBan({
      slug: "hexagonal-flat-lenses-rb3548n",
      name: "Hexagonal Flat Lenses",
      detail: "Geometría irregular de metal con micas planas y almohadillas ajustables.",
      src: "/assets/catalogo/RayBan/RayBan3.jpeg",
      code: "RB3548N 001 51-21",
      color: "Oro arista · Verde G-15",
      specs: { shape: "Irregular", material: "Metal", lensWidth: "51 mm", bridgeWidth: "21 mm", templeLength: "145 mm", lensHeight: "44.7 mm", fit: "Estándar", bridgeFit: "Almohadillas nasales ajustables", clipOn: "No" },
      gallery: ["/assets/catalogo/RayBan/RayBan3.jpeg", "/assets/catalogo/RayBan/RayBan4.jpeg", "/assets/catalogo/RayBan/RayBan6.jpeg"],
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/RB3548Nhexagonal%20flat%20lenses-oro%20arista/8053672611649",
    }),
  ],
  guess: [
    { slug: "cat-eye-guess", name: "Cat-Eye Guess", detail: "Silueta cat-eye de presencia gráfica.", src: "/assets/catalogo/Guess/Guess11.jpeg", gallery: [{ src: "/assets/catalogo/Guess/Guess11.jpeg", alt: "Cat-Eye Guess en uso" }, { src: "/assets/catalogo/Guess/Guess10.jpeg", alt: "Vista lateral del armazón Cat-Eye Guess" }, { src: "/assets/catalogo/Guess/Guess1.jpeg", alt: "Referencia editorial Guess" }] },
    { slug: "optico-rojo-guess", name: "Óptico rojo Guess", detail: "Armazón oftálmico rojo con varillas metálicas.", src: "/assets/catalogo/Guess/Guess2.jpeg", gallery: [{ src: "/assets/catalogo/Guess/Guess2.jpeg", alt: "Armazón rojo Guess con estuche" }, { src: "/assets/catalogo/Guess/Guess3.jpeg", alt: "Detalle lateral del armazón rojo Guess" }, { src: "/assets/catalogo/Guess/Guess6.jpeg", alt: "Armazón Guess en uso" }] },
    { slug: "square-guess", name: "Square Guess", detail: "Frente cuadrado pensado para una presencia definida.", src: "/assets/catalogo/Guess/Guess5.jpeg", gallery: [{ src: "/assets/catalogo/Guess/Guess5.jpeg", alt: "Armazón cuadrado Guess en uso" }, { src: "/assets/catalogo/Guess/Guess4.jpeg", alt: "Referencia editorial Guess" }, { src: "/assets/catalogo/Guess/Guess9.jpeg", alt: "Lentes Guess en uso" }] },
    { slug: "carey-guess", name: "Carey Guess", detail: "Armazón óptico en acabado carey.", src: "/assets/catalogo/Guess/Guess7.jpeg", gallery: [{ src: "/assets/catalogo/Guess/Guess7.jpeg", alt: "Armazón carey Guess en uso" }, { src: "/assets/catalogo/Guess/Guess10.jpeg", alt: "Detalle de armazones Guess" }, { src: "/assets/catalogo/Guess/Guess11.jpeg", alt: "Referencia editorial Guess" }] },
  ],
  vogue: [
    { slug: "vogue-cat-eye", name: "Vogue Cat-Eye", detail: "Una selección de siluetas cat-eye de la colección Vogue Eyewear.", src: "/assets/catalogo/Vogue/VogueVid7.mp4", type: "video", gallery: [{ src: "/assets/catalogo/Vogue/VogueVid7.mp4", alt: "Vogue Cat-Eye en movimiento", type: "video" }, { src: "/assets/catalogo/Vogue/VogueVid1.mp4", alt: "Vogue Eyewear, vista editorial", type: "video" }] },
    { slug: "vogue-classic", name: "Vogue Classic", detail: "Diseños versátiles para uso diario.", src: "/assets/catalogo/Vogue/VogueVid1.mp4", type: "video", gallery: [{ src: "/assets/catalogo/Vogue/VogueVid1.mp4", alt: "Vogue Classic en movimiento", type: "video" }, { src: "/assets/catalogo/Vogue/VogueVid2.mp4", alt: "Vogue Eyewear, segunda vista", type: "video" }] },
    { slug: "vogue-glamour", name: "Vogue Glamour", detail: "Siluetas expresivas de inspiración editorial.", src: "/assets/catalogo/Vogue/VogueVid2.mp4", type: "video", gallery: [{ src: "/assets/catalogo/Vogue/VogueVid2.mp4", alt: "Vogue Glamour en movimiento", type: "video" }, { src: "/assets/catalogo/Vogue/VogueVid7.mp4", alt: "Vogue Eyewear, vista alternativa", type: "video" }] },
  ],
};

export function getBrand(brandId: string) {
  return BRANDS.find((brand) => brand.id === brandId);
}

export function getProduct(brandId: string, productSlug: string) {
  return COLLECTIONS[brandId]?.find((product) => product.slug === productSlug);
}
