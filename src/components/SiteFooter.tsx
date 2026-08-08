type SiteFooterProps = {
  variant?: "light" | "dark" | "floating";
};

const footerLinks = [
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Rol", href: "/rol" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Publicaciones", href: "/publicaciones" },
] as const;

const legalLinks = [
  { label: "Aviso legal", href: "/legal#aviso-legal" },
  { label: "Privacidad", href: "/legal#privacidad" },
  { label: "Cookies", href: "/legal#cookies" },
  { label: "Accesibilidad", href: "/legal#accesibilidad" },
] as const;

export function SiteFooter({ variant = "light" }: SiteFooterProps) {
  const isDark = variant === "dark";
  const isFloating = variant === "floating";

  return (
    <footer
      className={`site-footer ${isDark ? "site-footer-dark" : "site-footer-light"} ${isFloating ? "site-footer-floating" : ""}`}
    >
      <div className="site-footer-grid">
        <div className="site-footer-about">
          <a href="/" className="site-footer-brand" aria-label="Ir a la Home de Srta Serifa">
            srtaserifa
          </a>
          <p>Diseño, estrategia y producto digital para marcas con algo que decir.</p>
          <small>© 2026 Núria López · Srta Serifa</small>
        </div>

        <div className="site-footer-column">
          <h2>Enlaces</h2>
          <nav aria-label="Enlaces del sitio">
            <ul>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer-column">
          <h2>Contacto</h2>
          <a className="site-footer-email" href="mailto:srtaserifa@icloud.com">
            {isFloating ? "Email" : "srtaserifa@icloud.com"}
          </a>
          <div className="site-footer-socials" aria-label="Redes sociales">
            <a href="https://www.linkedin.com/in/srtaserifa/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/srtaserifa/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://x.com/srtaserifa" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <nav aria-label="Textos legales">
          <ul>
            {legalLinks.filter((link) => !isFloating || link.label !== "Accesibilidad").map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="mailto:srtaserifa@icloud.com">Hablemos ↗</a>
      </div>
    </footer>
  );
}
