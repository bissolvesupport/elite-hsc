import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://elitehcs.com.au/", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://elitehcs.com.au/privacy-policy", lastModified, changeFrequency: "yearly", priority: .3 },
    { url: "https://elitehcs.com.au/terms-and-conditions", lastModified, changeFrequency: "yearly", priority: .3 },
  ];
}
