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
};

export { hero, storefront, engineTeardown, engineChassis };

export const gallery = [
  { src: enzoLift, alt: "Ferrari Enzo on the alignment rack inside the Italy Service shop", span: "tall" as const },
  { src: bb512, alt: "Ferrari 512 BB in the bays with a 360 Spider on the lift above", span: "wide" as const },
  { src: daytona, alt: "Black Ferrari Daytona parked beside a Mondial in the workshop" },
  { src: enzoDoors, alt: "Ferrari Enzo with both doors open outside the shop" },
  { src: engineTeardown, alt: "Ferrari V8 engine and chassis mid-teardown", span: "tall" as const },
  { src: storefront, alt: "Italy Service storefront with a Lamborghini Murcielago and Ferrari 458 out front", span: "wide" as const },
  { src: f348, alt: "Ferrari 348 in the customer lot" },
  { src: phantom, alt: "Rolls-Royce Phantom in for service" },
  { src: p944, alt: "Red Porsche 944 outside the service bay door" },
  { src: cadillac, alt: "Classic Cadillac under the Italy Service sign", span: "wide" as const },
  { src: engineChassis, alt: "Ferrari engine and front suspension on a work stand" },
  { src: hero, alt: "Ferrari 360 engine bay detail" },
];
