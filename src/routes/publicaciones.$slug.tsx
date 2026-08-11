import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { articleBySlug, articles } from "@/data/articles";
import { absoluteAssetUrl, HOME_OG_IMAGE } from "@/lib/seo";

const BASE_URL = "https://srtaserifa.es";

export const Route = createFileRoute("/publicaciones/$slug")({
  head: ({ params }) => {
    const article = articleBySlug.get(params.slug);
    if (!article) return {};

    return {
      meta: [
        { title: article.seoTitle },
        { name: "description", content: article.description },
        { name: "keywords", content: article.keywords.join(", ") },
        { property: "og:title", content: article.seoTitle },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${BASE_URL}/publicaciones/${article.slug}` },
        { property: "og:locale", content: "es_ES" },
        {
          property: "og:image",
          content: absoluteAssetUrl(HOME_OG_IMAGE),
        },
        { property: "article:published_time", content: `${article.publishedAt}T09:00:00+02:00` },
        { property: "article:author", content: "Núria López" },
        { property: "article:section", content: article.category },
        { name: "twitter:title", content: article.seoTitle },
        { name: "twitter:description", content: article.description },
      ],
      links: [{ rel: "canonical", href: `${BASE_URL}/publicaciones/${article.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": `${BASE_URL}/publicaciones/${article.slug}#article`,
                headline: article.title,
                description: article.description,
                inLanguage: "es-ES",
                datePublished: `${article.publishedAt}T09:00:00+02:00`,
                dateModified: `${article.publishedAt}T09:00:00+02:00`,
                author: { "@type": "Person", name: "Núria López", url: `${BASE_URL}/sobre-mi` },
                publisher: { "@type": "Person", name: "Núria López", url: BASE_URL },
                mainEntityOfPage: `${BASE_URL}/publicaciones/${article.slug}`,
                about: article.keywords,
                keywords: article.keywords.join(", "),
                isPartOf: {
                  "@type": "CollectionPage",
                  name: "Publicaciones de Srta Serifa",
                  url: `${BASE_URL}/publicaciones`,
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Publicaciones",
                    item: `${BASE_URL}/publicaciones`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: article.title,
                    item: `${BASE_URL}/publicaciones/${article.slug}`,
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: article.faq.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: { "@type": "Answer", text: item.answer },
                })),
              },
            ],
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = articleBySlug.get(slug);
  if (!article) return null;

  const relatedArticles = article.relatedSlugs
    .map((slug) => articleBySlug.get(slug))
    .filter((relatedArticle): relatedArticle is (typeof articles)[number] =>
      Boolean(relatedArticle),
    );

  return (
    <div className="editorial-page">
      <main>
        <article className="article-page">
          <header className="article-hero">
            <div className="article-meta">
              <p className="editorial-kicker">
                {article.category} · {article.readingTime}
              </p>
              <nav className="book-breadcrumbs article-breadcrumbs" aria-label="Migas de pan">
                <a href="/">Inicio</a>
                <span aria-hidden="true">/</span>
                <a href="/publicaciones">Publicaciones</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{article.title}</span>
              </nav>
            </div>
            <h1>{article.title}</h1>
            <p className="article-excerpt">{article.excerpt}</p>
            <p className="article-byline">Por Núria López · 9 de agosto de 2026</p>
          </header>

          <div className="article-layout">
            <div className="article-content">
              {article.sections.map((section) => (
                <section key={section.heading} className="article-section">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
              <section className="article-faq" aria-labelledby="article-faq-title">
                <p className="editorial-kicker">Preguntas frecuentes</p>
                <h2 id="article-faq-title">Lo esencial, en breve</h2>
                {article.faq.map((item) => (
                  <div className="article-faq-item" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </section>
            </div>
            <aside className="article-aside" aria-label="Sobre este artículo">
              <p className="editorial-kicker">En esta nota</p>
              <p>{article.description}</p>
              <a className="project-button article-aside-button" href="/rol">
                Ver servicios <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </div>

          <section className="article-related" aria-labelledby="article-related-title">
            <p className="editorial-kicker">Seguir leyendo</p>
            <h2 id="article-related-title">Más sobre diseño, marca y sistemas</h2>
            <div className="article-related-grid">
              {relatedArticles.map((relatedArticle) => (
                <a
                  className="article-related-link"
                  href={`/publicaciones/${relatedArticle.slug}`}
                  key={relatedArticle.slug}
                >
                  <span>{relatedArticle.category}</span>
                  <strong>{relatedArticle.title}</strong>
                  <small>Leer artículo ↗</small>
                </a>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
