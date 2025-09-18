
import "./BedrUx.css";

export default function BedrUx() {
  return (
    <section className="bedrux-section">
      {/* Titel reuse'r din eksisterende .cillecyclus-title styling */}
      <h2 className="bedrdux1">PERSONAS & MOODBORAD</h2>

       <img
              src="/images/Personas1.png"
              alt="Ekstra grafik"
              className="bedruximg1"
            /> 
        <img
              src="/images/Personas2.png"
              alt="Ekstra grafik"
              className="bedruximg2"
            />
         <img
              src="/images/bedrMoodboard.png"
              alt="Ekstra grafik"
              className="bedruximg3"
            /> 
            
    </section>
  );
}