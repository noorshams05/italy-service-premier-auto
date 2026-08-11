import merchCollection1 from "@/assets/merch-collection-1.jpg";
import merchApparel from "@/assets/merch-apparel.jpg";
import merchHeadwear from "@/assets/merch-headwear.jpg";
import merchLadies from "@/assets/merch-ladies.jpg";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";
import { MagneticButton } from "@/components/MagneticButton";
import { site } from "@/data/site";

const categories = [
  {
    src: merchApparel,
    alt: "Italy Service shop overalls, t-shirts and heritage apparel",
    title: "Apparel & Workwear",
    blurb: "Heavy cotton overalls, quote tees, and outerwear built the way the cars are — to last.",
  },
  {
    src: merchHeadwear,
    alt: "Italy Service vintage racing helmets, caps and driving gloves",
    title: "Headwear & Track Gear",
    blurb: "Vintage-style helmets, driving gloves, and caps for the road or the paddock.",
  },
  {
    src: merchLadies,
    alt: "Italy Service ladies collection button-up and v-neck shirts",
    title: "Ladies Collection",
    blurb: "Tailored button-ups and v-necks, finished with the same details as the team kit.",
  },
];

export function MerchShowcase() {
  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal>
              <Eyebrow>Italy Service 2.0 collection</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-2xl font-display text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.04em]">
                A lifestyle.
                <br />A legacy.
                <br />A passion.
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
              Inspired by heritage, built for enthusiasts. The official Italy Service 2.0 collection —
              apparel, leather goods and track gear carrying the same standard as the shop.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16">
          <MaskReveal className="overflow-hidden">
            <img
              src={merchCollection1}
              alt="Italy Service 2.0 official collection lookbook"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </MaskReveal>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {categories.map((c, i) => (
            <MaskReveal key={c.title} delay={0.08 * i} className="overflow-hidden">
              <div className="group relative">
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <p className="font-display text-xl leading-tight tracking-[-0.02em] lg:text-2xl">
                    {c.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.blurb}</p>
                </div>
              </div>
            </MaskReveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20 border-t border-border pt-16 text-center">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-primary">
            Collection coming soon
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] tracking-[-0.03em]">
            For enthusiasts. By enthusiasts.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Available soon at events and online. Reach out to be first in line when the collection
            drops.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton href={`mailto:${site.email}`}>Get Early Access</MagneticButton>
            <MagneticButton href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
