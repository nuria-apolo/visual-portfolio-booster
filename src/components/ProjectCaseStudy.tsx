import { SiteFooter } from "@/components/SiteFooter";
import { OtherProjects } from "@/components/OtherProjects";
import { ProjectSectionAnchor, ProjectSectionNavigation } from "@/components/ProjectSectionNavigation";

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

export type ProjectCaseStudyProps = {
  title: string;
  currentHref: string;
  category: string;
  state: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  sections: CaseStudySection[];
  pending?: boolean;
};

export function ProjectCaseStudy({
  title,
  currentHref,
  category,
  state,
  intro,
  heroImage,
  heroAlt,
  sections,
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
      <ProjectSectionNavigation items={sectionNavigation} />
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
                <ProjectSectionAnchor activeId={section.id} items={sectionNavigation} />
                <div className="case-study-section-content">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.image && (
                    <img
                      className="case-study-section-image"
                      src={section.image}
                      alt={section.imageAlt ?? section.title}
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

          <OtherProjects currentHref={currentHref} />
        </div>
      </main>

      <SiteFooter variant="floating" />
    </div>
  );
}
