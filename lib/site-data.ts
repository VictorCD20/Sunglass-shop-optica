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
  spriteIndex?: 0 | 1 | 2;
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
  spriteIndex?: 0 | 1 | 2;
  code?: string;
  color?: string;
  specs?: ProductSpecs;
  gallery: ProductMedia[];
  officialSource?: string;
};

const productShot = (
  product: Omit<Product, "src" | "gallery" | "spriteIndex"> & { asset: string },
): Product => {
  const { asset, ...details } = product;
  const viewNames = ["vista frontal", "vista de tres cuartos", "vista lateral"];
  return {
    ...details,
    src: asset,
    spriteIndex: 1,
    gallery: viewNames.map((view, index) => ({
      src: asset,
      alt: `${product.name}, ${view}`,
      spriteIndex: index as 0 | 1 | 2,
    })),
  };
};

export const COLLECTIONS: Record<string, Product[]> = {
  "ray-ban": [
    productShot({
      asset: "/assets/generated-eyewear/aviator-triptych.webp",
      slug: "aviator-classic-rb3025",
      name: "Aviator Classic",
      detail: "La silueta piloto original de Ray-Ban, con doble puente y almohadillas ajustables.",
      code: "RB3025 L0205 58-14",
      color: "Oro arista · Verde G-15",
      specs: { shape: "Piloto", material: "Metal", lensWidth: "58 mm", bridgeWidth: "14 mm", templeLength: "135 mm", lensHeight: "50.1 mm", fit: "Estándar", bridgeFit: "Almohadillas nasales ajustables", clipOn: "No" },
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/0RB3025-AVIATOR%20CLASSIC-Oro%20arista/805289602057",
    }),
    productShot({
      asset: "/assets/generated-eyewear/wayfarer-triptych.webp",
      slug: "original-wayfarer-classic-rb2140",
      name: "Original Wayfarer Classic",
      detail: "Diseño cuadrado de acetato, reconocido por su perfil inclinado y presencia atemporal.",
      code: "RB2140 901 50-22",
      color: "Negro pulido · Verde G-15",
      specs: { shape: "Cuadrada", material: "Acetato", lensWidth: "50 mm", bridgeWidth: "22 mm", templeLength: "150 mm", lensHeight: "41 mm", fit: "Estándar", bridgeFit: "Ajuste de puente alto", clipOn: "No" },
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/0RB2140-WAYFARER-Negro/805289126577",
    }),
    productShot({
      asset: "/assets/generated-eyewear/clubmaster-triptych.webp",
      slug: "clubmaster-classic-rb3016",
      name: "Clubmaster Classic",
      detail: "Estética browline de inspiración retro con puente metálico y ajuste nasal regulable.",
      code: "RB3016 901/58 51-21",
      color: "Negro y dorado · G-15 verde polarizado",
      specs: { shape: "Cuadrada", material: "Acetato", lensWidth: "51 mm", bridgeWidth: "21 mm", templeLength: "145 mm", lensHeight: "43.9 mm", fit: "Estándar", bridgeFit: "Almohadillas nasales ajustables", clipOn: "No" },
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/RB3016clubmaster%20classic-negro%20y%20dorado/805289346883",
    }),
    productShot({
      asset: "/assets/generated-eyewear/round-triptych.webp",
      slug: "round-metal-rb3447",
      name: "Round Metal",
      detail: "Armazón metálico redondo, ligero y con almohadillas nasales ajustables.",
      code: "RB3447 919671 50-21",
      color: "Dorado pulido · Gris degradé",
      specs: { shape: "Redonda", material: "Metal", lensWidth: "50 mm", bridgeWidth: "21 mm", templeLength: "145 mm", lensHeight: "46.9 mm", fit: "Pequeño", bridgeFit: "Almohadillas nasales ajustables", clipOn: "No" },
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/RB3447%20MALE%20round%20metal%20online%20exclusive-dorado/8056597409162",
    }),
    productShot({
      asset: "/assets/generated-eyewear/justin-triptych.webp",
      slug: "justin-classic-rb4165",
      name: "Justin Classic",
      detail: "Perfil cuadrado de inspiración urbana con estructura ligera y ajuste de puente alto.",
      code: "RB4165 687380 54-16",
      color: "Gris ópalo mate · Azul oscuro",
      specs: { shape: "Cuadrada", material: "Nailon", lensWidth: "54 mm", bridgeWidth: "16 mm", templeLength: "145 mm", lensHeight: "43.9 mm", fit: "Estándar", bridgeFit: "Ajuste de puente alto", clipOn: "No" },
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/RB4165justin%20classic-gris%20%C3%B3palo/8056262898789",
    }),
    productShot({
      asset: "/assets/generated-eyewear/hexagonal-triptych.webp",
      slug: "hexagonal-flat-lenses-rb3548n",
      name: "Hexagonal Flat Lenses",
      detail: "Geometría irregular de metal con micas planas y almohadillas ajustables.",
      code: "RB3548N 001 51-21",
      color: "Oro arista · Verde G-15",
      specs: { shape: "Irregular", material: "Metal", lensWidth: "51 mm", bridgeWidth: "21 mm", templeLength: "145 mm", lensHeight: "44.7 mm", fit: "Estándar", bridgeFit: "Almohadillas nasales ajustables", clipOn: "No" },
      officialSource: "https://www.ray-ban.com/mexico/gafas-de-sol/RB3548Nhexagonal%20flat%20lenses-oro%20arista/8053672611649",
    }),
  ],
  guess: [
    productShot({ asset: "/assets/generated-eyewear/cat-eye-triptych.webp", slug: "cat-eye-guess", name: "Cat-Eye Guess", detail: "Silueta cat-eye de presencia gráfica." }),
    productShot({ asset: "/assets/generated-eyewear/red-optical-triptych.webp", slug: "optico-rojo-guess", name: "Óptico rojo Guess", detail: "Armazón oftálmico rojo con varillas metálicas." }),
    productShot({ asset: "/assets/generated-eyewear/tortoise-square-triptych.webp", slug: "square-guess", name: "Square Guess", detail: "Frente cuadrado pensado para una presencia definida." }),
    productShot({ asset: "/assets/generated-eyewear/tortoise-optical-triptych.webp", slug: "carey-guess", name: "Carey Guess", detail: "Armazón óptico en acabado carey." }),
  ],
  vogue: [
    productShot({ asset: "/assets/generated-eyewear/pink-cat-eye-triptych.webp", slug: "vogue-cat-eye", name: "Vogue Cat-Eye", detail: "Una selección de siluetas cat-eye de la colección Vogue Eyewear." }),
    productShot({ asset: "/assets/generated-eyewear/classic-brown-triptych.webp", slug: "vogue-classic", name: "Vogue Classic", detail: "Diseños versátiles para uso diario." }),
    productShot({ asset: "/assets/generated-eyewear/glamour-burgundy-triptych.webp", slug: "vogue-glamour", name: "Vogue Glamour", detail: "Siluetas expresivas de inspiración editorial." }),
  ],
};

export function getBrand(brandId: string) {
  return BRANDS.find((brand) => brand.id === brandId);
}

export function getProduct(brandId: string, productSlug: string) {
  return COLLECTIONS[brandId]?.find((product) => product.slug === productSlug);
}
