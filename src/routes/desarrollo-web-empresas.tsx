import { createFileRoute } from "@tanstack/react-router";
import affinityBadge from "@/assets/affinity-badge.png";
import aprendeHistoriaArtePhoto from "@/assets/aprende-historia-arte-photo.png";
import claudeBadge from "@/assets/claude-badge.png";
import codexIcon from "@/assets/codex-icon.png";
import editorialWorkspace from "@/assets/desarrollo-web-empresas-editorial-workspace.png";
import figmaBadge from "@/assets/figma-badge.png";
import framerBadge from "@/assets/framer-badge.png";
import karmaApp from "@/assets/karma-app.png";
import perplexityBadge from "@/assets/perplexity-badge.png";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl } from "@/lib/seo";

const TITLE = "Desarrollo web para empresas — Srta Serifa";
const DESCRIPTION =
  "Diseño y desarrollo de webs para empresas que necesitan convertir su estrategia, identidad y propuesta de valor en una experiencia digital clara.";
const BASE_URL = "https://srtaserifa.es";
const OG_IMAGE = "/og-desarrollo-web-empresas.png";
const OG_IMAGE_ALT =
  "Interfaz conceptual de una herramienta de diseño web con lienzo, capas y paneles de propiedades";

const services = [
  [
    "01",
    "Dirección digital",
    "Aterrizar objetivos, públicos y prioridades antes de abrir Figma o escribir código.",
  ],
  [
    "02",
    "Identidad y sistema",
    "Convertir una marca en reglas visuales que funcionen también en una interfaz, una web y un producto.",
  ],
  [
    "03",
    "Diseño de producto",
    "Ordenar contenidos, recorridos y decisiones para que la experiencia sea fácil de entender y usar.",
  ],
  [
    "04",
    "Construcción web",
    "Llevar el diseño a una web rápida, responsive y preparada para crecer con el proyecto.",
  ],
] as const;

const process = [
  ["Entender", "Qué necesitas conseguir, para quién y qué no está funcionando ahora.", "search"],
  ["Ordenar", "La propuesta, el contenido y la arquitectura que sostienen la experiencia.", "grid"],
  [
    "Diseñar",
    "La identidad y las interfaces con suficiente detalle para tomar decisiones reales.",
    "cursor",
  ],
  [
    "Construir",
    "Una web sólida, accesible y mantenible, con una salida clara a producción.",
    "code",
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
    code: (
      <>
        <path d="m9 7-5 5 5 5" />
        <path d="m15 7 5 5-5 5" />
        <path d="m13 4-2 16" />
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
  [framerBadge, "Framer", "Diseño web y prototipado"],
  [claudeBadge, "Claude", "Ideación y exploración"],
  [codexIcon, "Codex", "Código y automatización"],
  [figmaBadge, "Figma", "Diseño de interfaces"],
  [perplexityBadge, "Perplexity", "Investigación"],
  [affinityBadge, "Affinity Designer", "Diseño gráfico"],
] as const;

const faqs = [
  [
    "¿Qué tipo de webs puedes ayudar a crear?",
    "Trabajo en webs corporativas, portfolios, proyectos editoriales y productos digitales que necesitan una dirección de diseño clara y una ejecución cuidada.",
  ],
  [
    "¿Haces solo el diseño o también el desarrollo?",
    "Puedo acompañar el proyecto desde la estrategia y el diseño hasta la construcción front-end. El alcance se define según el punto de partida, el equipo y las necesidades del proyecto.",
  ],
  [
    "¿Trabajas con empresas y equipos internos?",
    "Sí. Puedo incorporarme como apoyo de dirección de diseño, colaborar con un equipo existente o llevar una parte concreta del proyecto.",
  ],
  [
    "¿Cómo empieza una colaboración?",
    "Con una conversación inicial para entender el contexto, revisar el objetivo y decidir qué alcance tiene sentido antes de preparar una propuesta.",
  ],
] as const;

export const Route = createFileRoute("/desarrollo-web-empresas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/desarrollo-web-empresas" },
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
    links: [{ rel: "canonical", href: BASE_URL + "/desarrollo-web-empresas" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": BASE_URL + "/desarrollo-web-empresas#service",
          name: "Diseño y desarrollo web para empresas",
          description: DESCRIPTION,
          serviceType: "Diseño y desarrollo web",
          provider: { "@id": BASE_URL + "/sobre-mi#nuria-lopez" },
          areaServed: "ES",
          url: BASE_URL + "/desarrollo-web-empresas",
          keywords: [
            "desarrollo web para empresas",
            "diseño y desarrollo web",
            "diseño web estratégico",
            "desarrollo web a medida",
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
            acceptedAnswer: {
              "@type": "Answer",
              text: answer,
            },
          })),
        }),
      },
    ],
  }),
  component: DesarrolloWebEmpresasPage,
});

