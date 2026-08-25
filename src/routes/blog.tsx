import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { articles } from "@/data/articles";
import { absoluteAssetUrl, HOME_OG_IMAGE, SITE_URL } from "@/lib/seo";

const TITLE = "Blog de diseño, branding y producto digital — Srta Serifa";
const DESCRIPTION =
  "Artículos y criterio de Núria López, Head of Design, sobre estrategia de marca, sistemas, producto digital e inteligencia artificial aplicada.";
const BLOG_URL = `${SITE_URL}/blog`;
const AUTHOR_ID = `${SITE_URL}/sobre-mi#nuria-lopez`;
const BLOG_TOPICS = [
  "Estrategia de marca",
  "Sistemas de marca y producto",
  "IA, tecnología y criterio",
] as const;

const blogFilters = [
  { label: "Estrategia", tone: "strategy" },
  { label: "Sistemas", tone: "systems" },
  { label: "IA", tone: "ai" },
  { label: "Branding", tone: "branding" },
  { label: "Marca", tone: "brand" },
  { label: "Dirección", tone: "direction" },
  { label: "Identidad", tone: "identity" },
  { label: "Producto", tone: "product" },
] as const;

const articleFilters: Record<string, readonly string[]> = {
  "posicionamiento-de-marca": ["Estrategia", "Branding", "Marca"],
  "que-es-inteligencia-artificial": ["IA", "Estrategia", "Producto"],
  "una-interfaz-tambien-es-branding": ["Branding", "Identidad", "Producto"],
  "del-brand-system-al-design-system": ["Sistemas", "Branding", "Identidad", "Producto"],
  "una-marca-digital-necesita-reglas-no-aplicaciones": ["Estrategia", "Sistemas", "Marca"],
  "branding-y-producto-deberian-hablar-mas": ["Branding", "Marca", "Producto"],
  "disenar-sistemas-no-pantallas": ["Sistemas", "Producto", "Dirección"],
  "que-cambia-la-ia-en-el-trabajo-de-diseno": ["IA", "Estrategia", "Dirección"],
};

