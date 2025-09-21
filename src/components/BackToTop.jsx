import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // eller brug dit eget SVG

import "./BackToTop.css";

export default function BackToTop({ color = "#354F41", bg = "rgba(0,0,0,0.4)" }) {
  const [visible, setVisible] = useState(false);

  // Lyt efter scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      style={{
        backgroundColor: bg,
        color: color,
      }}
      aria-label="Tilbage til toppen"
    >
      <ChevronUp size={15} strokeWidth={2} />
    </button>
  );
}
