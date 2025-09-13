import styles from "./Welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome(){
  return (
    <section className={`container ${styles.wrap}`}>
      <h2 className="visually-hidden">Introduktion</h2>

      <div className={styles.title}>VELKOMMEN!</div>

      <div className={styles.copy}>
        <p>
          Jeg er en digital og grafisk designer, med en
          passion for at skabe design, der ikke bare ser flotte ud,
          men også giver mening og værdi.
        </p>

        <ul className={styles.links}>
          <li><Link to="/about"><span className={styles.arrow} aria-hidden>↦</span> Lær om mere om mig</Link></li>
          <li><Link to="/projects"><span className={styles.arrow} aria-hidden>↦</span> Se mine projekter</Link></li>
        </ul>
      </div>
    </section>
  );
}
