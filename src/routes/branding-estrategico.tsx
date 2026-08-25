import { createFileRoute } from "@tanstack/react-router";
import affinityBadge from "@/assets/affinity-badge.png";
import karmaBrandingCover from "@/assets/karma-branding-cover.jpg";
import figmaBadge from "@/assets/figma-badge.png";
import karmaBrandSystem from "@/assets/karma-brand-system.jpg";
import aprendeHistoriaArtePhoto from "@/assets/aprende-historia-arte-photo.png";
import { ServiceRelatedArticles } from "@/components/ServiceRelatedArticles";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl } from "@/lib/seo";

const BASE_URL = "https://srtaserifa.es";
const TITLE = "Branding estratégico para marcas digitales — Srta Serifa";
const DESCRIPTION =
  "Servicio de branding estratégico para definir posicionamiento, propuesta de valor, arquitectura y principios antes de desarrollar la identidad visual.";
const OG_IMAGE = "/og-branding-estrategico.png";
const OG_IMAGE_ALT =
  "Mesa visual de branding estratégico con sistema de formas, color y aplicaciones de una marca";

const services = [
  [
    "01",
    "Entender el contexto",
    "Escuchar qué está cambiando, qué necesita el negocio y qué expectativas hay alrededor de la marca.",
  ],
  [
    "02",
    "Encontrar una posición",
    "Definir una idea clara y útil: para quién existe la marca, qué promete y desde dónde puede diferenciarse.",
  ],
  [
    "03",
    "Ordenar el sistema",
    "Aterrizar arquitectura, mensajes y principios que permitan tomar decisiones con menos ruido y más intención.",
  ],
  [
    "04",
    "Definir la dirección a activar",
    "Dejar criterios y prioridades para traducir después la estrategia a identidad, producto, comunicación y contenidos.",
  ],
] as const;

