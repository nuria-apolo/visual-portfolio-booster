import { createFileRoute } from "@tanstack/react-router";
import illescasBusinessHero from "@/assets/illescas-business-hero.png";
import boutiqueDelMar from "@/assets/boutique-del-mar.png";
import autoescuelaAlmagro from "@/assets/autoescuela-almagro.png";
import memoriaTravesiaInnovacion from "@/assets/memoria-travesia-innovacion-2023.png";
import campoDeGibraltar from "@/assets/campo-de-gibraltar.png";
import webAutopromocion from "@/assets/web-autopromocion.png";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl } from "@/lib/seo";

const BASE_URL = "https://srtaserifa.es";
const PATH = "/diseno-web-branding-illescas";
const TITLE = "Diseño web y branding en Illescas — Srta Serifa";
const DESCRIPTION =
  "Diseño web, branding e identidad para empresas de Illescas y La Sagra que necesitan explicar mejor lo que hacen y crecer con coherencia.";
const IMAGE_ALT =
  "Ilustración editorial de Illescas con la iglesia, el casco histórico y conexiones que evocan crecimiento empresarial y digital";
const APOLO_PROJECTS = [
  {
    image: boutiqueDelMar,
    title: "La boutique del mar",
    href: "https://www.universoapolo.com/branding/antonio-martin",
  },
  {
    image: autoescuelaAlmagro,
    title: "Autoescuela Almagro",
    href: "https://www.universoapolo.com/branding/autoescuela-almagro",
  },
  {
    video: "https://framerusercontent.com/assets/KhhvunTu68tjLG0qZDTWsdVWy0.mp4",
    title: "Apadis",
    href: "https://www.universoapolo.com/branding/apadis",
  },
  {
    image: memoriaTravesiaInnovacion,
    title: "Memoria Travesía de la Innovación 2023",
    href: "https://www.universoapolo.com/memoria-travesia-de-la-innovacion-2023/",
  },
  {
    video: "https://framerusercontent.com/assets/l4szABzPptxDDVqdQYsRWSHAbA.mp4",
    title: "Weuta, el e-commerce de Ceuta",
    href: "https://www.universoapolo.com/branding/weuta",
  },
  {
    image: campoDeGibraltar,
    title: "Marca Campo de Gibraltar",
    href: "https://www.universoapolo.com/branding/campo-de-gibraltar",
  },
  {
    image: webAutopromocion,
    title: "Web Autopromoción",
    href: "https://universoapolo.com",
  },
] as const;
const FAQS = [
  [
    "¿Trabajas solo con empresas de Illescas?",
    "No. Illescas y La Sagra son el punto de partida, pero el trabajo puede desarrollarse con equipos de cualquier lugar. La cercanía ayuda a entender el contexto; el proceso está preparado para combinar sesiones presenciales y trabajo remoto.",
  ],
  [
    "¿Qué puede incluir un proyecto de diseño web y branding?",
    "Depende de lo que la empresa necesite ordenar. Puede abarcar estrategia y mensajes, identidad visual, arquitectura de contenidos, diseño de interfaz, desarrollo web y un sistema de componentes para que el equipo pueda mantenerlo con coherencia.",
  ],
  [
    "¿Cuánto tarda una web corporativa?",
    "Una web corporativa suele necesitar entre seis y doce semanas, según el punto de partida, los contenidos y el alcance. Antes de empezar definimos fases, responsables y entregables para que el calendario sea realista.",
  ],
  [
    "¿Podemos empezar si ya tenemos logo o una web existente?",
    "Sí. El primer paso es revisar qué funciona, qué ya no representa bien a la empresa y qué conviene conservar. No hace falta rehacerlo todo: a veces el cambio más útil está en ordenar la propuesta, los contenidos y la experiencia.",
  ],
] as const;

export const Route = createFileRoute("/diseno-web-branding-illescas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "diseño web Illescas, branding Illescas, identidad corporativa Illescas, diseño web La Sagra" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + PATH },
      { property: "og:site_name", content: "Srta Serifa" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: absoluteAssetUrl(illescasBusinessHero) },
      { property: "og:image:width", content: "1736" },
      { property: "og:image:height", content: "900" },
      { property: "og:image:alt", content: IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: absoluteAssetUrl(illescasBusinessHero) },
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
          name: "Diseño web y branding para empresas en Illescas",
          description: DESCRIPTION,
          serviceType: "Diseño web, branding e identidad visual",
          provider: { "@id": BASE_URL + "/sobre-mi#nuria-lopez" },
          areaServed: ["Illescas", "La Sagra"],
          url: BASE_URL + PATH,
          image: absoluteAssetUrl(illescasBusinessHero),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Diseño web y branding en Illescas", item: BASE_URL + PATH },
          ],
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
    ],
  }),
  component: IllescasLanding,
});

