import { motion } from "framer-motion";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ x: -900, opacity: 0 }}
        animate={{ x: 0, opacity: 3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Hvem er jeg?
      </motion.h1>
    </section>
  );
}