const process = [
  [
    "Escuchar",
    "Objetivos, audiencias, negocio y el momento real en el que está la marca.",
    "search",
  ],
  [
    "Enfocar",
    "La oportunidad, el posicionamiento y la propuesta que conviene hacer propia.",
    "grid",
  ],
  [
    "Dar forma",
    "La arquitectura, el relato y los principios que conectan estrategia e identidad.",
    "cursor",
  ],
  [
    "Acompañar",
    "Un marco para que el equipo pueda convertir la dirección en decisiones y aplicaciones.",
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
  [figmaBadge, "Figma", "Mapas y sistemas"],
  [affinityBadge, "Affinity Designer", "Dirección visual"],
] as const;

const faqs = [
  [
    "¿Qué incluye un proyecto de branding estratégico?",
    "El alcance se adapta a cada caso, pero suele reunir investigación, posicionamiento, arquitectura de marca, propuesta de valor, principios de comunicación y una dirección clara para desarrollar la identidad.",
  ],
  [
    "¿En qué se diferencia el branding estratégico de la imagen corporativa?",
    "El branding estratégico decide el lugar que quiere ocupar la marca, su propuesta de valor y los principios que deben guiarla. La imagen corporativa convierte esa dirección en logotipo, tipografía, color, sistema gráfico y aplicaciones.",
  ],
  [
    "¿Qué diferencia hay entre posicionamiento y branding estratégico?",
    "El posicionamiento es una decisión central: qué lugar quiere ocupar la marca y por qué debería ser elegida. El branding estratégico es el trabajo más amplio que investiga, define y conecta esa posición con la arquitectura, el relato y los criterios de activación.",
  ],
  [
    "¿Cuándo necesita una empresa trabajar su estrategia de marca?",
    "Cuando el negocio ha cambiado, la oferta se ha vuelto difícil de explicar, aparecen nuevas audiencias o el equipo necesita decidir y comunicar con más coherencia.",
  ],
] as const;

export const Route = createFileRoute("/branding-estrategico")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "branding estratégico, estrategia de marca, diseño estratégico de marca, propuesta de valor, arquitectura de marca",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/branding-estrategico" },
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
    links: [{ rel: "canonical", href: BASE_URL + "/branding-estrategico" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": BASE_URL + "/branding-estrategico#service",
          name: "Branding estratégico",
          description: DESCRIPTION,
          serviceType: "Estrategia de marca y branding",
          provider: { "@id": BASE_URL + "/sobre-mi#nuria-lopez" },
          areaServed: "ES",
          url: BASE_URL + "/branding-estrategico",
          image: absoluteAssetUrl(OG_IMAGE),
          keywords: [
            "branding estratégico",
            "estrategia de marca",
            "diseño estratégico de marca",
            "arquitectura de marca",
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
  component: StrategicBrandingPage,
});

function StrategicBrandingPage() {
  return (
    <div className="editorial-page service-page">
      <main>
        <header className="service-hero">
          <div className="service-topline">
            <nav className="book-breadcrumbs" aria-label="Migas de pan">
              <a href="/">Inicio</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Branding estratégico</span>
            </nav>
            <p className="editorial-section-label">Estrategia · posición · sistema</p>
          </div>
          <h1>
            Branding estratégico para que una marca sepa qué decir, cómo actuar y hacia dónde
            crecer.
          </h1>
          <p className="editorial-lede">
            Es un servicio para decidir qué lugar quiere ocupar la marca antes de diseñar cómo se
            verá. El diseño estratégico de marca convierte una intuición de negocio en
            posicionamiento, propuesta de valor y una dirección compartida.
          </p>
          <div className="about-hero-actions">
            <a
              className="about-hero-button about-hero-button-primary"
              href="mailto:srtaserifa@icloud.com"
            >
              Hablemos de tu marca ↗
            </a>
            <a className="about-hero-button" href="#proceso">
              Ver cómo trabajo ↓
            </a>
          </div>
          <div className="service-hero-workspace branding-hero-workspace">
            <img
              src={karmaBrandingCover}
              alt="Portada de identidad de Karma Financiero"
              width={1030}
              height={678}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </header>

        <section className="service-intro" aria-labelledby="service-intro-title">
          <div>
            <p className="editorial-kicker">Cuándo tiene sentido</p>
            <h2 id="service-intro-title">Una identidad no debería empezar por elegir colores.</h2>
          </div>
          <p>
            Cuando una marca no tiene un lugar claro desde el que hablar, cada pieza parece una
            decisión nueva. El branding estratégico ordena prioridades, mensajes y relaciones para
            que el diseño responda a una propuesta de valor y no solo a una tendencia. Si esa
            dirección ya existe y lo que falta es expresarla visualmente, el siguiente trabajo es la{" "}
            <a href="/diseno-imagen-corporativa">imagen corporativa</a>.
          </p>
        </section>

        <section className="service-section" aria-labelledby="service-services-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Qué puedo aportar</p>
            <h2 id="service-services-title">
              La estrategia convierte decisiones sueltas en una misma dirección.
            </h2>
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
              De una conversación compleja a un marco para tomar mejores decisiones.
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
          <h2 id="service-proof-title">
            La estrategia no acaba en una presentación: tiene que ayudar a trabajar.
          </h2>
          <p>
            En proyectos como <a href="/proyectos/karma-financiero">Karma Financiero</a>, la
            dirección estratégica sirve para alinear negocio, producto y comunicación en torno a una
            propuesta común. Cuando esa dirección necesita convertirse en experiencia, puede
            continuar en <a href="/consultoria-de-diseno">consultoría de diseño</a>,{" "}
            <a href="/diseno-imagen-corporativa">imagen corporativa</a> o{" "}
            <a href="/desarrollo-web-empresas">producto digital</a>.
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
              Marcas y productos que han necesitado encontrar su propia dirección.
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
            <h2 id="service-faq-title">Lo esencial para empezar.</h2>
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

        <section className="service-cta">
          <p className="editorial-kicker">El siguiente paso</p>
          <h2>Si la marca ha cambiado, quizá necesite una dirección nueva.</h2>
          <a
            className="about-hero-button about-hero-button-primary"
            href="mailto:srtaserifa@icloud.com"
          >
            Cuéntame qué está pasando ↗
          </a>
        </section>

        <ServiceRelatedArticles
          id="branding-related-articles"
          heading="Lecturas para definir una dirección de marca."
          slugs={[
            "posicionamiento-de-marca",
            "una-marca-digital-necesita-reglas-no-aplicaciones",
            "branding-y-producto-deberian-hablar-mas",
          ]}
        />
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
