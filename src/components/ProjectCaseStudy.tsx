import { SiteFooter } from "@/components/SiteFooter";

export type CaseStudySection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  link?: {
    href: string;
    label: string;
  };
};

function SectionAnchorNav({
  activeId,
  items,
}: {
  activeId: string;
  items: Array<{ id: string; label: string }>;
}) {
  return (
    <nav className="section-anchor-nav" aria-label="Índice del proyecto">
      {items.map((item) => (
        <a key={item.id} href={`#${item.id}`} className={item.id === activeId ? "is-active" : ""}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

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
  const introSection = sections.find((section) => section.id === "intro");
  const contentSections = sections.filter((section) => section.id !== "intro");
  const sectionNavigation = contentSections.map((section) => ({
    id: section.id,
    label: section.eyebrow,
  }));
  const categories = category.split(" · ").filter(Boolean);

  return (
    <div className="case-study-page">
      <main className="case-study-main">
        <section className="case-study-cover" aria-label={`Portada de ${title}`}>
          <figure className="case-study-hero-media">
            <img src={heroImage} alt={heroAlt} />
          </figure>
        </section>
        <script src="/cover-zoom.js?v=2" defer />

        <div className="case-study-sheet">
          <header className="case-study-header">
            <a href="/proyectos" className="case-study-close" aria-label="Volver a proyectos">
              <span aria-hidden="true">×</span>
            </a>
          </header>
          <section className="case-study-editorial-intro" id="intro">
            <aside className="case-study-intro-aside" aria-label="Ficha del proyecto">
              <p>{state}</p>
              <p>Overview</p>
              <p>Categorías</p>
            </aside>
            <div className="case-study-intro-content">
              <p className="case-study-breadcrumb">
                <a href="/proyectos">PROYECTOS</a>&nbsp; / &nbsp;{title.toUpperCase()}
              </p>
              <div className="case-study-intro-title-row">
                <h1>{title}</h1>
              </div>
              <h2>{introSection?.title ?? intro}</h2>
              <div className="case-study-intro-context case-study-prose">
                <p>{intro}</p>
                {introSection?.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="case-study-category-list" aria-label="Categorías del proyecto">
                {categories.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {pending && (
            <p className="case-study-pending">
              El contenido detallado de este proyecto está pendiente de completar.
            </p>
          )}

          <div className="case-study-sections">
            {contentSections.map((section) => (
              <section className="case-study-section" id={section.id} key={section.id}>
                <SectionAnchorNav activeId={section.id} items={sectionNavigation} />
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
                  {section.link && (
                    <a className="case-study-section-link" href={section.link.href}>
                      {section.link.label} <span aria-hidden="true">↗</span>
                    </a>
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
        </div>
      </main>

      <SiteFooter variant="floating" />
    </div>
  );
}
