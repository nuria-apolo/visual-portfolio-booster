import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type ContactEnv = {
  RESEND_API_KEY?: string;
};

const CONTACT_TO_EMAIL = "srtaserifa@icloud.com";
const CONTACT_FROM_EMAIL = "Srta Serifa <formularios@srtaserifa.es>";

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

function jsonResponse(body: Record<string, string>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>\"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;", "'": "&#39;" })[character] ??
      character,
  );
}

async function handleContactRequest(request: Request, env: unknown): Promise<Response> {
  if (request.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return jsonResponse({ error: "Invalid origin" }, 403);
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonResponse({ error: "Invalid request" }, 400);
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const projectType = typeof payload.projectType === "string" ? payload.projectType.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const website = typeof payload.website === "string" ? payload.website.trim() : "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (website) return jsonResponse({ message: "Thanks" }, 202);
  if (
    name.length < 2 ||
    name.length > 120 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    !projectType ||
    projectType.length > 80 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return jsonResponse({ error: "Please check the form fields" }, 400);
  }

  const contactEnv = env as ContactEnv;
  if (!contactEnv.RESEND_API_KEY) {
    return jsonResponse({ error: "Contact service is not configured" }, 503);
  }

  const providerResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${contactEnv.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Nueva consulta · ${projectType}`,
      html: `<p><strong>Nombre:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Tipo:</strong> ${escapeHtml(projectType)}</p><p><strong>Mensaje:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!providerResponse.ok) {
    console.error("Contact email provider returned an error", providerResponse.status);
    return jsonResponse({ error: "Unable to send message" }, 502);
  }

  return jsonResponse({ message: "Message sent" }, 202);
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
      const requestUrl = new URL(request.url);
      if (requestUrl.pathname === "/api/contact") {
        return withSecurityHeaders(request, await handleContactRequest(request, env));
      }
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withSecurityHeaders(request, await normalizeCatastrophicSsrResponse(response));
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