function IllescasLanding() {
  return (
    <div className="editorial-page service-page illescas-landing">
      <main>
        <header className="service-hero">
          <div className="service-topline">
            <nav className="book-breadcrumbs" aria-label="Migas de pan">
              <a href="/">Inicio</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Illescas</span>
            </nav>
            <p className="editorial-section-label">Diseño web · branding · producto digital</p>
          </div>

          <h1>Diseño web y branding para empresas que crecen en Illescas.</h1>
          <p className="editorial-lede">
            Sistemas de marca y productos digitales para compañías de Illescas y La Sagra que necesitan explicar mejor lo que hacen, diferenciarse y convertir oportunidades en relaciones duraderas.
          </p>

          <div className="about-hero-actions">
            <a className="about-hero-button about-hero-button-primary" href="mailto:srtaserifa@icloud.com">
              Hablemos de tu proyecto ↗
            </a>
            <a className="about-hero-button" href="#enfoque">
              Ver el enfoque ↓
            </a>
          </div>

          <div className="service-hero-workspace illescas-hero-workspace">
            <img
              src={illescasBusinessHero}
              alt={IMAGE_ALT}
              width={1736}
              height={900}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </header>

        <section className="service-intro" id="enfoque" aria-labelledby="illescas-intro-title">
          <div>
            <p className="editorial-kicker">Una oportunidad local</p>
            <h2 id="illescas-intro-title">Crecer no debería hacer que una empresa se vuelva más difícil de entender.</h2>
          </div>
          <p>
            Cuando una compañía incorpora servicios, equipos o nuevos mercados, su web y su marca tienen que seguir siendo claras. El trabajo no consiste en añadir más pantallas: consiste en ordenar la propuesta, la experiencia y los códigos con los que la empresa se presenta.
          </p>
        </section>

        <section className="service-section" aria-labelledby="illescas-offer-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Cómo puedo ayudar</p>
            <h2 id="illescas-offer-title">Una presencia digital a la altura de lo que ya estáis construyendo.</h2>
          </div>
          <div className="service-card-grid">
            <article className="service-card"><span>01</span><h3>Claridad de marca</h3><p>Una propuesta de valor, mensajes y una identidad que permitan explicar la empresa con precisión.</p></article>
            <article className="service-card"><span>02</span><h3>Web corporativa</h3><p>Una web útil para ventas, talento y negocio: rápida, accesible y preparada para crecer.</p></article>
            <article className="service-card"><span>03</span><h3>Sistemas digitales</h3><p>Reglas visuales y componentes que ayudan al equipo a comunicar sin empezar de cero cada vez.</p></article>
            <article className="service-card"><span>04</span><h3>Dirección de producto</h3><p>Recorridos, interfaces y prioridades para convertir una idea compleja en una experiencia clara.</p></article>
          </div>
        </section>

        <section className="role-projects illescas-apolo-projects" aria-labelledby="illescas-apolo-title">
          <div className="role-projects-heading">
            <p className="editorial-kicker">También en Apolo</p>
            <h2 id="illescas-apolo-title">Una forma de trabajar que combina marca, producto y tecnología.</h2>
            <p>
              Además de mis proyectos personales, soy Head of Design en Apolo, Propulsora de Marcas.
              Allí dirijo proyectos de identidad, estrategia y producto digital para organizaciones que
              necesitan crecer con una visión más amplia. Si necesitas mejorar la forma en que tu empresa
              se presenta al mundo, podemos trabajar juntos.
            </p>
          </div>
          <div className="role-projects-grid">
            {APOLO_PROJECTS.map(({ image, video, title, href }) => (
              <a
                key={title}
                className="role-project-card"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver ${title} en universoapolo.com`}
              >
                {video ? (
                  <video
                    src={video}
                    aria-label={title}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={image} alt={title} loading="lazy" />
                )}
                <span className="role-project-overlay-title" aria-hidden="true">
                  {title}
                </span>
              </a>
            ))}
          </div>
          <a className="role-projects-more" href="/rol">
            Conocer mi rol en Apolo ↗
          </a>
        </section>

        <section className="service-faq" aria-labelledby="illescas-faq-title">
          <div className="service-section-heading">
            <p className="editorial-kicker">Preguntas frecuentes</p>
            <h2 id="illescas-faq-title">Lo esencial antes de empezar.</h2>
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

        <section className="service-cta" aria-labelledby="illescas-cta-title">
          <p className="editorial-kicker">El siguiente paso</p>
          <h2 id="illescas-cta-title">Si la empresa está cambiando, su forma de presentarse también puede hacerlo.</h2>
          <a className="about-hero-button about-hero-button-primary" href="mailto:srtaserifa@icloud.com">Cuéntame qué está pasando ↗</a>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
