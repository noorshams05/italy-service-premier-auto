import hero from "@/assets/hero.jpg";
import engine from "@/assets/engine.jpg";
import shop from "@/assets/shop.jpg";
import brakes from "@/assets/brakes.jpg";
import diagnostics from "@/assets/diagnostics.jpg";
import detail from "@/assets/detail.jpg";

export const images: Record<string, string> = {
  hero,
  engine,
  shop,
  brakes,
  diagnostics,
  detail,
};

export const gallery = [
  { src: hero, alt: "Red Italian exotic in the Italy Service workshop", span: "tall" },
  { src: engine, alt: "Italian V8 engine bay detail", span: "wide" },
  { src: shop, alt: "Service bay with an exotic on the lift" },
  { src: brakes, alt: "Carbon ceramic brake disc and red caliper" },
  { src: diagnostics, alt: "Diagnostic session in progress", span: "wide" },
  { src: detail, alt: "Rear taillight detail of a luxury Italian sedan", span: "tall" },
];
