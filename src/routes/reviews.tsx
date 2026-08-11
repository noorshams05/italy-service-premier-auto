import { createFileRoute } from "@tanstack/react-router";
import { reviews, site } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Reviews } from "@/components/sections/Reviews";
import { CtaBand } from "@/components/sections/CtaBand";

const title = "Reviews — 4.8 Stars from 163 Google Reviews | Italy Service";
const description =
  "Read what Las Vegas Ferrari, Maserati and Alfa Romeo owners say about Italy Service: honest diagnostics, fair pricing and no unnecessary upsells.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title={
          <>
            {site.rating} stars.
            <br />
            {site.reviewCount} reviews.
          </>
        }
        intro="Paraphrased excerpts from customers who trusted us with their cars."
      />
      <Reviews />

      <section className="border-b border-border py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.07}>
                <figure className="h-full bg-background p-8 lg:p-10">
                  <blockquote className="text-base leading-relaxed text-foreground/85">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-8 text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground">
                    <span className="text-foreground">{r.name}</span>
                    <span className="mx-3 text-primary">/</span>
                    {r.car}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
