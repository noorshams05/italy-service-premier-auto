import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
  type?: "submit" | "button";
};

export function MagneticButton({
  children,
  to,
  href,
  variant = "solid",
  className = "",
  type,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (r.left + r.width / 2)) * 0.22,
      y: (e.clientY - (r.top + r.height / 2)) * 0.28,
    });
  };

  const base =
    "relative inline-flex items-center justify-center px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/85"
      : "border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5";

  const inner = <span className="relative z-10">{children}</span>;

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.5 }}
      className="inline-block"
    >
      {to ? (
        <Link to={to} className={`${base} ${styles} ${className}`}>
          {inner}
        </Link>
      ) : href ? (
        <a href={href} className={`${base} ${styles} ${className}`}>
          {inner}
        </a>
      ) : (
        <button type={type ?? "button"} className={`${base} ${styles} ${className}`}>
          {inner}
        </button>
      )}
    </motion.span>
  );
}
