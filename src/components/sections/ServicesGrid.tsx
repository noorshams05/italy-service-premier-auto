import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Gauge, Disc3, Cog, ClipboardCheck, Wrench, ShieldCheck } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const serviceIcons: Record<string, typeof Gauge> = {
  diagnostics: Gauge,
  "brakes-suspension": Disc3,
  "engine-performance": Cog,
  "pre-purchase-inspection": ClipboardCheck,
  "routine-maintenance": Wrench,
  "warranty-safe-service": ShieldCheck,
};

function TiltCard({
  index,
  service,
}: {
  index: number;
  service: (typeof services)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = serviceIcons[service.slug] ?? Gauge;
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 5, ry: px * 5 });
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={() => setTilt({ rx: 0, ry: 0 })} className="h-full [perspective:1200px]">
      <motion.div
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full [transform-style:preserve-3d]"
      >
        <Link
          to="/services"
          className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden bg-background p-8 lg:p-10"
        >
          <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-secondary text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10 lg:right-10 lg:top-10">
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <div className="relative [transform:translateZ(40px)]">
            <span className="font-display text-sm font-semibold text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 font-display text-2xl leading-tight tracking-[-0.01em] lg:text-3xl">
              {service.title}
            </h3>
            <span className="mt-4 block h-px w-10 origin-left bg-primary transition-transform duration-500 group-hover:scale-x-[3]" />
            <p className="mt-6 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
              {service.blurb}
            </p>
          </div>
          <ArrowUpRight className="relative mt-10 h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
        </Link>
      </motion.div>
    </div>
  );
}
export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section id="services" className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything your Luxury
              <br />
              and Exotic car needs.
            </>
          }
          intro="Six core disciplines, handled in-house by technicians who work on these marques every single day."
        />
        <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <TiltCard index={i} service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
