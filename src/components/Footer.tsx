import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img src="/logo.png alt="Italy Service" className="h-14 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Independent Ferrari, Maserati and Alfa Romeo specialists serving Las Vegas with honest
              diagnostics and fair pricing.
            </p>
            <div className="mt-8 flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="grid h-10 w-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[0.68rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Navigate
            </h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.68rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Visit
            </h3>
            <address className="mt-6 space-y-3 text-sm not-italic text-foreground/80">
              <p>{site.address}</p>
              <p>
                <a href={site.phoneHref} className="transition-colors hover:text-primary">
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {site.email}
                </a>
              </p>
            </address>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {site.hours.map((h) => (
                <li key={h.day}>
                  {h.day} — {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Italy Service. All rights reserved.</p>
          <p>
            Independent service center. Not affiliated with Ferrari S.p.A., Maserati S.p.A. or any
            manufacturer.
          </p>
        </div>
      </div>
    </footer>
  );
}
