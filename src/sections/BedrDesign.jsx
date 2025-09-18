// src/sections/BedrDesign.jsx
import "./BedrDesign.css";

export default function BedrDesign() {
  return (
    <>
      <section className="bedrdesign-section">
        <h2 className="bedrdesign1">DESIGN</h2>

        <img src="/images/bedrlogo.png"  alt="Ekstra grafik" className="bedrimg1" />
        <img src="/images/ikonerstreg.png" alt="Ekstra grafik" className="bedrimg2" />
        <img src="/images/bikoner.svg"   alt="Ekstra grafik" className="bedrimg3" />
      </section>

      {/* FULL BLEED billedet – fylder hele skærmens bredde */}
      <div className="full-bleed">
        <img src="/images/bedrbg.svg" alt="Ekstra grafik" className="bedrimg4" />
      </div>

      <section className="bedrdesign-section">
        <img src="/images/doeser.svg"   alt="Ekstra grafik" className="bedrimg5" />
        <img src="/images/bedrtegn.svg"   alt="Ekstra grafik" className="bedrimg6" />
       <img src="/images/flasker.svg"   alt="Ekstra grafik" className="bedrimg7" />
      
      </section>
    </>
  );
}