import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl, HOME_OG_IMAGE } from "@/lib/seo";

const BASE_URL = "https://srtaserifa.es";
const CONTACT_URL = `${BASE_URL}/contacto`;
const PAGE_TITLE = "Contacto profesional — Srta Serifa | Núria López";
const PAGE_DESCRIPTION =
  "Contacta con Núria López para plantear proyectos de estrategia, identidad, dirección de diseño y producto digital.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CONTACT_URL },
      { property: "og:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
    ],
    links: [{ rel: "canonical", href: CONTACT_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${CONTACT_URL}#webpage`,
          url: CONTACT_URL,
          name: "Contacto profesional — Srta Serifa",
          description: PAGE_DESCRIPTION,
          inLanguage: "es-ES",
          mainEntity: {
            "@id": `${BASE_URL}/#organization`,
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="editorial-page min-h-screen bg-[#f7f7f7] text-[#171713]">
      <main className="mx-auto w-full max-w-[1440px] px-5 pb-32 pt-28 sm:px-10 lg:px-16 lg:pb-40 lg:pt-36">
        <header className="border-b border-black/15 pb-16 lg:pb-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <nav className="book-breadcrumbs" aria-label="Migas de pan">
              <a href="/">Inicio</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contacto</span>
            </nav>
            <p className="editorial-section-label">Contacto · Srta Serifa</p>
          </div>

          <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.55fr)] lg:items-end lg:gap-20">
            <div>
              <p className="editorial-kicker">Empecemos por el contexto</p>
              <h1 className="mt-5 max-w-[900px] font-display text-[clamp(3.6rem,8vw,8.5rem)] leading-[0.86] tracking-[-0.055em] text-balance">
                Cuéntame qué tienes entre manos.
              </h1>
            </div>
            <p className="max-w-[34rem] text-lg leading-relaxed text-black/65 lg:pb-2">
              Si hay una marca difícil de explicar, un producto que necesita orden o un equipo que
              busca dirección, podemos empezar por una conversación concreta.
            </p>
          </div>

          <a
            className="mt-14 inline-flex min-h-14 items-center rounded-full bg-black px-7 py-4 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black lg:mt-20"
            href="mailto:srtaserifa@icloud.com"
          >
            srtaserifa@icloud.com ↗
          </a>
        </header>

        <section
          className="grid gap-14 border-b border-black/15 py-16 md:grid-cols-3 lg:gap-20 lg:py-24"
          aria-label="Cómo plantear una colaboración"
        >
          <article>
            <p className="editorial-kicker">01 · Antes de escribir</p>
            <h2 className="mt-5 font-display text-4xl leading-none tracking-[-0.035em]">
              Cuatro datos bastan para empezar.
            </h2>
            <p className="mt-6 leading-relaxed text-black/65">
              Cuéntame el contexto, el objetivo, el alcance aproximado y las fechas o condicionantes
              relevantes.
            </p>
          </article>

          <article>
            <p className="editorial-kicker">02 · La propuesta</p>
            <h2 className="mt-5 font-display text-4xl leading-none tracking-[-0.035em]">
              El alcance se construye a medida.
            </h2>
            <p className="mt-6 leading-relaxed text-black/65">
              No trabajo con paquetes ni tarifas fijas publicadas. La propuesta depende del
              problema, las necesidades y la forma de colaboración.
            </p>
          </article>

          <article>
            <p className="editorial-kicker">03 · Cuando encaja Apolo</p>
            <h2 className="mt-5 font-display text-4xl leading-none tracking-[-0.035em]">
              Algunos retos piden un equipo más amplio.
            </h2>
            <p className="mt-6 leading-relaxed text-black/65">
              Los proyectos de marca que necesitan estrategia, producción o perfiles complementarios
              pueden canalizarse a través de{" "}
              <a
                className="underline decoration-black/30 underline-offset-4 hover:decoration-black"
                href="https://universoapolo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apolo
              </a>
              .
            </p>
          </article>
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:py-24">
          <div>
            <p className="editorial-kicker">Mientras tanto</p>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.92] tracking-[-0.045em] text-balance">
              Puedes conocer el trabajo antes de plantear el siguiente paso.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              className="inline-flex min-h-12 items-center rounded-full border border-black/20 px-6 py-3 font-medium transition hover:border-black hover:bg-white"
              href="/servicios"
            >
              Ver servicios ↗
            </a>
            <a
              className="inline-flex min-h-12 items-center rounded-full border border-black/20 px-6 py-3 font-medium transition hover:border-black hover:bg-white"
              href="/proyectos"
            >
              Ver proyectos ↗
            </a>
          </div>
        </section>
      </main>

      <SiteFooter variant="floating" />
    </div>
  );
}
