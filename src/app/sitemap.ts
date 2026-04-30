import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dudkin.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ru: "https://dudkin.dev",
          en: "https://dudkin.dev",
        },
      },
    },
  ];
}
