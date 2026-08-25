import { createFileRoute } from "@tanstack/react-router";
import claudeBadge from "@/assets/claude-badge.png";
import codexIcon from "@/assets/codex-icon.png";
import aiConsultingHero from "@/assets/consultoria-inteligencia-artificial-editorial-collage.png";
import perplexityBadge from "@/assets/perplexity-badge.png";
import { ServiceRelatedArticles } from "@/components/ServiceRelatedArticles";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl } from "@/lib/seo";

const BASE_URL = "https://srtaserifa.es";
const PATH = "/consultoria-inteligencia-artificial";
const TITLE = "Consultoría de inteligencia artificial para empresas — Srta Serifa";
const DESCRIPTION =
  "Consultoría de inteligencia artificial para empresas que quieren convertir la IA en productos, procesos y experiencias digitales útiles, comprensibles y responsables.";
const IMAGE_ALT =
  "Collage editorial con una mano organizando interfaces, una red de datos y un boceto de producto digital";

const FAQS = [
  [
    "¿Qué es una consultoría de inteligencia artificial?",
    "Es un proceso para entender dónde puede aportar valor la IA en una empresa y convertir esa oportunidad en un plan realista. Combina objetivos de negocio, experiencia de las personas, datos, tecnología y una forma concreta de medir el resultado.",
  ],
  [
    "¿Por dónde conviene empezar?",
    "Por un caso de uso concreto: una decisión lenta, una tarea repetitiva, una experiencia poco clara o una oportunidad de producto. Antes de elegir una herramienta, revisamos el contexto, las personas implicadas y la información disponible.",
  ],
  [
    "¿La IA puede integrarse en un producto digital existente?",
    "Sí. Puede mejorar un recorrido, ayudar a interpretar información o automatizar una parte del trabajo. La clave es que la función tenga sentido dentro de la experiencia y que las personas entiendan qué hace, con qué límites y cómo mantener el control.",
  ],
  [
    "¿Qué entregables tiene una primera consultoría?",
    "Según el alcance, puede incluir un mapa de oportunidades, priorización de casos de uso, prototipos de experiencia, principios de diseño, requisitos de datos y tecnología, y una hoja de ruta para validar el siguiente paso.",
  ],
] as const;

const TOOLS = [
  [codexIcon, "Codex", "Código y automatización"],
  [claudeBadge, "Claude", "Ideación y exploración"],
  [perplexityBadge, "Perplexity", "Investigación"],
] as const;

export const Route = createFileRoute("/consultoria-inteligencia-artificial")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "consultoría inteligencia artificial, consultor inteligencia artificial, inteligencia artificial empresas",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + PATH },
      { property: "og:site_name", content: "Srta Serifa" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: absoluteAssetUrl(aiConsultingHero) },
      { property: "og:image:width", content: "1736" },
      { property: "og:image:height", content: "900" },
      { property: "og:image:alt", content: IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: absoluteAssetUrl(aiConsultingHero) },
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
          name: "Consultoría de inteligencia artificial",
          description: DESCRIPTION,
          serviceType:
            "Consultoría de inteligencia artificial, diseño de producto y estrategia digital",
          provider: { "@id": BASE_URL + "/sobre-mi#nuria-lopez" },
          areaServed: "España",
          url: BASE_URL + PATH,
          image: absoluteAssetUrl(aiConsultingHero),
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
              name: "Consultoría de inteligencia artificial",
              item: BASE_URL + PATH,
            },
          ],
        }),
      },
    ],
  }),
  component: AiConsultingLanding,
});

