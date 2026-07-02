import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";

const TITLE = "Proyectos — Srta Serifa · Núria López";
const DESCRIPTION =
  "Archivo de proyectos de Núria López: identidad, branding, tipografía, producto digital y dirección creativa.";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/proyectos" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f1f2f4] px-3 py-3 text-[#171717] sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[28px] border border-black/8 bg-[#e9eaed] shadow-[0_20px_80px_rgba(0,0,0,.06)]">
        <nav aria-label="Navegación principal" className="flex h-16 items-center justify-between px-5 sm:px-8">
          <a href="/" className="text-sm font-semibold tracking-[-0.02em]">Srta Serifa</a>
          <div className="flex items-center gap-2">
            <a href="/" className="rounded-xl border border-black/8 bg-white px-4 py-2 text-xs shadow-sm">← Inicio</a>
            <a href="/#contacto" className="rounded-xl bg-[#171717] px-4 py-2 text-xs font-medium text-white">Hablemos</a>
          </div>
        </nav>

        <main className="space-y-3 p-3 pt-0">
          <header className="rounded-[24px] border border-black/8 bg-white px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <p className="text-sm text-black/48">Archivo de trabajo · 2024—2026</p>
            <h1 className="mt-5 max-w-[920px] text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.07em]">
              Proyectos con algo que decir.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/55 sm:text-lg">
              Identidad, tipografía y producto digital. Una selección de trabajos donde la estrategia se vuelve lenguaje, sistema y experiencia.
            </p>
          </header>

          <section aria-label="Todos los proyectos" className="rounded-[24px] border border-black/8 bg-white px-6 py-8 sm:px-12 sm:py-12 lg:px-16">
            <div className="grid gap-x-5 gap-y-12 md:grid-cols-2">
              {projects.map((project, index) => (
                <article key={project.num} className={index % 3 === 0 ? "md:col-span-2" : ""}>
                  <div className="group relative overflow-hidden rounded-[20px] bg-[#ececee]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className={`w-full object-cover transition duration-700 group-hover:scale-[1.02] ${index % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs backdrop-blur">{project.year}</span>
                  </div>
                  <div className="grid gap-5 px-1 pt-5 sm:grid-cols-[1fr_minmax(220px,0.8fr)]">
                    <div><p className="text-xs text-black/42">{project.num} · {project.type}</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{project.title}</h2></div>
                    <p className="text-sm leading-relaxed text-black/52">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] bg-[#171717] px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
            <p className="text-sm text-white/45">¿Tienes algo entre manos?</p>
            <h2 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.96] tracking-[-0.065em]">El siguiente proyecto puede ser el tuyo.</h2>
            <a href="mailto:srtaserifa@icloud.com" className="mt-9 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-black">srtaserifa@icloud.com ↗</a>
          </section>
        </main>

        <footer className="flex flex-col gap-4 px-7 py-8 text-xs text-black/45 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Núria López</p><a href="/">Volver al portfolio ↑</a></footer>
      </div>
    </div>
  );
}
