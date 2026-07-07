import { createFileRoute } from "@tanstack/react-router";
import heroObsidian from "@/assets/hero-obsidian.jpg";
import portraitNuria from "@/assets/portrait-nuria-new.png";
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

const constructionTags = [
  ["Estrategia", "bg-[#ffc400]"],
  ["Marca", "bg-[#49d8a1]"],
  ["Sistemas", "bg-[#f3f3f3]"],
  ["IA", "bg-[#c8f36c]"],
  ["Branding", "bg-[#ff7848]"],
  ["Producto", "bg-[#8dceff]"],
  ["Dirección", "bg-[#f4b5dc]"],
  ["Identidad", "bg-[#c6adff]"],
] as const;

function ConstructionPage() {
  return (
    <main className="construction-page relative min-h-[100svh] overflow-hidden bg-[#f7f7f7] px-4 pb-[20rem] pt-[10.5rem] text-[#111] sm:px-0 sm:pb-[19rem] sm:pt-0">
      <div className="construction-copy relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center text-center sm:px-10 sm:pt-[25vh]">
        <div className="construction-intro flex items-center justify-center gap-3 text-[1.15rem] font-medium tracking-[-0.03em] text-black/70 sm:text-xl">
          <span className="construction-intro-left">Hola</span>
          <span className="construction-portrait-shell rounded-full">
            <img
              src={portraitNuria}
              alt="Retrato de Núria López"
              className="construction-portrait size-10 rounded-full object-cover shadow-[0_3px_12px_rgba(0,0,0,.16)] sm:size-12"
            />
          </span>
          <span className="construction-intro-right">soy srtaserifa</span>
        </div>

        <h1 className="construction-title animate-fade-up mt-5 max-w-[18rem] font-display text-[3.45rem] leading-[0.92] tracking-[-0.04em] text-balance sm:mt-4 sm:max-w-[1040px] sm:text-[4.375rem] sm:leading-[0.98] sm:tracking-[-0.045em]">
          El <em className="font-normal">diseño</em> es un <em className="font-normal">dialecto</em>
          <br className="hidden sm:block" /> entre el mundo que es y el
          <br className="hidden sm:block" /> mundo que podría ser
        </h1>

        <p className="construction-body animate-fade-up mt-6 max-w-[19rem] text-base leading-[1.45] tracking-[-0.015em] text-black/65 sm:mt-7 sm:max-w-[710px] sm:text-base">
          Desde una identidad visual hasta un producto digital, el diseño convierte la complejidad
          en algo que las personas pueden entender, usar y hacer suyo. Y yo me encargo de hacerlo
          realidad ;){" "}
          <a
            href="mailto:srtaserifa@icloud.com"
            className="font-medium text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
          >
            Escríbeme aquí
          </a>
          .
        </p>

        <ul className="construction-social animate-fade-up mt-8 flex items-center justify-center gap-5">
          <li>
            <a
              href="https://www.linkedin.com/in/srtaserifa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Srta Serifa"
              className="grid size-10 place-items-center rounded-full border border-black/15 text-black/70 transition hover:border-black hover:text-black"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/srta.serifa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Srta Serifa"
              className="grid size-10 place-items-center rounded-full border border-black/15 text-black/70 transition hover:border-black hover:text-black"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/srtaserifa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X de Srta Serifa"
              className="grid size-10 place-items-center rounded-full border border-black/15 text-black/70 transition hover:border-black hover:text-black"
            >
              <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.79l-4.86-6.36L5.6 22H2.34l8.02-9.17L1.5 2h6.94l4.4 5.82L18.24 2zm-1.19 18h1.87L7.02 4H5.05l12 16z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div
        className="construction-tags absolute bottom-0 left-1/2 h-[270px] w-[620px] max-w-full -translate-x-1/2"
        aria-hidden="true"
      >
        {constructionTags.map(([label, color], index) => (
          <span
            key={label}
            className={`construction-tag construction-tag-${index + 1}`}
            style={{
              animationDelay: `${560 + index * 120}ms, ${2700 + index * 120}ms`,
            }}
          >
            <span className={`construction-tag-inner ${color}`}>
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m16.5 6.5-7.9 7.9a3 3 0 0 0 4.2 4.2l8.6-8.6a5 5 0 0 0-7.1-7.1l-9.1 9.2a7 7 0 0 0 9.9 9.9l7.2-7.2" />
              </svg>
              {label}
            </span>
          </span>
        ))}
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
