import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";

const title = "Contact & Book Service — Italy Service, 3085 Tompkins, Las Vegas";
const description =
  "Book Italian exotic service in Las Vegas. Call 702-382-5008 or send your vehicle details — 3085 Tompkins, Las Vegas, NV 89103.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's get you
            <br />
            on the schedule.
          </>
        }
        intro="Drop your details below or call the shop directly — we answer the phone."
      />
      <ContactSection />
    </>
  );
}
