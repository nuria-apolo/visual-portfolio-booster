import aprendeHistoriaArtePhoto from "@/assets/aprende-historia-arte-photo.png";
import blindWordsImage from "@/assets/blindwords-framer.png";
import karmaApp from "@/assets/karma-app.png";

const portfolioProjects = [
  {
    title: "Karma Financiero",
    href: "/proyectos/karma-financiero",
    image: karmaApp,
    alt: "Pantalla de acceso de Karma Financiero",
  },
  {
    title: "Aprende Historia del Arte",
    href: "/proyectos/aprende-historia-del-arte",
    image: aprendeHistoriaArtePhoto,
    alt: "Aprende Historia del Arte mostrado en una tablet sobre un sillón naranja",
  },
  {
    title: "Blind Words",
    href: "/proyectos/blind-words",
    image: blindWordsImage,
    alt: "Espécimen tipográfico de Blind Words con letras blancas y puntos Braille",
  },
];

export function OtherProjects({ currentHref }: { currentHref: string }) {
  const otherProjects = portfolioProjects.filter((project) => project.href !== currentHref);

  return (
    <div className="case-study-footer-link">
      <section className="case-study-related" aria-labelledby="case-study-related-title">
        <h2 id="case-study-related-title">Otros proyectos</h2>
        <div className="case-study-related-grid">
          {otherProjects.map((project) => (
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
  );
}
