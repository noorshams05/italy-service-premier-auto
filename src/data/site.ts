export const site = {
  name: "Italy Service",
  tagline: "Las Vegas' trusted specialists in Ferrari, Maserati, Alfa Romeo & elite German marques — serving since 1975",
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
  { label: "Team", to: "/team" },
  { label: "Gallery", to: "/gallery" },
  { label: "Merch", to: "/merch" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: 4.8, suffix: "★", label: `${site.reviewCount} Google reviews`, decimals: 1 },
  { value: 30, suffix: "+", label: "Years serving Las Vegas" },
  { value: 8, suffix: "", label: "Italian & German marques" },
  { value: 0, suffix: "", label: "Unnecessary upsells" },
];

export const marques = [
  "FERRARI",
  "MASERATI",
  "ALFA ROMEO",
  "LAMBORGHINI",
  "BENTLEY",
  "McLAREN",
  "PORSCHE",
  "MERCEDES-BENZ",
];

export const services = [
  {
    slug: "diagnostics",
    title: "Check Engine Diagnostics",
    blurb: "Marque-specific scan tools and real fault tracing — not guesswork parts swapping.",
    detail:
      "We read the car the way the factory does, then verify the fault by hand before quoting a repair. You get the actual cause, in plain language, with a cost you approve first.",
    image: "galleryStorageTower",
  },
  {
    slug: "brakes-suspension",
    title: "Brakes & Suspension",
    blurb: "Pads, rotors, bushings, alignment — set up for how the car is actually driven.",
    detail:
      "Carbon ceramic or steel, street or track, we spec the right friction package and finish with a proper four-wheel alignment.",
    image: "showroomGlassFront",
  },
  {
    slug: "engine-performance",
    title: "Engine & Performance",
    blurb: "Service, timing, cooling and drivability work on Italian and German V6, V8 and V12 platforms.",
    detail:
      "Belt and chain service, cooling systems, clutch and transmission work, fluid and tuning refresh — done by technicians who see these engines every week, across Ferrari, Maserati, Porsche and Mercedes-Benz platforms alike.",
    image: "boutiqueVault",
  },
  {
    slug: "pre-purchase-inspection",
    title: "Pre-Purchase Inspection",
    blurb: "Know exactly what you're buying before the money moves.",
    detail:
      "A full mechanical, electronic and service-history review with photos and a written summary — the difference between a great buy and an expensive lesson.",
    image: "galleryExteriorDusk",
  },
  {
    slug: "routine-maintenance",
    title: "Routine Maintenance",
    blurb: "Annual services, fluids, filters and inspections on a schedule that protects value.",
    detail:
      "We keep records tight and intervals honest so your car stays sharp and its history stays clean.",
    image: "parkingTower",
  },
  {
    slug: "warranty-safe-service",
    title: "Warranty-Safe Service",
    blurb: "Independent expertise without dealership pricing — or dealership pressure.",
    detail:
      "Factory-spec parts and documented procedures mean your coverage stays intact while your invoice stays reasonable.",
    image: "galleryCollectionCovers",
  },
];

export const reviews = [
  {
    quote:
      "Honest from the first call. They told me what actually needed doing and what could wait, and it has saved me real money over the long run.",
    name: "Ricky C.",
    car: "Alfa Romeo Giulia",
  },
  {
    quote:
      "Other shops padded the number the moment they heard the word Maserati. These guys quoted fairly and stuck to it.",
    name: "Manny C.",
    car: "Maserati",
  },
  {
    quote:
      "New to Vegas and dreading dealership prices. Found Italy Service instead and got proper work done for a fraction of it.",
    name: "Michael O.",
    car: "Maserati Levante",
  },
  {
    quote:
      "Fair pricing and a fast turnaround — the dealer wanted far more and would have kept the car much longer.",
    name: "Erica B.",
    car: "Fiat",
  },
  {
    quote:
      "Always on time, always precise. You can tell the technicians are highly trained on these cars.",
    name: "Matthew C.",
    car: "Bentley",
  },
  {
    quote:
      "They go above and beyond for their customers. Every visit has been handled better than I expected.",
    name: "William M.",
    car: "Alfa Romeo Stelvio",
  },
  {
    quote:
      "Called on short notice with a coolant leak. Diagnosed and repaired inside 24 hours.",
    name: "Jake S.",
    car: "Alfa Romeo",
  },
  {
    quote:
      "Knowledgeable and straight with me. Faster and cheaper than the dealership, with none of the runaround.",
    name: "Malik S.",
    car: "General service",
  },
];

export const team = [
  { name: "Mel", role: "Service & Diagnostics", bio: "The voice most customers know. Explains the fault, the fix and the cost before anything happens." },
  { name: "Brian", role: "Technician", bio: "Deep in the Italian and German platforms — engines, electronics and the problems other shops hand back." },
  { name: "Junior", role: "Technician", bio: "Brakes, suspension and alignment work, finished to the tolerance the car was built to." },
  { name: "Gio", role: "Front of House", bio: "Keeps schedules, updates and paperwork moving so you're never guessing where your car is." },
];
