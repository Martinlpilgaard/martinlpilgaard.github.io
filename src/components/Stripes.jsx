import React, { useEffect, useRef, useState } from "react";
import "./Stripes.css";

export default function Stripes({
  colors = [],
  lineHeight = "6px",
  gap = "12px",
  duration = "600ms",
  stagger = "120ms",
  rounded = false,
  style = {},
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 } // 30% synlig før animation starter
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`stripes-container ${isVisible ? "animate" : ""}`}
      style={style}
    >
      {colors.map((color, i) => (
        <div
          key={i}
          className="stripe"
          style={{
            "--stripe-color": color,
            "--stripe-h": lineHeight,
            "--stripe-dur": duration,
            "--stripe-delay": `${i * parseInt(stagger)}ms`,
            borderRadius: rounded ? "4px" : "0px",
          }}
        />
      ))}
    </div>
  );
}
