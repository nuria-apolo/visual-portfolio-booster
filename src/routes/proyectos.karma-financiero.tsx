import { createFileRoute } from "@tanstack/react-router";
import { KarmaFinancieroCaseStudy } from "@/components/KarmaFinancieroCaseStudy";

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
  return <KarmaFinancieroCaseStudy />;
}
