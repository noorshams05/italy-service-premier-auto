import { createFileRoute } from "@tanstack/react-router";
import { MerchShowcase } from "@/components/sections/MerchShowcase";
import { CtaBand } from "@/components/sections/CtaBand";

const title = "Merch — Italy Service 2.0 Collection | Las Vegas";
const description =
  "The official Italy Service 2.0 collection — apparel, headwear, leather goods and track gear. Coming soon.";

export const Route = createFileRoute("/merch")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MerchPage,
});

function MerchPage() {
  return (
    <>
      <MerchShowcase />
      <CtaBand />
    </>
  );
}
