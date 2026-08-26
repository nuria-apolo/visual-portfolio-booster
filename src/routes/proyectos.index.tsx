import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import apoloIcon from "@/assets/apolo.svg";
import karmaIcon from "@/assets/karma.svg";
import srtaIcon from "@/assets/srta.svg";
import aprendeHistoriaArteIcon from "@/assets/aprende-historia-arte.png";
import aprendeHistoriaArtePhoto from "@/assets/aprende-historia-arte-photo.png";
import karmaApp from "@/assets/karma-app.png";
import potestadPackaging from "@/assets/potestad-packaging-2018.png";
import extravagantBranding from "@/assets/extravagant-branding-2020.png";
import dioinaType from "@/assets/dioina-type-2015.png";
import dulcesConventos from "@/assets/dulces-conventos-branding-packaging-2018.png";
import rhmAsesores from "@/assets/rhm-asesores-branding-digital-2020.png";
import woManCampaign from "@/assets/wo-man-campana-2022.png";
import casitaMontessoriNubes from "@/assets/casita-montessori-nubes-identidad-web-2025.png";
import porvera54 from "@/assets/porvera-54-editorial-2018.png";
import pasenYPiquen from "@/assets/pasen-y-piquen-identidad-web-2025.png";
import projecty from "@/assets/projecty-identidad-naming-2018.png";
import daysOfType from "@/assets/36-days-of-type-ilustracion-2015.png";
import albarizo from "@/assets/albarizo-packaging-2015.png";
import bocapalo from "@/assets/bocapalo-identidad-2016.png";
import yorokobuBlindWords from "@/assets/yorokobu-blind-words-portada-2019.jpg";
import davidGrabe from "@/assets/david-grabe-portada-2020.png";
import { projects } from "@/data/projects";
import { expertiseTags } from "@/data/expertise";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl } from "@/lib/seo";

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
    image: aprendeHistoriaArtePhoto,
    alt: "Aprende Historia del Arte mostrado en una tablet sobre un sillón naranja",
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

const archiveFilters = [
  { label: "Todas", tone: "all" },
  { label: "Identidad", tone: "identity" },
  { label: "Branding", tone: "branding" },
  { label: "Packaging", tone: "packaging" },
  { label: "Tipografía", tone: "typography" },
  { label: "Editorial", tone: "editorial" },
  { label: "Digital", tone: "digital" },
  { label: "Campaña", tone: "campaign" },
  { label: "Ilustración", tone: "illustration" },
] as const;

type ArchiveFilter = (typeof archiveFilters)[number]["label"];
type ArchiveArea = Exclude<ArchiveFilter, "Todas">;

type ArchiveProject = {
  title: string;
  type: string;
  year: string;
  image: string;
  alt: string;
  areas: ArchiveArea[];
};

