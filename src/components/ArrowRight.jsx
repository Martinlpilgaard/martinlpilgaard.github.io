import "./ArrowRight.css";

export default function ArrowRight({
  src = "/images/pil2.png",   // 👈 nu bruger den pil2.png som standard
  alt = "",
  width = "clamp,4vw,40px)",
  duration = "2s",
  style = {},
  className = "",
}) {
  return (
    <div
      className={`arrowright ${className}`}
      style={{
        "--arrow-w": width,
        "--arrow-duration": duration,
        ...style,
      }}
      aria-hidden={alt ? undefined : true}
    >
      <img className="arrowright__img" src={src} alt={alt} />
    </div>
  );
}
