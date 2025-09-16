import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ style }) {
  return (
    <header className={styles.header} style={style}>
      <div className={`container ${styles.bar}`}>
        
        {/* Gør brand/logo til et link hjem */}
        <NavLink to="/" className={styles.brand}>
          <div className={styles.logoPh} aria-label="Logo placeholder" />
          <div className={styles.brandText}>
            <strong>Martin L</strong>
            <span>Pilgaard</span>
          </div>
        </NavLink>

        <nav className={styles.nav} aria-label="Primær navigation">
          <NavLink 
            to="/projects" 
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Projekter
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Om mig
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Kontakt
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
