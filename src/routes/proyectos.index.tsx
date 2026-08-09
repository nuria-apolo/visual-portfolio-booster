import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import apoloIcon from "@/assets/apolo.svg";
import karmaIcon from "@/assets/karma.svg";
import srtaIcon from "@/assets/srta.svg";
import aprendeHistoriaArteIcon from "@/assets/aprende-historia-arte.png";
import aprendeHistoriaArteInterface from "@/assets/aprende-historia-arte-interface.png";
import karmaApp from "@/assets/karma-app.png";
import { projects } from "@/data/projects";
import { expertiseTags } from "@/data/expertise";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "Proyectos — Brand Systems + Digital Products | Srtaserifa";
const DESCRIPTION =
  "Proyectos personales de Núria López (Srtaserifa) sobre sistemas de marca, productos digitales, UX/UI, identidad, tecnología, investigación y experimentación.";

const personalProjectTags = [
  { kind: "pill", label: "Estrategia", color: "bg-[#ffc400]" },
  { kind: "icon", label: "Apolo", image: apoloIcon },
  { kind: "pill", label: "Sistemas", color: "bg-[#f3f3f3]" },
  { kind: "pill", label: "IA", color: "bg-[#c8f36c]" },
  { kind: "pill", label: "Branding", color: "bg-[#ff7848]" },
  { kind: "pill", label: "Marca", color: "bg-[#49d8a1]" },
  { kind: "pill", label: "Dirección", color: "bg-[#f4b5dc]" },
  { kind: "pill", label: "Identidad", color: "bg-[#c6adff]" },
  { kind: "icon", label: "Srta Serifa", image: srtaIcon },
  { kind: "icon", label: "Karma Financiero", image: karmaIcon },
  { kind: "pill", label: "Producto", color: "bg-[#8dceff]" },
  { kind: "icon", label: "Aprende Historia del Arte", image: aprendeHistoriaArteIcon },
] as const;

type PersonalProject = {
  num: string;
  title: string;
  category: string;
  copy: string[];
  state: string;
  href?: string;
  image: string;
  alt: string;
  isIcon?: boolean;
};

const blindWordsProject = projects.find((project) => project.title === "Blind Words");

const personalProjects: PersonalProject[] = [
  {
    num: "01",
    title: "Karma Financiero",
    category: "Brand system · Digital product · Fintech",
    copy: [
      "Una plataforma para gestionar dinero entre personas sin convertir cada conversación sobre gastos en una pequeña auditoría.",
      "Karma Financiero explora cómo diseñar mejores herramientas para parejas, familias, compañeros de piso o grupos que comparten gastos, decisiones y responsabilidades.",
      "El proyecto mezcla producto digital, investigación, estrategia, diseño de interfaz y construcción de marca.",
    ],
    state: "En construcción",
    href: "/proyectos/karma-financiero",
    image: karmaApp,
    alt: "Pantalla de acceso de Karma Financiero",
  },
  {
    num: "02",
    title: "Aprende Historia del Arte",
    category: "Digital product · Editorial · Education",
    copy: [
      "Una plataforma gratuita para aprender Historia del Arte de una forma más clara, cercana y fácil de explorar.",
      "El proyecto nace de una pregunta bastante sencilla: ¿cómo diseñar una experiencia digital que invite a aprender sin parecer un libro de texto trasladado a una pantalla?",
      "Diseño, contenido, tecnología, divulgación y experimentación editorial conviven dentro de una plataforma que sigue creciendo.",
    ],
    state: "Activo",
    href: "/proyectos/aprende-historia-del-arte",
    image: aprendeHistoriaArteInterface,
    alt: "Interfaz de Aprende Historia del Arte con una pregunta sobre arte y una respuesta clara",
  },
  blindWordsProject
    ? {
        num: "03",
        title: blindWordsProject.title,
        category: "Research · Identity · Accessibility",
        copy: [blindWordsProject.description],
        state: "Contenido pendiente de completar",
        href: "/proyectos/blind-words",
        image: blindWordsProject.image,
        alt: blindWordsProject.alt,
      }
    : {
        num: "03",
        title: "Blind Words",
        category: "Contenido pendiente de completar",
        copy: ["Descripción pendiente de completar."],
        state: "Contenido pendiente de completar",
        image: karmaIcon,
        alt: "",
        isIcon: !blindWordsProject,
      },
];

