import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/beneficios.html", destination: "/beneficios", permanent: true },
      { source: "/catalogo.html", destination: "/catalogo", permanent: true },
      { source: "/contacto.html", destination: "/contacto", permanent: true },
      { source: "/convenios.html", destination: "/convenios", permanent: true },
      { source: "/servicios.html", destination: "/servicios", permanent: true },
    ];
  },
};

export default nextConfig;