const ARTICLES_PER_PAGE = 6;

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BLOG_URL },
      { property: "og:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
    ],
    links: [{ rel: "canonical", href: BLOG_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": `${BLOG_URL}#blog`,
              name: "Blog de Srta Serifa",
              description: DESCRIPTION,
              url: BLOG_URL,
              inLanguage: "es-ES",
              author: { "@id": AUTHOR_ID },
              about: BLOG_TOPICS,
              blogPost: articles.map((article) => ({
                "@type": "BlogPosting",
                "@id": `${SITE_URL}/publicaciones/${article.slug}#article`,
                headline: article.title,
                url: `${SITE_URL}/publicaciones/${article.slug}`,
                datePublished: article.publishedAt,
                dateModified: article.updatedAt ?? article.publishedAt,
                author: { "@id": AUTHOR_ID },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Blog", item: BLOG_URL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const normalizedQuery = normalizeSearchText(searchQuery.trim());
  const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);
  const visibleArticles = articles.filter((article) => {
    const matchesFilter = activeFilter
      ? articleFilters[article.slug]?.includes(activeFilter)
      : true;
    const searchableContent = normalizeSearchText(
      [
        article.title,
        article.excerpt,
        article.category,
        article.keywords.join(" "),
        articleFilters[article.slug]?.join(" ") ?? "",
      ].join(" "),
    );
    const matchesSearch = searchTerms.every((term) => searchableContent.includes(term));

    return matchesFilter && matchesSearch;
  });
  const featuredArticle = articles[0];
  const hasActiveSearch = Boolean(searchQuery.trim() || activeFilter);
  const archiveArticles = hasActiveSearch
    ? visibleArticles
    : visibleArticles.filter((article) => article.slug !== featuredArticle.slug);
  const totalPages = Math.max(1, Math.ceil(archiveArticles.length / ARTICLES_PER_PAGE));
  const paginatedArticles = archiveArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE,
  );

  const resetArchive = () => {
    setSearchQuery("");
    setActiveFilter(null);
    setCurrentPage(1);
  };

  return (
    <div className="blog-index-page">
      <main>
        <section className="blog-index-hero">
          <nav className="book-breadcrumbs" aria-label="Migas de pan">
            <a href="/">Inicio</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Blog</span>
          </nav>
          <h1>Ideas para diseñar, pensar y construir.</h1>
          <p>
            Artículos sobre branding, producto digital, tecnología y los sistemas que ayudan a dar
            forma a una marca con intención.
          </p>
          <div className="blog-index-explorer">
            <form
              className="blog-index-search"
              role="search"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="blog-search-input">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="m16 16 4 4" />
                </svg>
                <input
                  id="blog-search-input"
                  type="search"
                  aria-label="Buscar en los artículos"
                  value={searchQuery}
                  placeholder="Buscar artículos"
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setCurrentPage(1);
                  }}
                />
              </label>
              {searchQuery ? (
                <button
                  className="blog-index-search-clear"
                  type="button"
                  aria-label="Limpiar búsqueda"
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                >
                  ×
                </button>
              ) : null}
            </form>

            <div className="blog-index-filters" aria-label="Filtrar artículos por tema">
              <button
                className={`blog-index-filter blog-index-filter-all ${activeFilter === null ? "is-active" : ""}`}
                type="button"
                aria-pressed={activeFilter === null}
                onClick={() => {
                  setActiveFilter(null);
                  setCurrentPage(1);
                }}
              >
                Todos
              </button>
              {blogFilters.map((filter) => {
                const isActive = activeFilter === filter.label;
                return (
                  <button
                    className={`blog-index-filter blog-index-filter-${filter.tone} ${isActive ? "is-active" : ""}`}
                    type="button"
                    aria-pressed={isActive}
                    key={filter.label}
                    onClick={() => {
                      setActiveFilter(filter.label);
                      setCurrentPage(1);
                    }}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {!hasActiveSearch ? (
          <section className="blog-index-featured" aria-label="Lectura destacada">
            <article className="blog-index-featured-main">
              <a
                className="blog-index-featured-image"
                href={`/publicaciones/${featuredArticle.slug}`}
              >
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.coverAlt}
                  width={1200}
                  height={630}
                  decoding="async"
                />
              </a>
              <div className="blog-index-featured-copy">
                <p className="editorial-kicker">
                  Lectura destacada · {featuredArticle.readingTime}
                </p>
                <h3>
                  <a href={`/publicaciones/${featuredArticle.slug}`}>{featuredArticle.title}</a>
                </h3>
                <p>{featuredArticle.excerpt}</p>
                <a
                  className="blog-index-featured-link"
                  href={`/publicaciones/${featuredArticle.slug}`}
                >
                  Leer artículo <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </section>
        ) : null}

        <section className="blog-index-archive" aria-label="Archivo de artículos">
          <div className="blog-index-results-summary" aria-live="polite">
            <p>
              {archiveArticles.length} {archiveArticles.length === 1 ? "artículo" : "artículos"}
              {hasActiveSearch
                ? archiveArticles.length === 1
                  ? " encontrado"
                  : " encontrados"
                : " en el archivo"}
            </p>
            {hasActiveSearch ? (
              <button type="button" onClick={resetArchive}>
                Limpiar filtros
              </button>
            ) : null}
          </div>

          {paginatedArticles.length > 0 ? (
            <section className="blog-index-grid" aria-label="Artículos del blog">
              {paginatedArticles.map((article) => (
                <article className="blog-index-card" key={article.slug}>
                  <a href={`/publicaciones/${article.slug}`} className="blog-index-image-link">
                    <img
                      src={article.coverImage}
                      alt={article.coverAlt}
                      width={1200}
                      height={630}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <div className="blog-index-card-copy">
                    <p className="editorial-kicker">
                      {article.category} · {article.readingTime}
                    </p>
                    <h3>
                      <a href={`/publicaciones/${article.slug}`}>{article.title}</a>
                    </h3>
                    <p>{article.excerpt}</p>
                    <a className="blog-index-read-link" href={`/publicaciones/${article.slug}`}>
                      Leer artículo <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </section>
          ) : (
            <div className="blog-index-empty" role="status">
              <p className="editorial-kicker">Sin coincidencias</p>
              <h3>No hay artículos que encajen con esta búsqueda.</h3>
              <p>Prueba otra palabra o vuelve a consultar el archivo completo.</p>
              <button type="button" onClick={resetArchive}>
                Ver todos los artículos
              </button>
            </div>
          )}

          {totalPages > 1 ? (
            <nav className="blog-index-pagination" aria-label="Paginación de artículos">
              <button
                type="button"
                aria-label="Página anterior"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  className={page === currentPage ? "is-active" : ""}
                  type="button"
                  aria-current={page === currentPage ? "page" : undefined}
                  key={page}
                  onClick={() => setCurrentPage(page)}
                >
                  {String(page).padStart(2, "0")}
                </button>
              ))}
              <button
                type="button"
                aria-label="Página siguiente"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              >
                →
              </button>
            </nav>
          ) : null}
        </section>

        <section className="blog-index-authority" aria-labelledby="blog-index-guide-title">
          <div className="blog-index-guide-intro">
            <div>
              <p className="editorial-kicker">El criterio detrás del blog</p>
              <h2 id="blog-index-guide-title">
                Ideas nacidas de conectar marca, producto y tecnología en proyectos reales.
              </h2>
            </div>
            <div className="blog-index-guide-copy">
              <p>
                Soy Núria López, Head of Design en Apolo. Escribo desde la práctica de definir una
                dirección, convertirla en sistemas y acompañar a equipos que necesitan decidir qué
                merece ser diseñado y construido.
              </p>
              <div className="blog-index-guide-links">
                <a href="/rol">Conocer mi experiencia ↗</a>
                <a href="/servicios">Ver cómo lo aplico ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}

function normalizeSearchText(value: string) {
  return value
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
