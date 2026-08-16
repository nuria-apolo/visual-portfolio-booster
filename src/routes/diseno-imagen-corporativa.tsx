import { createFileRoute } from "@tanstack/react-router";
import affinityBadge from "@/assets/affinity-badge.png";
import aprendeHistoriaArtePhoto from "@/assets/aprende-historia-arte-photo.png";
import extravagantCorporateIdentity from "@/assets/extravagant-corporate-identity.webp";
import figmaBadge from "@/assets/figma-badge.png";
import karmaBrandSystem from "@/assets/karma-brand-system.jpg";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl } from "@/lib/seo";

const BASE_URL = "https://srtaserifa.es";
const TITLE = "Diseño de imagen corporativa — Srta Serifa";
const DESCRIPTION =
  "Diseño de imagen corporativa para marcas que necesitan una identidad visual clara, coherente y preparada para crecer también en digital.";
const OG_IMAGE = "/og-diseno-imagen-corporativa.png";
const OG_IMAGE_ALT =
  "Sistema de identidad corporativa con piezas impresas, cuadrícula visual y aplicaciones digitales";

const services = [
  [
    "01",
    "Estrategia de marca",
    "Encontrar la idea, la posición y los principios que deben orientar cada decisión visual.",
  ],
  [
    "02",
    "Identidad visual",
    "Construir un lenguaje reconocible: logotipo, tipografía, color, composición y tono.",
  ],
  [
    "03",
    "Sistema de marca",
    "Convertir la identidad en reglas y recursos que un equipo pueda utilizar sin perder intención.",
  ],
  [
    "04",
    "Aplicación digital",
    "Llevar esos códigos a webs, interfaces y contenidos para que la marca se comporte con coherencia.",
  ],
] as const;

const process = [
  ["Entender", "Qué tiene que decir la marca, a quién y desde qué lugar quiere hacerlo.", "search"],
  [
    "Definir",
    "La arquitectura, los principios y el territorio visual que hacen reconocible la propuesta.",
    "grid",
  ],
  [
    "Diseñar",
    "Los elementos, reglas y aplicaciones que convierten la identidad en un sistema vivo.",
    "cursor",
  ],
  [
    "Acompañar",
    "Los recursos y criterios para que la marca pueda crecer sin empezar de cero cada vez.",
    "layers",
  ],
] as const;

type ProcessIconName = (typeof process)[number][2];

function ProcessIcon({ name }: { name: ProcessIconName }) {
  const paths = {
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 5 5" />
      </>
    ),
    grid: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </>
    ),
    cursor: (
      <>
        <path d="M6 3.5 18.5 13l-6.2 1.8-2.8 5.7L6 3.5Z" />
        <path d="m14.5 16.5 4 4" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
        <path d="m4 12 8 4.5 8-4.5" />
        <path d="m4 16.5 8 4.5 8-4.5" />
      </>
    ),
  };

  return (
    <svg className="service-process-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const tools = [
  [figmaBadge, "Figma", "Sistemas y prototipos"],
  [affinityBadge, "Affinity Designer", "Identidad y piezas gráficas"],
] as const;

const faqs = [
  [
    "¿Qué incluye un proyecto de imagen corporativa?",
    "El alcance depende de cada caso, pero puede incluir estrategia, arquitectura de marca, identidad visual, sistema gráfico, guías de uso y aplicaciones digitales o editoriales.",
  ],
  [
    "¿Cuál es la diferencia entre logotipo e identidad visual?",
    "El logotipo es una pieza de identificación. La identidad visual es el conjunto de reglas, elementos y comportamientos que hacen que una marca sea reconocible en muchos contextos.",
  ],
  [
    "¿Una identidad corporativa también sirve para una web o un producto digital?",
    "Sí. Una identidad bien planteada incorpora principios que pueden traducirse a interfaces, contenido, movimiento, accesibilidad y sistemas de diseño digitales.",
  ],
  [
    "¿Cómo empieza una colaboración?",
    "Con una conversación para entender el momento de la marca, sus objetivos y el tipo de sistema que necesita antes de definir un alcance concreto.",
  ],
] as const;

export const Route = createFileRoute("/diseno-imagen-corporativa")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "diseño de imagen corporativa, imagen corporativa, identidad corporativa, identidad visual, diseño corporativo, logotipo corporativo, sistema de marca",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/diseno-imagen-corporativa" },
      { property: "og:image", content: absoluteAssetUrl(OG_IMAGE) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: absoluteAssetUrl(OG_IMAGE) },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    ],
    links: [{ rel: "canonical", href: BASE_URL + "/diseno-imagen-corporativa" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": BASE_URL + "/diseno-imagen-corporativa#service",
          name: "Diseño de imagen corporativa",
          description: DESCRIPTION,
          serviceType: "Diseño de identidad corporativa",
          provider: { "@id": BASE_URL + "/sobre-mi#nuria-lopez" },
          areaServed: "ES",
          url: BASE_URL + "/diseno-imagen-corporativa",
          image: absoluteAssetUrl(OG_IMAGE),
          keywords: [
            "diseño de imagen corporativa",
            "imagen corporativa",
            "identidad corporativa",
            "identidad visual",
            "sistema de marca",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }),
      },
    ],
  }),
  component: CorporateIdentityPage,
});

