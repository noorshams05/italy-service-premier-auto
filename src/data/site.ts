export const site = {
  name: "Italy Service",
  tagline: "Las Vegas' trusted specialists in Ferrari, Maserati & Alfa Romeo service",
  phone: "702-382-5008",
  phoneHref: "tel:+17023825008",
  email: "Italyservicelv@gmail.com",
  address: "3085 Tompkins, Las Vegas, NV 89103",
  mapQuery: "3085+Tompkins+Ave,+Las+Vegas,+NV+89103",
  rating: 4.8,
  reviewCount: 163,
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: 4.8, suffix: "★", label: `${site.reviewCount} Google reviews`, decimals: 1 },
  { value: 25, suffix: "+", label: "Years serving Las Vegas" },
  { value: 6, suffix: "", label: "Italian & exotic marques" },
  { value: 0, suffix: "", label: "Unnecessary upsells" },
];

export const marques = [
  "FERRARI",
  "MASERATI",
  "ALFA ROMEO",
  "LAMBORGHINI",
  "BENTLEY",
  "McLAREN",
];

export const services = [
  {
    slug: "diagnostics",
    title: "Check Engine Diagnostics",
    blurb: "Marque-specific scan tools and real fault tracing — not guesswork parts swapping.",
    detail:
      "We read the car the way the factory does, then verify the fault by hand before quoting a repair. You get the actual cause, in plain language, with a cost you approve first.",
    image: "diagnostics",
  },
  {
    slug: "brakes-suspension",
    title: "Brakes & Suspension",
    blurb: "Pads, rotors, bushings, alignment — set up for how the car is actually driven.",
    detail:
      "Carbon ceramic or steel, street or track, we spec the right friction package and finish with a proper four-wheel alignment.",
    image: "brakes",
  },
  {
    slug: "engine-performance",
    title: "Engine & Performance",
    blurb: "Service, timing, cooling and drivability work on Italian V6, V8 and V12 platforms.",
    detail:
      "Belt and chain service, cooling systems, clutch and F1 transmission work, fluid and tuning refresh — done by technicians who see these engines every week.",
    image: "engine",
  },
  {
    slug: "pre-purchase-inspection",
    title: "Pre-Purchase Inspection",
    blurb: "Know exactly what you're buying before the money moves.",
    detail:
      "A full mechanical, electronic and service-history review with photos and a written summary — the difference between a great buy and an expensive lesson.",
    image: "detail",
  },
  {
    slug: "routine-maintenance",
    title: "Routine Maintenance",
    blurb: "Annual services, fluids, filters and inspections on a schedule that protects value.",
    detail:
      "We keep records tight and intervals honest so your car stays sharp and its history stays clean.",
    image: "shop",
  },
  {
    slug: "warranty-safe-service",
    title: "Warranty-Safe Service",
    blurb: "Independent expertise without dealership pricing — or dealership pressure.",
    detail:
      "Factory-spec parts and documented procedures mean your coverage stays intact while your invoice stays reasonable.",
    image: "hero",
  },
];

export const reviews = [
  {
    quote:
      "They found the real problem in an hour after another shop had me chasing parts for weeks. Straight answers, fair price, no games.",
    name: "Ricky C.",
    car: "Alfa Romeo Giulia",
  },
  {
    quote:
      "Mel walked me through the diagnosis on the phone and showed me the old parts when I picked the car up. That's how it should be done.",
    name: "Daniel P.",
    car: "Maserati Ghibli",
  },
  {
    quote:
      "The dealer quoted me nearly double. Italy Service did the work properly and the car has never driven better.",
    name: "Steven L.",
    car: "Ferrari 458 Italia",
  },
  {
    quote:
      "Brian and Junior clearly know these cars. No upselling, no mystery line items, just the work I actually needed.",
    name: "Marcus T.",
    car: "Alfa Romeo Stelvio",
  },
  {
    quote:
      "Had them do a pre-purchase inspection before I bought. Detailed, honest, and it saved me from a bad car.",
    name: "Anthony R.",
    car: "Maserati GranTurismo",
  },
  {
    quote:
      "Gio kept me updated the whole time. Only shop in Vegas I'll let touch my car.",
    name: "Elena V.",
    car: "Ferrari California",
  },
];

export const team = [
  { name: "Mel", role: "Service & Diagnostics", bio: "The voice most customers know. Explains the fault, the fix and the cost before anything happens." },
  { name: "Brian", role: "Technician", bio: "Deep in the Italian platforms — engines, electronics and the problems other shops hand back." },
  { name: "Junior", role: "Technician", bio: "Brakes, suspension and alignment work, finished to the tolerance the car was built to." },
  { name: "Gio", role: "Front of House", bio: "Keeps schedules, updates and paperwork moving so you're never guessing where your car is." },
];
