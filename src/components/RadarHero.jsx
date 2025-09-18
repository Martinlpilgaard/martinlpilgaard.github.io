import { motion } from "framer-motion";

export default function RadarHero({
  color = "#E62860",
  line1 = "KULTURELT",
  line2 = "OG FÆNGENDE",
  line3 = "RE-DESIGN",
}) {
  // Kom ind fra højre
  const base = { initial: { x: 280, opacity: 0 }, animate: { x: 0, opacity: 1 } };

  return (
    <section className="radar-hero" style={{ ["--radar-hero-color"]: color }}>
      <motion.h1
        className="radar-hero-line radar-hero-h1"
        initial={base.initial}
        animate={base.animate}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {line1}
      </motion.h1>

      <motion.h2
        className="radar-hero-line radar-hero-h2"
        initial={base.initial}
        animate={base.animate}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
      >
        {line2}
      </motion.h2>

      <motion.h3
        className="radar-hero-line radar-hero-h3"
        initial={base.initial}
        animate={base.animate}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        {line3}
      </motion.h3>
    </section>
  );
}
