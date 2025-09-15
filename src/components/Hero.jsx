import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        PORTFOLIO
      </motion.h1>

      <motion.p
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        by Martin Lind Pilgaard
      </motion.p>
    </section>
  );
}
