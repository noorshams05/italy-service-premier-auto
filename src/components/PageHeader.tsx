import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-b border-border px-6 pb-24 pt-44 lg:px-10 lg:pb-32 lg:pt-56">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.8rem,9vw,7rem)] leading-[0.9] tracking-[-0.04em]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.16}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
