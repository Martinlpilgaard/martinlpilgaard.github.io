import { Link } from "react-router-dom";
import styles from "./OverviewProjects.module.css";

export default function OverviewProjects() {
  return (
    <section className={styles.wrap} aria-labelledby="overview-heading">
      <h1 id="overview-heading" className={styles.title}>PROJEKTER</h1>

      <div className={styles.row}>
        <Link
          to="/cillecyclus"
          className={styles.link}
          aria-label="Cilles Cyklus"
          style={{
            "--icon-url": "url('/images/ocillelogo.svg')",
            "--tint": "#3E3735",
            "--tint-hover": "#7D1928",
          }}
        >
          <span className={styles.logo} />
        </Link>

        <Link
          to="/bedrbeer"
          className={styles.link}
          aria-label="BedrBeer"
          style={{
            "--icon-url": "url('/images/obedrlogo.svg')",
            "--tint": "#3E3735",
            "--tint-hover": "#354F41",
          }}
        >
          <span className={styles.logo} />
        </Link>

        <Link
          to="/radar"
          className={styles.link}
          aria-label="Radar"
          style={{
            "--icon-url": "url('/images/oradarlogo.svg')",
            "--tint": "#3E3735",
            "--tint-hover": "#E62860",
          }}
        >
          <span className={styles.logo} />
        </Link>

        <Link
          to="/plakaten"
          className={styles.link}
          aria-label="Plakaten"
          style={{
            "--icon-url": "url('/images/oplakaten.svg')",
            "--tint": "#3E3735",
            "--tint-hover": "#E34C31",
          }}
        >
          <span className={styles.logo} />
        </Link>
      </div>
    </section>
  );
}
