// src/sections/CilleDesign.jsx
export default function CilleDesign() {
  return (
    <section className="project-section cille-design">
      {/* Titel reuse'r din eksisterende .cillecyclus-title styling */}
      <h2 className="cillecyclus-title3">Design</h2>

      {/* Logo fra /public — hvis du lagde den i /public/images, skift til "/images/cillelogo.svg" */}
       
       <img
              src="/images/ikoner.svg"
              alt="Ekstra grafik"
              className="cilledesignimg0"
            />
          <h6>CILLE - Gennemgående personificeret karakter til menneskeliggørelse af emnet Menstruation</h6> 
          <img
              src="/images/cillelogo.svg"
              alt="Ekstra grafik"
              className="cilledesignimg1"
            />
          
            <img
              src="/images/girlonbind.png"
              alt="Ekstra grafik"
              className="cilledesignimg2"
            />

            
    </section>
  );
}
