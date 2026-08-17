import hero from "@/assets/hero.jpg";
import engineTeardown from "@/assets/engine-teardown.jpg";
import engineChassis from "@/assets/engine-chassis.jpg";
import storefront from "@/assets/storefront.jpg";
import cadillac from "@/assets/cadillac.jpg";
import bb512 from "@/assets/bb512-bay.jpg";
import enzoLift from "@/assets/enzo-lift.jpg";
import enzoDoors from "@/assets/enzo-doors.jpg";
import phantom from "@/assets/phantom.jpg";
import daytona from "@/assets/daytona.jpg";
import f348 from "@/assets/348.jpg";
import p944 from "@/assets/944.jpg";
import vegasStrip from "@/assets/vegas-strip-supercars.jpg";

export const images: Record<string, string> = {
  hero,
  engineTeardown,
  engineChassis,
  storefront,
  cadillac,
  bb512,
  enzoLift,
  enzoDoors,
  phantom,
  daytona,
  f348,
  p944,
  vegasStrip,
};

export { hero, storefront, engineTeardown, engineChassis };

export const gallery = [
  { src: vegasStrip, alt: "Ferrari, Lamborghini and supercars on the Las Vegas Strip", span: "wide" as const },
];
