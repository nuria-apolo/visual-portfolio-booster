import { createFileRoute } from "@tanstack/react-router";
import apoloIcon from "@/assets/apolo.svg";
import karmaIcon from "@/assets/karma.svg";
import srtaIcon from "@/assets/srta.svg";
import aprendeHistoriaArteIcon from "@/assets/aprende-historia-arte.png";
import aprendeHistoriaArteProject from "@/assets/aprende-historia-arte-project.png";
import karmaApp from "@/assets/karma-app.png";
import { projects } from "@/data/projects";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "Proyectos — Srta Serifa · Núria López";
const DESCRIPTION = "Productos, plataformas y experimentos personales de Núria López.";

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
    category: "Producto digital · Finanzas compartidas",
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
    category: "Educación · Cultura · Producto digital",
    copy: [
      "Una plataforma gratuita para aprender Historia del Arte de una forma más clara, cercana y fácil de explorar.",
      "El proyecto nace de una pregunta bastante sencilla: ¿cómo diseñar una experiencia digital que invite a aprender sin parecer un libro de texto trasladado a una pantalla?",
      "Diseño, contenido, tecnología, divulgación y experimentación editorial conviven dentro de una plataforma que sigue creciendo.",
    ],
    state: "Activo",
    href: "/proyectos/aprende-historia-del-arte",
    image: aprendeHistoriaArteProject,
    alt: "Collage de esculturas clásicas con gafas de sol y una escena pictórica central",
  },
  blindWordsProject
    ? {
        num: "03",
        title: blindWordsProject.title,
        category: blindWordsProject.type,
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
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/proyectos" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
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
                Productos, plataformas y experimentos que construyo para explorar una idea, entender
                un problema o comprobar si algo que tengo en la cabeza puede existir de verdad.
              </p>
              <p className="projects-hero-note">
                No todos están terminados. Algunos probablemente nunca lo estén.
              </p>
            </div>
          </header>

          <section aria-label="Todos los proyectos" className="projects-grid-section">
            <div className="projects-project-stack">
              {personalProjects.map((project, index) => (
                <article
                  key={project.num}
                  className={`projects-project-card ${index === 0 ? "projects-project-card-featured" : ""}`}
                >
                  <a
                    href={project.href}
                    className={`projects-project-media group ${project.isIcon ? "project-icon-media" : ""} ${project.title === "Karma Financiero" ? "project-karma-media" : ""}`}
                    aria-label={`Ver proyecto: ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    {index !== 0 && <span className="project-media-label">{project.category}</span>}
                  </a>
                  <div className="projects-project-copy">
                    <span className="project-eyebrow">
                      {index === 0 ? project.category : `${project.num} · ${project.state}`}
                    </span>
                    <h2>{project.title}</h2>
                    <div className="project-featured-description">
                      {project.copy.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <a href={project.href} className="project-button">
                      Ver proyecto <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <SiteFooter variant="floating" />
      </div>
    </div>
  );
}
