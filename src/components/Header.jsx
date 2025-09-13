import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ style }){
  return (
    <header className={styles.header} style={style}>
      <div className={`container ${styles.bar}`}>
        <div className={styles.brand}>
          <div className={styles.logoPh} aria-label="Logo placeholder" />
          <div className={styles.brandText}>
            <strong>Martin L</strong>
            <span>Pilgaard</span>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Primær navigation">
          <NavLink to="/projects" className={({isActive})=> isActive ? styles.active : undefined}>Projekter</NavLink>
          <NavLink to="/about"    className={({isActive})=> isActive ? styles.active : undefined}>Om mig</NavLink>
          <NavLink to="/contact"  className={({isActive})=> isActive ? styles.active : undefined}>Kontakt</NavLink>
        </nav>
      </div>

      <div className={`container ${styles.hero}`}>
        <h1 className={styles.display}>PORTFOLIO</h1>
        <p className={styles.byline}>by Martin Lind Pilgaard</p>
      </div>

      <div className={styles.portrait} aria-hidden="true" />
      <div className={styles.dkRail} aria-hidden="true">
        <span>DK</span>
      </div>
    </header>
  );
}
