export const CONTACT = {
  phone: "+52 55 1234 5678",
  phoneDigits: "525512345678",
  email: "asesoria@sunglassshop.com",
  address: "Plaza Dorada, Calle 50 no. 143 loc 64, C. 19, 97220 Mérida, Yuc.",
  hours: "Lunes a domingo · 10:00 AM – 8:00 PM",
};

export const NAV = [
  ["Inicio", "/"], ["Catálogo", "/catalogo"], ["Servicios", "/servicios"],
  ["Beneficios", "/beneficios"], ["Convenios", "/convenios"], ["Contacto", "/contacto"],
] as const;

export const whatsapp = (message = "Hola, quiero información de Sunglass Shop Óptica.") =>
  `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(message)}`;

export const BRANDS = [
  { id: "ray-ban", name: "Ray-Ban", logo: "/assets/logos/RayBan blanco.png", logoDark: "/assets/logos/RayBan Negro.png" },
  { id: "prada", name: "Prada", logo: "/assets/logos/Prada Blanco.png", logoDark: "/assets/logos/Prada negro.png" },
  { id: "carolina-herrera", name: "Carolina Herrera", logo: "/assets/logos/Carolina-Herrera-Logo-PNG.png", logoDark: "/assets/logos/Carolina-Herrera-Logo-PNG.png" },
  { id: "guess", name: "Guess", logo: "/assets/logos/Guess Blanco.png", logoDark: "/assets/logos/Guess negro.png" },
  { id: "vogue", name: "Vogue Eyewear", logo: "/assets/logos/Vogue eyewear blanco.png", logoDark: "/assets/logos/Vogue eyewear negro.png" },
  { id: "oakley", name: "Oakley", logo: "/assets/logos/1785030723724.png", logoDark: "/assets/logos/1785030723724.png" },
] as const;

export type Product = { name: string; detail: string; src: string; type?: "image" | "video" };

export const COLLECTIONS: Record<string, Product[]> = {
  "ray-ban": [
    ["Aviator Classic", "El icono que trasciende generaciones", "RayBan1.jpeg"],
    ["Wayfarer Original", "Diseño legendario de identidad inconfundible", "RayBan2.jpeg"],
    ["Clubmaster Retro", "Carácter vintage con presencia contemporánea", "RayBan3.jpeg"],
    ["Erika Chic", "Ligereza y estilo para todos los días", "RayBan4.jpeg"],
    ["Justin Sport", "Perfil urbano de inspiración deportiva", "Rayban5.jpeg"],
    ["Round Metal", "Silueta circular de espíritu creativo", "RayBan6.jpeg"],
    ["Hexagonal Flat", "Geometría moderna y lentes planas", "RayBan7.jpeg"],
    ["Meteor Retro", "Volumen retro con actitud actual", "RayBan8.jpeg"],
    ["State Street", "Elegancia contemporánea de ángulos marcados", "RayBan9.jpeg"],
  ].map(([name, detail, file]) => ({ name, detail, src: `/assets/catalogo/RayBan/${file}` })),
  guess: [
    ["Luxe Monogram", "Glamour reconocible y acabados distintivos", "Guess1.jpeg"],
    ["Classic Aviator", "Una silueta esencial con sello Guess", "Guess2.jpeg"],
    ["Retro Square", "Volumen definido de inspiración retro", "Guess3.jpeg"],
    ["Sleek Frame", "Líneas limpias para un estilo sofisticado", "Guess4.jpeg"],
    ["Bold Shield", "Diseño envolvente de fuerte personalidad", "Guess5.jpeg"],
    ["Cat-Eye Glam", "Feminidad gráfica y presencia elegante", "Guess6.jpeg"],
    ["Urban Chic", "Estilo versátil para la vida urbana", "Guess7.jpeg"],
    ["Metal Gradient", "Metal ligero con un acabado refinado", "Guess8.jpeg"],
    ["Gold Identity", "Detalles dorados de identidad audaz", "Guess9.jpeg"],
  ].map(([name, detail, file]) => ({ name, detail, src: `/assets/catalogo/Guess/${file}` })),
  vogue: [
    ["Vogue Classic", "Runway Classic", "VogueVid1.mp4"],
    ["Vogue Glamour", "Glamour contemporáneo", "VogueVid2.mp4"],
    ["Vogue Cat-Eye", "Moda Cat-Eye", "VogueVid7.mp4"],
    ["Vogue Urban", "Urban Style", "VogueVid6.mp4"],
    ["Vogue Metal Chic", "Metal Chic", "VogueVid8.mp4"],
    ["Vogue Summer", "Summer Trend", "VogueVid9.mp4"],
  ].map(([name, detail, file]) => ({ name, detail, src: `/assets/catalogo/Vogue/${file}`, type: "video" as const })),
};
