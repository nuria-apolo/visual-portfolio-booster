import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Textos legales — Srta Serifa" },
      {
        name: "description",
        content: "Información legal, privacidad, cookies y accesibilidad de srtaserifa.",
      },
      { property: "og:url", content: "https://srtaserifa.es/legal" },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/legal" }],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <a href="/" className="legal-back-link">
          Volver a la Home ↗
        </a>
      </header>

      <main className="legal-content">
        <p className="legal-kicker">Información del sitio</p>
        <h1>Textos legales.</h1>
        <p className="legal-intro">
          Esta página reúne la información sobre el uso de esta web y las formas de contacto con
          Srta Serifa.
        </p>

        <section id="aviso-legal" className="legal-section">
          <p className="legal-section-number">01</p>
          <div>
            <h2>Aviso legal</h2>
            <p>
              Esta web pertenece a Núria López, que se presenta profesionalmente bajo la marca Srta
              Serifa. Para cualquier consulta relacionada con el sitio puedes escribir a
              srtaserifa@icloud.com.
            </p>
            <p>
              Los contenidos, textos, imágenes y elementos gráficos de esta web están protegidos por
              la normativa aplicable de propiedad intelectual. No se permite su reproducción o
              reutilización sin autorización previa.
            </p>
          </div>
        </section>

        <section id="privacidad" className="legal-section">
          <p className="legal-section-number">02</p>
          <div>
            <h2>Privacidad</h2>
            <p>
              Si escribes a través del correo electrónico, los datos incluidos en el mensaje se
              utilizarán únicamente para responder a tu consulta y mantener la comunicación
              solicitada.
            </p>
            <p>
              No se venden ni se ceden datos personales con fines comerciales. Puedes solicitar
              información, rectificación o eliminación de los datos tratados escribiendo a
              srtaserifa@icloud.com.
            </p>
          </div>
        </section>

        <section id="cookies" className="legal-section">
          <p className="legal-section-number">03</p>
          <div>
            <h2>Cookies</h2>
            <p>
              Esta web no utiliza herramientas propias de analítica, publicidad comportamental ni
              perfiles de usuario en esta versión. Los servicios externos necesarios para cargar
              recursos, como las fuentes web, pueden realizar sus propias solicitudes técnicas.
            </p>
          </div>
        </section>

        <section id="accesibilidad" className="legal-section">
          <p className="legal-section-number">04</p>
          <div>
            <h2>Accesibilidad</h2>
            <p>
              El sitio se está construyendo para funcionar con teclado, lectores de pantalla y
              distintas dimensiones de pantalla. Si encuentras una barrera de acceso, puedes
              comunicarla en srtaserifa@icloud.com.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter variant="floating" />
    </div>
  );
}
