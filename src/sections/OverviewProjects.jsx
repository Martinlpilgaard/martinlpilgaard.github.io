import styles from "./OverviewProjects.module.css";

export default function OverviewProjects() {
  return (
    <section className={styles.wrap} aria-labelledby="overview-heading">
      <h1 id="overview-heading" className={styles.title}>Projekter (overview)</h1>

      <div className={styles.placeholder}>
        <p>Her kommer projekt-oversigten / effekt-komponent…</p>
      </div>
    </section>
  );
}
