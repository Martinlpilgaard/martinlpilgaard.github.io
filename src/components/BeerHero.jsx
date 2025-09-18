import { motion } from "framer-motion";
import "./BeerHero.css";

/**
 * BeerHero
 * - Animerer linjer ind fra venstre (x: -300 → 0)
 * - Beholder Modak-font
 * - Farve kan styres via prop `color` eller CSS variablen `--beer-hero-color`
 */
export default function BeerHero({
  color = "#7D1928",
  line1 = "BEDR",
  line2 = "BEER",
  line3 = "BRAND",
}) {
  const base = { initial: { x: -300, opacity: 0 }, animate: { x: 0, opacity: 1 } };

  return (
    <section className="beer-hero" style={{ ["--beer-hero-color"]: color }}>
      <motion.h1
        className="beer-hero-line beer-hero-h1"
        initial={base.initial}
        animate={base.animate}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {line1}
      </motion.h1>

      <motion.h2
        className="beer-hero-line beer-hero-h2"
        initial={base.initial}
        animate={base.animate}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
      >
        {line2}
      </motion.h2>

      <motion.h3
        className="beer-hero-line beer-hero-h3"
        initial={base.initial}
        animate={base.animate}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        {line3}
      </motion.h3>
    </section>
  );
}
