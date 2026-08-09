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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "@id": "https://srtaserifa.es/proyectos/karma-financiero#software",
          name: "Karma Financiero",
          description:
            "Un proyecto personal sobre dinero compartido, producto digital y mejores conversaciones sobre gastos.",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          creator: { "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez" },
          url: "https://srtaserifa.es/proyectos/karma-financiero",
          keywords: ["Brand Systems", "Digital Product", "Fintech"],
        }),
      },
    ],
  }),
  component: KarmaFinancieroPage,
});

function KarmaFinancieroPage() {
  return <KarmaFinancieroCaseStudy />;
}