function AiConsultingLanding() {
  return (
    <div className="editorial-page service-page ai-consulting-landing">
      <main>
        <header className="service-hero">
          <div className="service-topline">
            <nav className="book-breadcrumbs" aria-label="Migas de pan">
              <a href="/">Inicio</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Consultoría de IA</span>
            </nav>
            <p className="editorial-section-label">IA · estrategia · producto digital</p>
          </div>

          <h1>Consultoría de inteligencia artificial para productos que siguen siendo humanos.</h1>
          <p className="editorial-lede">
            Convierto la IA en decisiones, recorridos y sistemas digitales que las personas pueden
            entender y usar. Sin añadir tecnología por añadirla: empezando por el problema, el
            contexto y el valor que merece ser construido.
          </p>

          <div className="about-hero-actions">
            <a
              className="about-hero-button about-hero-button-primary"
              href="mailto:srtaserifa@icloud.com"
            >
              Hablemos de tu caso ↗
            </a>
            <a className="about-hero-button" href="#enfoque">
              Ver el enfoque ↓
            </a>
          </div>

          <div className="service-hero-workspace ai-consulting-hero-workspace">
            <img
              src={aiConsultingHero}
              alt={IMAGE_ALT}
              width={1736}
              height={900}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </header>

        <section className="service-intro" id="enfoque" aria-labelledby="ai-consulting-intro-title">
          <div>
            <p className="editorial-kicker">Una IA que encaja</p>
            <h2 id="ai-consulting-intro-title">
              La inteligencia no está en añadir un modelo: está en saber dónde puede ayudar.
            </h2>
          </div>
          <p>
            La IA puede ahorrar tiempo, abrir nuevas formas de servicio o hacer más clara una
            decisión compleja. Pero necesita una dirección: qué problema resuelve, qué datos
            utiliza, qué control conserva el equipo y cómo se integra en la experiencia sin crear
            fricción. Esa dirección se puede conectar con la{" "}
            <a href="/consultoria-de-diseno">consultoría de diseño</a> y el{" "}
            <a href="/desarrollo-web-empresas">producto digital</a>.
          </p>
        </section>

        <section className="service-tools" aria-labelledby="ai-consulting-tools-title">
          <p className="editorial-kicker" id="ai-consulting-tools-title">
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

        <section className="service-section" aria-labelledby="ai-consulting-offer-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Cómo puedo ayudar</p>
            <h2 id="ai-consulting-offer-title">
              Del potencial tecnológico a una experiencia que funciona.
            </h2>
          </div>
          <div className="service-card-grid">
            <article className="service-card">
              <span>01</span>
              <h3>Entender</h3>
              <p>
                Detectar oportunidades reales, tensiones del negocio y necesidades de las personas
                antes de hablar de herramientas.
              </p>
            </article>
            <article className="service-card">
              <span>02</span>
              <h3>Priorizar</h3>
              <p>
                Elegir los casos de uso con más sentido según impacto, viabilidad, datos disponibles
                y esfuerzo del equipo.
              </p>
            </article>
            <article className="service-card">
              <span>03</span>
              <h3>Diseñar</h3>
              <p>
                Prototipar flujos, interfaces y reglas de interacción para que la IA se explique y
                se use con confianza.
              </p>
            </article>
            <article className="service-card">
              <span>04</span>
              <h3>Aterrizar</h3>
              <p>
                Definir una hoja de ruta clara para validar, implementar y mejorar la solución con
                criterio.
              </p>
            </article>
          </div>
        </section>

        <section className="service-proof" aria-labelledby="ai-consulting-proof-title">
          <p className="editorial-kicker">Experiencia relacionada</p>
          <h2 id="ai-consulting-proof-title">
            La IA necesita contexto antes de convertirse en producto.
          </h2>
          <p>
            El trabajo puede aterrizar en un{" "}
            <a href="/proyectos/karma-financiero">producto digital real</a>, continuar con{" "}
            <a href="/consultoria-de-diseno">dirección de diseño</a> o convertirse en una
            experiencia mediante el{" "}
            <a href="/desarrollo-web-empresas">desarrollo de producto digital</a>.
          </p>
        </section>

        <section className="service-faq" aria-labelledby="ai-consulting-faq-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Preguntas frecuentes</p>
            <h2 id="ai-consulting-faq-title">Lo esencial antes de empezar.</h2>
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

        <section className="service-cta" aria-labelledby="ai-consulting-cta-title">
          <p className="editorial-kicker">El siguiente paso</p>
          <h2 id="ai-consulting-cta-title">
            Si hay una oportunidad de IA, merece una pregunta mejor antes que una solución rápida.
          </h2>
          <a
            className="about-hero-button about-hero-button-primary"
            href="mailto:srtaserifa@icloud.com"
          >
            Cuéntame qué queréis resolver ↗
          </a>
        </section>

        <ServiceRelatedArticles
          id="ai-consulting-related-articles"
          heading="Lecturas para aplicar IA con contexto y criterio."
          slugs={["que-es-inteligencia-artificial", "que-cambia-la-ia-en-el-trabajo-de-diseno"]}
        />
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
