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

export type Brand = {
  id: string;
  name: string;
  logo: string | null;
  logoDark: string | null;
  media: string;
};

export const BRANDS: Brand[] = [
  {
    id: "ralph-lauren",
    name: "Ralph Lauren",
    logo: null,
    logoDark: null,
    media: "/assets/local-inventory/ralph-lauren/geometrico-dorado/1.webp",
  },
  {
    id: "ray-ban",
    name: "Ray-Ban",
    logo: "/assets/logos/RayBan blanco.png",
    logoDark: "/assets/logos/RayBan Negro.png",
    media: "/assets/local-inventory/ray-ban/rectangular-carey/1.webp",
  },
  {
    id: "carolina-herrera",
    name: "Carolina Herrera",
    logo: "/assets/logos/Carolina-Herrera-Logo-PNG.png",
    logoDark: "/assets/logos/Carolina-Herrera-Logo-PNG.png",
    media: "/assets/local-inventory/carolina-herrera/cat-eye-borgona/1.webp",
  },
  {
    id: "guess",
    name: "Guess",
    logo: "/assets/logos/Guess Blanco.png",
    logoDark: "/assets/logos/Guess negro.png",
    media: "/assets/local-inventory/guess/redondo-rojo/2.webp",
  },
  {
    id: "otros",
    name: "Otros del local",
    logo: null,
    logoDark: null,
    media: "/assets/local-inventory/otros/vitrina-multimarca-02/1.webp",
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
    }),
    localProduct({
      folder: "ralph-lauren/rectangular-carey",
      slug: "rectangular-carey-local-02",
      name: "Rectangular carey",
      detail: "Frente rectangular de líneas suaves con acabado carey y varillas oscuras.",
      color: "Carey oscuro",
      specs: { shape: "Rectangular" },
    }),
    localProduct({
      folder: "ralph-lauren/rectangular-nude",
      slug: "rectangular-nude-local-03",
      name: "Rectangular nude",
      detail: "Armazón óptico translúcido de perfil rectangular y acabado cálido.",
      color: "Nude translúcido",
      specs: { shape: "Rectangular" },
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
    }),
    localProduct({
      folder: "ray-ban/rectangular-carey",
      slug: "rectangular-carey-local-02",
      name: "Rectangular carey",
      detail: "Armazón óptico Ray-Ban de líneas rectangulares y acabado carey oscuro.",
      color: "Carey oscuro",
      specs: { shape: "Rectangular" },
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
    }),
    localProduct({
      folder: "guess/carey-ovalado",
      slug: "carey-ovalado-local-02",
      name: "Carey ovalado",
      detail: "Armazón óptico de contorno ovalado suave en acabado carey oscuro.",
      color: "Carey oscuro",
      specs: { shape: "Ovalada" },
    }),
    localProduct({
      folder: "guess/rectangular-carey",
      slug: "rectangular-carey-local-03",
      name: "Rectangular carey",
      detail: "Armazón óptico rectangular de perfil compacto y acabado carey cálido.",
      color: "Carey cálido",
      specs: { shape: "Rectangular" },
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
