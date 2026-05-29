import type { MetadataRoute } from "next";
import { pages, hrefForSlug } from "@/data/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://astikan.com";
  return pages.map((page) => ({
    url: `${baseUrl}${hrefForSlug(page.slug)}`,
    lastModified: new Date(),
    changeFrequency: page.policy ? "monthly" : page.slug === "blogs" ? "weekly" : "weekly",
    priority: page.slug === "home" ? 1 : page.policy ? 0.55 : 0.8,
  }));
}
