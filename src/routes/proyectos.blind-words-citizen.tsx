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
        title: "Blind Words × Citizen: una tipografía que entra en conversación — Srta Serifa",
      },
      {
        name: "description",
        content:
          "Blind Words aparece en la campaña audiovisual Braille Nails de Citizen, una iniciativa canadiense para acercar el braille a la vida cotidiana.",
      },
      {
        property: "og:title",
        content: "Blind Words × Citizen: una tipografía que entra en conversación — Srta Serifa",
      },
      {
        property: "og:description",
        content:
          "Blind Words aparece en la campaña audiovisual Braille Nails de Citizen, una iniciativa canadiense para acercar el braille a la vida cotidiana.",
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
            <h1>Blind Words × Citizen: una tipografía que entra en conversación</h1>
            <p className="citizen-article-deck">
              La tipografía aparece en la campaña audiovisual Braille Nails, creada para acercar el
              braille a la vida cotidiana.
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
            <h2 className="citizen-article-lead">
              Hay proyectos que te recuerdan que una tipografía puede seguir creciendo mucho
              después de haberla terminado. Blind Words aparece en la campaña audiovisual Braille
              Nails, una iniciativa canadiense que lleva el braille a un lugar inesperado: las
              uñas.
            </h2>

            <p>
              Braille Nails fue impulsada por CNIB junto a THE TEN SPOT durante el Mes de la
              Alfabetización Braille en Canadá. Entre el 15 de enero y el 15 de febrero de 2026,
              las manicuras se convirtieron en una forma de apoyar los programas de alfabetización
              braille y, sobre todo, de abrir conversaciones sobre accesibilidad, autonomía y
              participación.
            </p>

            <p>
              Citizen, la agencia canadiense detrás de la pieza audiovisual, utilizó Blind Words en
              la cartela de la campaña. Verla acompañar las imágenes de las uñas —dentro de un
              ritmo, una intención y un discurso— es una de esas ocasiones en las que la tipografía
              deja de ser una muestra y empieza a formar parte de una historia compartida.
            </p>

            <p>
              Blind Words nació como una investigación personal sobre tipografía, tacto y la
              estructura de seis puntos del braille. Por eso esta aplicación tiene un significado
              especial: no se limita a hablar de inclusión, sino que ayuda a que una idea visual
              concebida desde el tacto encuentre un contexto real, público y cotidiano.
            </p>

            <div className="citizen-article-facts">
              <p>
                <strong>Agencia</strong>
                <a href="https://www.citizenrelations.com/en/" target="_blank" rel="noreferrer">
                  Citizen (Canadá) ↗
                </a>
              </p>
              <p>
                <strong>Campaña</strong>
                <a
                  href="https://www.newswire.ca/news-releases/cnib-partners-with-the-ten-spot-r-to-launch-braille-nails-in-support-of-braille-literacy-893221456.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Braille Nails · CNIB × THE TEN SPOT ↗
                </a>
              </p>
              <p>
                <strong>Tipografía</strong>
                <a href="/proyectos/blind-words">Blind Words · Núria López ↗</a>
              </p>
            </div>

            <div className="citizen-article-video">
              {videoRequested ? (
                <video controls playsInline preload="metadata" poster="/video-posters/citizen-braille-nails.png">
                  <source src="/videos/braille-nails-citizen.mp4" type="video/mp4" />
                  Tu navegador no puede reproducir este vídeo.
                </video>
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
                  <p>Vídeo de la campaña · Braille Nails</p>
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
