import { createFileRoute } from "@tanstack/react-router";
import heroObsidian from "@/assets/hero-obsidian.jpg";
import portraitNuria from "@/assets/portrait-nuria.jpg";
import projectGyotaku from "@/assets/project-gyotaku.jpg";
import projectBlindwords from "@/assets/project-blindwords.jpg";
import projectApolo from "@/assets/project-apolo.jpg";
import postVibe from "@/assets/post-vibe.jpg";
import postHabitat from "@/assets/post-habitat.jpg";
import postPortfolio from "@/assets/post-portfolio.jpg";

const SITE_TITLE = "Srta Serifa — Núria López · Diseño, táctica y producto";
const SITE_DESCRIPTION =
  "Portfolio de Núria López (Srta Serifa), Head of Design en Apolo. Branding, tipografía, producto digital y MVPs construidos con criterio visual y rigor táctico.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "keywords", content: "diseño gráfico, branding, tipografía, Head of Design, Apolo, portfolio diseñadora, MVP, producto digital, Núria López, Srta Serifa" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroObsidian },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: heroObsidian },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

type Project = {
  num: string;
  title: string;
  type: string;
  description: string;
  image: string;
  alt: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Del gyotaku al branding",
    type: "Identidad · Branding",
    description:
      "Diseñar una marca con verdad partiendo de la técnica japonesa de estampación de peces. Textura, gesto y memoria material.",
    image: projectGyotaku,
    alt: "Estampación gyotaku en negro sobre papel crema como base de un sistema de identidad",
  },
  {
    num: "02",
    title: "Blind Words",
    type: "Tipografía inclusiva",
    description:
      "Tipografía que fusiona Braille y alfabeto latino en un mismo glifo. Campaña internacional con Citizen (Canadá).",
    image: projectBlindwords,
    alt: "Espécimen tipográfico de Blind Words con letras blancas y puntos Braille sobre fondo negro",
  },
  {
    num: "03",
    title: "universoapolo.com",
    type: "Web · Galardonada con LAUS",
    description:
      "Una web con un LAUS debajo del brazo. Dirección de arte y diseño de producto para la consultora de branding Apolo.",
    image: projectApolo,
    alt: "Mockup de la web universoapolo.com con galardón LAUS de diseño gráfico",
  },
];

const posts = [
  {
    date: "MAR 2026",
    title: "Vibe Coding: por qué ya no diseño «solo» pantallas.",
    image: postVibe,
    alt: "Texturas oscuras de papel y tinta — pieza editorial Vibe Coding",
  },
  {
    date: "FEB 2026",
    title: "NOTE© #18 — El hábitat del diseño.",
    image: postHabitat,
    alt: "Estudio de luz y sombra arquitectónica — ensayo El hábitat del diseño",
  },
  {
    date: "ENE 2026",
    title: "Qué poner en tu portfolio de diseño (y qué quitar ya).",
    image: postPortfolio,
    alt: "Pila de láminas tipográficas — guía de portfolio de diseño gráfico",
  },
];

