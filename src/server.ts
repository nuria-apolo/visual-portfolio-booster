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

      if (agentDocument && (request.method === "GET" || request.method === "HEAD")) {
        const representation = preferredRepresentation(request.headers.get("Accept"), [
          "text/html",
          "text/markdown",
        ]);

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

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      return withSecurityHeaders(request, withAgentHeaders(normalized, url.pathname));
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
