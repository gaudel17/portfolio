"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Crosshair,
  FileText,
  Github,
  Palette,
} from "lucide-react";

import { getProjects } from "@/app/types/project";
import { getGraphicsDesign, getLiterature } from "@/app/lib/data/galleries";
import GalleryGrid from "@/app/components/sections/GalleryGrid";
import OptimizedImage from "@/app/components/ui/OptimizedImage";
import portfolio from "@/app/lib/config/portfolio";

export default function Projects() {
  const projects = getProjects();
  const graphics = getGraphicsDesign();
  const literature = getLiterature();
  const siteUrl = portfolio.url;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${portfolio.profile.name} Projects`,
    description:
      "Selected civil engineering projects and competitions by Amrit Gaudel, focused on structural design and hands-on learning.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        ...(project.image ? { image: `${siteUrl}${project.image}` } : {}),
        ...(project.liveUrl ? { url: project.liveUrl } : {}),
        ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
      },
    })),
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 [mask-image:radial-gradient(ellipse_75%_45%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
        <header className="grid items-end gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
          <div className="max-w-3xl space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-kicker w-fit"
            >
              <span>Selected work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(1.9rem,5vw,4rem)] font-semibold leading-[1.04] tracking-tight text-white"
            >
              <span className="block">Selected projects,</span>
              <span className="block">built to solve</span>
              <span className="block text-gradient">real problems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl text-pretty text-base leading-7 text-white/72 sm:text-lg"
            >
              A selection of civil engineering projects and competitions
              spanning structural design, model making, and field surveying.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="text-xs uppercase tracking-[0.24em] text-white/45">
                  Work index
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                  {new Date().getFullYear()}
                </span>
              </div>

              <div className="divide-y divide-white/[0.07]">
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <p className="text-3xl font-semibold tracking-tight text-white tabular-nums">
                    {String(projects.length).padStart(2, "0")}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Selected projects
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <p className="text-base font-semibold text-white">
                    Structural Design
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Primary focus
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <p className="text-base font-semibold text-white">
                    AutoCAD · Civil 3D
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Main tools
                  </p>
                </div>
              </div>

              <p className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-white/68">
                From structural models to practical field applications.
              </p>
            </div>
          </motion.div>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-[2rem] bg-white/[0.03] transition-transform duration-300 sm:shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:hover:-translate-y-1"
            >
              {project.images && project.images.length > 1 ? (
                <div className="grid grid-cols-2 gap-px bg-white/10">
                  {project.images.map((img) => (
                    <div
                      key={img}
                      className="relative aspect-square overflow-hidden bg-white/3"
                    >
                      <OptimizedImage
                        src={img}
                        alt={project.title}
                        fill
                        className="opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              ) : project.image ? (
                <div className="relative aspect-16/10 overflow-hidden bg-white/3">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
              ) : (
                <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-white/3">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-60"
                  />
                  <Crosshair className="relative h-10 w-10 text-brand-primary/70" />
                </div>
              )}

              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                    {project.role}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-white/70">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.055] px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.files && project.files.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.files.map((file) => (
                      <Link
                        key={file.href}
                        href={file.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/82 transition-colors hover:bg-white/[0.08]"
                      >
                        <FileText className="h-4 w-4 text-brand-signal" />
                        {file.label}
                      </Link>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                    >
                      Live demo
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/82 transition-colors hover:bg-white/[0.06]"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects/literature"
              className="group flex h-full flex-col justify-between gap-8 rounded-[2rem] bg-white/[0.03] p-6 transition-all duration-300 hover:bg-white/[0.055] sm:p-8 sm:hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-xl border border-white/10 bg-white/[0.06] p-3 text-brand-signal">
                  <BookOpen className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-white/40 transition-colors group-hover:text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  Literature
                </h3>
                <p className="text-sm leading-7 text-white/70">
                  Writing and literary pieces I have created along the way.
                </p>
                <p className="pt-1 text-[11px] uppercase tracking-[0.22em] text-white/45">
                  {literature.length} works
                </p>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-white/10 bg-white/[0.06] p-2.5 text-brand-primary">
                <Palette className="h-4 w-4" />
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                My Designs
              </h2>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              {graphics.length} works
            </p>
          </div>

          <GalleryGrid items={graphics} />
        </div>

        <div className="flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              {projects.length} projects in the portfolio
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
              More experiments, models, and academic work are part of my journey.
            </p>
          </div>

          <Link
            href={portfolio.socials.find((s) => s.name === "GitHub")?.href ?? "https://github.com/gaudel17"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/84 transition-colors hover:bg-white/[0.07]"
          >
            Explore more on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
