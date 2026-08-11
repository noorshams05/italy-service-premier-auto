import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { reviews, site } from "@/data/site";
import { Reveal, EASE } from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + reviews.length) % reviews.length);
  };

  const r = reviews[index]!;

  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <Eyebrow>What owners say</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 flex items-baseline gap-4">
                <span className="font-display text-[clamp(3rem,8vw,6rem)] leading-none tracking-[-0.04em]">
                  {site.rating}
                </span>
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {site.reviewCount} Google reviews
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-4 flex gap-1" aria-label={`${site.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="grid h-12 w-12 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="grid h-12 w-12 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-16 min-h-[320px] border-t border-border pt-16 sm:min-h-[300px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.blockquote
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) go(1);
                if (info.offset.x > 80) go(-1);
              }}
              initial={{ opacity: 0, x: dir * 48, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -dir * 48, scale: 0.98 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="cursor-grab active:cursor-grabbing"
            >
              <p className="max-w-4xl font-display text-[clamp(1.6rem,3.6vw,2.8rem)] leading-[1.2] tracking-[-0.02em]">
                “{r.quote}”
              </p>
              <footer className="mt-10 text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">
                <span className="text-foreground">{r.name}</span>
                <span className="mx-3 text-primary">/</span>
                {r.car}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to review ${i + 1}`}
              className={`h-px w-10 transition-colors duration-500 ${
                i === index ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
