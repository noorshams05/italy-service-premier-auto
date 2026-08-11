import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/showroom-glass-front.jpg";
import { site } from "@/data/site";
import { MagneticButton } from "@/components/MagneticButton";
import { EASE } from "@/components/Reveal";

const words = ["ITALY", "SERVICE"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* slow continuous parallax drift on top of the scroll parallax */}
        <motion.img
          src={heroImg}
          alt="Italy Service glass-front showroom at night"
          width={1920}
          height={1088}
          animate={{ scale: [1.08, 1.16, 1.08], x: ["-1.5%", "1.5%", "-1.5%"], y: ["1%", "-1%", "1%"] }}
          transition={{ duration: 32, ease: "easeInOut", repeat: Infinity }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-background/25" />
      </motion.div>

      <img
        src="/logo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 w-[70vw] max-w-[900px] opacity-[0.035]"
      />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-primary" />
          Las Vegas · Est. 1975
        </motion.p>

        <h1 className="mt-8 font-display text-[clamp(3.4rem,15vw,13rem)] font-medium leading-[0.86] tracking-[-0.03em]">
          {words.map((word, wi) => (
            <span key={word} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: "110%", skewY: 4 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ duration: 1.2, delay: 0.15 + wi * 0.16, ease: EASE }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="mt-10 max-w-2xl font-display text-[clamp(1.25rem,2.6vw,1.9rem)] font-normal italic leading-[1.35] text-foreground/85"
        >
          {site.tagline}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.78, ease: EASE }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticButton to="/contact">Book an Appointment</MagneticButton>
          <MagneticButton to="/services" variant="ghost">
            Our Services
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
