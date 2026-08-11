import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      <img
        src="/logo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-[80vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.035em]">
            Ready to hand it to
            <br />
            specialists?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-lg text-base text-muted-foreground sm:text-lg">
            Call the shop or send your details — we'll tell you honestly what your car needs.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <MagneticButton href={site.phoneHref}>Call {site.phone}</MagneticButton>
            <MagneticButton to="/contact" variant="ghost">
              Book Online
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