const faqs = [
  {
    q: "¿Cómo impulso tu marca trabajando contigo en Apolo?",
    a: "Como Head of Design en Apolo Propulsora de Marcas, integro diseño táctico, tipografía y producto digital para convertir identidades en motores de crecimiento. El resultado: marcas que venden más y conectan más profundo.",
  },
  {
    q: "¿En qué proyectos de Apolo participas directamente?",
    a: "Desde el branding inicial hasta apps y webs propulsoras. Lidero la táctica visual para marcas en expansión: al elegir mi expertise accedes al equipo completo de Apolo sin dilaciones.",
  },
  {
    q: "¿Por qué el diseño vía Apolo genera más impacto?",
    a: "No es solo bonito: es estratégico, medible y alineado con propulsión de marca. Los clientes repiten porque ven números crecer — y porque nos divertimos haciendo cosas serias.",
  },
  {
    q: "¿Trabajas también en MVPs y producto?",
    a: "Sí. Ayudo a convertir ideas en productos reales combinando diseño, no-code e inteligencia artificial. Velocidad de salida sin renunciar al criterio.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav
        aria-label="Navegación principal"
        className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 px-6 py-4 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a
            href="#top"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground"
          >
            Srtaserifa <span className="text-muted-foreground">/ 26</span>
          </a>
          <ul className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:flex">
            <li>
              <a href="#proyectos" className="transition-colors hover:text-foreground">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#criterio" className="transition-colors hover:text-foreground">
                Criterio
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className="transition-colors hover:text-foreground">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#contacto" className="transition-colors hover:text-foreground">
                Contacto
              </a>
            </li>
          </ul>
          <a
            href="#contacto"
            className="rounded-full border border-border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:hidden"
          >
            Contacto
          </a>
        </div>
      </nav>

      <main id="top" className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-24 pt-12">
          <div className="mx-auto max-w-6xl">
            <p className="animate-fade-up font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Núria López · 1992 · Head of Design @ Apolo
            </p>
            <h1 className="animate-fade-up mt-6 font-display text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.95] tracking-tight text-balance">
              Diseño<span className="text-accent">*</span>
              <br />
              táctica<span className="text-accent">*</span>
              <br />
              <span className="italic">producto</span>
              <span className="text-accent">*</span>
            </h1>
            <div className="mt-12 grid gap-10 md:grid-cols-[1fr_minmax(0,2fr)] md:gap-16">
              <div className="relative">
                <img
                  src={portraitNuria}
                  alt="Retrato en blanco y negro de Núria López, diseñadora y Head of Design en Apolo"
                  width={800}
                  height={1024}
                  className="aspect-[4/5] w-full max-w-[260px] object-cover grayscale outline -outline-offset-1 outline-white/10"
                />
              </div>
              <div className="animate-fade-up max-w-[58ch] text-pretty">
                <p className="text-xl font-light leading-relaxed text-foreground/90">
                  Soy <strong className="font-medium">Núria López</strong>. Lidero el equipo de diseño en Apolo,
                  una consultora de branding y producción audiovisual que propulsa marcas mediante creatividad y estrategia.
                </p>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  <em>Srtaserifa</em> es mi espacio personal — donde el diseño se convierte en conversación.
                  Como la obsidiana: <span className="text-foreground">táctil, profunda, con capas que revelan sentido</span> al
                  observar con atención. Trabajo desde el diseño, el producto digital y la táctica que traduce ideas,
                  cuestiona estructuras y abre nuevas posibilidades.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative obsidian band */}
          <div
            aria-hidden
            className="pointer-events-none mt-20 h-32 w-full bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${heroObsidian})` }}
          />
        </section>

        {/* Capabilities */}
        <section
          aria-labelledby="capacidades-heading"
          className="border-y border-border bg-surface px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="capacidades-heading"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              Capacidades
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              <article className="border-l border-accent/40 pl-6">
                <h3 className="font-display text-3xl italic">Proyectos</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Diseño productos digitales, marcas y webs que existen de verdad: cosas que la
                  gente usa, compra o visita. No solo conceptos bonitos.
                </p>
              </article>
              <article className="border-l border-accent/40 pl-6">
                <h3 className="font-display text-3xl italic">MVPs</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Ayudo a convertir ideas en productos reales combinando diseño, no-code e
                  inteligencia artificial. De la idea al despliegue sin perder criterio.
                </p>
              </article>
              <article className="border-l border-accent/40 pl-6">
                <h3 className="font-display text-3xl italic">Criterio</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Escribo sobre oficio, táctica y decisiones de diseño para ver el trabajo
                  con más perspectiva y menos humo.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="proyectos"
          aria-labelledby="proyectos-heading"
          className="px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 flex items-end justify-between">
              <h2
                id="proyectos-heading"
                className="font-display text-5xl italic leading-none"
              >
                Proyectos
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Selección 2023—2026
              </span>
            </div>

            <div className="space-y-24">
              {projects.map((p, i) => (
                <article
                  key={p.num}
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="group relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.alt}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover outline -outline-offset-1 outline-white/10 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </figure>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                        — {p.num}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        {p.type}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                      {p.title}
                    </h3>
                    <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <a
                      href="#contacto"
                      className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground transition-colors hover:text-accent"
                    >
                      Ver caso de estudio
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Criterio / Blog */}
        <section
          id="criterio"
          aria-labelledby="criterio-heading"
          className="border-t border-border bg-surface/50 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  NOTE© — Journal
                </p>
                <h2
                  id="criterio-heading"
                  className="mt-3 font-display text-5xl italic leading-none"
                >
                  Criterio
                </h2>
              </div>
              <a
                href="#"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Suscríbete →
              </a>
            </div>

            <ul className="divide-y divide-border">
              {posts.map((post) => (
                <li key={post.title}>
                  <a
                    href="#"
                    className="group grid grid-cols-[80px_minmax(0,1fr)_auto] items-center gap-5 py-6 transition-colors sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:gap-8"
                  >
                    <img
                      src={post.image}
                      alt={post.alt}
                      width={160}
                      height={160}
                      loading="lazy"
                      className="aspect-square w-full object-cover outline -outline-offset-1 outline-white/10"
                    />
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {post.date}
                      </p>
                      <h3 className="mt-2 font-display text-xl leading-snug transition-colors group-hover:text-accent sm:text-2xl">
                        {post.title}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="hidden font-mono text-xs text-muted-foreground transition-transform group-hover:translate-x-1 sm:block"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sobre mí */}
        <section
          id="sobre-mi"
          aria-labelledby="sobre-mi-heading"
          className="px-6 py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_minmax(0,1.5fr)] md:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Sobre mí
              </p>
              <h2
                id="sobre-mi-heading"
                className="mt-3 font-display text-4xl italic leading-tight"
              >
                Diseño como dialecto.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Concibo el diseño como un dialecto entre lo que es y lo que podría ser. Una
                herramienta de lectura, interpretación y transformación del presente.
              </p>
              <p>
                Una forma de hacer visible lo invisible, de construir significado y abrir
                nuevas formas de relación entre <span className="text-foreground">ideas, personas y sistemas</span>.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Base
                  </dt>
                  <dd className="mt-1 font-display text-lg">Barcelona</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Rol
                  </dt>
                  <dd className="mt-1 font-display text-lg">Head of Design</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Equipo
                  </dt>
                  <dd className="mt-1 font-display text-lg">Apolo</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Reconocimientos
                  </dt>
                  <dd className="mt-1 font-display text-lg">LAUS · Citizen</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="border-y border-border bg-surface px-6 py-24"
        >
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-display text-4xl italic leading-tight"
            >
              Preguntas que me hacen a menudo.
            </h2>

            <div className="mt-12 divide-y divide-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <span className="font-display text-xl leading-snug">{f.q}</span>
                    <span
                      aria-hidden
                      className="mt-1 font-mono text-lg text-muted-foreground transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="contacto"
          aria-labelledby="contacto-heading"
          className="relative overflow-hidden px-6 py-32 text-center"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${heroObsidian})` }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-background"
          />
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Contacto
            </p>
            <h2
              id="contacto-heading"
              className="mt-4 font-display text-[clamp(2.5rem,8vw,5rem)] font-bold italic leading-[1.05] text-balance"
            >
              ¿Creamos algo con <span className="text-accent">peso</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Cuéntame en qué estás trabajando. Respondo siempre que el proyecto encaje con el momento.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hola@srtaserifa.com"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                hola@srtaserifa.com
              </a>
              <a
                href="https://www.universoapolo.com/contacto"
                className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Vía Apolo →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl italic">Srtaserifa</p>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Espacio personal de Núria López. Diseño, táctica y producto desde Barcelona.
            </p>
          </div>
          <nav aria-label="Sígueme">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Sígueme
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="https://www.instagram.com/srtaserifa" className="hover:text-accent">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/nurialopez" className="hover:text-accent">LinkedIn</a></li>
              <li><a href="https://www.behance.net/srtaserifa" className="hover:text-accent">Behance</a></li>
              <li><a href="#" className="hover:text-accent">Twitter</a></li>
            </ul>
          </nav>
          <nav aria-label="Navegación pie">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Mapa
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#proyectos" className="hover:text-accent">Proyectos</a></li>
              <li><a href="#criterio" className="hover:text-accent">Criterio</a></li>
              <li><a href="#sobre-mi" className="hover:text-accent">Sobre mí</a></li>
              <li><a href="#contacto" className="hover:text-accent">Contacto</a></li>
            </ul>
          </nav>
        </div>
        <p className="mx-auto mt-16 max-w-6xl border-t border-border pt-8 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © 2026 Núria López · Hecho con criterio
        </p>
      </footer>
    </div>
  );
}
