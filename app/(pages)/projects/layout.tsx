import type { Metadata } from "next";
import portfolio from "@/app/lib/config/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Amrit Gaudel's selected civil engineering projects and competitions — structural models, base isolation, surveying work, and more from Kathmandu, Nepal.",
  keywords: [
    "Amrit Gaudel projects",
    "civil engineering projects",
    "structural design portfolio",
    "base isolation model",
    "civil engineering Nepal projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Projects by Amrit Gaudel | Civil Engineering Student in Kathmandu, Nepal",
    description:
      "A curated collection of civil engineering projects and competitions by Amrit Gaudel, a civil engineering student in Kathmandu, Nepal.",
    url: "/projects",
    type: "website",
    siteName: "Amrit Gaudel Portfolio",
    images: [
      {
        url: "/projects/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Projects by Amrit Gaudel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by Amrit Gaudel | Civil Engineering Student in Kathmandu, Nepal",
    description:
      "A curated collection of civil engineering projects and competitions by Amrit Gaudel, a civil engineering student in Kathmandu, Nepal.",
    images: ["/projects/opengraph-image"],
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${portfolio.url}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: `${portfolio.url}/projects`,
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      {children}
    </>
  );
}
