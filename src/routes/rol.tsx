import { createFileRoute } from "@tanstack/react-router";
import apoloOffice from "@/assets/apolo-office.png";
import boutiqueDelMar from "@/assets/boutique-del-mar.png";
import autoescuelaAlmagro from "@/assets/autoescuela-almagro.png";
import memoriaTravesiaInnovacion from "@/assets/memoria-travesia-innovacion-2023.png";
import campoDeGibraltar from "@/assets/campo-de-gibraltar.png";
import webAutopromocion from "@/assets/web-autopromocion.png";
import lausAward from "@/assets/laus-award.png";
import clapAward from "@/assets/clap-award.png";
import brandorAward from "@/assets/brandor-award.png";
import arcapackAward from "@/assets/arcapack-award.png";
import pelikanorAward from "@/assets/pelikanor-award.png";
import anuariaAward from "@/assets/anuaria-award.png";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl, HOME_OG_IMAGE } from "@/lib/seo";

const TITLE = "Rol — Brand Systems + Digital Products | Srtaserifa";
const DESCRIPTION =
  "Conoce el trabajo de Núria López como Head of Design en Apolo: dirección de diseño, estrategia, identidad, producto digital, tecnología y sistemas.";

export const Route = createFileRoute("/rol")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://srtaserifa.es/rol" },
      { property: "og:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/rol" }],
  }),
  component: RolePage,
});

const axes = [
  ["Design", "Producto, identidad, dirección creativa y diseño digital."],
  ["Technology", "IA, prototipado, código y automatización para llevar las ideas a algún sitio."],
  ["Thinking", "Estrategia, investigación y sistemas para entender qué merece ser construido."],
  ["Making", "Productos, marcas, experimentos y publicaciones que aprenden mientras existen."],
] as const;

type ApoloProject = {
  image?: string;
  video?: string;
  title: string;
  href?: string;
};

const apoloProjects: ApoloProject[] = [
  {
    image: boutiqueDelMar,
    title: "La boutique del mar",
    href: "https://www.universoapolo.com/branding/antonio-martin",
  },
  {
    image: autoescuelaAlmagro,
    title: "Autoescuela Almagro",
    href: "https://www.universoapolo.com/branding/autoescuela-almagro",
  },
  {
    video: "https://framerusercontent.com/assets/KhhvunTu68tjLG0qZDTWsdVWy0.mp4",
    title: "Apadis",
    href: "https://www.universoapolo.com/branding/apadis",
  },
  {
    image: memoriaTravesiaInnovacion,
    title: "Memoria Travesía de la Innovación 2023",
    href: "https://www.universoapolo.com/memoria-travesia-de-la-innovacion-2023/",
  },
  {
    video: "https://framerusercontent.com/assets/l4szABzPptxDDVqdQYsRWSHAbA.mp4",
    title: "Weuta, el e-commerce de Ceuta",
    href: "https://www.universoapolo.com/branding/weuta",
  },
  {
    image: campoDeGibraltar,
    title: "Marca Campo de Gibraltar",
    href: "https://www.universoapolo.com/branding/campo-de-gibraltar",
  },
  {
    image: webAutopromocion,
    title: "Web Autopromoción",
    href: "https://universoapolo.com",
  },
] as const;

const awards = [
  { year: "02", name: "Laus", icon: lausAward },
  { year: "02", name: "Clap", icon: clapAward },
  { year: "06", name: "Brandor", icon: brandorAward },
  { year: "02", name: "Arcapack", icon: arcapackAward },
  { year: "04", name: "Pelikanor", icon: pelikanorAward },
  { year: "07", name: "Anuaria", icon: anuariaAward },
] as const;

function RolePage() {
  return (
    <div className="editorial-page">
      <main>
        <section className="editorial-hero editorial-hero-split role-hero">
          <div>
            <nav className="book-breadcrumbs role-breadcrumbs" aria-label="Migas de pan">
              <a href="/">Rol</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Head of Design</span>
            </nav>
            <h1>Soy Head of Design en Apolo, Propulsora de Marcas.</h1>
            <p className="role-hero-copy">
              Como Head of Design en Apolo, mi trabajo va mucho más allá del diseño de interfaces.
              Participo en las decisiones que definen cómo se construyen nuestros productos, cómo
              evoluciona la marca y cómo ayudamos a nuestros clientes a resolver problemas complejos
              a través del diseño.
            </p>
            <p className="role-hero-copy">
              Desde la web de Apolo hasta una plataforma SaaS, intento que todo responda a una misma
              idea: cuando el diseño está bien hecho, las cosas simplemente tienen sentido.
            </p>
          </div>
          <img src={apoloOffice} alt="Espacio de trabajo de Apolo" width="512" height="640" />
        </section>
        <section className="axis-grid" aria-label="Ejes de trabajo">
          {axes.map(([title, description]) => (
            <article key={title} className="axis-card">
              <p className="editorial-kicker">{title}</p>
              <p>{description}</p>
            </article>
          ))}
        </section>
        <section className="role-projects" aria-label="Proyectos en Apolo">
          <div className="role-projects-heading">
            <p className="editorial-kicker">Proyectos en Apolo</p>
          </div>
          <div className="role-projects-grid">
            {apoloProjects.map(({ image, video, title, href }) => (
              <a
                key={title}
                className="role-project-card"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver ${title} en universoapolo.com`}
              >
                {video ? (
                  <video
                    src={video}
                    aria-label={title}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={image} alt={title} loading="lazy" />
                )}
                <span className="role-project-overlay-title" aria-hidden="true">
                  {title}
                </span>
              </a>
            ))}
          </div>
          <a
            className="role-projects-more"
            href="https://universoapolo.com"
            target="_blank"
            rel="noreferrer"
          >
            Ver más ↗
          </a>
        </section>
        <section className="role-awards" aria-labelledby="role-awards-title">
          <h2 id="role-awards-title">Premios en Apolo</h2>
          <div className="role-awards-list">
            {awards.map(({ year, name, icon }) => (
              <article className="role-award-row" key={name}>
                <span className="role-award-year">{year}</span>
                <span className="role-award-name">{name}</span>
                {icon ? (
                  <img className="role-award-icon" src={icon} alt="" aria-hidden="true" />
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
