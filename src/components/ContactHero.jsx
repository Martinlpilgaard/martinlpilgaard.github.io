import { motion } from "framer-motion";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, scale: 5 }}
        animate={{ opacity: 1, scale: [1.5, 2, 1.5] }}  // pulsér mellem 100% og 105%
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity, // gentag uendeligt
          repeatType: "loop"
        }}
      >
        FANG MIG 
        HER
      </motion.h1>
    </section>
  );
}
