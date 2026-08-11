import { stats } from "@/data/site";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="lg:border-l lg:border-border lg:pl-8">
              <p className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none tracking-[-0.03em]">
                <Counter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
              </p>
              <p className="mt-4 max-w-[16ch] text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
