import { useEffect, useRef, useState } from "react";
import "./Illustration.css";

export default function Illustration() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`illustration-wrapper ${visible ? "visible" : ""}`}
    >
      <img
        src="/images/illustration.png" // dit billede i public/images/
        alt="Illustration overgang"
        className="illustration-img"
      />
    </div>
  );
}
