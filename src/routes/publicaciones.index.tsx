import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import noteMark from "@/assets/note-mark.png";
import { expertiseTags } from "@/data/expertise";
import { SiteFooter } from "@/components/SiteFooter";
import { articles } from "@/data/articles";

const TITLE = "Publicaciones — Brand Systems + Digital Products | Srtaserifa";
const DESCRIPTION =
  "Libros, notas y ensayos de Núria López sobre diseño, estrategia, sistemas de marca, producto digital, dirección creativa, tecnología e inteligencia artificial.";

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

const articleTopics: Record<string, string[]> = {
  "una-interfaz-tambien-es-branding": ["Branding", "Identidad", "Producto"],
  "del-brand-system-al-design-system": ["Sistemas", "Branding", "Producto"],
  "una-marca-digital-necesita-reglas-no-aplicaciones": ["Estrategia", "Sistemas", "Marca"],
  "branding-y-producto-deberian-hablar-mas": ["Branding", "Marca", "Producto"],
  "disenar-sistemas-no-pantallas": ["Sistemas", "Producto", "Dirección"],
  "que-cambia-la-ia-en-el-trabajo-de-diseno": ["IA", "Estrategia", "Dirección"],
};

const topicArticles = [
  {
    type: "Proyecto · 3 min.",
    title: "Blind Words en una campaña internacional con Citizen",
    href: "/proyectos/blind-words-citizen",
    topics: ["Dirección"],
  },
  ...articles.map((article) => ({
    type: `Artículo · ${article.readingTime}`,
    title: article.title,
    href: `/publicaciones/${article.slug}`,
    topics: articleTopics[article.slug] ?? [],
  })),
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
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/publicaciones" }],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const visibleArticles = activeTopic
    ? topicArticles.filter((article) => article.topics.some((topic) => topic === activeTopic))
    : topicArticles;

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
            Escribo sobre diseño, marca, producto digital, tecnología y los sistemas que aparecen
            cuando todo empieza a mezclarse.
          </p>
        </section>
        <section className="publication-layout" aria-label="Publicaciones y Note©">
          <div className="publication-books">
            <p className="editorial-kicker publication-section-kicker">Libros</p>
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
                    <h3>Treinta mililitros</h3>
                  </div>
                  <a className="publication-card-link" href="/publicaciones/treinta-mililitros">
                    Ver publicación ↗
                  </a>
                </div>
              </article>

              <article className="publication-card publication-card-upcoming">
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
                    <h3>La vida son canciones que recordar</h3>
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
            <p className="note-panel-kicker publication-notes-kicker">Últimas notas</p>
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
        <section className="publication-topics" aria-labelledby="publication-topics-title">
          <h2 id="publication-topics-title" className="editorial-kicker">
            Escribo sobre
          </h2>
          <div className="publication-topics-tags" aria-label="Temas de las publicaciones">
            {expertiseTags.map((tag) => {
              const className = `construction-tag-inner expertise-pill ${tag.color}`;
              const isActive = activeTopic === tag.label;

              return tag.href ? (
                <a className={className} href={tag.href} key={tag.label}>
                  {tag.label}
                </a>
              ) : (
                <button
                  className={`${className} ${isActive ? "is-active" : ""}`}
                  type="button"
                  aria-pressed={isActive}
                  key={tag.label}
                  onClick={() => setActiveTopic(isActive ? null : tag.label)}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
          <div className="publication-topic-articles" aria-live="polite">
            {visibleArticles.length > 0 ? (
              <div className="publication-topic-article-list">
                {visibleArticles.map((article, index) => (
                  <a className="publication-topic-article" href={article.href} key={article.title}>
                    <span className="publication-topic-article-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <small>{article.type}</small>
                      <strong>{article.title}</strong>
                    </span>
                    <span className="publication-topic-article-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <p className="publication-topic-empty">
                Todavía no hay publicaciones asociadas a esta categoría.
              </p>
            )}
          </div>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
