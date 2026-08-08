import { createFileRoute } from "@tanstack/react-router";
import projectBlindwords from "@/assets/blindwords-framer.png";
import projectBlindwordsDetail1 from "@/assets/blindwords-detail-1.png";
import projectBlindwordsDetail2 from "@/assets/blindwords-detail-2.png";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { projects } from "@/data/projects";

const blindWordsProject = projects.find((project) => project.title === "Blind Words");

export const Route = createFileRoute("/proyectos/blind-words")({
  head: () => ({
    meta: [
      { title: "Blind Words — Srta Serifa" },
      {
        name: "description",
        content:
          blindWordsProject?.description ?? "Blind Words, un proyecto de tipografía inclusiva.",
      },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/proyectos/blind-words" }],
  }),
  component: BlindWordsPage,
});

function BlindWordsPage() {
  return (
    <ProjectCaseStudy
      title="Blind Words"
      category={blindWordsProject?.type ?? "Tipografía inclusiva"}
      state="Contenido pendiente de completar"
      intro={
        blindWordsProject?.description ??
        "La información detallada de este proyecto está pendiente de completar."
      }
      heroImage={blindWordsProject?.image ?? projectBlindwords}
      heroAlt={blindWordsProject?.alt ?? "Espécimen tipográfico de Blind Words"}
      pending
      sections={[
        {
          id: "intro",
          eyebrow: "Material disponible",
          title: "Contenido detallado pendiente de completar",
          paragraphs: [
            "La estructura de la página ya está preparada para incorporar el proceso, las decisiones de diseño y los resultados del proyecto cuando esa información esté disponible.",
          ],
          image: projectBlindwordsDetail1,
          imageAlt: "Detalle visual del proyecto Blind Words",
        },
        {
          id: "problema",
          eyebrow: "Más adelante",
          title: "Una página para documentar el proyecto con calma",
          paragraphs: [
            "No se añade copy inventado: esta sección queda reservada para completar la historia real de Blind Words.",
          ],
          image: projectBlindwordsDetail2,
          imageAlt: "Segundo detalle visual del proyecto Blind Words",
        },
        {
          id: "busqueda",
          eyebrow: "Búsqueda",
          title: "Contenido pendiente de completar",
          paragraphs: [
            "Esta sección queda preparada para documentar la investigación real del proyecto.",
          ],
        },
        {
          id: "ideacion",
          eyebrow: "Ideación",
          title: "Contenido pendiente de completar",
          paragraphs: [
            "Esta sección queda preparada para explicar las ideas y decisiones que dieron forma a Blind Words.",
          ],
        },
        {
          id: "diseno",
          eyebrow: "Diseño",
          title: "Contenido pendiente de completar",
          paragraphs: [
            "Esta sección queda preparada para describir el sistema tipográfico y las piezas desarrolladas.",
          ],
        },
        {
          id: "aportacion",
          eyebrow: "Aportación",
          title: "Contenido pendiente de completar",
          paragraphs: [
            "Esta sección queda preparada para recoger las conclusiones y aportaciones reales del proyecto.",
          ],
        },
      ]}
    />
  );
}
