import { marques } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";

export function Marques() {
  const row = [...marques, ...marques];
  return (
    <section className="overflow-hidden border-b border-border py-24">
      <div className="mx-auto mb-14 max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Marques we service</Eyebrow>
        </Reveal>
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {row.map((m, i) => (
            <span
              key={`${m}-${i}`}
              className="font-display text-[clamp(2rem,5vw,4.2rem)] uppercase leading-none tracking-[-0.02em] text-foreground/25 transition-colors duration-500 hover:text-foreground"
            >
              {m}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
