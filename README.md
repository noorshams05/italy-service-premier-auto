# Italy Service: Premier Auto

PROMPT TO PASTE

Build a single-page (with sub-routes) marketing website for Italy Service, a premier Las Vegas automotive service center specializing exclusively in Italian and Italian-adjacent luxury/exotic vehicles — Ferrari, Maserati, Alfa Romeo, Lamborghini, Bentley, and similar marques. This is a real, established shop (163 Google reviews, 4.8 stars) — the site needs to feel like it belongs to a brand that costs $1–2M to build: think Apple.com's product pages crossed with a Ferrari or Bentley dealership microsite. Restrained, cinematic, confident. No stock-template energy anywhere.

Brand

Colors: black (primary background, ~
#0A0A0A), white (primary text/space), red (single accent color, Italian racing red ~
#C8102E — used sparingly: CTAs, underlines, hover states, one accent line per section — never as a background flood)
Logo: a stylized wing/speed-mark emblem with "ITALY SERVICE" wordmark beneath it (I'll upload the logo asset — use it in the nav, favicon, and as a subtle background watermark on the hero)
Typography: a tall, modern grotesk for headlines (e.g. a Neue Haas/Helvetica Now-style face) paired with a clean geometric sans for body copy. Big, confident type scale — headlines should feel oversized the way Apple's do.
Motion language: scroll-triggered reveals, parallax on hero imagery, smooth easing (no bounce/elastic), subtle magnetic hover on buttons, number counters that animate into view, image reveals via clip-path/mask rather than simple fades

Company facts to use as real content (do not invent conflicting details)

Name: Italy Service
Address: 3085 Tompkins, Las Vegas, NV 89103
Phone: 702-382-5008 (tel: link everywhere it appears)
Email: Italyservicelv@gmail.com
4.8 stars, 163 Google reviews
Specialty: independent repair and maintenance for Italian-made performance cars — Ferrari, Maserati, Alfa Romeo, plus other European exotics (Bentley, McLaren, etc.)
Known for: honest diagnostics, fair pricing vs. dealership markups, no unnecessary upselling, technicians experienced specifically with Italian marques
Team members mentioned by customers: Mel, Brian, Junior, Gio (use as "Meet the Team" first names only, generic friendly bios — don't fabricate surnames or credentials)
Sample services: check engine diagnostics, brake pads/rotors, alignment, general maintenance, pre-purchase inspections, warranty-safe independent service as an alternative to dealer pricing

Pages / sections

Nav — fixed, transparent-over-hero that solidifies to black on scroll. Logo left, links center/right (Home, Services, About, Gallery, Reviews, Contact), phone number + "Book Service" button in red, right-aligned.
Hero — full-bleed, high-impact. Large "ITALY SERVICE" wordmark treatment, a one-line positioning statement ("Las Vegas' trusted specialists in Ferrari, Maserati & Alfa Romeo service"), a red primary CTA ("Book an Appointment") and a ghost/outline secondary CTA ("Our Services"). Subtle looping background video or parallax image of an Italian exotic engine bay or a car silhouette — moody, dark, dramatic lighting. Animate the headline in on load (staggered letter/word reveal).
Trust bar — animated counters: "4.8★ / 163 Reviews", "X+ Years Serving Vegas", "Italian Marques Only", "0 Upsells" (playful but confident) — scroll-triggered count-up.
Services — grid or horizontal scroll of service cards (Diagnostics, Brakes & Suspension, Engine & Performance, Pre-Purchase Inspection, Routine Maintenance, Warranty-Safe Service). Each card: icon, title, one-line description, subtle red underline on hover, image reveal on hover.
Why Italy Service / About — split layout, editorial feel. Short story of the shop as the trusted independent alternative to dealership pricing for Italian car owners in Vegas. Include the "no upselling, real diagnostics" trust angle directly from customer reviews.
Marques we service — a clean, large-type marquee or grid of marque wordmarks/logos treated in white/monochrome (Ferrari, Maserati, Alfa Romeo, Lamborghini, Bentley, McLaren) — animate as a slow infinite horizontal scroll (Apple-style logo wall).
Reviews — a curated, tasteful slider/carousel using real review excerpts (paraphrase naturally, keep the sentiment, attribute first name + car model, e.g. "Ricky C. — Alfa Romeo Giulia"). Star rating displayed prominently. Smooth drag/swipe carousel with subtle scale-on-active-slide.
Gallery — masonry or full-bleed image gallery of the shop, bays, and Italian cars serviced (placeholder imagery for now, structured so real photos can be dropped in later).
Contact / Book — split layout: left = booking form (Name, Phone, Email, Vehicle Make/Model, Message), right = map embed, address, phone (tel: link), email (mailto: link), hours. Red accent on form focus states.
Footer — logo, nav links repeated, address/phone/email, social placeholders, small print.

Technical

Fully responsive, mobile-first breakpoints, buttery scroll performance
Use Framer Motion (or equivalent) for scroll-triggered reveals and page-load animations
Semantic HTML, accessible contrast even within the black/red/white palette
Structure it cleanly for GitHub → Vercel deploy (I'll be committing to a repo and deploying via Vercel, custom domain added later)
Keep content/data (services list, reviews, marques) in clearly separated config/data files so I can edit copy without touching layout code

Do not make this feel like a generic auto-shop template — treat every section like an Apple product page: generous whitespace, oversized confident type, one idea per screen, motion that earns its place.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8cc03308-2c16-4199-a580-dd09705d900b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
