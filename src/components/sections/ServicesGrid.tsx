import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { images } from "@/lib/images";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

function TiltCard({
  index,
  service,
}: {
  index: number;
  service: (typeof services)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
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
          <img
            src={images[service.image]}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-[900ms] ease-out [clip-path:inset(0_0_100%_0)] group-hover:scale-100 group-hover:opacity-30 group-hover:[clip-path:inset(0_0_0_0)]"
          />
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
