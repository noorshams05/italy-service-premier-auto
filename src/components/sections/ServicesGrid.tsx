import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { images } from "@/lib/images";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything your Italian
              <br />
              car actually needs.
            </>
          }
          intro="Six core disciplines, handled in-house by technicians who work on these marques every single day."
        />

        <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <Link
                to="/services"
                className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden bg-background p-8 lg:p-10"
              >
                <img
                  src={images[s.image]}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-out [clip-path:inset(0_0_100%_0)] group-hover:opacity-30 group-hover:[clip-path:inset(0_0_0_0)]"
                />
                <div className="relative">
                  <span className="font-display text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 font-display text-2xl leading-tight tracking-[-0.02em] lg:text-3xl">
                    {s.title}
                  </h3>
                  <span className="mt-4 block h-px w-10 origin-left bg-primary transition-transform duration-500 group-hover:scale-x-[3]" />
                  <p className="mt-6 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
                    {s.blurb}
                  </p>
                </div>
                <ArrowUpRight className="relative mt-10 h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
