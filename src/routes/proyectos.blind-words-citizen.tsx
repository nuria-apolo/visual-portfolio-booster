import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import campaignImage from "@/assets/blind-citizen-campaign.png";
import { OtherProjects } from "@/components/OtherProjects";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl } from "@/lib/seo";

export const Route = createFileRoute("/proyectos/blind-words-citizen")({
  head: () => ({
    meta: [
      {
        title: "Blind Words en una campaña internacional con Citizen — Srta Serifa",
      },
      {
        name: "description",
        content:
          "Blind Words, en uso real: la tipografía aparece en la cartela de una campaña audiovisual de Citizen, una agencia de Canadá.",
      },
      {
        property: "og:title",
        content: "Blind Words en una campaña internacional con Citizen — Srta Serifa",
      },
      {
        property: "og:description",
        content:
          "Blind Words, en uso real: la tipografía aparece en la cartela de una campaña audiovisual de Citizen, una agencia de Canadá.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://srtaserifa.es/proyectos/blind-words-citizen" },
      { property: "og:image", content: absoluteAssetUrl(campaignImage) },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://srtaserifa.es/proyectos/blind-words-citizen",
      },
    ],
  }),
  component: BlindWordsCitizenPage,
});

function BlindWordsCitizenPage() {
  const [videoRequested, setVideoRequested] = useState(false);

  return (
    <div className="editorial-page citizen-article-page">
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
              <span aria-current="page">Citizen</span>
            </nav>
            <h1>Blind Words en una campaña internacional con Citizen (Canadá)</h1>
            <p className="citizen-article-deck">
              Blind Words, en uso real: aparece en la cartela del nuevo anuncio de Citizen.
            </p>
            <p className="citizen-article-type">Proyecto · 3 min.</p>
          </div>

          <figure className="citizen-article-hero">
            <img
              src={campaignImage}
              alt="Manos sobre una composición de Blind Words con el texto Braille Nails"
            />
          </figure>

          <div className="citizen-article-body">
            <p className="citizen-article-lead">
              Hay proyectos que te recuerdan por qué haces tipografía. Citizen, una agencia de
              Canadá, ha usado mi tipografía Blind Words en la cartela de un anuncio, y todavía me
              cuesta no sonreír al verlo: una idea que nació en mi escritorio, hoy forma parte de
              una pieza real, publicada y viva.
            </p>

            <p>
              Blind Words empezó como un proyecto muy personal: una tipografía creada desde la
              intuición, el cuidado por el detalle y esas ganas de darle voz a un estilo que tenía
              en la cabeza pero aún no existía. Diseñarla fue un proceso de insistir, ajustar,
              probar, descartar y volver a empezar… hasta que apareció ese equilibrio entre carácter
              y legibilidad que yo buscaba.
            </p>

            <p>
              Por eso me hace tanta ilusión compartir esta colaboración: Citizen (Canadá) ha
              integrado Blind Words en la cartela del anuncio, y verla ahí —en un entorno
              audiovisual, dentro de un ritmo, una intención y un discurso— se siente como ver la
              tipografía “hacer su trabajo” de verdad.
            </p>

            <p>
              No solo como una muestra bonita en un PDF, sino como una decisión creativa que suma
              identidad, tono y presencia.
            </p>

            <div className="citizen-article-facts">
              <p>
                <strong>Agencia</strong>
                <a href="https://www.citizenrelations.com/en/" target="_blank" rel="noreferrer">
                  Citizen (Canadá) ↗
                </a>
              </p>
              <p>
                <strong>Tipografía</strong>
                Blind Words · Núria López
              </p>
            </div>

            <div className="citizen-article-video">
              {videoRequested ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/cI9YfVWejVM?rel=0&modestbranding=1"
                  title="Campaña audiovisual de Citizen con Blind Words"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="citizen-article-video-placeholder">
                  <img
                    src="/video-posters/citizen-braille-nails.png"
                    alt="Póster de la campaña Braille Nails de Citizen con Blind Words"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setVideoRequested(true)}
                    aria-label="Ver vídeo de la campaña de Citizen con Blind Words"
                  />
                  <p>Al cargarlo, YouTube puede utilizar cookies de terceros.</p>
                </div>
              )}
            </div>

            <aside className="citizen-article-cta">
              <p className="citizen-article-kicker">Cierre / llamada a la acción</p>
              <p>
                Gracias a Citizen por confiar en Blind Words para este proyecto. Si estás trabajando
                en una campaña, un branding o una pieza donde la tipografía tenga que decir algo por
                sí sola, escríbeme: me encantará ver si Blind Words —u otra tipografía a medida—
                encaja en lo que estás construyendo.
              </p>
              <a className="citizen-article-contact" href="mailto:srtaserifa@icloud.com">
                Hablemos <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </div>
        </article>
        <OtherProjects currentHref="/proyectos/blind-words" />
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
