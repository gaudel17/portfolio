import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import GalleryGrid from "@/app/components/sections/GalleryGrid";
import { getLiterature } from "@/app/lib/data/galleries";

export default function Literature() {
  const items = getLiterature();

  return (
    <section className="relative px-4 py-16 sm:px-6 lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 [mask-image:radial-gradient(ellipse_75%_45%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-7xl space-y-10">
        <header className="space-y-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.07]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all work
          </Link>

          <div className="max-w-3xl space-y-3">
            <div className="section-kicker w-fit">
              <span>Written word</span>
            </div>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
              Literature
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-white/72 sm:text-lg">
              Writing and literary pieces I have created along the way.
            </p>
          </div>
        </header>

        <GalleryGrid items={items} />
      </div>
    </section>
  );
}