export const Route = createFileRoute("/proyectos/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://srtaserifa.es/proyectos" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/proyectos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://srtaserifa.es/proyectos#collection",
          name: TITLE,
          description: DESCRIPTION,
          url: "https://srtaserifa.es/proyectos",
          creator: { "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez" },
          abstract:
            "Núria López crea proyectos propios relacionados con brand systems, digital products, identidad, investigación y tecnología.",
          keywords: [
            "Brand Systems",
            "Digital Products",
            "Identidad",
            "Investigación",
            "Tecnología",
          ],
          about: {
            "@type": "Person",
            "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez",
            name: "Núria López",
            alternateName: "Srtaserifa",
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "SoftwareApplication",
                  "@id": "https://srtaserifa.es/proyectos/karma-financiero#software",
                  name: "Karma Financiero",
                  description:
                    "Producto digital personal para gestionar dinero compartido y mejorar las conversaciones sobre gastos.",
                  applicationCategory: "FinanceApplication",
                  operatingSystem: "Web",
                  creator: { "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez" },
                  url: "https://srtaserifa.es/proyectos/karma-financiero",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "SoftwareApplication",
                  "@id": "https://srtaserifa.es/proyectos/aprende-historia-del-arte#software",
                  name: "Aprende Historia del Arte",
                  description:
                    "Plataforma digital para aprender Historia del Arte de una forma clara, cercana y fácil de explorar.",
                  applicationCategory: "EducationalApplication",
                  operatingSystem: "Web",
                  creator: { "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez" },
                  url: "https://srtaserifa.es/proyectos/aprende-historia-del-arte",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "CreativeWork",
                  "@id": "https://srtaserifa.es/proyectos/blind-words#creative-work",
                  name: "Blind Words",
                  description:
                    "Investigación tipográfica sobre identidad, accesibilidad y tacto que dio lugar a un sistema que hace convivir el alfabeto latino y el braille.",
                  creator: { "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez" },
                  url: "https://srtaserifa.es/proyectos/blind-words",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const projectsRailRef = useRef<HTMLDivElement>(null);

  const moveProjects = (direction: number) => {
    projectsRailRef.current?.scrollBy({ left: direction * projectsRailRef.current.clientWidth * 0.62, behavior: "smooth" });
  };

  return (
    <div className="projects-page">
      <div className="projects-shell">
        <main className="projects-main">
          <header className="projects-hero projects-hero-split">
            <div className="projects-hero-stack" aria-hidden="true">
              <div className="projects-personal-tags">
                {personalProjectTags.map((tag, index) => (
                  <div
                    key={tag.label}
                    className={`construction-tag construction-tag-${index + 1} construction-tag-${tag.kind}`}
                    style={{
                      animationDelay: `${560 + index * 120}ms, ${2700 + index * 120}ms`,
                    }}
                  >
                    <span className={`construction-tag-inner ${"color" in tag ? tag.color : ""}`}>
                      {tag.kind === "pill" ? (
                        <>
                          <svg
                            viewBox="0 0 24 24"
                            className="size-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m16.5 6.5-7.9 7.9a3 3 0 0 0 4.2 4.2l8.6-8.6a5 5 0 0 0-7.1-7.1l-9.1 9.2a7 7 0 0 0 9.9 9.9l7.2-7.2" />
                          </svg>
                          {tag.label}
                        </>
                      ) : (
                        <img src={tag.image} alt="" draggable={false} />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="projects-hero-copy">
              <nav className="book-breadcrumbs projects-breadcrumbs" aria-label="Migas de pan">
                <a href="/">Proyectos</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Proyectos personales</span>
              </nav>
              <h1 className="project-page-title">Algunas cosas empiezan por trabajo. Estas no.</h1>
              <p className="projects-hero-description">
                Productos, plataformas, <strong>sistemas de marca</strong> y experimentos que
                construyo para explorar una idea, entender un problema o comprobar si algo que tengo
                en la cabeza puede existir de verdad.
              </p>
            </div>
          </header>

          <section aria-label="Todos los proyectos" className="projects-grid-section">
            <div className="projects-gallery-heading">
              <h2>PLAYGROUND</h2>
              <div className="projects-gallery-controls" aria-label="Navegar por proyectos">
                <button type="button" onClick={() => moveProjects(-1)} aria-label="Proyectos anteriores">
                  <span aria-hidden="true">←</span>
                </button>
                <button type="button" onClick={() => moveProjects(1)} aria-label="Proyectos siguientes">
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
            <div className="projects-project-stack" ref={projectsRailRef}>
              {personalProjects.map((project, index) => (
                <article
                  key={project.num}
                  id={`proyecto-${project.num}`}
                  className={`projects-project-card ${index === 0 ? "projects-project-card-featured" : ""}`}
                >
                  <a
                    href={project.href}
                    className={`projects-project-media group ${project.isIcon ? "project-icon-media" : ""} ${project.title === "Karma Financiero" ? "project-karma-media" : ""} ${project.title === "Aprende Historia del Arte" ? "project-aprende-media" : ""} ${project.title === "Blind Words" ? "project-blind-media" : ""}`}
                    aria-label={`Ver proyecto: ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </a>
                  <div className="projects-project-copy">
                    <span className="project-eyebrow">
                      {project.category}
                    </span>
                    <h2>{project.title}</h2>
                    <div className="project-featured-description">
                      {project.copy.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <a href={project.href} className="project-button">
                      VER PROYECTO <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="projects-expertise" aria-labelledby="projects-expertise-title">
            <div className="projects-expertise-copy">
              <p className="editorial-kicker">Áreas de trabajo</p>
              <h2 id="projects-expertise-title">Ey, también trabajo por aquí.</h2>
              <p className="projects-expertise-intro">
                El diseño rara vez ocurre dentro de una sola disciplina.
              </p>
              <p>
                Estrategia, sistemas, IA, branding, marca, dirección, identidad y producto forman
                parte de una misma práctica. Son distintos puntos de entrada para pensar, diseñar y
                construir.
              </p>
            </div>
            <div className="projects-expertise-tags" aria-label="Áreas de especialización">
              {expertiseTags.map((tag) => {
                const className = `construction-tag-inner expertise-pill ${tag.color}`;

                return tag.href ? (
                  <a className={className} href={tag.href} key={tag.label}>
                    {tag.label}
                  </a>
                ) : (
                  <button className={className} type="button" key={tag.label}>
                    {tag.label}
                  </button>
                );
              })}
            </div>
          </section>
        </main>

        <SiteFooter variant="floating" />
      </div>
    </div>
  );
}
