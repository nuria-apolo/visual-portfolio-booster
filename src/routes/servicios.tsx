import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";

const BASE_URL = "https://srtaserifa.es";

const serviceAreas = [
  {
    label: "Estrategia",
    color: "#ffc400",
    title: "Encontrar una dirección antes de producir más.",
    description:
      "Posicionamiento, propuesta de valor y decisiones que conectan negocio, marca y producto.",
    href: "/branding-estrategico",
    linkLabel: "Ver branding estratégico",
  },
  {
    label: "Sistemas",
    color: "#f3f3f3",
    title: "Crear reglas para no empezar de cero.",
    description:
      "Sistemas de marca, diseño y producto que ayudan a los equipos a trabajar con coherencia.",
    href: "/diseno-imagen-corporativa",
    linkLabel: "Ver sistemas de marca",
  },
  {
    label: "IA",
    color: "#c8f36c",
    title: "Usar la tecnología cuando aporta criterio.",
    description:
      "Oportunidades, flujos y experiencias de inteligencia artificial pensadas para problemas reales.",
    href: "/consultoria-inteligencia-artificial",
    linkLabel: "Ver consultoría de IA",
  },
  {
    label: "Branding",
    color: "#ff7848",
    title: "Hacer reconocible lo que una marca quiere decir.",
    description:
      "Una dirección de marca que ordena el relato, la identidad y la experiencia completa.",
    href: "/branding-estrategico",
    linkLabel: "Ver branding estratégico",
  },
  {
    label: "Marca",
    color: "#49d8a1",
    title: "Construir una marca que pueda crecer.",
    description:
      "Identidad, arquitectura y lenguaje para que cada punto de contacto cuente la misma historia.",
    href: "/diseno-imagen-corporativa",
    linkLabel: "Ver diseño de identidad",
  },
  {
    label: "Dirección",
    color: "#f4b5dc",
    title: "Dar contexto y criterio a las decisiones.",
    description:
      "Dirección de diseño externa para ordenar prioridades, procesos y conversaciones de equipo.",
    href: "/consultoria-de-diseno",
    linkLabel: "Ver consultoría de diseño",
  },
  {
    label: "Identidad",
    color: "#c6adff",
    title: "Convertir una idea en un sistema reconocible.",
    description:
      "Identidades visuales y verbales preparadas para vivir en marcas, webs y productos digitales.",
    href: "/diseno-imagen-corporativa",
    linkLabel: "Ver diseño de identidad",
  },
  {
    label: "Producto",
    color: "#8dceff",
    title: "Diseñar cómo funciona una experiencia.",
    description:
      "Webs y productos digitales que convierten una propuesta compleja en recorridos claros.",
    href: "/desarrollo-web-empresas",
    linkLabel: "Ver desarrollo web",
  },
] as const;

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios de estrategia, branding y producto digital — Srta Serifa" },
      {
        name: "description",
        content:
          "Servicios de estrategia, sistemas, IA, branding, marca, dirección, identidad y producto digital para organizaciones que necesitan avanzar con claridad.",
      },
      {
        property: "og:title",
        content: "Servicios de estrategia, branding y producto digital — Srta Serifa",
      },
      {
        property: "og:description",
        content:
          "Estrategia, sistemas, IA, branding, marca, dirección, identidad y producto digital.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/servicios` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/servicios` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Servicios de Srta Serifa",
          description:
            "Estrategia, sistemas, IA, branding, marca, dirección, identidad y producto digital.",
          url: `${BASE_URL}/servicios`,
          about: serviceAreas.map(({ label, href }) => ({
            "@type": "Service",
            name: label,
            url: `${BASE_URL}${href}`,
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="editorial-page services-index-page">
      <main>
        <header className="services-index-hero">
          <div className="service-topline">
            <nav className="book-breadcrumbs" aria-label="Migas de pan">
              <a href="/">Inicio</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Servicios</span>
            </nav>
            <p className="editorial-section-label">Servicios · Srta Serifa</p>
          </div>
          <h1>Una dirección clara para marcas, equipos y productos que están creciendo.</h1>
          <p className="editorial-lede">
            Trabajo entre estrategia, identidad, tecnología y producto digital para convertir lo
            complejo en algo que se pueda entender, diseñar y sostener.
          </p>
        </header>

        <section className="services-index-grid" aria-labelledby="services-index-title">
          <div className="services-index-heading">
            <p className="editorial-kicker">Áreas de trabajo</p>
            <h2 id="services-index-title">
              Ocho formas de entrar en el mismo problema: avanzar con más criterio.
            </h2>
          </div>
          <div className="services-area-grid">
            {serviceAreas.map((service) => (
              <a className="services-area-card" href={service.href} key={service.label}>
                <span className="services-area-pill" style={{ backgroundColor: service.color }}>
                  {service.label}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="services-area-link">{service.linkLabel} ↗</span>
              </a>
            ))}
          </div>
          <p className="services-index-reading">
            Si antes de definir entregables necesitas ordenar la dirección, puedes empezar por cómo
            construir un{" "}
            <a href="/publicaciones/posicionamiento-de-marca">posicionamiento de marca</a>. Para
            traducir esa dirección a reglas compartidas, consulta las diferencias entre un{" "}
            <a href="/publicaciones/del-brand-system-al-design-system">
              brand system y un design system
            </a>
            .
          </p>
        </section>

        <section className="services-index-closing" aria-labelledby="services-index-closing-title">
          <p className="editorial-kicker">Una combinación, no un catálogo</p>
          <h2 id="services-index-closing-title">
            La mayoría de los proyectos necesitan varias de estas áreas a la vez.
          </h2>
          <p>
            Podemos empezar por una pregunta concreta —una marca difícil de explicar, un equipo que
            necesita dirección o un producto que debe ordenar su experiencia— y definir desde ahí el
            alcance que tenga sentido.
          </p>
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
