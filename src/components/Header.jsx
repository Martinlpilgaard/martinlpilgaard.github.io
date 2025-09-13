import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ style }) {
  return (
    <header className={styles.header} style={style}>
      <div className={`container ${styles.bar}`}>
        <div className={styles.brand}>
          <div className={styles.logoPh} />
          <div className={styles.brandText}>
            <strong>Martin L</strong><span>Pilgaard</span>
          </div>
        </div>
        <nav className={styles.nav}>
          <NavLink to="/projects">Projekter</NavLink>
          <NavLink to="/about">Om mig</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </nav>
      </div>
      <div className={`container ${styles.hero}`}>
        <h1 className={styles.display}>PORTFOLIO</h1>
        <p className={styles.byline}>by Martin Lind Pilgaard</p>
      </div>
      <div className={styles.portrait} />
      <div className={styles.dkRail}><span>DK</span></div>
    </header>
  );
}
