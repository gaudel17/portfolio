import type { Metadata } from "next";
import portfolio from "@/app/lib/config/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Amrit Gaudel, a civil engineering student in Kathmandu, Nepal, for internships, design collaborations, and civil engineering project work.",
  keywords: [
    "contact Amrit Gaudel",
    "civil engineering internships Nepal",
    "AutoCAD designer Nepal",
    "civil engineer Kathmandu",
    "Amrit Gaudel contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Amrit Gaudel | Civil Engineering Student in Kathmandu, Nepal",
    description:
      "Get in touch with Amrit Gaudel for internships, collaborations, and civil engineering project work.",
    url: "/contact",
    type: "website",
    siteName: "Amrit Gaudel Portfolio",
    images: [
      {
        url: "/contact/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Amrit Gaudel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Amrit Gaudel | Civil Engineering Student in Kathmandu, Nepal",
    description:
      "Get in touch with Amrit Gaudel for internships, collaborations, and civil engineering project work.",
    images: ["/contact/opengraph-image"],
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
      name: "Contact",
      item: `${portfolio.url}/contact`,
    },
  ],
};

export default function ContactLayout({
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
