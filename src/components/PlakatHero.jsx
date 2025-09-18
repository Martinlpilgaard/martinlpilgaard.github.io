"use client";
import { motion } from "framer-motion";

export default function PlakatHero({
  color = "#E34C31",
  line1 = "STILRENT",
  line2 = "WEB",
  line3 = "TOOL",
}) {
  // VENSTRE → HØJRE
  const base = { initial: { x: -300, opacity: 0 }, animate: { x: 0, opacity: 1 } };

  return (
    <section className="plakat-hero" style={{ ["--plakat-hero-color"]: color }}>
      <motion.h1
        className="plakat-hero-line plakat-hero-h1"
        initial={base.initial}
        animate={base.animate}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {line1}
      </motion.h1>

      <motion.h2
        className="plakat-hero-line plakat-hero-h2"
        initial={base.initial}
        animate={base.animate}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
      >
        {line2}
      </motion.h2>

      <motion.h3
        className="plakat-hero-line plakat-hero-h3"
        initial={base.initial}
        animate={base.animate}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        {line3}
      </motion.h3>
    </section>
  );
}
