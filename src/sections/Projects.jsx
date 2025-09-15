import ProjectIcon from "../components/ProjectIcon";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-wrapper">
        <ProjectIcon
          icon="/images/ikon2.png"
          title="Cilles Cyklus"
          size="cc"
          color="#3E3735"      // slate-900
          hoverColor="#7D1928" 
          className="icon-1"
        />

        <ProjectIcon
          icon="/images/ikon4.png"
          title="Plakaten"
          size="pl"
          color="#3E3735"
          hoverColor="#E34C31" // grøn
          className="icon-2"
        />

        <ProjectIcon
          icon="/images/ikon1.png"
          title="Bedrbeer"
          size="bb"
          color="#3E3735"
          hoverColor="#1f3a34" 
          className="icon-3"
        />

        <ProjectIcon
          icon="/images/ikon3.png"
          title="Radar"
          size="ra"
          color="#3E3735"
          hoverColor="#E62860" 
          className="icon-4"
        />
      </div>
    </section>
  );
}
