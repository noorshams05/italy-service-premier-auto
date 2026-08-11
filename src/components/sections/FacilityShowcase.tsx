import boutiqueVault from "@/assets/boutique-vault.jpg";
import exteriorDuskShopFloor from "@/assets/exterior-dusk-shop-floor.jpg";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";

export function FacilityShowcase() {
  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <Eyebrow>The facility</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-[-0.03em]">
            Built for cars
            <br />
            worth caring for.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 lg:grid-cols-2 lg:gap-6">
          <MaskReveal className="overflow-hidden">
            <img
              src={exteriorDuskShopFloor}
              alt="Italy Service exterior and shop floor at dusk"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]"
            />
          </MaskReveal>
          <MaskReveal delay={0.1} className="overflow-hidden">
            <img
              src={boutiqueVault}
              alt="Italy Service private boutique storage, by appointment only"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]"
            />
          </MaskReveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm italic leading-relaxed text-muted-foreground">
            Renderings shown for style reference — visit the real Tompkins Avenue shop, or see it in
            the gallery below.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
