import { SiteFooter } from "@/components/SiteFooter";

export type CaseStudySection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
};

const caseStudyNavigation = [
  { id: "intro", label: "Intro" },
  { id: "problema", label: "Problema" },
  { id: "busqueda", label: "Búsqueda" },
  { id: "ideacion", label: "Ideación" },
  { id: "diseno", label: "Diseño" },
  { id: "aportacion", label: "Aportación" },
];

export type ProjectCaseStudyProps = {
  title: string;
  category: string;
  state: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  sections: CaseStudySection[];
  relatedProjects: Array<{
    title: string;
    href: string;
    image: string;
    alt: string;
  }>;
  pending?: boolean;
};

export function ProjectCaseStudy({
  title,
  category,
  state,
  intro,
  heroImage,
  heroAlt,
  sections,
  relatedProjects,
  pending = false,
}: ProjectCaseStudyProps) {
  return (
    <div className="case-study-page">
      <header className="case-study-header">
        <a href="/proyectos" className="case-study-close" aria-label="Volver a proyectos">
          <span aria-hidden="true">×</span>
        </a>
      </header>

      <main className="case-study-main">
        <nav className="case-study-nav" aria-label="Secciones del proyecto">
          <a href="/proyectos" className="case-study-nav-back">
            <span aria-hidden="true">←</span> Proyectos
          </a>
          <div className="case-study-nav-links">
            {caseStudyNavigation.map((item, index) => (
              <a key={item.id} href={`#${item.id}`} className={index === 0 ? "is-active" : ""}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <section className="case-study-hero">
          <div className="case-study-hero-copy">
            <p className="case-study-kicker">{category}</p>
            <h1>{title}</h1>
            <p className="case-study-intro">{intro}</p>
            <dl className="case-study-meta">
              <div>
                <dt>Estado</dt>
                <dd>{state}</dd>
              </div>
              <div>
                <dt>Tipo</dt>
                <dd>Proyecto personal</dd>
              </div>
            </dl>
          </div>
          <figure className="case-study-hero-media">
            <img src={heroImage} alt={heroAlt} />
          </figure>
        </section>

        {pending && (
          <p className="case-study-pending">
            El contenido detallado de este proyecto está pendiente de completar.
          </p>
        )}

        <div className="case-study-sections">
          {sections.map((section) => (
            <section className="case-study-section" id={section.id} key={section.id}>
              <div className="case-study-section-label">{section.eyebrow}</div>
              <div className="case-study-section-content">
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.image && (
                  <img
                    className="case-study-section-image"
                    src={section.image}
                    alt={section.imageAlt ?? ""}
                    loading="lazy"
                  />
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="case-study-footer-link">
          <section className="case-study-related" aria-labelledby="case-study-related-title">
            <h2 id="case-study-related-title">Otros proyectos</h2>
            <div className="case-study-related-grid">
              {relatedProjects.map((project) => (
                <a className="case-study-related-card" href={project.href} key={project.href}>
                  <span className="case-study-related-media">
                    <img src={project.image} alt={project.alt} loading="lazy" />
                  </span>
                  <h3>{project.title}</h3>
                </a>
              ))}
            </div>
          </section>
          <a href="/proyectos" className="project-button">
            Volver a proyectos <span aria-hidden="true">↗</span>
          </a>
        </div>
      </main>

      <SiteFooter variant="floating" />
    </div>
  );
}
