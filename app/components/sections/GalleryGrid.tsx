"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

import OptimizedImage from "@/app/components/ui/OptimizedImage";
import { type GalleryItem } from "@/app/types";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? i : (i - 1 + items.length) % items.length,
      ),
    [items.length],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, showPrev, showNext]);

  const active = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.button
            type="button"
            key={item.id}
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
            aria-label={`View ${item.title}`}
            className="group text-left"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/3">
              <OptimizedImage
                src={item.image}
                alt={item.title}
                fill
                className="opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute inset-0 bg-black/40" />
                <Maximize2 className="relative h-5 w-5 text-white" />
              </span>
            </div>
            <p className="mt-2 truncate text-sm font-medium text-white/80 transition-colors group-hover:text-white">
              {item.title}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/85 transition-colors hover:bg-white/[0.12] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Previous"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/85 transition-colors hover:bg-white/[0.12] hover:text-white sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/85 transition-colors hover:bg-white/[0.12] hover:text-white sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="flex w-full max-w-5xl flex-col items-center"
            >
              <div className="relative h-[75vh] w-full">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-white/85">
                {active.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}