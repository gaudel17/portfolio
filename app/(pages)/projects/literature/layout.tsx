import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Literature",
  description:
    "Writing and literary pieces created by Amrit Gaudel, a civil engineering student from Nepal.",
  alternates: {
    canonical: "/projects/literature",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LiteratureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
