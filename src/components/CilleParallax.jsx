import { useEffect, useState } from "react";
import "./CilleParallax.css";

export default function CilleParallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="cille-parallax" aria-label="Indsigter">
      <img
        src="/images/indsigt1.svg"
        alt="Indsigt 1"
        className="parallax-img img1"
        style={{ transform: `translateY(${offset * 0.15}px)` }}
      />
      <img
        src="/images/indsigt2.svg"
        alt="Indsigt 2"
        className="parallax-img img2"
        style={{ transform: `translateY(${offset * 0.25}px)` }}
      />
      <img
        src="/images/indsigt3.svg"
        alt="Indsigt 3"
        className="parallax-img img3"
        style={{ transform: `translateY(${offset * 0.23}px)` }}
      />
      <img
        src="/images/indsigt4.svg"
        alt="Indsigt 4"
        className="parallax-img img4"
        style={{ transform: `translateY(${offset * 0.1}px)` }}
      />
    </section>
  );
}
