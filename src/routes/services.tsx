import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/site";
import { images } from "@/lib/images";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { Marques } from "@/components/sections/Marques";

const title = "Services — Diagnostics, Brakes & Engine Work | Italy Service Las Vegas";
const description =
  "Check engine diagnostics, brakes and suspension, engine and performance work, pre-purchase inspections and warranty-safe maintenance for Italian exotics in Las Vegas.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Specialist work,
            <br />
            start to finish.
          </>
        }
        intro="Every job starts with a real diagnosis and ends with a car that drives the way its maker intended."
      />

      <div className="border-b border-border">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className="mx-auto grid max-w-[1400px] items-center gap-12 border-b border-border px-6 py-20 last:border-b-0 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-28"
          >
            <MaskReveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img
                src={images[s.image]}
                alt={s.title}
                loading="lazy"
                className="aspect-[16/11] w-full object-cover"
              />
            </MaskReveal>
            <div>
              <Reveal>
                <span className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.03em]">
                  {s.title}
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <span className="mt-6 block h-px w-14 bg-primary" />
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {s.detail}
                </p>
              </Reveal>
            </div>
          </article>
        ))}
      </div>

      <Marques />
      <CtaBand />
    </>
  );
}
