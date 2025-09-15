import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:martinlpilgaard@gmail.com" className="footer-email">
        martinlpilgaard@gmail.com
      </a>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/martinlpilgaard"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/martinlpilgaard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
