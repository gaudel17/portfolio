import type { MetadataRoute } from "next";
import portfolio from "@/app/lib/config/portfolio";

const BASE_URL = portfolio.url;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/projects/literature`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
