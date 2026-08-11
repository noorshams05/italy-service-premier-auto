import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { gallery } from "@/lib/images";
import { MaskReveal, EASE } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Gallery({ heading = true }: { heading?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (open === null) return;
      if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % gallery.length);
      if (e.key === "ArrowLeft") setOpen((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const active = open === null ? null : gallery[open]!;

  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {heading && (
          <SectionHeading
            eyebrow="The shop"
            title={<>Inside the bays.</>}
            intro="Ferraris on the lifts, classics in the corner and the occasional Phantom out front — this is the real Tompkins Avenue shop."
          />
        )}

        <div className="mt-20 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4 lg:gap-6">
          {gallery.map((g, i) => (
            <MaskReveal
              key={g.src + String(i)}
              delay={(i % 3) * 0.07}
              className={`overflow-hidden ${
                g.span === "tall" ? "row-span-2" : g.span === "wide" ? "col-span-2" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group block h-full w-full overflow-hidden"
                aria-label={`Open image: ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover brightness-[0.88] saturate-[0.9] transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] group-hover:brightness-100 group-hover:saturate-100"
                />
              </button>
            </MaskReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setOpen(null)}
              className="absolute right-6 top-6 grid h-12 w-12 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
            <motion.figure
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="max-h-full w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="mx-auto max-h-[78vh] w-auto object-contain"
              />
              <figcaption className="mt-6 text-center text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                {active.alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
