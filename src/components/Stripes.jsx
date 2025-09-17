import React, { useEffect, useRef, useState } from "react";
import "./Stripes.css";

/**
 * Full-bleed stripes der animerer ind fra hver sin side samtidig,
 * først når sektionen er i view.
 *
 * Props:
 * - colors: string[] (8 farver anbefales)
 * - height: string   (fx "8px")
 * - gap: string      (fx "14px")
 * - duration: string (fx "800ms")
 * - stagger: string  (fx "110ms")
 * - rounded: boolean (afrundede ender)
 * - threshold: number (0..1 hvor meget der skal være synligt før animation starter)
 */
export default function Stripes({
  colors = [],
  height = "8px",
  gap = "14px",
  duration = "800ms",
  stagger = "110ms",
  rounded = true,
  threshold = 0.25,
  className = "",
  style = {},
}) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Start animation når sektionen er i view
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  // hvis der er færre end 8 farver, loop dem
  const count = 8;
  const palette = Array.from({ length: count }, (_, i) => colors[i % colors.length]);

  // konverter stagger til ms-tal
  const baseMs = stagger.endsWith("ms") ? parseFloat(stagger) : parseFloat(stagger) * 1000;

  return (
    <section
      ref={ref}
      className={`stripes-section ${animate ? "is-animate" : ""} ${className}`}
      style={{ ...style }}
      aria-label="Dekorative striber"
    >
      <div
        className="stripes-track"
        style={{
          // css vars til størrelser
          "--stripe-h": height,
          "--stripe-gap": gap,
          "--stripe-duration": duration,
        }}
      >
        {palette.map((color, i) => {
          const fromRight = i % 2 === 1;
          return (
            <div
              key={i}
              className={`stripe ${fromRight ? "from-right" : "from-left"} ${rounded ? "rounded" : ""}`}
              style={{
                background: color,
                animationDelay: `${i * baseMs}ms`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
