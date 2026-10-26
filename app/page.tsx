import Hero from "@/app/components/sections/Hero";
import HomeSections from "@/app/components/sections/HomeSections";
import { SOCIAL_LINKS } from "@/app/lib/constants/social";
import portfolio from "@/app/lib/config/portfolio";
import { Metadata } from "next";

const siteUrl = portfolio.url;
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const profilePageId = `${siteUrl}/#profile-page`;

const personSameAs = SOCIAL_LINKS.filter((link) =>
  link.href.startsWith("https://"),
).map((link) => link.href);

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: portfolio.profile.name,
      jobTitle: portfolio.profile.role,
      description: portfolio.seo.description,
      url: siteUrl,
      image: `${siteUrl}${portfolio.seo.image}`,
      sameAs: personSameAs,
      knowsAbout: [
        "AutoCAD",
        "Civil 3D",
        "Etabs",
        "Structural Design",
        "Surveying",
        "Graphics Design",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      name: `${portfolio.profile.name} | ${portfolio.profile.role}`,
      url: siteUrl,
      description: `Portfolio profile for ${portfolio.profile.name}, a ${portfolio.profile.role.toLowerCase()} from Nepal.`,
      mainEntity: { "@id": personId },
      about: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: portfolio.seo.applicationName,
      url: siteUrl,
      description:
        "Amrit Gaudel's portfolio of civil engineering projects, competitions, and contact details.",
      publisher: { "@id": personId },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <HomeSections />
    </>
  );
}