const archiveProjects: ArchiveProject[] = [
  {
    title: "Potestad",
    type: "Packaging",
    year: "2018",
    image: potestadPackaging,
    alt: "Botella de Potestad envuelta en tejido blanco con costuras rojas",
    areas: ["Packaging"],
  },
  {
    title: "Extravagant",
    type: "Branding",
    year: "2020",
    image: extravagantBranding,
    alt: "Identidad de Extravagant sobre una fotografía de cinco mujeres",
    areas: ["Branding"],
  },
  {
    title: "Dioína type",
    type: "Tipografía",
    year: "2015",
    image: dioinaType,
    alt: "Detalle de las curvas blancas de Dioína sobre fondo rojo",
    areas: ["Tipografía"],
  },
  {
    title: "Dulces Conventos",
    type: "Branding + packaging",
    year: "2018",
    image: dulcesConventos,
    alt: "Patrón de etiquetas de Dulces Conventos en varios colores",
    areas: ["Branding", "Packaging"],
  },
  {
    title: "RHM Asesores",
    type: "Branding + digital",
    year: "2020",
    image: rhmAsesores,
    alt: "Aplicación de la identidad de RHM Asesores en un soporte publicitario urbano",
    areas: ["Branding", "Digital"],
  },
  {
    title: "Wo=man",
    type: "Campaña",
    year: "2022",
    image: woManCampaign,
    alt: "Gráfica amarilla y negra de la campaña Wo=man para el 8 de marzo",
    areas: ["Campaña"],
  },
  {
    title: "Casita Montessori Nubes",
    type: "Identidad + web",
    year: "2025",
    image: casitaMontessoriNubes,
    alt: "Identidad de Casita Montessori Nubes en blanco sobre fondo azul claro",
    areas: ["Identidad", "Digital"],
  },
  {
    title: "Porvera 54",
    type: "Editorial",
    year: "2018",
    image: porvera54,
    alt: "Portada editorial de Porvera 54 en negro, gris y rojo",
    areas: ["Editorial"],
  },
  {
    title: "Pasen y piquen",
    type: "Identidad + web",
    year: "2025",
    image: pasenYPiquen,
    alt: "Símbolo naranja de Pasen y piquen sobre fondo crema",
    areas: ["Identidad", "Digital"],
  },
  {
    title: "Projecty",
    type: "Identidad + naming",
    year: "2018",
    image: projecty,
    alt: "Aplicaciones de la identidad de Projecty en blanco y violeta",
    areas: ["Identidad"],
  },
  {
    title: "36 days of type",
    type: "Ilustración",
    year: "2015",
    image: daysOfType,
    alt: "Ilustración de la letra J para 36 days of type",
    areas: ["Tipografía", "Ilustración"],
  },
  {
    title: "Albarizo",
    type: "Packaging",
    year: "2015",
    image: albarizo,
    alt: "Etiquetas ilustradas de las botellas de vino Albarizo",
    areas: ["Packaging"],
  },
  {
    title: "Bocapalo",
    type: "Identidad",
    year: "2016",
    image: bocapalo,
    alt: "Aplicación web de la identidad de Bocapalo en blanco y negro",
    areas: ["Identidad"],
  },
  {
    title: "Yorokobu blind words",
    type: "Portada",
    year: "2019",
    image: yorokobuBlindWords,
    alt: "Portada amarilla de Yorokobu con letras modulares blancas y negras",
    areas: ["Editorial", "Tipografía"],
  },
  {
    title: "David Grabe",
    type: "Portada",
    year: "2020",
    image: davidGrabe,
    alt: "Diseño de portada y disco de David Grabe sobre fondo negro",
    areas: ["Editorial"],
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
      { property: "og:image", content: absoluteAssetUrl(karmaApp) },
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
  const [archiveFilter, setArchiveFilter] = useState<ArchiveFilter>("Todas");

  const visibleArchiveProjects =
    archiveFilter === "Todas"
      ? archiveProjects
      : archiveProjects.filter((project) => project.areas.includes(archiveFilter));

  const moveProjects = (direction: number) => {
    projectsRailRef.current?.scrollBy({
      left: direction * projectsRailRef.current.clientWidth * 0.62,
      behavior: "smooth",
    });
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
                Productos, plataformas, sistemas de marca y experimentos que construyo para explorar
                una idea, entender un problema o comprobar si algo que tengo en la cabeza puede
                existir de verdad. En proyectos como Karma, el trabajo conecta{" "}
                <a href="/publicaciones/del-brand-system-al-design-system">
                  brand system y design system
                </a>
                .
              </p>
            </div>
          </header>

          <section aria-label="Todos los proyectos" className="projects-grid-section">
            <div className="projects-gallery-heading">
              <h2>PLAYGROUND</h2>
              <div className="projects-gallery-controls" aria-label="Navegar por proyectos">
                <button
                  type="button"
                  onClick={() => moveProjects(-1)}
                  aria-label="Proyectos anteriores"
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  onClick={() => moveProjects(1)}
                  aria-label="Proyectos siguientes"
                >
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
                    <span className="project-eyebrow">{project.category}</span>
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
          <section className="projects-archive" aria-labelledby="projects-archive-title">
            <div className="projects-gallery-heading projects-archive-heading">
              <h2 id="projects-archive-title">ARCHIVO</h2>
              <div
                className="projects-archive-filters"
                role="group"
                aria-label="Filtrar proyectos de archivo por área"
              >
                {archiveFilters.map((filter) => (
                  <button
                    key={filter.label}
                    type="button"
                    className={`projects-archive-filter projects-archive-filter-${filter.tone}${archiveFilter === filter.label ? " is-active" : ""}`}
                    aria-pressed={archiveFilter === filter.label}
                    aria-controls="projects-archive-grid"
                    onClick={() => setArchiveFilter(filter.label)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="projects-archive-grid" id="projects-archive-grid" aria-live="polite">
              {visibleArchiveProjects.map((project) => (
                <article className="projects-archive-card" key={`${project.title}-${project.year}`}>
                  <div className="projects-archive-media">
                    <img src={project.image} alt={project.alt} loading="lazy" />
                  </div>
                  <div className="projects-archive-copy">
                    <p className="project-eyebrow">
                      {project.type} · {project.year}
                    </p>
                    <h3>{project.title}</h3>
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
