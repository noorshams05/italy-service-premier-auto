import shopImg from "@/assets/parking-tower.jpg";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";
import { MagneticButton } from "@/components/MagneticButton";

const points = [
  "Real diagnostics before any parts are ordered",
  "Dealer-level knowledge without dealer-level pricing",
  "No upselling — you approve every line item",
  "Documented, warranty-safe procedures and parts",
];

export function AboutSplit() {
  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <MaskReveal>
          <img
            src={shopImg}
            alt="Multi-level vehicle storage tower at Italy Service"
            loading="lazy"
            width={1400}
            height={1050}
            className="aspect-[4/5] w-full object-cover"
          />
        </MaskReveal>

        <div>
          <Reveal>
            <Eyebrow>Why Italy Service</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-[-0.03em]">
              The independent
              <br />
              alternative Vegas
              <br />
              owners trust.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Since 1975, Italy Service has been Las Vegas' trusted name for Ferrari, Maserati,
              Alfa Romeo and the region's finest German marques. Over 30 years of hands-on
              experience means our technicians don't guess — they know these platforms inside
              and out.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
         <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Beyond daily service, we've done concours and event prep work for Pebble Beach and
              the Mille Miglia — the same standard of care applied to every car that comes through
              our doors, whether it's headed to a show field or your driveway. It's why 163
              customers have rated us 4.8 stars: no mystery labor, no parts you didn't need, just
              proper work at a fair price.
            </p>
          </Reveal>

          <ul className="mt-12 space-y-4">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.28 + i * 0.06}>
                <li className="flex items-start gap-4 border-t border-border pt-4 text-sm text-foreground/85">
                  <span className="mt-2 h-px w-6 shrink-0 bg-primary" />
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.5}>
            <div className="mt-12">
              <MagneticButton to="/about" variant="ghost">
                Meet the Team
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
