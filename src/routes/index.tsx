import { createFileRoute } from "@tanstack/react-router";
import heroObsidian from "@/assets/hero-obsidian.jpg";
import portraitNuria from "@/assets/portrait-nuria.jpg";
import portraitFramer from "@/assets/nuria-framer.jpg";
import postVibe from "@/assets/post-vibe.jpg";
import postHabitat from "@/assets/post-habitat.jpg";
import postPortfolio from "@/assets/post-portfolio.jpg";
import { projects } from "@/data/projects";

const SITE_TITLE = "Srta Serifa — Portfolio en construcción";
const SITE_DESCRIPTION =
  "El nuevo portfolio de Núria López, Srta Serifa, está en construcción. Diseño, táctica y producto desde Barcelona.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "diseño gráfico, branding, tipografía, Head of Design, Apolo, portfolio diseñadora, MVP, producto digital, Núria López, Srta Serifa",
      },
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
  component: ConstructionPage,
});

const posts = [
  {
    date: "MAR 2026",
    title: "Vibe Coding: por qué ya no diseño «solo» pantallas.",
    href: "https://grounded-focus-364680.framer.app/vibe-coding-por-que-ya-no-diseno-solo-pantallas",
    image: postVibe,
    alt: "Texturas oscuras de papel y tinta — pieza editorial Vibe Coding",
  },
  {
    date: "FEB 2026",
    title: "NOTE© #18 — El hábitat del diseño.",
    href: "https://grounded-focus-364680.framer.app/18-el-habitat-del-diseno",
    image: postHabitat,
    alt: "Estudio de luz y sombra arquitectónica — ensayo El hábitat del diseño",
  },
  {
    date: "ENE 2026",
    title: "Qué poner en tu portfolio de diseño (y qué quitar ya).",
    href: "https://grounded-focus-364680.framer.app/que-poner-en-tu-portfolio-de-diseno-grafico-(y-que-deberias-quitar-ya)",
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

function ConstructionPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f1f2f4] p-3 text-[#171717] sm:p-6">
      <div className="relative mx-auto flex min-h-[calc(100vh-24px)] max-w-[1180px] flex-col overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_20px_80px_rgba(0,0,0,.06)] sm:min-h-[calc(100vh-48px)]">
        <header className="flex items-center justify-between px-6 py-6 sm:px-10">
          <p className="text-sm font-semibold tracking-[-0.02em]">Srta Serifa</p>
          <span className="rounded-full bg-[#f1f2f4] px-4 py-2 text-xs text-black/55">
            Barcelona · 2026
          </span>
        </header>

        <div className="relative z-10 flex flex-1 flex-col justify-between px-6 pb-8 pt-12 sm:px-10 sm:pb-10 lg:px-16 lg:pt-16">
          <div className="max-w-[900px]">
            <div className="mb-8 flex items-center gap-4">
              <img
                src={portraitNuria}
                alt="Retrato de Núria López"
                className="size-16 rounded-full object-cover grayscale"
              />
              <div>
                <p className="font-semibold tracking-[-0.025em]">Núria López</p>
                <p className="mt-1 text-sm text-black/45">Diseño · Táctica · Producto</p>
              </div>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/38">
              Algo nuevo está tomando forma
            </p>
            <h1 className="mt-5 text-[clamp(3.6rem,10vw,9.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
              Portfolio
              <br />
              en construcción<span className="text-black/25">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-black/52 sm:text-lg">
              Estoy ordenando proyectos, ideas y aprendizajes para enseñar el trabajo como merece.
              Mientras tanto, si tienes algo entre manos, hablemos.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:srtaserifa@icloud.com"
                className="rounded-xl bg-[#171717] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/10"
              >
                srtaserifa@icloud.com ↗
              </a>
              <a
                href="https://www.linkedin.com/in/srtaserifa/"
                className="rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-medium shadow-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <footer className="mt-16 flex flex-col gap-3 border-t border-black/8 pt-6 text-xs text-black/38 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Núria López · Srta Serifa</p>
            <p>Diseñando la siguiente versión</p>
          </footer>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -right-24 size-[420px] rounded-full opacity-[0.09] sm:size-[600px]"
          style={{
            backgroundImage: `url(${heroObsidian})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </div>
    </main>
  );
}

export function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f2eb] text-[#171713] selection:bg-[#ff4f1f] selection:text-white">
      <nav
        className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-black/12 bg-[#f5f2eb]/90 px-5 backdrop-blur-xl sm:px-10 lg:px-16"
        aria-label="Navegación principal"
      >
        <a
          href="#top"
          className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs font-medium uppercase tracking-[-0.03em]"
        >
          Srtaserifa
        </a>
        <ul className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.08em] md:flex">
          <li>
            <a className="transition hover:text-[#ff4f1f]" href="#trabajo">
              Proyectos*
            </a>
          </li>
          <li>
            <a className="transition hover:text-[#ff4f1f]" href="#sobre-mi">
              Sobre mí*
            </a>
          </li>
          <li>
            <a className="transition hover:text-[#ff4f1f]" href="#criterio">
              Materia*
            </a>
          </li>
        </ul>
        <a
          href="mailto:srtaserifa@icloud.com"
          className="rounded-full border border-black/20 px-4 py-2 text-xs font-semibold transition hover:bg-black hover:text-white"
        >
          Hablemos ↗
        </a>
      </nav>

      <main id="top">
        <section className="grid min-h-[calc(100svh-4rem)] grid-rows-[1fr_auto] px-5 pb-6 pt-10 sm:px-10 lg:px-16 lg:pt-16">
          <div className="grid content-between gap-12 xl:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <div className="flex items-center gap-3 text-sm">
                <img
                  src={portraitFramer}
                  alt="Retrato de Núria López"
                  className="size-11 rounded-full object-cover grayscale"
                />
                <p>
                  <span className="font-semibold">Soy Núria López (1992).</span>
                  <br />
                  <span className="text-black/50">Head of Design · Barcelona</span>
                </p>
              </div>
              <h1 className="mt-12 max-w-[1100px] text-[clamp(3.3rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.08em]">
                Diseño*táctica*
                <br />
                producto<span className="text-[#ff4f1f]">*</span>
              </h1>
            </div>
            <div className="self-end border-l border-black/15 pl-6 text-sm leading-relaxed text-black/60">
              <p>
                Lidero el equipo de diseño en Apolo, una consultora de branding y producción
                audiovisual que ayuda a propulsar marcas mediante creatividad y estrategia.
              </p>
              <p className="mt-5 font-medium text-black">
                Srtaserifa es diseño convertido en conversación.
              </p>
            </div>
          </div>
          <div className="mt-16 flex items-end justify-between border-t border-black/15 pt-5 text-xs uppercase tracking-[0.08em] text-black/50">
            <span>Trabajo seleccionado · 2024—26</span>
            <a href="#trabajo" className="text-black">
              Explorar ↓
            </a>
          </div>
        </section>

        <section
          id="trabajo"
          className="border-t border-black/12 px-5 py-20 sm:px-10 lg:px-16 lg:py-28"
        >
          <div className="mb-14 flex items-end justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-black/45">Proyectos (03)</p>
              <h2 className="mt-4 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-none tracking-[-0.065em]">
                Trabajo con intención.
              </h2>
            </div>
            <a href="/proyectos" className="hidden border-b border-black pb-1 text-sm sm:block">
              Ver archivo completo ↗
            </a>
          </div>
          <div className="space-y-28">
            {projects.map((project, index) => (
              <article key={project.num} className="group">
                <div
                  className={`grid gap-8 lg:gap-14 ${index % 2 ? "lg:grid-cols-[0.72fr_1.28fr]" : "lg:grid-cols-[1.28fr_0.72fr]"}`}
                >
                  <div className={`overflow-hidden bg-[#e4dfd4] ${index % 2 ? "lg:order-2" : ""}`}>
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="aspect-[4/3] h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="flex flex-col justify-between border-t border-black/20 pt-5">
                    <div className="flex justify-between text-xs uppercase tracking-[0.1em] text-black/45">
                      <span>
                        {project.num} · {project.type}
                      </span>
                      <span>{project.year}</span>
                    </div>
                    <div className="py-10 lg:py-16">
                      <h3 className="text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.93] tracking-[-0.065em]">
                        {project.title}
                      </h3>
                      <p className="mt-6 max-w-lg text-base leading-relaxed text-black/58">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-end justify-between border-t border-black/12 pt-5">
                      <p className="max-w-sm text-sm font-medium">
                        {index === 0
                          ? "Materia convertida en un sistema de marca con memoria."
                          : index === 1
                            ? "Un mismo signo leído con los ojos y con las manos."
                            : "Dirección de arte, producto digital y una experiencia premiada."}
                      </p>
                      <a
                        href={project.href}
                        aria-label={`Ver proyecto ${project.title}`}
                        className="grid size-12 place-items-center rounded-full border border-black/25 transition group-hover:rotate-45 group-hover:bg-[#ff4f1f] group-hover:text-white"
                      >
                        ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a
            href="/proyectos"
            className="mt-16 inline-flex border-b border-black pb-1 text-sm sm:hidden"
          >
            Ver archivo completo ↗
          </a>
        </section>

        <section
          id="sobre-mi"
          className="grid border-y border-black/12 bg-[#171713] text-[#f5f2eb] lg:grid-cols-[0.75fr_1.25fr]"
        >
          <div className="min-h-[420px] overflow-hidden lg:min-h-[720px]">
            <img
              src={portraitFramer}
              alt="Núria López, diseñadora y Head of Design"
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div className="flex flex-col justify-between px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
            <p className="text-xs uppercase tracking-[0.12em] text-white/45">Sobre mí</p>
            <div className="py-16">
              <p className="text-[clamp(2rem,4.2vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em]">
                Como la obsidiana: táctil, profunda, con capas que revelan sentido al observar con
                atención.
              </p>
              <p className="mt-9 max-w-xl text-base leading-relaxed text-white/58">
                Trabajo desde el diseño, el producto digital y la táctica que traduce ideas,
                cuestiona estructuras y da forma a nuevas posibilidades. Concibo el diseño como un
                dialecto entre lo que es y lo que podría ser: una herramienta de lectura,
                interpretación y transformación del presente.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-px border border-white/15 sm:grid-cols-4">
              {[
                ["12+", "años diseñando"],
                ["LAUS", "diseño reconocido"],
                ["Citizen", "colaboración global"],
                ["∞", "curiosidad aplicada"],
              ].map(([value, label]) => (
                <div key={label} className="p-5">
                  <dd className="text-2xl font-semibold">{value}</dd>
                  <dt className="mt-2 text-[11px] text-white/45">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-black/45">Cómo puedo ayudar</p>
              <h2 className="mt-4 text-5xl font-medium leading-none tracking-[-0.06em]">
                De la idea
                <br />
                al sistema.
              </h2>
            </div>
            <div className="divide-y divide-black/15 border-t border-black/15">
              {[
                [
                  "01",
                  "Identidad & branding",
                  "Ideas de marca capaces de convertirse en lenguaje y crecer sin perderse.",
                ],
                [
                  "02",
                  "Producto digital",
                  "Experiencias claras que unen utilidad, personalidad y negocio.",
                ],
                [
                  "03",
                  "Dirección creativa",
                  "Criterio y acompañamiento para equipos, campañas y marcas en movimiento.",
                ],
                [
                  "04",
                  "MVPs & IA",
                  "Prototipos funcionales para aprender antes y avanzar con intención.",
                ],
              ].map(([num, title, text]) => (
                <article key={num} className="grid gap-4 py-7 sm:grid-cols-[48px_1fr_1fr]">
                  <span className="text-xs text-black/35">{num}</span>
                  <h3 className="text-xl font-semibold tracking-[-0.035em]">{title}</h3>
                  <p className="text-sm leading-relaxed text-black/52">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="criterio"
          className="border-t border-black/12 px-5 py-20 sm:px-10 lg:px-16 lg:py-28"
        >
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-black/45">NOTE© · Journal</p>
              <h2 className="mt-4 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-none tracking-[-0.065em]">
                Pensar también es diseñar.
              </h2>
            </div>
          </div>
          <div className="mt-14 divide-y divide-black/15 border-y border-black/15">
            {posts.map((post) => (
              <a
                key={post.title}
                href={post.href}
                className="group grid grid-cols-[72px_1fr_auto] items-center gap-5 py-5 sm:grid-cols-[130px_1fr_auto]"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="aspect-[4/3] w-full object-cover grayscale transition group-hover:grayscale-0"
                />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-black/38">
                    {post.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.035em] sm:text-3xl">
                    {post.title}
                  </h3>
                </div>
                <span className="text-2xl transition group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="bg-[#ff4f1f] px-5 py-20 text-[#171713] sm:px-10 lg:px-16 lg:py-28"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em]">
            ¿Tienes algo entre manos?
          </p>
          <a
            href="mailto:srtaserifa@icloud.com"
            className="mt-12 block border-y border-black/30 py-10 text-[clamp(3.2rem,9vw,9rem)] font-medium leading-[0.9] tracking-[-0.075em] transition hover:pl-4"
          >
            Hablemos<span className="font-display font-normal">.</span> ↗
          </a>
          <div className="mt-8 flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>srtaserifa@icloud.com · Barcelona</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/srtaserifa/">LinkedIn</a>
              <a href="https://www.instagram.com/srtaserifa">Instagram</a>
              <a href="https://www.behance.net/srtaserifa">Behance</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-3 bg-[#171713] px-5 py-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p>© 2026 Núria López · Srta Serifa</p>
        <p>Diseñado con intención. Construido con curiosidad.</p>
      </footer>
    </div>
  );
}
