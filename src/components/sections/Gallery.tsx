import { gallery } from "@/lib/images";
import { MaskReveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Gallery({ heading = true }: { heading?: boolean }) {
  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {heading && (
          <SectionHeading
            eyebrow="The shop"
            title={
              <>
                Inside the bays.
              </>
            }
            intro="A look at the cars, the space and the work — real shop photography drops straight into this layout."
          />
        )}

        <div className="mt-20 grid auto-rows-[240px] grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {gallery.map((g, i) => (
            <MaskReveal
              key={g.src}
              delay={(i % 3) * 0.07}
              className={`overflow-hidden ${
                g.span === "tall" ? "row-span-2" : g.span === "wide" ? "col-span-2" : ""
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
              />
            </MaskReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