function DesarrolloWebEmpresasPage() {
  return (
    <div className="editorial-page service-page">
      <main>
        <header className="service-hero">
          <div className="service-topline">
            <nav className="book-breadcrumbs" aria-label="Migas de pan">
              <a href="/">Inicio</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Desarrollo web para empresas</span>
            </nav>
            <p className="editorial-section-label">Diseño · estrategia · tecnología</p>
          </div>
          <h1>Desarrollo web para empresas: diseño estratégico y código a medida.</h1>
          <p className="editorial-lede">
            Una web no debería ser solo una colección de pantallas bonitas. Debería ayudar a
            explicar qué haces, generar confianza y hacer más sencillo dar el siguiente paso.
          </p>
          <div className="about-hero-actions">
            <a
              className="about-hero-button about-hero-button-primary"
              href="mailto:srtaserifa@icloud.com"
            >
              Cuéntame tu proyecto ↗
            </a>
            <a className="about-hero-button" href="#proceso">
              Ver cómo trabajo ↓
            </a>
          </div>
          <div className="service-hero-workspace">
            <img
              src={editorialWorkspace}
              alt="Interfaz conceptual de una herramienta de diseño web con lienzo, capas y paneles de propiedades"
              width={1672}
              height={941}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </header>

        <section className="service-intro" aria-labelledby="service-intro-title">
          <div>
            <p className="editorial-kicker">Por qué esta página</p>
            <h2 id="service-intro-title">La parte difícil no suele ser publicar una web.</h2>
          </div>
          <p>
            Es tomar decisiones: qué debe entender una persona al llegar, qué contenido merece
            ocupar espacio, cómo se expresa una marca en digital y qué tiene que pasar después. Mi
            trabajo une estrategia, identidad, producto y construcción para resolver esas decisiones
            con criterio.
          </p>
        </section>

        <section className="service-section" aria-labelledby="service-services-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Qué puedo aportar</p>
            <h2 id="service-services-title">
              Un proyecto digital necesita algo más que una entrega.
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
              De la primera pregunta a una web que puede salir al mundo.
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
          <h2 id="service-proof-title">Diseñar también es construir el contexto.</h2>
          <p>
            En proyectos como <a href="/proyectos/karma-financiero">Karma Financiero</a> y{" "}
            <a href="/proyectos/aprende-historia-del-arte">Aprende Historia del Arte</a>, el diseño
            no termina en la interfaz: incluye la propuesta, la arquitectura, el contenido y la
            forma en que el producto se presenta a las personas.
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
              Ideas que también han tenido que convertirse en producto.
            </h2>
          </div>
          <div className="service-projects-grid">
            <a className="service-project-card" href="/proyectos/karma-financiero">
              <div className="service-project-image">
                <img src={karmaApp} alt="Pantalla de acceso de Karma Financiero" loading="lazy" />
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
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="service-cta" aria-labelledby="service-cta-title">
          <p className="editorial-kicker">Siguiente paso</p>
          <h2 id="service-cta-title">¿Tienes una web que debería explicar mejor lo que haces?</h2>
          <a
            className="about-hero-button about-hero-button-primary"
            href="mailto:srtaserifa@icloud.com"
          >
            Hablemos del proyecto ↗
          </a>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
