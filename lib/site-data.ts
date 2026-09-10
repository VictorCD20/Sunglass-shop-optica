export const CONTACT = {
  phone: "+52 999 987 4504",
  phoneDigits: "529999874504",
  address: "Plaza Dorada, Calle 50 no. 143 loc. 64, C. 19, 97220 Mérida, Yuc.",
  hours: "Lunes a domingo · 10:00 AM – 8:00 PM",
};

export const NAV = [
  ["Inicio", "/"], ["Catálogo", "/catalogo"], ["Servicios", "/servicios"],
  ["Beneficios", "/beneficios"], ["Contacto", "/contacto"],
] as const;

export const WHATSAPP_MESSAGES = {
  general: "Hola, vi su sitio web y quiero recibir asesoría para elegir mis lentes.",
  catalogo: "Hola, vi el catálogo en su sitio web y quiero consultar disponibilidad de un modelo.",
  asesoria: "Hola, quiero agendar una asesoría para elegir lentes según mi rostro y necesidades.",
  deportivo: "Hola, quiero información sobre lentes deportivos graduados.",
  reparacion: "Hola, quiero consultar si pueden reparar o ajustar mis lentes.",
  convenios: "Hola, quiero información sobre convenios ópticos para empresas o colaboradores.",
} as const;

export const whatsapp = (message: string = WHATSAPP_MESSAGES.general) =>
  `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(message)}`;


export type Brand = {
  id: string;
  name: string;
  logo: string | null;
  logoDark: string | null;
  media: string;
  bannerMedia?: string;
};

export const BRANDS: Brand[] = [
  {
    id: "ray-ban",
    name: "Ray-Ban",
    logo: "/assets/logos/RayBan-blanco.png",
    logoDark: "/assets/logos/RayBan-Negro.png",
    media: "/assets/local-inventory/ray-ban/rectangular-carey/1.webp",
    bannerMedia: "/assets/catalogo/RayBan/RayBan10.jpeg",
  },
  {
    id: "oakley",
    name: "Oakley",
    logo: "/assets/logos/Oakley-Blanco.svg",
    logoDark: "/assets/logos/Oakley-Negro.svg",
    media: "/assets/local-inventory/ray-ban/cuadrado-transparente/1.webp",
    bannerMedia: "/assets/catalogo/RayBan/RayBanVid4.mp4",
  },
  {
    id: "vogue",
    name: "Vogue Eyewear",
    logo: "/assets/logos/Vogue-eyewear-blanco.png",
    logoDark: "/assets/logos/Vogue-eyewear-negro.png",
    media: "/assets/local-inventory/carolina-herrera/cat-eye-borgona/1.webp",
    bannerMedia: "/assets/catalogo/Guess/Guess8.jpeg",
  },
  {
    id: "guess",
    name: "Guess",
    logo: "/assets/logos/Guess-Blanco.png",
    logoDark: "/assets/logos/Guess-negro.png",
    media: "/assets/local-inventory/guess/redondo-rojo/1.webp",
    bannerMedia: "/assets/catalogo/Guess/Guess11.jpeg",
  },
  {
    id: "carolina-herrera",
    name: "Carolina Herrera",
    logo: "/assets/logos/Carolina-Herrera-Logo-PNG.png",
    logoDark: "/assets/logos/Carolina-Herrera-Logo-PNG.png",
    media: "/assets/local-inventory/carolina-herrera/cat-eye-borgona/1.webp",
    bannerMedia: "/assets/catalogo/RayBan/RayBan2.jpeg",
  },
  {
    id: "ralph-lauren",
    name: "Ralph Lauren",
    logo: null,
    logoDark: null,
    media: "/assets/local-inventory/ralph-lauren/geometrico-dorado/1.webp",
    bannerMedia: "/assets/catalogo/RayBan/RayBan7.jpeg",
  },
];

export type ProductMedia = {
  src: string;
  alt: string;
  type?: "image" | "video";
  spriteIndex?: 0 | 1 | 2;
};

