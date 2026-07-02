import { createFileRoute } from "@tanstack/react-router";
import heroObsidian from "@/assets/hero-obsidian.jpg";
import portraitNuria from "@/assets/portrait-nuria.jpg";
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
  component: ConstructionPage,
});

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

function ConstructionPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f1f2f4] p-3 text-[#171717] sm:p-6">
      <div className="relative mx-auto flex min-h-[calc(100vh-24px)] max-w-[1180px] flex-col overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_20px_80px_rgba(0,0,0,.06)] sm:min-h-[calc(100vh-48px)]">
        <header className="flex items-center justify-between px-6 py-6 sm:px-10">
          <p className="text-sm font-semibold tracking-[-0.02em]">Srta Serifa</p>
          <span className="rounded-full bg-[#f1f2f4] px-4 py-2 text-xs text-black/55">Barcelona · 2026</span>
        </header>

        <div className="relative z-10 flex flex-1 flex-col justify-between px-6 pb-8 pt-12 sm:px-10 sm:pb-10 lg:px-16 lg:pt-16">
          <div className="max-w-[900px]">
            <div className="mb-8 flex items-center gap-4">
              <img src={portraitNuria} alt="Retrato de Núria López" className="size-16 rounded-full object-cover grayscale" />
              <div><p className="font-semibold tracking-[-0.025em]">Núria López</p><p className="mt-1 text-sm text-black/45">Diseño · Táctica · Producto</p></div>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/38">Algo nuevo está tomando forma</p>
            <h1 className="mt-5 text-[clamp(3.6rem,10vw,9.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
              Portfolio<br />en construcción<span className="text-black/25">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-black/52 sm:text-lg">
              Estoy ordenando proyectos, ideas y aprendizajes para enseñar el trabajo como merece. Mientras tanto, si tienes algo entre manos, hablemos.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="mailto:srtaserifa@icloud.com" className="rounded-xl bg-[#171717] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/10">srtaserifa@icloud.com ↗</a>
              <a href="https://www.linkedin.com/in/srtaserifa/" className="rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-medium shadow-sm">LinkedIn</a>
            </div>
          </div>

          <footer className="mt-16 flex flex-col gap-3 border-t border-black/8 pt-6 text-xs text-black/38 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Núria López · Srta Serifa</p><p>Diseñando la siguiente versión</p>
          </footer>
        </div>

        <div aria-hidden className="pointer-events-none absolute -bottom-28 -right-24 size-[420px] rounded-full opacity-[0.09] sm:size-[600px]" style={{ backgroundImage: `url(${heroObsidian})`, backgroundPosition: "center", backgroundSize: "cover" }} />
      </div>
    </main>
  );
}

