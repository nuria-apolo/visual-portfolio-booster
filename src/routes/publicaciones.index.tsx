import { createFileRoute } from "@tanstack/react-router";
import noteMark from "@/assets/note-mark.png";
import { expertiseTags } from "@/data/expertise";
import { SiteFooter } from "@/components/SiteFooter";
import { articleBySlug, articles } from "@/data/articles";
import { absoluteAssetUrl, HOME_OG_IMAGE } from "@/lib/seo";

const TITLE = "Publicaciones de diseño, marca y producto digital";
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

const editorialPaths = [
  {
    label: "Estrategia de marca",
    title: "Elegir una dirección antes de diseñar",
    criterion:
      "Posicionamiento, relato y criterios para que la marca tome decisiones con una dirección reconocible.",
    articleSlugs: [
      "posicionamiento-de-marca",
      "una-marca-digital-necesita-reglas-no-aplicaciones",
      "branding-y-producto-deberian-hablar-mas",
    ],
    serviceHref: "/branding-estrategico",
    serviceLabel: "Branding estratégico",
  },
  {
    label: "Sistemas de marca y producto",
    title: "Convertir la intención en reglas compartidas",
    criterion:
      "Identidad digital, componentes y comportamientos que ayudan a sostener una experiencia coherente.",
    articleSlugs: [
      "del-brand-system-al-design-system",
      "una-interfaz-tambien-es-branding",
      "disenar-sistemas-no-pantallas",
    ],
    serviceHref: "/consultoria-de-diseno",
    serviceLabel: "Consultoría de diseño",
  },
  {
    label: "IA, tecnología y criterio",
    title: "Usar la tecnología cuando mejora una decisión",
    criterion:
      "IA aplicada al trabajo de diseño para investigar, explorar y construir sin perder contexto ni responsabilidad.",
    articleSlugs: ["que-es-inteligencia-artificial", "que-cambia-la-ia-en-el-trabajo-de-diseno"],
    serviceHref: "/consultoria-inteligencia-artificial",
    serviceLabel: "Consultoría de IA",
  },
] as const;

const editorialPathCards = editorialPaths.map((path) => ({
  ...path,
  featuredArticles: path.articleSlugs
    .map((slug) => articleBySlug.get(slug))
    .filter((article): article is (typeof articles)[number] => Boolean(article)),
}));

export const Route = createFileRoute("/publicaciones/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://srtaserifa.es/publicaciones" },
      { property: "og:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
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
            Escribo sobre diseño, marca, producto digital, tecnología y los sistemas que aparecen
            cuando todo empieza a mezclarse.
          </p>
        </section>
        <section className="publication-layout" aria-label="Publicaciones y Note©">
          <div className="publication-books">
            <p className="editorial-kicker publication-section-kicker">Libros</p>
            <div className="publication-grid">
              <article className="publication-card">
                <a href="/publicaciones/treinta-mililitros" className="publication-card-cover-link">
                  <span className="publication-book-shell">
                    <span className="publication-book-pages" aria-hidden="true" />
                    <span className="publication-book-cover">
                      <img
                        src="/covers/treinta-mililitros-amazon.png"
                        alt="Portada de Treinta mililitros, de Núria López"
                        className="publication-card-cover"
                      />
                    </span>
                  </span>
                </a>
                <div className="publication-card-meta">
                  <div>
                    <p className="editorial-kicker">Próximamente en Amazon</p>
                    <h2>Treinta mililitros</h2>
                  </div>
                </div>
              </article>

              <article className="publication-card">
                <div className="publication-card-cover-link">
                  <span className="publication-book-shell">
                    <span className="publication-book-pages" aria-hidden="true" />
                    <span className="publication-book-cover">
                      <img
                        src="/covers/disenar-con-inteligencia-artificial.png"
                        alt="Portada de Diseñar con inteligencia artificial, de Núria López"
                        className="publication-card-cover"
                      />
                    </span>
                  </span>
                </div>
                <div className="publication-card-meta">
                  <div>
                    <p className="editorial-kicker">Próximamente en Amazon</p>
                    <h2>Diseñar con inteligencia artificial</h2>
                  </div>
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
            {expertiseTags.map((tag) => (
              <span
                className={`construction-tag-inner expertise-pill ${tag.color}`}
                key={tag.label}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <div className="publication-paths" aria-label="Recorridos de lectura por tema">
            {editorialPathCards.map((path) => (
              <article className="publication-path-card" key={path.label}>
                <div className="publication-path-summary">
                  <p className="editorial-kicker">{path.label}</p>
                  <h3>{path.title}</h3>
                  <p>{path.criterion}</p>
                </div>
                <ul>
                  {path.featuredArticles.map((article) => (
                    <li key={article.slug}>
                      <a href={`/publicaciones/${article.slug}`}>
                        <span>
                          {article.title}
                          <small>Artículo · {article.readingTime}</small>
                        </span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <a className="publication-path-service" href={path.serviceHref}>
                  {path.serviceLabel} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