export type ProductSpecs = {
  shape?: string;
  material?: string;
  lensWidth?: string;
  bridgeWidth?: string;
  templeLength?: string;
  lensHeight?: string;
  fit?: string;
  bridgeFit?: string;
  clipOn?: string;
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

type LocalProductInput = Omit<Product, "src" | "gallery"> & {
  folder: string;
  views?: string[];
};

const localProduct = ({ folder, views = ["vista frontal", "vista de tres cuartos", "vista lateral"], ...product }: LocalProductInput): Product => {
  const gallery = views.map((view, index) => ({
    src: `/assets/local-inventory/${folder}/${index + 1}.webp`,
    alt: `${product.name}, ${view}, fotografía real de la sucursal`,
  }));

  return { ...product, src: gallery[0].src, gallery };
};

export const COLLECTIONS: Record<string, Product[]> = {
  "ralph-lauren": [
    localProduct({
      folder: "ralph-lauren/geometrico-dorado",
      slug: "geometrico-dorado-local-01",
      name: "Geométrico dorado",
      detail: "Armazón óptico de contorno geométrico fino, fotografiado directamente en Sunglass Shop.",
      color: "Dorado con terminales carey",
      specs: { shape: "Geométrica", material: "Metal", bridgeFit: "Almohadillas nasales ajustables" },
      views: ["vista de tres cuartos", "vista frontal", "vista lateral", "vista superior"],
    }),
    localProduct({
      folder: "ralph-lauren/rectangular-carey",
      slug: "rectangular-carey-local-02",
      name: "Rectangular carey",
      detail: "Frente rectangular de líneas suaves con acabado carey y varillas oscuras.",
      color: "Carey oscuro",
      specs: { shape: "Rectangular" },
      views: ["vista de tres cuartos", "vista frontal", "vista lateral", "vista superior"],
    }),
    localProduct({
      folder: "ralph-lauren/rectangular-nude",
      slug: "rectangular-nude-local-03",
      name: "Rectangular nude",
      detail: "Armazón óptico translúcido de perfil rectangular y acabado cálido.",
      color: "Nude translúcido",
      specs: { shape: "Rectangular" },
      views: ["vista de tres cuartos", "vista frontal", "vista lateral", "vista superior"],
    }),
  ],
  "ray-ban": [
    localProduct({
      folder: "ray-ban/cuadrado-transparente",
      slug: "cuadrado-transparente-local-01",
      name: "Cuadrado transparente",
      detail: "Armazón óptico transparente de frente amplio, registrado desde distintos ángulos en la sucursal.",
      color: "Cristal con varillas negras",
      specs: { shape: "Cuadrada" },
      views: ["vista de tres cuartos", "vista frontal", "vista lateral", "vista superior"],
    }),
    localProduct({
      folder: "ray-ban/rectangular-carey",
      slug: "rectangular-carey-local-02",
      name: "Rectangular carey",
      detail: "Armazón óptico Ray-Ban de líneas rectangulares y acabado carey oscuro.",
      color: "Carey oscuro",
      specs: { shape: "Rectangular" },
      views: ["vista de tres cuartos", "vista frontal", "vista lateral", "vista superior"],
    }),
  ],
  "carolina-herrera": [
    localProduct({
      folder: "carolina-herrera/cat-eye-borgona",
      slug: "cat-eye-borgona-local-01",
      name: "Selección cat-eye borgoña",
      detail: "Selección metálica cat-eye en tonos borgoña y oro, fotografiada en el exhibidor de Carolina Herrera.",
      color: "Borgoña y dorado",
      specs: { shape: "Cat-eye", material: "Metal", bridgeFit: "Almohadillas nasales ajustables" },
      views: ["vista de tres cuartos", "vista frontal", "vista lateral", "vista superior"],
    }),
  ],
  "guess": [
    localProduct({
      folder: "guess/redondo-rojo",
      slug: "redondo-rojo-local-01",
      name: "Redondo rojo",
      detail: "Armazón óptico redondo con frente rojo y detalles metálicos claros.",
      color: "Rojo con dorado",
      specs: { shape: "Redonda" },
      views: ["vista de tres cuartos", "vista frontal", "vista lateral", "vista de detalle"],
    }),
    localProduct({
      folder: "guess/carey-ovalado",
      slug: "carey-ovalado-local-02",
      name: "Carey ovalado",
      detail: "Armazón óptico de contorno ovalado suave en acabado carey oscuro.",
      color: "Carey oscuro",
      specs: { shape: "Ovalada" },
      views: ["vista de tres cuartos", "vista frontal", "vista lateral", "vista superior"],
    }),
    localProduct({
      folder: "guess/rectangular-carey",
      slug: "rectangular-carey-local-03",
      name: "Rectangular carey",
      detail: "Armazón óptico rectangular de perfil compacto y acabado carey cálido.",
      color: "Carey cálido",
      specs: { shape: "Rectangular" },
      views: ["vista de tres cuartos", "vista frontal", "vista lateral", "vista superior"],
    }),
  ],
  "otros": [
    localProduct({
      folder: "otros/vitrina-multimarca-01",
      slug: "vitrina-multimarca-01",
      name: "Vitrina multimarca 01",
      detail: "Selección real del local con referencias cuya marca o modelo no se distingue con suficiente certeza en cada toma.",
      color: "Colores variados",
      views: ["vista general", "vista lateral", "vista ampliada"],
    }),
    localProduct({
      folder: "otros/vitrina-multimarca-02",
      slug: "vitrina-multimarca-02",
      name: "Vitrina multimarca 02",
      detail: "Exhibición de armazones del inventario físico, agrupada aparte para no asignar marcas incorrectas.",
      color: "Colores variados",
      views: ["vista general", "vista superior", "vista ampliada"],
    }),
  ],
};

export function getBrand(brandId: string) {
  return BRANDS.find((brand) => brand.id === brandId);
}

export function getProduct(brandId: string, productSlug: string) {
  return COLLECTIONS[brandId]?.find((product) => product.slug === productSlug);
}
