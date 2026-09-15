import { createFileRoute } from "@tanstack/react-router";
import brailleMotion from "@/assets/cuerpos-que-se-miran/cuerpos-braille.gif";
import detailImage from "@/assets/cuerpos-que-se-miran/cuerpos-detail.webp";
import heroImage from "@/assets/cuerpos-que-se-miran/cuerpos-hero.gif";
import posterOne from "@/assets/cuerpos-que-se-miran/cuerpos-poster-01.webp";
import posterTwo from "@/assets/cuerpos-que-se-miran/cuerpos-poster-02.webp";
import { OtherProjects } from "@/components/OtherProjects";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl } from "@/lib/seo";

const pageTitle = "Cuerpos que se miran: identidad expositiva con Blind Words";
const pageDescription =
  "Identidad visual para Cuerpos que se miran, una exposición de Arte Actual FLACSO que utiliza el sistema tipográfico de Blind Words para cuestionar los estereotipos sobre discapacidad.";

export const Route = createFileRoute("/proyectos/cuerpos-que-se-miran")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://srtaserifa.es/proyectos/cuerpos-que-se-miran",
      },
      { property: "og:image", content: absoluteAssetUrl(heroImage) },
      {
        property: "og:image:alt",
        content: "Identidad visual de la exposición Cuerpos que se miran",
      },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: absoluteAssetUrl(heroImage) },
      {
        name: "twitter:image:alt",
        content: "Identidad visual de la exposición Cuerpos que se miran",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://srtaserifa.es/proyectos/cuerpos-que-se-miran",
      },
    ],
  }),
  component: CuerposQueSeMiranPage,
});

function CuerposQueSeMiranPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Cuerpos que [se] miran",
    description: pageDescription,
    creator: {
      "@type": "Person",
      name: "Núria López",
      url: "https://srtaserifa.es/sobre-mi",
    },
    dateCreated: "2017",
    about: ["Diseño gráfico", "Tipografía", "Accesibilidad", "Identidad expositiva"],
    url: "https://srtaserifa.es/proyectos/cuerpos-que-se-miran",
  };

  return (
    <div className="editorial-page citizen-article-page cuerpos-article-page">
      <header className="editorial-header">
        <a
          href="/proyectos/blind-words"
          className="book-close-button"
          aria-label="Cerrar artículo y volver a Blind Words"
        >
          <span aria-hidden="true">×</span>
        </a>
      </header>

      <main className="citizen-article-main">
        <article>
          <div className="citizen-article-intro">
            <nav className="book-breadcrumbs" aria-label="Migas de pan">
              <a href="/proyectos">Proyectos</a>
              <span aria-hidden="true">/</span>
              <a href="/proyectos/blind-words">Blind Words</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Cuerpos que [se] miran</span>
            </nav>
            <h1>Cuerpos que [se] miran: cuando mirar también cambia el relato</h1>
            <p className="citizen-article-deck">
              La identidad de una exposición sobre nuevas representaciones de la discapacidad,
              construida a partir del sistema tipográfico de Blind Words.
            </p>
            <p className="citizen-article-type">Proyecto · 3 min.</p>
          </div>

          <figure className="citizen-article-hero cuerpos-article-hero">
            <img
              src={heroImage}
              alt="Identidad de Cuerpos que se miran sobre una imagen de la exposición"
            />
          </figure>

          <div className="citizen-article-body">
            <h2 className="citizen-article-lead">
              Blind Words nació para acercar dos formas de lectura. En Cuerpos que [se] miran,
              ese sistema se convirtió en la voz visual de una exposición que pedía mirar la
              discapacidad desde otro lugar.
            </h2>

            <p>
              Arte Actual FLACSO reunió en Quito el trabajo de artistas internacionales con
              discapacidad que cuestionaban las formas habituales de representación. La muestra,
              celebrada entre el 30 de mayo y el 21 de julio de 2017, buscaba impulsar nuevas
              narrativas y desmontar los estereotipos asociados a esos cuerpos.
            </p>

            <p>
              El reto era construir un código sencillo y reconocible capaz de acompañar obras y
              públicos distintos. El propio título dio la clave: las letras modulares de Blind
              Words, nacidas de la convivencia entre el alfabeto latino y la matriz braille, se
              convirtieron en el hilo visual de la exposición.
            </p>

            <div className="cuerpos-article-poster-grid" aria-label="Carteles de la exposición">
              <img
                src={posterOne}
                alt="Cartel de Cuerpos que se miran con un símbolo modular negro"
                loading="lazy"
                decoding="async"
              />
              <img
                src={posterTwo}
                alt="Segunda composición del cartel de Cuerpos que se miran"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h2>Una identidad que no aparta la mirada.</h2>

            <p>
              La exposición proponía dejar de entender la mirada como un gesto incómodo o
              políticamente incorrecto. Mirar podía ser también reconocer la existencia diversa,
              sus particularidades y su resistencia frente a la estigmatización. La identidad
              toma esa tensión y la convierte en una invitación directa: mirar, leerse y hacerse
              visible.
            </p>

            <p>
              Las formas de Blind Words se expandieron en carteles, piezas editoriales y soportes
              de sala. El sistema no actuaba como una decoración añadida; hacía visible la idea
              central del proyecto y conectaba el relato curatorial con una experiencia gráfica
              basada en el punto, el recorrido y el encuentro entre lenguajes.
            </p>

            <figure className="citizen-article-wide-media cuerpos-article-braille">
              <img
                src={brailleMotion}
                alt="Animación de puntos braille que construyen el sistema visual"
                loading="lazy"
              />
            </figure>

            <figure className="citizen-article-wide-media cuerpos-article-detail">
              <img
                src={detailImage}
                alt="Detalle en relieve de la identidad Cuerpos que se miran"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="citizen-article-facts cuerpos-article-facts">
              <p>
                <strong>Cliente</strong>
                <span>Arte Actual FLACSO</span>
              </p>
              <p>
                <strong>Proyecto</strong>
                <span>Identidad visual de exposición</span>
              </p>
              <p>
                <strong>Lugar y fecha</strong>
                <span>Quito · 30 mayo–21 julio 2017</span>
              </p>
              <p>
                <strong>Sistema tipográfico</strong>
                <a href="/proyectos/blind-words">Blind Words · Núria López ↗</a>
              </p>
            </div>

            <aside className="citizen-article-cta cuerpos-article-cta">
              <p className="citizen-article-kicker">Proyecto relacionado</p>
              <p>
                Cuerpos que [se] miran fue una de las primeras ocasiones en las que Blind Words
                dejó el espécimen para convertirse en la identidad de un contexto cultural real.
              </p>
              <div className="cuerpos-article-actions">
                <a className="citizen-article-contact" href="/proyectos/blind-words">
                  Volver a Blind Words <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="citizen-article-contact"
                  href="https://www.behance.net/gallery/52859373/Cuerpos-que-se-miran"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver proyecto original <span aria-hidden="true">↗</span>
                </a>
              </div>
            </aside>
          </div>
        </article>

        <OtherProjects currentHref="/proyectos/blind-words" />
      </main>

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <SiteFooter variant="floating" />
    </div>
  );
}
