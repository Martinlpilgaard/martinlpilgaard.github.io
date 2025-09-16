import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  return (
    <section className={styles.wrap}>
      <h1 className={styles.title}>Projekter</h1>

      <div className={styles.placeholder}>
        <p>Her kommer mine projekter…</p>
      </div>
    </section>
  );
}
