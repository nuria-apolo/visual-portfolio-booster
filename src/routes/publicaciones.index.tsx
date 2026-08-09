import { createFileRoute } from "@tanstack/react-router";
import noteMark from "@/assets/note-mark.png";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "Publicaciones — Srta Serifa · Núria López";
const DESCRIPTION =
  "Archivo editorial de Núria López: libros, artículos, notas, ensayos, investigaciones y recursos.";

const notePosts = [
  {
    issue: "#19",
    title: "Cuando nadie me ve",
    href: "https://srtaserifa.substack.com/p/19-cuando-nadie-me-ve",
  },
  {
    issue: "#18",
    title: "El hábitat del diseño",
    href: "https://srtaserifa.substack.com/p/18-el-habitat-del-diseno",
  },
  {
    issue: "#17",
    title: "El diseño como dialecto",
    href: "https://srtaserifa.substack.com/p/17-el-diseno-como-dialecto",
  },
] as const;

export const Route = createFileRoute("/publicaciones/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://srtaserifa.es/publicaciones" },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/publicaciones" }],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  return (
    <div className="editorial-page">
      <main>
        <section className="editorial-hero">
          <nav className="book-breadcrumbs publications-breadcrumbs" aria-label="Migas de pan">
            <a href="/">Inicio</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Publicaciones</span>
          </nav>
          <h1>Lo que escribo y comparto.</h1>
          <p className="publication-hero-body">
            Libros, notas, ensayos y otros proyectos editoriales. Un espacio para reunir lo que
            escribo por mi cuenta y compartirlo cuando está listo.
          </p>
        </section>
        <section className="publication-layout" aria-label="Publicaciones y Note©">
          <div className="publication-books">
            <div className="publication-grid">
              <article className="publication-card publication-card-active">
                <a href="/publicaciones/treinta-mililitros" className="publication-card-cover-link">
                  <img
                    src="/covers/treinta-mililitros.png?v=2"
                    alt="Portada de Treinta mililitros, de Núria López"
                    className="publication-card-cover"
                  />
                </a>
                <div className="publication-card-meta">
                  <div>
                    <p className="editorial-kicker">BOOK · Activo</p>
                    <h2>Treinta mililitros</h2>
                  </div>
                  <a className="publication-card-link" href="/publicaciones/treinta-mililitros">
                    Ver publicación ↗
                  </a>
                </div>
              </article>

              <article className="publication-card publication-card-active">
                <div className="publication-card-cover-link">
                  <img
                    src="/covers/la-vida-son-canciones.png"
                    alt="Portada de La vida son canciones que recordar, de Elena Sorni"
                    className="publication-card-cover"
                  />
                </div>
                <div className="publication-card-meta">
                  <div>
                    <p className="editorial-kicker">BOOK · Activo</p>
                    <h2>La vida son canciones que recordar</h2>
                  </div>
                  <span className="publication-card-link publication-card-link-muted">
                    Próximamente
                  </span>
                </div>
              </article>
            </div>
          </div>

          <aside className="note-panel" aria-labelledby="note-panel-title">
            <header className="note-panel-header">
              <img className="note-panel-mark" src={noteMark} alt="" aria-hidden="true" />
              <div>
                <h2 id="note-panel-title">Note©</h2>
              </div>
              <a
                href="https://grounded-focus-364680.framer.app"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Note©"
              >
                ↗
              </a>
            </header>
            <p className="note-panel-intro">
              Note© es mi cuaderno abierto. Un espacio para pensar en voz alta. Un lugar donde el
              diseño se escribe y se piensa. Porque escribir también es diseñar: ordenar el
              pensamiento, traducir lo invisible, dar forma a lo que aún no existe.
            </p>
            <a
              className="note-panel-subscribe"
              href="https://srtaserifa.substack.com/"
              target="_blank"
              rel="noreferrer"
            >
              Suscribirme a Note© <span aria-hidden="true">↗</span>
            </a>
            <div className="note-panel-list">
              {notePosts.map((post) => (
                <a
                  key={post.title}
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="note-panel-row"
                >
                  <span>{post.issue}</span>
                  <strong>{post.title}</strong>
                  <span className="note-panel-duration" aria-hidden="true">
                    ◷ 2 m
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
