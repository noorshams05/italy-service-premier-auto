import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MeetTheTeam } from "@/components/sections/MeetTheTeam";
import { CtaBand } from "@/components/sections/CtaBand";

const title = "Meet the Team — Italy Service Las Vegas";
const description =
  "The people behind Italy Service — F1-trained diagnostics, Italian & German platform experts, and the partnership driving the shop forward.";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title={
          <>
            The people
            <br />
            behind the work.
          </>
        }
        intro="Formula 1-level precision, decades of Italian and German platform expertise, and the partnership driving Italy Service forward."
      />
      <MeetTheTeam />
      <CtaBand />
    </>
  );
}
