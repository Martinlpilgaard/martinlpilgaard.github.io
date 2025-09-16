// src/components/ArrowUp.jsx
import "./UpArrow.css";

/**
 * Opad-pegende pil – brug ligesom Illustration:
 * <ArrowUp src="/images/pil.png" alt="scroll up"
 *          overlap="-15rem" width="25px"
 *          style={{ marginLeft: "700px" }} />
 *
 * Props:
 * - src:    billedsti (default: /images/pil.png)
 * - alt:    alt-tekst
 * - width:  CSS-bredde (fx "25px" eller "3rem" eller "clamp(20px,4vw,40px)")
 * - overlap: flyt op/ned (fx "-15rem" => opad) via translateY
 * - style:  ekstra inline styles (marginLeft, marginTop, position, osv.)
 */
export default function ArrowUp({
  src = "/images/pil.png",
  alt = "",
  width = "20px",
  overlap = "0",
  style = {},
  className = "",
}) {
  return (
    <div
      className={`arrowup ${className}`}
      style={{
        ...style,
        // tillad nem justering af størrelse og vertikal overlappende placering
        "--arrow-w": width,
        "--arrow-overlap": overlap,
      }}
      aria-hidden={alt ? undefined : true}
    >
      <img className="arrowup__img" src={src} alt={alt} />
    </div>
  );
}