function CorporateIdentityPage() {
  return (
    <div className="editorial-page service-page">
      <main>
        <header className="service-hero">
          <div className="service-topline">
            <nav className="book-breadcrumbs" aria-label="Migas de pan">
              <a href="/">Inicio</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Diseño de imagen corporativa</span>
            </nav>
            <p className="editorial-section-label">Estrategia · identidad · sistema</p>
          </div>
          <h1>Diseño de imagen corporativa para marcas que necesitan algo más que un logo.</h1>
          <p className="editorial-lede">
            Una identidad visual debería ayudar a una marca a reconocerse, explicarse y actuar con
            coherencia en cada lugar donde aparece: una presentación, una web, un producto o una
            conversación.
          </p>
          <div className="about-hero-actions">
            <a
              className="about-hero-button about-hero-button-primary"
              href="mailto:srtaserifa@icloud.com"
            >
              Cuéntame tu marca ↗
            </a>
            <a className="about-hero-button" href="#proceso">
              Ver cómo trabajo ↓
            </a>
          </div>
          <div className="service-hero-workspace">
            <img
              src={extravagantCorporateIdentity}
              alt="Mural de campaña de Extravagant con dos retratos y el logotipo de la marca"
              width={2370}
              height={1144}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </header>

        <section className="service-intro" aria-labelledby="service-intro-title">
          <div>
            <p className="editorial-kicker">Por qué esta página</p>
            <h2 id="service-intro-title">Una marca no se resuelve en una aplicación aislada.</h2>
          </div>
          <p>
            El reto no es solo que una marca se vea bien. Es que tenga un criterio para tomar
            decisiones cuando cambia el formato, crece el equipo o aparece un nuevo producto. Mi
            trabajo transforma una idea de marca en un sistema visual capaz de moverse sin perder
            sentido.
          </p>
        </section>

        <section className="service-section" aria-labelledby="service-services-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Qué puedo aportar</p>
            <h2 id="service-services-title">La identidad necesita poder vivir en el mundo real.</h2>
          </div>
          <div className="service-card-grid">
            {services.map(([number, title, text]) => (
              <article className="service-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="service-section service-process"
          id="proceso"
          aria-labelledby="service-process-title"
        >
          <div className="service-section-heading">
            <p className="editorial-kicker">El proceso</p>
            <h2 id="service-process-title">
              De una intuición de marca a un sistema que puede crecer.
            </h2>
          </div>
          <ol className="service-process-list">
            {process.map(([title, text, icon], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <ProcessIcon name={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="service-proof" aria-labelledby="service-proof-title">
          <p className="editorial-kicker">Experiencia relacionada</p>
          <h2 id="service-proof-title">La identidad también tiene que saber comportarse.</h2>
          <p>
            En proyectos como <a href="/proyectos/karma-financiero">Karma Financiero</a> y en el
            trabajo editorial de{" "}
            <a href="/publicaciones/del-brand-system-al-design-system">los sistemas de marca</a>, la
            identidad no termina en sus elementos gráficos: organiza una forma de comunicar, diseñar
            y construir experiencias reconocibles. Si todavía falta definir el lugar que la marca
            quiere ocupar, conviene empezar por el{" "}
            <a href="/publicaciones/posicionamiento-de-marca">posicionamiento de marca</a> o el{" "}
            <a href="/branding-estrategico">branding estratégico</a>.
          </p>
        </section>

        <section className="service-tools" aria-labelledby="service-tools-title">
          <p className="editorial-kicker" id="service-tools-title">
            Tools
          </p>
          <ul className="about-skills-grid">
            {tools.map(([icon, name, description]) => (
              <li className="about-skill-card" key={name}>
                <img
                  className="about-skill-icon about-skill-image"
                  src={icon}
                  alt=""
                  loading="lazy"
                />
                <span>
                  <strong>{name}</strong>
                  <small>{description}</small>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="service-projects" aria-labelledby="service-projects-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Proyectos relacionados</p>
            <h2 id="service-projects-title">
              Identidades que también han tenido que encontrar su forma.
            </h2>
          </div>
          <div className="service-projects-grid">
            <a className="service-project-card" href="/proyectos/karma-financiero">
              <div className="service-project-image">
                <img
                  src={karmaBrandSystem}
                  alt="Sistema de identidad visual de Karma Financiero"
                  loading="lazy"
                />
              </div>
              <div className="service-project-copy">
                <p className="editorial-kicker">Brand system · Digital product</p>
                <h3>Karma Financiero</h3>
                <span>Ver proyecto ↗</span>
              </div>
            </a>
            <a className="service-project-card" href="/proyectos/aprende-historia-del-arte">
              <div className="service-project-image">
                <img
                  src={aprendeHistoriaArtePhoto}
                  alt="Aprende Historia del Arte mostrado en una tablet"
                  loading="lazy"
                />
              </div>
              <div className="service-project-copy">
                <p className="editorial-kicker">Editorial · Education · Digital product</p>
                <h3>Aprende Historia del Arte</h3>
                <span>Ver proyecto ↗</span>
              </div>
            </a>
          </div>
        </section>

        <section className="service-faq" aria-labelledby="service-faq-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Preguntas frecuentes</p>
            <h2 id="service-faq-title">Antes de empezar.</h2>
          </div>
          <div className="service-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  <span>{question}</span>
                  <span className="unified-faq-icon" aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="service-cta" aria-labelledby="service-cta-title">
          <p className="editorial-kicker">Siguiente paso</p>
          <h2 id="service-cta-title">¿Tu marca necesita un sistema para seguir creciendo?</h2>
          <a
            className="about-hero-button about-hero-button-primary"
            href="mailto:srtaserifa@icloud.com"
          >
            Hablemos de la marca ↗
          </a>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
