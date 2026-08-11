import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
import codexIcon from "@/assets/codex-icon.png";
import perplexityIcon from "@/assets/perplexity-badge.png";
import affinityIcon from "@/assets/affinity-badge.png";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl, HOME_OG_IMAGE } from "@/lib/seo";

const TITLE = "Sobre mi — Brand Systems + Digital Products | Srtaserifa";
const DESCRIPTION =
  "Conoce a Núria López, Head of Design en Apolo y creadora de Srtaserifa. Su trabajo conecta estrategia, sistemas de marca, identidad y diseño de productos digitales.";

const FAQ_ITEMS = [
  {
    question: "¿Qué es Srtaserifa?",
    answer:
      "Srtaserifa es mi identidad profesional y el espacio donde reúno proyectos, procesos, ideas y reflexiones sobre diseño. No es un estudio ni una agencia: es una forma de documentar mi trabajo y mi manera de entender el diseño.",
  },
  {
    question: "¿A qué te dedicas actualmente?",
    answer:
      "Soy Head of Design en Apolo, Propulsora de Marcas, donde trabajo liderando diseño y conectando estrategia, identidad, creatividad y producto digital.",
  },
  {
    question: "¿Qué significa “Brand Systems + Digital Products”?",
    answer:
      "Es el territorio en el que se mueve buena parte de mi trabajo. Me interesa el punto donde marca y producto dejan de funcionar como disciplinas separadas: cómo una identidad se convierte en sistema y cómo ese sistema llega hasta una web, una interfaz o un producto digital.",
  },
  {
    question: "¿Qué tipo de proyectos haces?",
    answer:
      "Mi trabajo abarca estrategia, identidad visual, sistemas de marca, dirección de diseño, UX/UI, productos digitales y design systems. Algunos proyectos empiezan con una marca; otros, con un problema de producto. Lo interesante suele ocurrir cuando ambas cosas se encuentran.",
  },
  {
    question: "¿Trabajas con inteligencia artificial?",
    answer:
      "Sí. La IA forma parte de mi proceso como herramienta para investigar, explorar, prototipar y construir. Me interesa especialmente cómo está cambiando los procesos creativos, el diseño de producto y nuestra forma de relacionarnos con las interfaces.",
  },
  {
    question: "¿Puedo contactar contigo?",
    answer:
      "Claro. Srtaserifa no funciona como un estudio de servicios, pero siempre estoy abierta a conocer proyectos, personas, colaboraciones y nuevas oportunidades.",
  },
] as const;

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://srtaserifa.es/sobre-mi" },
      { property: "og:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
              Hola, soy Núria López. <em>Brand Systems + Digital Products</em>
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
              Soy Head of Design en Apolo y trabajo bajo el nombre de Srtaserifa. El diseño, para
              mí, siempre ha sido una forma de traducir: hacer que algo complejo encuentre su forma,
              su ritmo y su manera de llegar a otras personas.
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
                <img className="about-skill-icon about-skill-image" src={codexIcon} alt="" />
                <span>
                  <strong>Codex</strong>
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
              {["Estrategia", "Identidad", "Sistemas", "Producto", "Dirección", "AI"].map(
                (skill) => (
                  <span className="about-skill-tag" key={skill}>
                    {skill}
                  </span>
                ),
              )}
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
        <section className="about-faq" aria-labelledby="about-faq-title">
          <div className="about-faq-header">
            <p className="editorial-kicker">FAQ</p>
            <h2 id="about-faq-title">Ey, una cosa más.</h2>
            <p>Una pequeña selección de preguntas para quien haya llegado hasta aquí.</p>
          </div>
          <div className="about-faq-list">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              const answerId = `about-faq-answer-${index + 1}`;
              const questionId = `about-faq-question-${index + 1}`;

              return (
                <article
                  className={`about-faq-item ${isOpen ? "is-open" : ""}`}
                  key={item.question}
                >
                  <h3>
                    <button
                      className="about-faq-trigger"
                      type="button"
                      aria-controls={answerId}
                      aria-expanded={isOpen}
                      id={questionId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="about-faq-number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="about-faq-question">{item.question}</span>
                      <span className="about-faq-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    className="about-faq-answer"
                    id={answerId}
                    role="region"
                    aria-hidden={!isOpen}
                    aria-labelledby={questionId}
                  >
                    <div className="about-faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <a
            className="about-hero-button about-hero-button-primary about-faq-cta"
            href="mailto:srtaserifa@icloud.com"
          >
            Hablemos ↗
          </a>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
