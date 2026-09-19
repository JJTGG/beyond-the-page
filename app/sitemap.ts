import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://beyond-the-page-two.vercel.app",
      lastModified: new Date(),
    },
  ];
}