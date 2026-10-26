import type { Metadata } from "next";
import portfolio from "@/app/lib/config/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Amrit Gaudel, a civil engineering student in Kathmandu, Nepal, specializing in structural design, AutoCAD, and creative visual work.",
  keywords: [
    "about Amrit Gaudel",
    "civil engineering student Kathmandu",
    "civil engineer Nepal",
    "AutoCAD",
    "Civil 3D",
    "structural design",
  ],
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Amrit Gaudel | Civil Engineering Student in Kathmandu, Nepal",
    description:
      "Professional profile, technical skills, and academic journey of Amrit Gaudel, a civil engineering student in Kathmandu, Nepal.",
    url: "/about",
    type: "profile",
    siteName: "Amrit Gaudel Portfolio",
    images: [
      {
        url: "/about/opengraph-image",
        width: 1200,
        height: 630,
        alt: "About Amrit Gaudel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Amrit Gaudel | Civil Engineering Student in Kathmandu, Nepal",
    description:
      "Professional profile, technical skills, and academic journey of Amrit Gaudel, a civil engineering student in Kathmandu, Nepal.",
    images: ["/about/opengraph-image"],
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
      name: "About",
      item: `${portfolio.url}/about`,
    },
  ],
};

export default function AboutLayout({
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