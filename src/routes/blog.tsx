import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { articles } from "@/data/articles";
import { absoluteAssetUrl, HOME_OG_IMAGE } from "@/lib/seo";

const TITLE = "Blog de diseño, branding y producto digital — Srta Serifa";
const DESCRIPTION =
  "Artículos de Núria López sobre diseño, branding, producto digital, tecnología, inteligencia artificial y sistemas de marca.";

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
      { property: "og:url", content: "https://srtaserifa.es/blog" },
      { property: "og:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/blog" }],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const visibleArticles = activeFilter
    ? articles.filter((article) => articleFilters[article.slug]?.includes(activeFilter))
    : articles;
  const totalPages = Math.ceil(visibleArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = visibleArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE,
  );

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
        </section>

        <div className="blog-index-filters" aria-label="Filtrar artículos por tema">
          {blogFilters.map((filter) => {
            const isActive = activeFilter === filter.label;
            return (
              <button
                className={`blog-index-filter blog-index-filter-${filter.tone} ${isActive ? "is-active" : ""}`}
                type="button"
                aria-pressed={isActive}
                key={filter.label}
                onClick={() => {
                  setActiveFilter(isActive ? null : filter.label);
                  setCurrentPage(1);
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <section className="blog-index-grid" aria-label="Artículos del blog" aria-live="polite">
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
                <h2>
                  <a href={`/publicaciones/${article.slug}`}>{article.title}</a>
                </h2>
                <p>{article.excerpt}</p>
                <a className="blog-index-read-link" href={`/publicaciones/${article.slug}`}>
                  Leer artículo <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </section>

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
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
