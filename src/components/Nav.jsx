import { NavLink } from "react-router";

/** Minimal nav, hvis du vil genbruge uden for headeren */
export default function Nav() {
  return (
    <nav>
      <NavLink to="/" end>Forside</NavLink>
      <NavLink to="/projects">Projekter</NavLink>
      <NavLink to="/about">Om mig</NavLink>
      <NavLink to="/contact">Kontakt</NavLink>
    </nav>
  );
}