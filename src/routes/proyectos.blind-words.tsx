import { createFileRoute } from "@tanstack/react-router";
import projectBlindwords from "@/assets/blind-words-case/blind-05.webp";
import { BlindWordsCaseStudy } from "@/components/BlindWordsCaseStudy";
import { projects } from "@/data/projects";
import { absoluteAssetUrl } from "@/lib/seo";

const blindWordsProject = projects.find((project) => project.title === "Blind Words");
const SEO_TITLE = "Blind Words: tipografía inclusiva y táctil | Srta Serifa";

export const Route = createFileRoute("/proyectos/blind-words")({
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      {
        name: "description",
        content:
          blindWordsProject?.description ?? "Blind Words, un proyecto de tipografía inclusiva.",
      },
      { property: "og:title", content: SEO_TITLE },
      {
        property: "og:description",
        content:
          blindWordsProject?.description ?? "Blind Words, un proyecto de tipografía inclusiva.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://srtaserifa.es/proyectos/blind-words" },
      { property: "og:image", content: absoluteAssetUrl(projectBlindwords) },
      { name: "twitter:title", content: SEO_TITLE },
      {
        name: "twitter:description",
        content:
          blindWordsProject?.description ?? "Blind Words, un proyecto de tipografía inclusiva.",
      },
      { name: "twitter:image", content: absoluteAssetUrl(projectBlindwords) },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/proyectos/blind-words" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": "https://srtaserifa.es/proyectos/blind-words#creative-work",
          name: "Blind Words",
          description:
            blindWordsProject?.description ??
            "Investigación tipográfica sobre identidad, accesibilidad y tacto.",
          creator: { "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez" },
          url: "https://srtaserifa.es/proyectos/blind-words",
          keywords: ["tipografía inclusiva", "braille", "diseño accesible", "diseño editorial"],
        }),
      },
    ],
  }),
  component: BlindWordsPage,
});

function BlindWordsPage() {
  return <BlindWordsCaseStudy />;
}
