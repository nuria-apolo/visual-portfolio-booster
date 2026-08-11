import { createFileRoute } from "@tanstack/react-router";
import aprendeHistoriaArtePhoto from "@/assets/aprende-historia-arte-photo.png";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";

export const Route = createFileRoute("/proyectos/aprende-historia-del-arte")({
  head: () => ({
    meta: [
      { title: "Aprende Historia del Arte — Srta Serifa" },
      {
        name: "description",
        content:
          "Una plataforma gratuita para aprender Historia del Arte de una forma más clara, cercana y fácil de explorar.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://srtaserifa.es/proyectos/aprende-historia-del-arte" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "@id": "https://srtaserifa.es/proyectos/aprende-historia-del-arte#software",
          name: "Aprende Historia del Arte",
          description:
            "Una plataforma gratuita para aprender Historia del Arte de una forma más clara, cercana y fácil de explorar.",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web",
          creator: { "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez" },
          url: "https://srtaserifa.es/proyectos/aprende-historia-del-arte",
          keywords: ["Digital Product", "Editorial", "Education"],
        }),
      },
    ],
  }),
  component: AprendeHistoriaDelArtePage,
});

function AprendeHistoriaDelArtePage() {
  return (
    <ProjectCaseStudy
      title="Aprende Historia del Arte"
      currentHref="/proyectos/aprende-historia-del-arte"
      category="Educación · Cultura · Producto digital"
      state="Activo"
      intro="Una plataforma gratuita para aprender Historia del Arte de una forma más clara, cercana y fácil de explorar."
      heroImage={aprendeHistoriaArtePhoto}
      heroAlt="Aprende Historia del Arte mostrado en una tablet sobre un sillón naranja"
      sections={[
        {
          id: "intro",
          eyebrow: "La pregunta",
          title: "¿Cómo diseñar una experiencia digital que invite a aprender?",
          paragraphs: [
            "El proyecto nace de una pregunta bastante sencilla: ¿cómo diseñar una experiencia digital que invite a aprender sin parecer un libro de texto trasladado a una pantalla?",
          ],
        },
        {
          id: "problema",
          eyebrow: "El proyecto",
          title: "Una plataforma que sigue creciendo",
          paragraphs: [
            "Diseño, contenido, tecnología, divulgación y experimentación editorial conviven dentro de una plataforma que sigue creciendo.",
          ],
          image: aprendeHistoriaArtePhoto,
          imageAlt: "Aprende Historia del Arte mostrado en una tablet sobre un sillón naranja",
        },
        {
          id: "busqueda",
          eyebrow: "Búsqueda",
          title: "Aprender sin sentir que estás leyendo un manual",
          paragraphs: [
            "La plataforma parte de la necesidad de ordenar contenidos complejos y hacer que descubrir una obra, un periodo o una idea sea más sencillo.",
          ],
        },
        {
          id: "ideacion",
          eyebrow: "Ideación",
          title: "Explorar el arte a través de relaciones",
          paragraphs: [
            "La experiencia se plantea como un espacio donde contenido, contexto e imagen puedan convivir y abrir caminos distintos para aprender.",
          ],
        },
        {
          id: "diseno",
          eyebrow: "Diseño",
          title: "Una plataforma editorial y digital",
          paragraphs: [
            "Diseño, contenido, tecnología y divulgación se combinan para construir una experiencia que sigue creciendo sin perder claridad.",
          ],
        },
        {
          id: "aportacion",
          eyebrow: "Aportación",
          title: "Acercar la Historia del Arte",
          paragraphs: [
            "El proyecto busca que aprender Historia del Arte sea una invitación a mirar, relacionar y seguir tirando del hilo.",
          ],
        },
      ]}
    />
  );
}
