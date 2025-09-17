// src/sections/CilleDesign.jsx
export default function CilleDesign() {
  return (
    <section className="project-section cille-design">
      {/* Titel reuse'r din eksisterende .cillecyclus-title styling */}
      <h2 className="cillecyclus-title3">Design</h2>

      {/* Logo fra /public — hvis du lagde den i /public/images, skift til "/images/cillelogo.svg" */}
       <img
              src="/images/cillelogo.svg"
              alt="Ekstra grafik"
              className="cilledesignimg1"
            />
    </section>
  );
}
