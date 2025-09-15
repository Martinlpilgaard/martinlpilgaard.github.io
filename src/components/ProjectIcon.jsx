// ProjectIcon.jsx — CSS mask løsning (ingen <img>, kun CSS-tint)
// Ikonet farves via background-color + mask-image.
// Props:
// - icon: string (fx "/images/icon1.png") — SKAL pege på public/
// - size: "sm" | "md" | "lg"
// - color: normal farve (CSS-farve)
// - hoverColor: farve på hover
// - className: ekstra klasser (fx position: icon-1)

export default function ProjectIcon({
  icon,
  title = "",
  size = "md",
  color = "#111111",
  hoverColor = "#2563eb",
  className = "",
}) {
  return (
    <div
      className={["proj-icon", "mask-icon", size, className].join(" ")}
      title={title}
      style={{
        // CSS-variabler bruges i CSS-filen
        ["--icon-url"]: `url(${icon})`,
        ["--icon-color"]: color,
        ["--icon-hover"]: hoverColor,
      }}
    />
  );
}
