import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" /* "auto" | "smooth" */ }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll til #anker hvis der er hash, ellers til top
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior });
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  }, [pathname, hash, behavior]);

  return null;
}
