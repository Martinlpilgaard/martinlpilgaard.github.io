import { useEffect, useRef, useState } from "react";
import "./Illustration.css";

export default function Illustration({
  src = "/images/illustration.png",
  alt = "Illustration",
  overlap = "-4rem",                    // hvor meget den overlapper ovenfor
  width = "clamp(100px, 18vw, 220px)", // størrelsen
  style = {},                          // 👈 ekstra style du kan give (fx marginer)
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => ref.current && io.unobserve(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`illustration-wrapper ${visible ? "visible" : ""}`}
      style={{ "--overlap": overlap, "--illu-width": width, ...style }}
    >
      <img
        src={src}
        alt={alt}
        className="illustration-img"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
