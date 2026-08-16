import { createFileRoute } from "@tanstack/react-router";
import affinityBadge from "@/assets/affinity-badge.png";
import designConsultingHero from "@/assets/consultoria-diseno-equipo-apolo.webp";
import figmaBadge from "@/assets/figma-badge.png";
import framerBadge from "@/assets/framer-badge.png";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl } from "@/lib/seo";

const BASE_URL = "https://srtaserifa.es";
const PATH = "/consultoria-de-diseno";
const TITLE = "Consultoría de diseño para equipos y productos digitales — Srta Serifa";
const DESCRIPTION =
  "Consultoría de diseño para equipos y empresas que necesitan ordenar prioridades, mejorar procesos y convertir estrategia en productos digitales claros y coherentes.";
const IMAGE_ALT =
  "Profesionales trabajando frente a un mural de referencias y piezas de identidad visual en un estudio de diseño";

const FAQS = [
  [
    "¿Qué incluye una consultoría de diseño?",
    "Depende del punto de partida, pero suele combinar una lectura del contexto, una auditoría de producto o de procesos, priorización de decisiones, recomendaciones accionables y una hoja de ruta para que el equipo pueda avanzar con criterio compartido.",
  ],
  [
    "¿En qué se diferencia de incorporar a una persona in-house?",
    "Una dirección externa aporta perspectiva, foco en un objetivo concreto y experiencia acumulada en distintos contextos. Puede acompañar a un equipo interno sin sustituirlo: ayuda a ordenar el trabajo, desbloquear decisiones y dejar herramientas que sigan siendo útiles después.",
  ],
  [
    "¿Para qué equipos tiene sentido?",
    "Para equipos de producto, marketing o marca que están creciendo, tienen demasiadas decisiones abiertas o necesitan conectar la estrategia con lo que se diseña y construye cada día. También funciona como apoyo puntual antes de una etapa de cambio o lanzamiento.",
  ],
  [
    "¿Cuál es el coste de una consultoría de diseño?",
    "El alcance se define según el reto, el número de personas implicadas y el acompañamiento necesario. Una primera conversación permite acotar el problema y proponer una forma de trabajo y presupuesto proporcionados al momento del equipo.",
  ],
] as const;

const TOOLS = [
  [figmaBadge, "Figma", "Sistemas y prototipos"],
  [framerBadge, "Framer", "Exploración y validación"],
  [affinityBadge, "Affinity Designer", "Identidad y piezas"],
] as const;

export const Route = createFileRoute("/consultoria-de-diseno")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "consultoría de diseño, consultor de diseño, diseñador creativo, director de diseño, dirección de diseño externa",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + PATH },
      { property: "og:site_name", content: "Srta Serifa" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: absoluteAssetUrl(designConsultingHero) },
      { property: "og:image:alt", content: IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: absoluteAssetUrl(designConsultingHero) },
      { name: "twitter:image:alt", content: IMAGE_ALT },
      { name: "twitter:url", content: BASE_URL + PATH },
    ],
    links: [{ rel: "canonical", href: BASE_URL + PATH }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": BASE_URL + PATH + "#service",
          name: "Consultoría de diseño",
          description: DESCRIPTION,
          serviceType:
            "Consultoría de diseño, dirección de diseño y estrategia de producto digital",
          provider: { "@id": BASE_URL + "/sobre-mi#nuria-lopez" },
          areaServed: "España",
          url: BASE_URL + PATH,
          image: absoluteAssetUrl(designConsultingHero),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Consultoría de diseño",
              item: BASE_URL + PATH,
            },
          ],
        }),
      },
    ],
  }),
  component: DesignConsultingLanding,
});

