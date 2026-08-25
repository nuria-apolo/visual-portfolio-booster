import { articleBySlug, articles } from "@/data/articles";

type ServiceRelatedArticlesProps = {
  heading: string;
  id: string;
  slugs: readonly string[];
};

export function ServiceRelatedArticles({ heading, id, slugs }: ServiceRelatedArticlesProps) {
  const relatedArticles = slugs
    .map((slug) => articleBySlug.get(slug))
    .filter((article): article is (typeof articles)[number] => Boolean(article));

  return (
    <section className="service-related-articles" aria-labelledby={`${id}-title`}>
      <header className="service-related-heading">
        <p className="editorial-kicker">Artículos relacionados</p>
        <h2 id={`${id}-title`}>{heading}</h2>
      </header>
      <div
        className={`service-related-grid ${relatedArticles.length === 2 ? "is-two-columns" : ""}`}
      >
        {relatedArticles.map((article) => (
          <a
            className="service-related-link"
            href={`/publicaciones/${article.slug}`}
            key={article.slug}
          >
            <span className="editorial-kicker">{article.category}</span>
            <strong>{article.title}</strong>
            <small>
              Artículo · {article.readingTime} <span aria-hidden="true">↗</span>
            </small>
          </a>
        ))}
      </div>
    </section>
  );
}
