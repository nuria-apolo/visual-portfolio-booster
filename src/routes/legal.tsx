import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl, HOME_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Textos legales — Srta Serifa" },
      {
        name: "description",
        content: "Información legal, privacidad, cookies y accesibilidad de srtaserifa.",
      },
      { property: "og:title", content: "Textos legales — Srta Serifa" },
      {
        property: "og:description",
        content: "Información legal, privacidad, cookies y accesibilidad de srtaserifa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://srtaserifa.es/legal" },
      { property: "og:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
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
          Esta página reúne la información sobre el uso de esta web, el tratamiento de datos y las
          formas de contacto con Srta Serifa.
        </p>

        <section id="aviso-legal" className="legal-section">
          <p className="legal-section-number">01</p>
          <div>
            <h2>Aviso legal</h2>
            <p>
              Titular: Núria López. Nombre profesional: Srta Serifa. Domicilio: C/ Sierra Nevada, 7,
              11406 Jerez de la Frontera. NIF: 32086159D. Para cualquier consulta relacionada con el
              sitio puedes escribir a srtaserifa@icloud.com.
            </p>
            <p>
              Esta web es el portfolio y espacio profesional personal de Núria López. Los
              contenidos, textos, imágenes y elementos gráficos están protegidos por la normativa
              aplicable de propiedad intelectual. No se permite su reproducción o reutilización sin
              autorización previa.
            </p>
          </div>
        </section>

        <section id="privacidad" className="legal-section">
          <p className="legal-section-number">02</p>
          <div>
            <h2>Privacidad</h2>
            <p>
              La responsable del tratamiento es Núria López. Si escribes a través del correo
              electrónico o utilizas el formulario de contacto, se tratarán los datos que incluyas
              para responder a tu consulta, gestionar una posible colaboración o mantener la
              comunicación solicitada. El formulario puede solicitar nombre, email, tipo de proyecto
              y el contenido del mensaje.
            </p>
            <p>
              La base jurídica será la adopción de medidas precontractuales cuando la consulta esté
              relacionada con una posible colaboración o servicio, el interés legítimo en gestionar
              las comunicaciones y, cuando corresponda, el cumplimiento de obligaciones legales. Los
              datos se conservarán durante el tiempo necesario para atender la consulta y, después,
              durante los plazos legales aplicables para atender posibles responsabilidades.
            </p>
            <p>
              No se venden ni se ceden datos personales con fines comerciales. Podrán intervenir
              proveedores técnicos de correo, formulario y alojamiento necesarios para prestar el
              servicio; actualmente el envío del formulario está preparado para utilizar Resend como
              proveedor de correo. No se elaboran perfiles ni se toman decisiones automatizadas.
              Puedes ejercer los derechos de acceso, rectificación, supresión, limitación, oposición
              y portabilidad escribiendo a srtaserifa@icloud.com. También puedes reclamar ante la
              Agencia Española de Protección de Datos.
            </p>
            <p>
              No se utilizarán los datos del formulario para enviar comunicaciones comerciales sin
              una base jurídica adicional y, cuando sea necesario, tu consentimiento específico.
            </p>
          </div>
        </section>

        <section id="cookies" className="legal-section">
          <p className="legal-section-number">03</p>
          <div>
            <h2>Cookies</h2>
            <p>
              Esta web no utiliza cookies propias de analítica, publicidad comportamental ni
              perfiles de usuario. Puede utilizar recursos técnicos necesarios para servir la web y
              cargar fuentes externas. Estos proveedores pueden recibir datos técnicos de la
              conexión según sus propias políticas.
            </p>
            <p>
              El vídeo de YouTube incluido en un proyecto no se carga automáticamente. Solo se
              solicita a YouTube cuando pulsas el botón para verlo; en ese momento pueden aplicarse
              cookies y tratamientos del propio proveedor. Puedes consultar la política de
              privacidad de YouTube antes de cargarlo.
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
