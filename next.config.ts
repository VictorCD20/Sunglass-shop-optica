import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
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
