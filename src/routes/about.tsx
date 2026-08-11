import { createFileRoute } from "@tanstack/react-router";
import { team } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { TrustBar } from "@/components/sections/TrustBar";
import { CtaBand } from "@/components/sections/CtaBand";

const title = "About Italy Service — Independent Italian & German Car Specialists, Las Vegas";
const description =
  "Est. 1975. 30+ years servicing Italian and German exotics in Las Vegas, with concours work for Pebble Beach and the Mille Miglia.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Built for owners
            <br />
            who know better.
          </>
        }
intro="Italy Service is an independent Las Vegas repair shop dedicated to Italian performance cars and the German exotics that keep them company — trusted since 1975."      />
      <TrustBar />
      <AboutSplit />

      <section className="border-b border-border py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-[-0.03em]">
              Meet the team.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.07}>
                <div className="h-full bg-background p-8 lg:p-10">
                  <p className="font-display text-[clamp(2rem,3vw,2.8rem)] leading-none tracking-[-0.03em]">
                    {m.name}
                  </p>
                  <p className="mt-4 text-[0.66rem] uppercase tracking-[0.26em] text-primary">
                    {m.role}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
