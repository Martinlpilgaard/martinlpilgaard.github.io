import { motion } from "framer-motion";
import "./CilleHero.css";

export default function CilleHero() {
  return (
    <section className="cille-hero">
      <motion.h1
        className="cille-hero-line"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        INTERAKTIV
      </motion.h1>

      <motion.h2
        className="cille-hero-line"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        STORY
      </motion.h2>

      <motion.h3
        className="cille-hero-line"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        TELLING
      </motion.h3>
    </section>
  );
}
