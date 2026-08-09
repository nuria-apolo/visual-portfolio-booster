import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingSiteMenu } from "@/components/FloatingSiteMenu";

function NotFoundComponent() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <p className="not-found-kicker">Error 404</p>
        <h1>Esta página se ha ido por otro dialecto.</h1>
        <p>El enlace que buscas no existe o ya no está disponible.</p>
        <Link to="/" className="not-found-link">
          Volver a la Home ↗
        </Link>
      </div>
      <SiteFooter variant="floating" />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Núria López — Srta Serifa" },
      { name: "theme-color", content: "#f1f2f4" },
      { property: "og:site_name", content: "Srta Serifa" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Núria López — Brand Systems + Digital Products | Srtaserifa" },
      {
        property: "og:title",
        content: "Núria López — Brand Systems + Digital Products | Srtaserifa",
      },
      {
        name: "twitter:title",
        content: "Núria López — Brand Systems + Digital Products | Srtaserifa",
      },
      {
        name: "description",
        content:
          "Portfolio de Núria López, Head of Design en Apolo. Brand systems, identidad, estrategia y diseño de productos digitales.",
      },
      {
        property: "og:description",
        content:
          "Portfolio de Núria López, Head of Design en Apolo. Brand systems, identidad, estrategia y diseño de productos digitales.",
      },
      {
        name: "twitter:description",
        content:
          "Portfolio de Núria López, Head of Design en Apolo. Brand systems, identidad, estrategia y diseño de productos digitales.",
      },
      { name: "google-site-verification", content: "6tOVrCdlYPO3j39nKHcN0NQTDFk8HxaTBgDzFH1NW1A" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez",
          name: "Núria López",
          alternateName: "Srtaserifa",
          jobTitle: "Head of Design",
          worksFor: {
            "@type": "Organization",
            name: "Apolo",
            url: "https://universoapolo.com",
          },
          url: "https://srtaserifa.es/sobre-mi",
          knowsAbout: [
            "Brand Systems",
            "Product Design",
            "Brand Identity",
            "UX/UI",
            "Design Systems",
            "Creative Direction",
          ],
          sameAs: [
            "https://www.instagram.com/srtaserifa/",
            "https://www.linkedin.com/in/srtaserifa/",
            "https://x.com/srtaserifa",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <FloatingSiteMenu />
    </QueryClientProvider>
  );
}
