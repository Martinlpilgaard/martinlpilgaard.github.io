import styles from "./Welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome(){
  return (
    <section className={`container ${styles.wrap}`}>
      <h2 className="visually-hidden">Introduktion</h2>

      <figure
        className={styles.figure}
    
      >
        <img
          className={styles.cutout}
          src="/images/Martinpng.png"
          alt="Martin sidder og kigger op"
        />
      </figure>


      <div className={styles.copy}>
       
        <h2 className={styles.subheading}>
          Jeg er en digital og grafisk designer, med en
          passion for at skabe design, der ikke bare ser flot ud,
          men også giver mening og værdi.
        </h2>

        <ul className={styles.links}>
          <li>
            <Link to="/about">
              <span className={styles.arrow} aria-hidden></span> Lær mere om mig
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span className={styles.arrow} aria-hidden></span> Se mine projekter
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