export function Portfolio() {
  return (
    <div className="min-h-screen bg-[#f1f2f4] px-3 py-3 text-[#171717] sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[28px] border border-black/8 bg-[#e9eaed] shadow-[0_20px_80px_rgba(0,0,0,.06)]">
        <nav aria-label="Navegación principal" className="flex h-16 items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-sm font-semibold tracking-[-0.02em]">Srta Serifa</a>
          <ul className="hidden items-center gap-7 text-[13px] md:flex">
            <li><a href="#sobre-mi" className="hover:opacity-50">Sobre mí</a></li>
            <li><a href="/proyectos" className="hover:opacity-50">Proyectos</a></li>
            <li><a href="#servicios" className="hover:opacity-50">Servicios</a></li>
            <li><a href="#criterio" className="hover:opacity-50">Criterio</a></li>
            <li><a href="#contacto" className="hover:opacity-50">Contacto</a></li>
          </ul>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/srtaserifa/" aria-label="LinkedIn" className="grid size-9 place-items-center rounded-xl border border-black/8 bg-white text-xs shadow-sm">in</a>
            <a href="#contacto" className="rounded-xl bg-[#171717] px-4 py-2 text-xs font-medium text-white">Hablemos</a>
          </div>
        </nav>

        <main id="top" className="space-y-3 p-3 pt-0">
          <section className="relative overflow-hidden rounded-[24px] border border-black/8 bg-white px-6 py-8 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
            <div className="flex items-start justify-between gap-5">
              <div className="flex items-center gap-4">
                <img src={portraitNuria} alt="Retrato de Núria López" className="size-20 rounded-full object-cover grayscale sm:size-24" />
                <div>
                  <p className="text-xl font-semibold tracking-[-0.03em]">Núria López</p>
                  <p className="mt-1 text-sm text-black/50">Head of Design · Apolo</p>
                </div>
              </div>
              <span className="hidden rounded-full bg-[#dff8d8] px-4 py-2 text-xs sm:inline-flex">● Disponible para conversar</span>
            </div>
            <div className="mt-12 max-w-[780px] sm:mt-16">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-black/45">Diseño · Táctica · Producto</p>
              <h1 className="text-[clamp(2.7rem,7vw,6.3rem)] font-medium leading-[0.98] tracking-[-0.065em] text-balance">
                Diseño ideas que se convierten en marcas y productos con peso.
              </h1>
              <p className="mt-7 max-w-[640px] text-base leading-relaxed text-black/58 sm:text-lg">
                Lidero diseño en Apolo y construyo identidades, experiencias digitales y MVPs que conectan estrategia, criterio visual y negocio.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:srtaserifa@icloud.com" className="rounded-xl bg-[#171717] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/10">Escríbeme ↗</a>
                <a href="/proyectos" className="rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-medium shadow-sm">Ver proyectos</a>
              </div>
            </div>
            <div aria-hidden className="absolute -bottom-24 -right-20 hidden size-[380px] opacity-12 lg:block" style={{ backgroundImage: `url(${heroObsidian})`, backgroundSize: "cover", borderRadius: "999px" }} />
          </section>

          <section id="sobre-mi" className="rounded-[24px] border border-black/8 bg-white px-6 py-12 sm:px-12 lg:px-16">
            <p className="text-sm text-black/48">Sobre mí.</p>
            <p className="mt-6 max-w-[980px] text-[clamp(1.65rem,3.3vw,3.35rem)] font-medium leading-[1.14] tracking-[-0.045em]">
              Soy Núria López. Concibo el diseño como un dialecto entre lo que es y lo que podría ser: una herramienta para hacer visible lo invisible, construir significado y abrir nuevas relaciones entre <span className="text-black/35">ideas, personas y sistemas.</span>
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/8 pt-7 text-sm text-black/58">
              <a href="mailto:srtaserifa@icloud.com">✉ srtaserifa@icloud.com</a><span>·</span><span>⌖ Barcelona</span><span>·</span><span>Head of Design @ Apolo</span>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/8 sm:grid-cols-4">
              {[["12+", "Años diseñando"], ["LAUS", "Diseño reconocido"], ["Citizen", "Colaboración internacional"], ["∞", "Curiosidad aplicada"]].map(([value, label]) => (
                <div key={label} className="bg-[#fafafa] p-6 sm:p-8"><dd className="text-3xl font-semibold tracking-[-0.05em]">{value}</dd><dt className="mt-2 text-xs text-black/48">{label}</dt></div>
              ))}
            </dl>
          </section>

          <section id="proyectos" className="rounded-[24px] border border-black/8 bg-white px-6 py-12 sm:px-12 lg:px-16">
            <div className="max-w-2xl"><p className="text-sm text-black/48">Trabajo seleccionado.</p><h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-medium leading-none tracking-[-0.06em]">Proyectos con estrategia, materia y resultados.</h2></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {projects.map((p, i) => (
                <article key={p.num} className={i === 0 ? "md:col-span-2" : ""}>
                  <div className="group overflow-hidden rounded-[20px] bg-[#ececee]"><img src={p.image} alt={p.alt} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-[1.02] ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`} /></div>
                  <div className="flex items-start justify-between gap-6 px-1 py-5"><div><p className="text-xs text-black/45">{p.type}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{p.title}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-black/52">{p.description}</p></div><span className="grid size-10 shrink-0 place-items-center rounded-full border border-black/10">↗</span></div>
                </article>
              ))}
            </div>
            <a href="/proyectos" className="mt-8 inline-flex rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-medium shadow-sm">Ver todos los proyectos →</a>
          </section>

          <section id="servicios" className="rounded-[24px] border border-black/8 bg-white px-6 py-12 sm:px-12 lg:px-16">
            <p className="text-sm text-black/48">Lo que hago.</p><h2 className="mt-4 max-w-3xl text-[clamp(2.4rem,5vw,5rem)] font-medium leading-none tracking-[-0.06em]">Diseño que ayuda a avanzar.</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-black/10 md:grid-cols-2">
              {[
                ["01", "Identidad & Branding", "Sistemas visuales con una idea sólida detrás y capacidad real para crecer."],
                ["02", "Producto digital", "Webs y experiencias que alinean utilidad, tono de marca y conversión."],
                ["03", "Dirección creativa", "Criterio, narrativa y acompañamiento para equipos y marcas en movimiento."],
                ["04", "MVPs & IA", "De la idea al producto funcional combinando diseño, no-code e inteligencia artificial."],
              ].map(([num, title, text]) => <article key={num} className="bg-[#fafafa] p-7 sm:p-9"><span className="text-xs text-black/38">{num}</span><h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-black/52">{text}</p></article>)}
            </div>
          </section>

          <section id="criterio" className="rounded-[24px] border border-black/8 bg-white px-6 py-12 sm:px-12 lg:px-16">
            <div className="flex items-end justify-between gap-6"><div><p className="text-sm text-black/48">NOTE© — Journal.</p><h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-medium leading-none tracking-[-0.06em]">Criterio compartido.</h2></div><span className="hidden text-sm text-black/45 sm:block">Ideas sobre oficio y táctica.</span></div>
            <div className="mt-12 divide-y divide-black/10">
              {posts.map((post) => <article key={post.title} className="grid grid-cols-[88px_1fr_auto] items-center gap-5 py-5 sm:grid-cols-[120px_1fr_auto]"><img src={post.image} alt={post.alt} className="aspect-[4/3] w-full rounded-xl object-cover" /><div><p className="text-xs text-black/42">{post.date}</p><h3 className="mt-2 text-lg font-semibold tracking-[-0.03em] sm:text-2xl">{post.title}</h3></div><span className="text-xl">↗</span></article>)}
            </div>
          </section>

          <section className="rounded-[24px] border border-black/8 bg-white px-6 py-12 sm:px-12 lg:px-16">
            <p className="text-sm text-black/48">Preguntas frecuentes.</p><h2 className="mt-4 max-w-3xl text-[clamp(2.4rem,5vw,5rem)] font-medium leading-none tracking-[-0.06em]">Antes de trabajar juntos.</h2>
            <div className="mt-10 divide-y divide-black/10">{faqs.map((f) => <details key={f.q} className="group py-6"><summary className="flex cursor-pointer list-none justify-between gap-6 text-lg font-semibold tracking-[-0.025em]"><span>{f.q}</span><span className="transition-transform group-open:rotate-45">＋</span></summary><p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/52">{f.a}</p></details>)}</div>
          </section>

          <section id="contacto" className="rounded-[24px] bg-[#171717] px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-16">
            <p className="text-sm text-white/45">Contacto.</p><h2 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.96] tracking-[-0.065em]">Hagamos algo que merezca existir.</h2><p className="mt-7 max-w-xl text-base leading-relaxed text-white/55">Cuéntame en qué estás trabajando. Respondo siempre que el proyecto encaje con el momento.</p>
            <div className="mt-10 flex flex-wrap gap-3"><a href="mailto:srtaserifa@icloud.com" className="rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-black">srtaserifa@icloud.com ↗</a><a href="https://www.universoapolo.com/contacto" className="rounded-xl border border-white/15 px-6 py-3.5 text-sm">Trabajar vía Apolo</a></div>
          </section>
        </main>

        <footer className="flex flex-col gap-5 px-7 py-8 text-xs text-black/45 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Núria López · Hecho con criterio</p><div className="flex gap-5"><a href="https://www.instagram.com/srtaserifa">Instagram</a><a href="https://www.linkedin.com/in/srtaserifa/">LinkedIn</a><a href="https://www.behance.net/srtaserifa">Behance</a></div></footer>
      </div>
    </div>
  );
}
