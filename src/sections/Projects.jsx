import { Link } from "react-router-dom";
import ProjectIcon from "../components/ProjectIcon";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-wrapper">
        <Link to="/cillecyclus" style={{ textDecoration: "none" }}>
          <ProjectIcon
            icon="/images/ikon2.png"
            title="Cilles Cyklus"
            size="cc"
            color="#3E3735"
            hoverColor="#7D1928"
            className="icon-1"
          />
        </Link>

        <Link to="/plakaten" style={{ textDecoration: "none" }}>
          <ProjectIcon
            icon="/images/ikon4.png"
            title="Plakaten"
            size="pl"
            color="#3E3735"
            hoverColor="#E34C31"
            className="icon-2"
          />
        </Link>

        <Link to="/bedrbeer" style={{ textDecoration: "none" }}>
          <ProjectIcon
            icon="/images/ikon1.png"
            title="BedrBeer"
            size="bb"
            color="#3E3735"
            hoverColor="#354F41"
            className="icon-3"
          />
        </Link>

        <Link to="/radar" style={{ textDecoration: "none" }}>
          <ProjectIcon
            icon="/images/ikon3.png"
            title="Radar"
            size="ra"
            color="#3E3735"
            hoverColor="#E62860"
            className="icon-4"
          />
        </Link>
      </div>
    </section>
  );
}
