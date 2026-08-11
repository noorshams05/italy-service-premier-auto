import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { Marques } from "@/components/sections/Marques";
import { Reviews } from "@/components/sections/Reviews";
import { Gallery } from "@/components/sections/Gallery";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBand } from "@/components/sections/CtaBand";

const title = "Italy Service — Ferrari, Maserati & Alfa Romeo Specialists in Las Vegas";
const description =
  "Independent Las Vegas service center for Ferrari, Maserati, Alfa Romeo and European exotics. Honest diagnostics, fair pricing, 4.8 stars from 163 reviews.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AboutSplit />
      <Marques />
      <Reviews />
      <Gallery />
      <ContactSection />
      <CtaBand />
    </>
  );
}
