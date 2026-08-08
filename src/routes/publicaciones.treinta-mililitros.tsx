import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "30 mililitros — Núria López · Srta Serifa";
const DESCRIPTION = "30 mililitros, una publicación de Núria López bajo el sello Srta Serifa.";

export const Route = createFileRoute("/publicaciones/treinta-mililitros")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "book" },
      { property: "og:url", content: "https://srtaserifa.es/publicaciones/treinta-mililitros" },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/publicaciones/treinta-mililitros" }],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <div className="editorial-page">
      <header className="editorial-header">
        <a href="/" className="editorial-brand">
          srtaserifa
        </a>
        <a
          href="/publicaciones"
          className="book-close-button"
          aria-label="Cerrar ficha y volver a Publicaciones"
        >
          <span aria-hidden="true">×</span>
        </a>
      </header>
      <main>
        <article className="book-page">
          <div className="book-cover" aria-label="Portada de 30 mililitros">
            <img
              src="/covers/treinta-mililitros.png?v=2"
              alt="Portada de 30 mililitros, de Núria López"
              width="1294"
              height="1994"
            />
          </div>
          <div className="book-copy">
            <nav className="book-breadcrumbs" aria-label="Migas de pan">
              <a href="/publicaciones">Publicaciones</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">30 mililitros</span>
            </nav>
            <h1>30 mililitros</h1>
            <p className="editorial-lede">
              El amor en 23 preparaciones: un libro sobre el café, las historias que aparecen
              alrededor de una taza y las distintas formas de compartir el tiempo.
            </p>
            <section className="editorial-prose">
              <h2>Sinopsis</h2>
              <p>
                30 mililitros reúne pequeñas escenas, recuerdos y conversaciones relacionadas con el
                café. Cada preparación abre una historia distinta: una forma de mirar lo cotidiano y
                de quedarse un momento más alrededor de la mesa.
              </p>
            </section>
            <div className="book-details">
              <p className="editorial-kicker">Datos de interés</p>
              <dl className="book-details-list">
                <div>
                  <dt>Autora</dt>
                  <dd>Núria López</dd>
                </div>
                <div>
                  <dt>Tipo</dt>
                  <dd>Libro</dd>
                </div>
                <div>
                  <dt>Contenido</dt>
                  <dd>23 preparaciones</dd>
                </div>
              </dl>
            </div>
            <a
              className="editorial-link editorial-link-disabled"
              href="mailto:srtaserifa@icloud.com"
            >
              Preguntar por el libro ↗
            </a>
          </div>
        </article>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
