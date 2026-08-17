import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";

const leadership = [
  {
    initials: "F1",
    name: "Coming Soon",
    role: "Lead Diagnostics Technician — Ex-Formula 1",
    bio: "Joining the team from Formula 1, bringing race-level precision and diagnostics experience to every Italian and German platform that comes through the shop.",
  },
 {
    initials: "G",
    name: "Geo",
    role: "Head Technician",
    bio: "The backbone of the shop floor. Deep in the Italian and German platforms — engines, electronics and the problems other shops hand back.",
  },
];

export function MeetTheTeam() {

export function MeetTheTeam() {
  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Leadership</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-[-0.03em]">
            Front and center.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
          {leadership.map((m, i) => (
            <Reveal key={m.name} delay={0.1 + i * 0.08}>
              <div className="flex h-full flex-col bg-background p-8 lg:p-10">
                <div className="flex h-20 w-20 items-center justify-center border border-border bg-secondary font-display text-2xl tracking-[-0.02em] text-primary">
                  {m.initials}
                </div>
                <p className="mt-8 font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-none tracking-[-0.03em]">
                  {m.name}
                </p>
                <p className="mt-4 text-[0.66rem] uppercase tracking-[0.26em] text-gold">
                  {m.role}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-10 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Photos coming soon
          </p>
        </Reveal>
      </div>
    </section>
  );
}
