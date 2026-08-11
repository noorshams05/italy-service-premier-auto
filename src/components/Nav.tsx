import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { MagneticButton } from "./MagneticButton";

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid || open
          ? "border-b border-border bg-background/95 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-4 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Italy Service home">
          <img src=/logo.png alt="Italy Service" className="h-10 w-auto shrink-0 md:h-12" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative text-[0.72rem] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-foreground"
          >
            <Phone className="h-3.5 w-3.5 text-primary" />
            {site.phone}
          </a>
          <MagneticButton to="/contact" className="!px-6 !py-3">
            Book Service
          </MagneticButton>
        </nav>

        <button
          className="justify-self-end p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="border-b border-border py-4 font-display text-2xl tracking-[-0.02em] text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="mt-6 text-sm uppercase tracking-[0.2em] text-primary"
              >
                {site.phone}
              </a>
              <div className="mt-5">
                <MagneticButton to="/contact">Book Service</MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
