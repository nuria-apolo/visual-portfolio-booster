import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { getAgentDocument } from "./lib/agent-content";
import { appendVary, preferredRepresentation } from "./lib/content-negotiation";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

const securityHeaders = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "base-uri 'self'",
    "connect-src 'self' https://cloudflareinsights.com",
    "font-src 'self'",
    "form-action 'self' mailto:",
    "frame-ancestors 'self'",
    "img-src 'self' data: https:",
    "media-src 'self' https://framerusercontent.com",
    "object-src 'none'",
    "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
    "style-src 'self' 'unsafe-inline'",
  ].join("; "),
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
};

function withSecurityHeaders(request: Request, response: Response): Response {
  const headers = new Headers(response.headers);

  for (const [name, value] of Object.entries(securityHeaders)) {
    headers.set(name, value);
  }

  if (headers.get("Content-Type")?.includes("text/html") && !headers.has("Cache-Control")) {
    headers.set("Cache-Control", "public, max-age=0, must-revalidate");
  }

  // HTTPS is already enforced at Cloudflare. Limit HSTS to secure requests so
  // local HTTP previews remain easy to test while production browsers remember it.
  if (new URL(request.url).protocol === "https:") {
    headers.set("Strict-Transport-Security", "max-age=15552000");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function markdownResponse(request: Request, markdown: string, canonicalPath: string): Response {
  const canonicalUrl = new URL(canonicalPath, request.url).toString();
  const headers = new Headers({
    "Cache-Control": "public, max-age=300",
    "Content-Language": "es",
    "Content-Type": "text/markdown; charset=utf-8",
    Link: `<${canonicalUrl}>; rel="canonical"; type="text/html"`,
  });
  appendVary(headers, "Accept");

  return new Response(request.method === "HEAD" ? null : markdown, { headers });
}

function markdownNotFoundResponse(request: Request): Response {
  const markdown = `# 404 — Página no encontrada

La ruta solicitada no existe en srtaserifa.es.

- [Ir a la página principal](https://srtaserifa.es/)
- [Consultar las instrucciones para agentes](https://srtaserifa.es/llms.txt)
- [Consultar el mapa del sitio](https://srtaserifa.es/sitemap.xml)
- [Contactar con Srta Serifa](https://srtaserifa.es/contacto)
`;
  const headers = new Headers({
    "Cache-Control": "public, max-age=60",
    "Content-Language": "es",
    "Content-Type": "text/markdown; charset=utf-8",
  });
  appendVary(headers, "Accept");

  return new Response(request.method === "HEAD" ? null : markdown, {
    status: 404,
    headers,
  });
}

function requestHtmlFallback(request: Request): Request {
  const headers = new Headers(request.headers);
  headers.set("Accept", "text/html");
  return new Request(request, { headers });
}

function withAcceptVary(response: Response): Response {
  const headers = new Headers(response.headers);
  appendVary(headers, "Accept");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function notAcceptableResponse(): Response {
  const headers = new Headers({ "Content-Type": "text/plain; charset=utf-8" });
  appendVary(headers, "Accept");
  return new Response("Not Acceptable\n\nAvailable: text/html, text/markdown\n", {
    status: 406,
    headers,
  });
}

function withAgentHeaders(response: Response, pathname: string): Response {
  const headers = new Headers(response.headers);
  const hasMarkdownAlternate =
    getAgentDocument(pathname) && headers.get("content-type")?.includes("text/html");

  if (hasMarkdownAlternate) {
    appendVary(headers, "Accept");
    const alternate = `<${pathname || "/"}>; rel="alternate"; type="text/markdown"`;
    const existing = headers.get("Link");
    headers.set("Link", existing ? `${existing}, ${alternate}` : alternate);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      const agentDocument = getAgentDocument(url.pathname);
      const isPageRequest = request.method === "GET" || request.method === "HEAD";
      const representation = isPageRequest
        ? preferredRepresentation(request.headers.get("Accept"), ["text/html", "text/markdown"])
        : "text/html";

      if (agentDocument && isPageRequest) {
        if (representation === "text/markdown") {
          return withSecurityHeaders(
            request,
            markdownResponse(request, agentDocument.markdown, agentDocument.canonicalPath),
          );
        }

        if (representation === null) {
          return withSecurityHeaders(request, notAcceptableResponse());
        }
      }

      const usesHtmlFallback =
        !agentDocument && isPageRequest && representation === "text/markdown";
      const handler = await getServerEntry();
      const response = await handler.fetch(
        usesHtmlFallback ? requestHtmlFallback(request) : request,
        env,
        ctx,
      );
      const normalized = await normalizeCatastrophicSsrResponse(response);

      if (usesHtmlFallback && normalized.status === 404) {
        return withSecurityHeaders(request, markdownNotFoundResponse(request));
      }

      const represented = usesHtmlFallback ? withAcceptVary(normalized) : normalized;
      return withSecurityHeaders(request, withAgentHeaders(represented, url.pathname));
    } catch (error) {
      console.error(error);
      return withSecurityHeaders(
        request,
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
  },
};
