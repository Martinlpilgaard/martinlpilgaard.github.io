// Dekorative, animerede farvestriber
import { useMemo } from "react";

export default function ColorStripes({
  colors = [],
  height = "16px",
  gap = "8px",
  duration = "1200ms",
  stagger = "80ms",
  rounded = false,
  style = {},
  className = "",
}) {
  const items = useMemo(
    () =>
      colors.map((c, i) => ({
        color: c,
        delay: `calc(${stagger} * ${i})`,
      })),
    [colors, stagger]
  );

  return (
    <div className={`stripes ${className}`} style={{ gap, ...style }}>
      {items.map((it, i) => (
        <span
          key={i}
          className="stripe"
          style={{
            background: it.color,
            height,
            animationDuration: duration,
            animationDelay: it.delay,
            borderRadius: rounded ? "9999px" : "0px",
          }}
        />
      ))}
    </div>
  );
}
