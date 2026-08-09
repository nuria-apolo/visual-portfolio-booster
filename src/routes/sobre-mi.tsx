import { createFileRoute } from "@tanstack/react-router";
import portraitNuria from "@/assets/portrait-nuria-new.png";
import apoloIcon from "@/assets/apolo-badge.png";
import salvartesIcon from "@/assets/salvartes-badge.png";
import laBasadIcon from "@/assets/la-basad-badge.png";
import escuelaArteIcon from "@/assets/escuela-arte-jerez-badge.png";
import nocodehackersIcon from "@/assets/nocodehackers-badge.png";
import wkDesignIcon from "@/assets/wk-design-graduate-badge.png";
import framerIcon from "@/assets/framer-badge.png";
import figmaIcon from "@/assets/figma-badge.png";
import claudeIcon from "@/assets/claude-badge.png";
import perplexityIcon from "@/assets/perplexity-badge.png";
import affinityIcon from "@/assets/affinity-badge.png";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "Sobre mi — Brand Systems + Digital Products | Srtaserifa";
const DESCRIPTION =
  "Conoce a Núria López, Head of Design en Apolo y creadora de Srtaserifa. Su trabajo conecta estrategia, sistemas de marca, identidad y diseño de productos digitales.";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://srtaserifa.es/sobre-mi" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/sobre-mi" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: TITLE,
          description: DESCRIPTION,
          url: "https://srtaserifa.es/sobre-mi",
          mainEntity: {
            "@type": "Person",
            "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez",
            name: "Núria López",
            alternateName: "Srtaserifa",
            url: "https://srtaserifa.es/sobre-mi",
            jobTitle: "Head of Design",
            worksFor: {
              "@type": "Organization",
              name: "Apolo",
              url: "https://universoapolo.com",
            },
            knowsAbout: [
              "Brand Systems",
              "Product Design",
              "Brand Identity",
              "UX/UI",
              "Design Systems",
              "Creative Direction",
            ],
            sameAs: [
              "https://www.linkedin.com/in/srtaserifa/",
              "https://www.instagram.com/srtaserifa/",
              "https://x.com/srtaserifa",
            ],
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="editorial-page">
      <main>
        <section className="editorial-hero editorial-hero-split">
          <div>
            <nav className="book-breadcrumbs about-breadcrumbs" aria-label="Migas de pan">
              <a href="/">Inicio</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Sobre mí</span>
            </nav>
            <h1>
              Hola, soy Núria López, <em>Synth Designer.</em>
            </h1>
            <div className="about-hero-actions">
              <a
                className="about-hero-button"
                href="/cv-nuria-lopez.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Ver CV de Núria López en PDF"
              >
                Ver CV ↗
              </a>
              <a
                className="about-hero-button about-hero-button-primary"
                href="mailto:srtaserifa@icloud.com"
              >
                Contactar ↗
              </a>
            </div>
          </div>
          <img src={portraitNuria} alt="Retrato de Núria López" width="720" height="720" />
        </section>
        <div className="editorial-columns">
          <section>
            <p className="editorial-lede">
              Soy Núria López. Trabajo bajo el nombre de Srta Serifa porque el diseño, para mí,
              siempre ha sido una forma de traducir: hacer que algo complejo encuentre su forma, su
              ritmo y su manera de llegar a otras personas.
            </p>
            <a className="editorial-link" href="/rol">
              Conoce mi rol profesional en Apolo ↗
            </a>
          </section>
          <section className="editorial-prose">
            <p>
              Creo que el diseño no consiste en simplificar las cosas. Consiste en{" "}
              <strong>traducirlas</strong>. Ayudo a convertir ideas, negocios y tecnologías
              complejas en experiencias que las personas entienden, utilizan y recuerdan. Trabajo en
              el punto donde se encuentran la estrategia, la identidad de marca y el producto
              digital, diseñando sistemas que no solo funcionan, sino que también tienen sentido.
            </p>
            <p>
              Durante los últimos años he trabajado en agencias, junto a startups y empresas de
              distintos sectores, participando en proyectos de branding, plataformas SaaS,
              aplicaciones, sistemas de diseño y productos impulsados por inteligencia artificial.
              Cada proyecto me ha enseñado que los mejores diseños nacen mucho antes de abrir Figma.
            </p>
            <p>
              Antes de diseñar una pantalla, un logotipo o una interfaz, necesito entender el
              problema. Me gusta hacer preguntas, conectar ideas y descubrir cómo encajan todas las
              piezas. Dedico tiempo a mapear procesos, detectar fricciones y encontrar el punto
              donde la complejidad puede convertirse en claridad. El diseño, para mí, no es la
              respuesta; es la traducción correcta de una realidad.
            </p>
          </section>
        </div>
        <section className="about-details" aria-label="Experiencia, tools y formación">
          <div className="about-detail-row">
            <p className="editorial-kicker">Experiencia</p>
            <p>
              En 2013 comencé a colaborar como diseñadora gráfica en el estudio de Identidad &amp;
              Packaging, Salvartes{" "}
              <img className="about-inline-image" src={salvartesIcon} alt="Salvartes" />. Más
              adelante, en 2019, comencé mi andadura como docente en el Máster de Diseño gráfico y
              entornos digitales de La Basad, School of Bcn
              <a
                className="about-inline-link"
                href="https://www.labasad.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar La Basad"
              >
                <img className="about-inline-image" src={laBasadIcon} alt="La Basad" />
              </a>
              . Actualmente sigo como astronauta en Apolo, Propulsora de Marcas{" "}
              <a
                className="about-inline-link"
                href="https://universoapolo.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar universoapolo.com"
              >
                <img className="about-inline-image" src={apoloIcon} alt="Apolo" />
              </a>
              .
            </p>
          </div>
          <div className="about-detail-row">
            <p className="editorial-kicker">Tools</p>
            <div className="about-skills-grid">
              <div className="about-skill-card">
                <img className="about-skill-icon about-skill-image" src={framerIcon} alt="" />
                <span>
                  <strong>Framer</strong>
                  <small>Web design, templates</small>
                </span>
              </div>
              <div className="about-skill-card">
                <img className="about-skill-icon about-skill-image" src={claudeIcon} alt="" />
                <span>
                  <strong>Claude</strong>
                  <small>Ideation, prototyping</small>
                </span>
              </div>
              <div className="about-skill-card">
                <span className="about-skill-icon about-skill-icon-chatgpt">✳</span>
                <span>
                  <strong>ChatGPT</strong>
                  <small>AI, ideation</small>
                </span>
              </div>
              <div className="about-skill-card">
                <img className="about-skill-icon about-skill-image" src={figmaIcon} alt="" />
                <span>
                  <strong>Figma</strong>
                  <small>UI Design</small>
                </span>
              </div>
              <div className="about-skill-card">
                <img className="about-skill-icon about-skill-image" src={perplexityIcon} alt="" />
                <span>
                  <strong>Perplexity</strong>
                  <small>Search</small>
                </span>
              </div>
              <div className="about-skill-card">
                <img className="about-skill-icon about-skill-image" src={affinityIcon} alt="" />
                <span>
                  <strong>Affinity Designer</strong>
                  <small>Graphic design</small>
                </span>
              </div>
            </div>
          </div>
          <div className="about-detail-row">
            <p className="editorial-kicker">Formación</p>
            <p>
              Estudié G.F. Gráfica Publicitaria y posteriormente el grado EAS Diseño Gráfico en
              Escuela de Arte y Superior de Jerez{" "}
              <a
                className="about-inline-link"
                href="https://easdjerez.es/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar la Escuela de Arte y Superior de Jerez"
              >
                <img
                  className="about-inline-image"
                  src={escuelaArteIcon}
                  alt="Escuela de Arte y Superior de Jerez"
                />
              </a>
              . Después de algunos workshops relevantes, decidí formarme en el Instituto Tramontana
              ampliando mis conocimientos de producto digital con el WK Design Graduate
              <a
                className="about-inline-link"
                href="http://tramontana.net/designgraduate/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar Design Graduate"
              >
                <img className="about-inline-image" src={wkDesignIcon} alt="WK Design Graduate" />
              </a>{" "}
              y con algunos talleres de los chicos de Nocodehackers
              <a
                className="about-inline-link"
                href="https://www.nocodehackers.es/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar Nocodehackers"
              >
                <img className="about-inline-image" src={nocodehackersIcon} alt="Nocodehackers" />
              </a>
              .
            </p>
          </div>
          <div className="about-detail-row about-skills-row">
            <p className="editorial-kicker">Skills</p>
            <div className="about-skill-tags">
              {[
                "Product design",
                "UX research",
                "Interaction design",
                "Design systems",
                "Prototyping",
                "User flows",
                "Usability testing",
                "Visual design",
                "Information architecture",
                "Branding",
                "Creative direction",
                "Accessibility web",
                "Content design",
                "UI design",
                "Desarrollo con IA y agentes",
              ].map((skill) => (
                <span className="about-skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="about-closing" aria-labelledby="about-closing-title">
          <span className="about-closing-sticker" aria-hidden="true">
            <span className="about-laptop-open-emoji">💻</span>
            <span className="about-laptop-closed-emoji">💻</span>
          </span>
          <p className="editorial-kicker">Cuando cierro el portátil</p>
          <h2 id="about-closing-title">Sigo diseñando, aunque de otra manera.</h2>
          <p>
            Escribo sobre diseño, tecnología y creatividad, dibujo cuando necesito pensar con calma
            y siempre estoy desarrollando una nueva idea, una marca o un producto. Me interesa
            entender cómo las personas dan sentido al mundo y cómo el diseño puede ayudar a hacerlo
            un poco más claro.
          </p>
          <a
            className="about-hero-button about-hero-button-primary about-contact-button"
            href="mailto:srtaserifa@icloud.com"
          >
            ¿Hablamos? ↗
          </a>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
