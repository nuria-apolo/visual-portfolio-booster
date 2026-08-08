import { createFileRoute } from "@tanstack/react-router";
import karmaApp from "@/assets/karma-app.png";
import aprendeHistoriaArteProject from "@/assets/aprende-historia-arte-project.png";
import blindWordsImage from "@/assets/blindwords-framer.png";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";

export const Route = createFileRoute("/proyectos/karma-financiero")({
  head: () => ({
    meta: [
      { title: "Karma Financiero — Srta Serifa" },
      {
        name: "description",
        content:
          "Un proyecto personal sobre dinero compartido, producto digital y mejores conversaciones sobre gastos.",
      },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/proyectos/karma-financiero" }],
  }),
  component: KarmaFinancieroPage,
});

function KarmaFinancieroPage() {
  return (
    <ProjectCaseStudy
      title="Karma Financiero"
      category="Producto digital · Finanzas compartidas"
      state="En construcción"
      intro="Una plataforma para gestionar dinero entre personas sin convertir cada conversación sobre gastos en una pequeña auditoría."
      heroImage={karmaApp}
      heroAlt="Pantalla de acceso de Karma Financiero con una propuesta para gestionar el dinero compartido"
      relatedProjects={[
        {
          title: "Aprende Historia del Arte",
          href: "/proyectos/aprende-historia-del-arte",
          image: aprendeHistoriaArteProject,
          alt: "Collage de esculturas clásicas con gafas de sol y una escena pictórica central",
        },
        {
          title: "Blind Words",
          href: "/proyectos/blind-words",
          image: blindWordsImage,
          alt: "Espécimen tipográfico de Blind Words con letras blancas y puntos Braille",
        },
      ]}
      sections={[
        {
          id: "intro",
          eyebrow: "La pregunta",
          title: "¿Cómo compartir dinero sin que todo se convierta en una cuenta pendiente?",
          paragraphs: [
            "Karma Financiero explora cómo diseñar mejores herramientas para parejas, familias, compañeros de piso o grupos que comparten gastos, decisiones y responsabilidades.",
          ],
        },
        {
          id: "problema",
          eyebrow: "El proyecto",
          title: "Producto, investigación y marca en construcción",
          paragraphs: [
            "El proyecto mezcla producto digital, investigación, estrategia, diseño de interfaz y construcción de marca.",
            "Sigue siendo un espacio de prueba para entender cómo una experiencia digital puede hacer más sencilla una conversación que normalmente se llena de cálculos, recordatorios y pequeñas fricciones.",
          ],
        },
        {
          id: "busqueda",
          eyebrow: "Búsqueda",
          title: "Entender cómo se reparte la responsabilidad",
          paragraphs: [
            "La investigación se centra en las decisiones, conversaciones y pequeños acuerdos que aparecen cuando varias personas comparten dinero.",
          ],
        },
        {
          id: "ideacion",
          eyebrow: "Ideación",
          title: "Hacer visible lo que normalmente queda implícito",
          paragraphs: [
            "Las primeras ideas exploran cómo convertir gastos, objetivos y responsabilidades en una experiencia que se pueda entender de un vistazo.",
          ],
        },
        {
          id: "diseno",
          eyebrow: "Diseño",
          title: "Una herramienta que acompaña la conversación",
          paragraphs: [
            "El diseño de producto, la interfaz y la identidad se construyen juntos para que la herramienta resulte clara, cercana y fácil de usar.",
          ],
        },
        {
          id: "aportacion",
          eyebrow: "Aportación",
          title: "Diseñar menos fricción alrededor del dinero",
          paragraphs: [
            "Karma Financiero sigue en construcción. La aportación del proyecto está en investigar cómo el diseño puede ayudar a compartir decisiones, no solo cifras.",
          ],
        },
      ]}
    />
  );
}
