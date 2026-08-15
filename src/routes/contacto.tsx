import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteAssetUrl, HOME_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Srta Serifa" },
      {
        name: "description",
        content: "Cuéntame qué estás construyendo y en qué punto necesitas criterio de diseño.",
      },
      { property: "og:title", content: "Contacto — Srta Serifa" },
      {
        property: "og:description",
        content: "Cuéntame qué estás construyendo y en qué punto necesitas criterio de diseño.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://srtaserifa.es/contacto" },
      { property: "og:image", content: absoluteAssetUrl(HOME_OG_IMAGE) },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/contacto" }],
  }),
  component: ContactPage,
});

const initialForm = {
  name: "",
  email: "",
  projectType: "",
  message: "",
  website: "",
};

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const submittedForm = new FormData(event.currentTarget);
    const submittedValues = {
      name: String(submittedForm.get("name") ?? ""),
      email: String(submittedForm.get("email") ?? ""),
      projectType: String(submittedForm.get("projectType") ?? ""),
      message: String(submittedForm.get("message") ?? ""),
      website: String(submittedForm.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submittedValues),
      });

      if (!response.ok) {
        throw new Error("Contact form request failed");
      }
      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-page">
      <main className="contact-content">
        <div className="contact-intro">
          <p className="contact-kicker">Abrir conversación</p>
          <h1>Cuéntame qué estás construyendo.</h1>
          <p>
            Si hay una marca que necesita encontrar dirección, un producto que ordenar o una idea
            que todavía no sabe cómo tomar forma, puedes escribirme desde aquí.
          </p>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>
            <span>Tu nombre</span>
            <input
              required
              name="name"
              autoComplete="name"
              maxLength={120}
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
            />
          </label>

          <label>
            <span>Tu email</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              maxLength={254}
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
            />
          </label>

          <label>
            <span>¿Qué necesitas?</span>
            <select
              required
              name="projectType"
              value={form.projectType}
              onChange={(event) => updateField("projectType", event.target.value)}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="brand-system">Brand system o identidad</option>
              <option value="digital-product">Producto digital o experiencia</option>
              <option value="design-consulting">Consultoría de diseño</option>
              <option value="ai-consulting">Consultoría de IA</option>
              <option value="other">Otra cosa que quieras contarme</option>
            </select>
          </label>

          <label>
            <span>Cuéntame un poco más</span>
            <textarea
              required
              name="message"
              rows={7}
              maxLength={5000}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
            />
          </label>

          <label className="contact-honeypot" aria-hidden="true">
            <span>Website</span>
            <input
              tabIndex={-1}
              autoComplete="off"
              name="website"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
            />
          </label>

          <p className="contact-privacy-note">
            Usaré estos datos únicamente para responder a tu consulta. Más información en la{" "}
            <a href="/legal#privacidad">política de privacidad</a>.
          </p>

          <button className="contact-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando…" : "Enviar mensaje ↗"}
          </button>

          <p className="contact-form-status" role="status" aria-live="polite">
            {status === "success" && "Mensaje enviado. Te responderé por email lo antes posible."}
            {status === "error" &&
              "No se ha podido enviar el mensaje. Puedes escribir directamente a srtaserifa@icloud.com."}
          </p>
        </form>
      </main>

      <SiteFooter variant="floating" />
    </div>
  );
}
