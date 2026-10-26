import type { MetadataRoute } from "next";
import portfolio from "@/app/lib/config/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${portfolio.url}/sitemap.xml`,
    host: portfolio.url,
  };
}
