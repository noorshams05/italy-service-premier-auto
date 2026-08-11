import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MagneticButton } from "@/components/MagneticButton";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "vehicle", label: "Vehicle Make / Model", type: "text", required: true },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Book service"
          title={
            <>
              Tell us about
              <br />
              your car.
            </>
          }
          intro="Send the details and we'll confirm a time. Prefer to talk it through? Call the shop directly."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {fields.map((f) => (
                <div key={f.name} className="group">
                  <label
                    htmlFor={f.name}
                    className="block text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 text-base text-foreground outline-none transition-colors duration-300 focus:border-primary"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 text-base text-foreground outline-none transition-colors duration-300 focus:border-primary"
                />
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <MagneticButton type="submit">Request Appointment</MagneticButton>
                {sent && (
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Thanks — we'll be in touch shortly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <div className="overflow-hidden border border-border">
                <iframe
                  title="Italy Service location map"
                  src={`https://www.google.com/maps?q=${site.mapQuery}&output=embed`}
                  loading="lazy"
                  className="h-[320px] w-full grayscale"
                />
              </div>

              <dl className="mt-10 space-y-6">
                <div className="flex gap-4 border-t border-border pt-6">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground">
                      Address
                    </dt>
                    <dd className="mt-2 text-base">{site.address}</dd>
                  </div>
                </div>
                <div className="flex gap-4 border-t border-border pt-6">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground">
                      Phone
                    </dt>
                    <dd className="mt-2 text-base">
                      <a href={site.phoneHref} className="transition-colors hover:text-primary">
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 border-t border-border pt-6">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground">
                      Email
                    </dt>
                    <dd className="mt-2 break-words text-base">
                      <a
                        href={`mailto:${site.email}`}
                        className="transition-colors hover:text-primary"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 border-t border-border pt-6">
                  <Clock className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground">
                      Hours
                    </dt>
                    <dd className="mt-2 space-y-1 text-base">
                      {site.hours.map((h) => (
                        <p key={h.day}>
                          {h.day} — <span className="text-muted-foreground">{h.time}</span>
                        </p>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
