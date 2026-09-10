import type { MetadataRoute } from "next";
import { BRANDS, COLLECTIONS } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.opticasunglasshop.com.mx";
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/catalogo`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/beneficios`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/convenios`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const brandRoutes: MetadataRoute.Sitemap = BRANDS.map((brand) => ({
    url: `${baseUrl}/catalogo/${brand.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = BRANDS.flatMap((brand) =>
    (COLLECTIONS[brand.id] ?? []).map((product) => ({
      url: `${baseUrl}/catalogo/${brand.id}/${product.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...brandRoutes, ...productRoutes];
}
