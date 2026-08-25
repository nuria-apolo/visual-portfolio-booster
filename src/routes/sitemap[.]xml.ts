import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://srtaserifa.es";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/sobre-mi", changefreq: "monthly", priority: "0.8" },
          { path: "/rol", changefreq: "monthly", priority: "0.8" },
          { path: "/proyectos", changefreq: "monthly", priority: "0.9" },
          { path: "/proyectos/karma-financiero", changefreq: "monthly", priority: "0.8" },
          {
            path: "/proyectos/aprende-historia-del-arte",
            changefreq: "monthly",
            priority: "0.8",
          },
          { path: "/proyectos/blind-words", changefreq: "monthly", priority: "0.7" },
          { path: "/servicios", changefreq: "monthly", priority: "0.9" },
          {
            path: "/proyectos/blind-words-citizen",
            lastmod: "2026-08-14",
            changefreq: "monthly",
            priority: "0.7",
          },
          { path: "/desarrollo-web-empresas", changefreq: "monthly", priority: "0.8" },
          {
            path: "/diseno-imagen-corporativa",
            lastmod: "2026-08-24",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/branding-estrategico",
            lastmod: "2026-08-24",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/consultoria-inteligencia-artificial",
            lastmod: "2026-08-14",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/consultoria-de-diseno",
            lastmod: "2026-08-15",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/publicaciones/posicionamiento-de-marca",
            lastmod: "2026-08-24",
            changefreq: "monthly",
            priority: "0.7",
          },
          {
            path: "/diseno-web-branding-illescas",
            lastmod: "2026-08-14",
            changefreq: "monthly",
            priority: "0.8",
          },
          { path: "/publicaciones", lastmod: "2026-08-14", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/publicaciones/treinta-mililitros", changefreq: "monthly", priority: "0.8" },
          {
            path: "/publicaciones/que-es-inteligencia-artificial",
            lastmod: "2026-08-14",
            changefreq: "monthly",
            priority: "0.7",
          },
          {
            path: "/publicaciones/una-interfaz-tambien-es-branding",
            changefreq: "monthly",
            priority: "0.7",
          },
          {
            path: "/publicaciones/del-brand-system-al-design-system",
            lastmod: "2026-08-24",
            changefreq: "monthly",
            priority: "0.7",
          },
          {
            path: "/publicaciones/una-marca-digital-necesita-reglas-no-aplicaciones",
            lastmod: "2026-08-14",
            changefreq: "monthly",
            priority: "0.7",
          },
          {
            path: "/publicaciones/branding-y-producto-deberian-hablar-mas",
            changefreq: "monthly",
            priority: "0.7",
          },
          {
            path: "/publicaciones/disenar-sistemas-no-pantallas",
            lastmod: "2026-08-14",
            changefreq: "monthly",
            priority: "0.7",
          },
          {
            path: "/publicaciones/que-cambia-la-ia-en-el-trabajo-de-diseno",
            changefreq: "monthly",
            priority: "0.7",
          },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
