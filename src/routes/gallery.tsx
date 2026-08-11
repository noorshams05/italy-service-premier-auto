import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Gallery } from "@/components/sections/Gallery";
import { CtaBand } from "@/components/sections/CtaBand";

const title = "Gallery — The Shop & The Cars | Italy Service Las Vegas";
const description =
  "See inside Italy Service's Las Vegas facility — showroom, storage vault and shop floor.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            The bays.
            <br />
            The cars.
          </>
        }
        intro="Dark bays, bright work. A selection of the machines that pass through Tompkins Avenue."
      />
      <Gallery heading={false} />
      <CtaBand />
    </>
  );
}