function DesignConsultingLanding() {
  return (
    <div className="editorial-page service-page design-consulting-landing">
      <main>
        <header className="service-hero">
          <div className="service-topline">
            <nav className="book-breadcrumbs" aria-label="Migas de pan">
              <a href="/">Inicio</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Consultoría de diseño</span>
            </nav>
            <p className="editorial-section-label">
              Dirección de diseño · estrategia · producto digital
            </p>
          </div>

          <h1>Consultoría de diseño para liderar equipos y dar dirección a productos digitales.</h1>
          <p className="editorial-lede">
            Una mirada externa para desbloquear decisiones, traducir los objetivos de negocio al
            trabajo de diseño y ayudar a tu equipo a construir con un criterio compartido.
          </p>

          <div className="about-hero-actions">
            <a
              className="about-hero-button about-hero-button-primary"
              href="mailto:srtaserifa@icloud.com"
            >
              Cuéntame qué está pasando ↗
            </a>
            <a className="about-hero-button" href="#enfoque">
              Ver el enfoque ↓
            </a>
          </div>

          <div className="service-hero-workspace">
            <img
              src={designConsultingHero}
              alt={IMAGE_ALT}
              width={1800}
              height={1200}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </header>

        <section
          className="service-intro"
          id="enfoque"
          aria-labelledby="design-consulting-intro-title"
        >
          <div>
            <p className="editorial-kicker">Una dirección que acompaña</p>
            <h2 id="design-consulting-intro-title">
              No siempre hace falta contratar más diseño: a veces hace falta ordenar cómo se decide.
            </h2>
          </div>
          <p>
            Cuando los equipos crecen, el diseño se reparte entre más personas, entregas y
            conversaciones. La consultoría crea espacio para entender qué está bloqueando el
            trabajo, conectar las decisiones con la estrategia y convertir la complejidad en una
            forma de avanzar más clara.
          </p>
        </section>

        <section className="service-tools" aria-labelledby="design-consulting-tools-title">
          <p className="editorial-kicker" id="design-consulting-tools-title">
            Tools
          </p>
          <ul className="about-skills-grid">
            {TOOLS.map(([icon, name, description]) => (
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

        <section className="service-section" aria-labelledby="design-consulting-offer-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Cómo trabajo</p>
            <h2 id="design-consulting-offer-title">
              De lo que hoy se dispersa a una dirección que el equipo puede sostener.
            </h2>
          </div>
          <div className="service-card-grid">
            <article className="service-card">
              <span>01</span>
              <h3>Entender</h3>
              <p>
                Leer el contexto, las prioridades y las fricciones que están alejando al equipo de
                lo que necesita conseguir.
              </p>
            </article>
            <article className="service-card">
              <span>02</span>
              <h3>Ordenar</h3>
              <p>
                Convertir objetivos abiertos en decisiones, recorridos y prioridades que tengan
                sentido para negocio, marca y producto.
              </p>
            </article>
            <article className="service-card">
              <span>03</span>
              <h3>Dar criterio</h3>
              <p>
                Definir principios, sistemas y una forma de revisar el trabajo para que diseñar no
                dependa de empezar de cero.
              </p>
            </article>
            <article className="service-card">
              <span>04</span>
              <h3>Acompañar</h3>
              <p>
                Trabajar junto al equipo para contrastar, ajustar y dejar una dirección útil también
                cuando la consultoría termina.
              </p>
            </article>
          </div>
        </section>

        <section className="service-proof" aria-labelledby="design-consulting-proof-title">
          <p className="editorial-kicker">Experiencia relacionada</p>
          <h2 id="design-consulting-proof-title">
            Dirigir diseño también es construir el contexto para que las decisiones ocurran.
          </h2>
          <p>
            Como Head of Design en{" "}
            <a href="https://universoapolo.com" target="_blank" rel="noreferrer">
              Apolo, Propulsora de Marcas ↗
            </a>
            , conecto estrategia, identidad, experiencia y tecnología para que los equipos puedan
            avanzar con una misma dirección. Esa mirada también está presente en proyectos como{" "}
            <a href="/proyectos/karma-financiero">Karma Financiero</a> y{" "}
            <a href="/proyectos/aprende-historia-del-arte">Aprende Historia del Arte</a>. Si el reto
            parte de la marca o del producto, también puede continuar en{" "}
            <a href="/branding-estrategico">branding estratégico</a> o{" "}
            <a href="/desarrollo-web-empresas">desarrollo web</a>.
          </p>
        </section>

        <section className="service-faq" aria-labelledby="design-consulting-faq-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Preguntas frecuentes</p>
            <h2 id="design-consulting-faq-title">Lo esencial antes de empezar.</h2>
          </div>
          <div className="service-faq-list">
            {FAQS.map(([question, answer]) => (
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

        <section className="service-cta" aria-labelledby="design-consulting-cta-title">
          <p className="editorial-kicker">El siguiente paso</p>
          <h2 id="design-consulting-cta-title">
            Si tu equipo necesita una dirección más clara, empecemos por entender qué merece
            cambiar.
          </h2>
          <a
            className="about-hero-button about-hero-button-primary"
            href="mailto:srtaserifa@icloud.com"
          >
            Hablemos de vuestro contexto ↗
          </a>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
