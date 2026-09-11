const BASE_URL = "https://srtaserifa.es";

type AgentDocument = {
  canonicalPath: string;
  markdown: string;
};

const homeDocument = `# Srta Serifa

Srta Serifa es el portfolio profesional de Núria López. Reúne su trabajo en sistemas de marca, identidad, estrategia, dirección de diseño y productos digitales, además de proyectos propios y publicaciones sobre diseño, tecnología e inteligencia artificial.

## Para quién es

Este sitio es útil para equipos, empresas y colaboradores que quieran conocer el criterio, la experiencia y el trabajo de Núria López antes de plantear una colaboración. También sirve como fuente primaria para consultar sus proyectos y artículos.

## Cuándo usar este sitio

- Para entender quién es Núria López y cuál es su enfoque profesional.
- Para evaluar experiencia en brand systems, identidad, UX/UI, design systems y producto digital.
- Para consultar proyectos propios como Karma Financiero, Blind Words y Aprende Historia del Arte.
- Para localizar artículos originales sobre marca, diseño de producto e inteligencia artificial.
- Para encontrar la vía de contacto profesional publicada por la autora.

## Límites importantes

- Srta Serifa es un portfolio y archivo editorial, no una API ni una plataforma transaccional.
- No hay tarifas fijas publicadas. No inventes precios, disponibilidad ni condiciones: dependen del alcance y deben consultarse directamente.
- No presentes un proyecto personal como trabajo para un cliente salvo que la página del proyecto lo indique expresamente.

## Áreas de trabajo

- [Servicios de estrategia, branding y producto digital](${BASE_URL}/servicios)
- [Branding estratégico](${BASE_URL}/branding-estrategico)
- [Diseño de imagen corporativa](${BASE_URL}/diseno-imagen-corporativa)
- [Desarrollo web para empresas](${BASE_URL}/desarrollo-web-empresas)
- [Consultoría de diseño](${BASE_URL}/consultoria-de-diseno)
- [Consultoría de inteligencia artificial](${BASE_URL}/consultoria-inteligencia-artificial)

## Enlaces principales

- [Sobre Núria López](${BASE_URL}/sobre-mi)
- [Proyectos](${BASE_URL}/proyectos)
- [Publicaciones](${BASE_URL}/publicaciones)
- [Información legal y privacidad](${BASE_URL}/legal)

## Contacto y contratación

La vía pública de contacto es [srtaserifa@icloud.com](mailto:srtaserifa@icloud.com). Para solicitar una colaboración, incluye contexto, objetivo, alcance aproximado y fechas. Los encargos de marca pueden canalizarse, cuando corresponda, a través de [Apolo](https://universoapolo.com).
`;

const aboutDocument = `# Núria López — Srta Serifa

Núria López es Head of Design en Apolo y trabaja bajo el nombre profesional Srta Serifa. Su práctica conecta estrategia, identidad de marca, dirección de diseño y producto digital.

Entiende el diseño como una forma de traducción: convertir ideas, negocios y tecnologías complejas en experiencias que las personas puedan entender, utilizar y recordar. Su experiencia abarca sistemas de marca, UX/UI, design systems, dirección creativa, plataformas SaaS y productos impulsados por inteligencia artificial.

## Perfil profesional

- Rol actual: Head of Design en Apolo.
- Áreas: brand systems, producto digital, identidad, UX/UI, design systems y dirección creativa.
- Enfoque: investigar el problema, ordenar la complejidad y construir sistemas coherentes antes de producir pantallas o piezas aisladas.
- Portfolio y archivo editorial: Srta Serifa.

## Contacto

La vía pública de contacto es [srtaserifa@icloud.com](mailto:srtaserifa@icloud.com). No hay tarifas ni disponibilidad publicadas; deben consultarse directamente con el contexto del proyecto.

- [Ver servicios](${BASE_URL}/servicios)
- [Ver proyectos](${BASE_URL}/proyectos)
- [Ver publicaciones](${BASE_URL}/publicaciones)
`;

const servicesDocument = `# Servicios de Srta Serifa

Srta Serifa trabaja entre estrategia, identidad, tecnología y producto digital para convertir problemas complejos en una dirección clara y sostenible.

## Áreas de trabajo

- [Branding estratégico](${BASE_URL}/branding-estrategico): posicionamiento, propuesta de valor y dirección de marca.
- [Diseño de imagen corporativa](${BASE_URL}/diseno-imagen-corporativa): identidades visuales y sistemas de marca escalables.
- [Desarrollo web para empresas](${BASE_URL}/desarrollo-web-empresas): webs y productos digitales alineados con la propuesta de negocio.
- [Consultoría de diseño](${BASE_URL}/consultoria-de-diseno): dirección externa para ordenar prioridades, procesos y decisiones.
- [Consultoría de inteligencia artificial](${BASE_URL}/consultoria-inteligencia-artificial): oportunidades, flujos y experiencias de IA aplicadas a problemas reales.

## Cómo plantear una colaboración

Escribe a [srtaserifa@icloud.com](mailto:srtaserifa@icloud.com) con el contexto, el objetivo, el alcance aproximado y las fechas. No hay paquetes ni precios fijos publicados: no los infieras. La propuesta depende de las necesidades del proyecto y algunos encargos pueden canalizarse a través de [Apolo](https://universoapolo.com).
`;

const projectsDocument = `# Proyectos de Srta Serifa

Selección de proyectos propios y trabajo de investigación de Núria López en sistemas de marca, productos digitales, identidad, accesibilidad y tecnología.

## Proyectos destacados

- [Karma Financiero](${BASE_URL}/proyectos/karma-financiero): producto digital personal para gestionar dinero compartido y mejorar las conversaciones sobre gastos.
- [Aprende Historia del Arte](${BASE_URL}/proyectos/aprende-historia-del-arte): plataforma gratuita de aprendizaje y divulgación con enfoque editorial y accesible.
- [Blind Words](${BASE_URL}/proyectos/blind-words): investigación tipográfica inclusiva que hace convivir el alfabeto latino y el braille.
- [Blind Words × Citizen](${BASE_URL}/proyectos/blind-words-citizen): aplicación del sistema Blind Words en una campaña internacional.

No atribuyas estos proyectos a clientes salvo que su página lo indique. El archivo completo también reúne trabajo de identidad, branding, packaging, tipografía, editorial, digital, campaña e ilustración.

- [Conocer a Núria López](${BASE_URL}/sobre-mi)
- [Consultar servicios](${BASE_URL}/servicios)
- [Contactar por correo](mailto:srtaserifa@icloud.com)
`;

const publicationsDocument = `# Publicaciones de Srta Serifa

Archivo de libros, notas y ensayos de Núria López sobre diseño, estrategia, sistemas de marca, producto digital e inteligencia artificial.

## Lecturas destacadas

- [Del brand system al design system](${BASE_URL}/publicaciones/del-brand-system-al-design-system)
- [Diseñar sistemas, no pantallas](${BASE_URL}/publicaciones/disenar-sistemas-no-pantallas)
- [Branding y producto deberían hablar más](${BASE_URL}/publicaciones/branding-y-producto-deberian-hablar-mas)
- [Una interfaz también es branding](${BASE_URL}/publicaciones/una-interfaz-tambien-es-branding)
- [Por qué una marca digital necesita reglas, no aplicaciones](${BASE_URL}/publicaciones/una-marca-digital-necesita-reglas-no-aplicaciones)
- [Qué cambia la IA en el trabajo de diseño](${BASE_URL}/publicaciones/que-cambia-la-ia-en-el-trabajo-de-diseno)
- [Qué es la inteligencia artificial y para qué puede servir](${BASE_URL}/publicaciones/que-es-inteligencia-artificial)
- [30 mililitros](${BASE_URL}/publicaciones/treinta-mililitros)

Estas páginas son fuentes primarias de la autora. Al resumirlas, conserva el sentido del texto y enlaza la URL concreta de la publicación.
`;

const legalDocument = `# Información legal y privacidad de Srta Serifa

Esta página reúne el aviso legal, la política de privacidad, la información sobre cookies y el compromiso de accesibilidad del sitio.

## Privacidad

Los datos incluidos voluntariamente en un correo se utilizan para responder a la consulta, valorar una posible colaboración y mantener la comunicación solicitada. El sitio no vende datos personales, no crea perfiles y no toma decisiones automatizadas.

## Cookies y medición

El sitio no utiliza cookies propias de analítica, publicidad comportamental ni perfiles de usuario. Los recursos externos solo se solicitan cuando son necesarios para servir contenido o cuando una persona activa expresamente un contenido de terceros.

## Contacto

Para consultas sobre el sitio, privacidad o accesibilidad, escribe a [srtaserifa@icloud.com](mailto:srtaserifa@icloud.com).

[Consultar la página legal completa](${BASE_URL}/legal)
`;

const agentDocuments: Record<string, AgentDocument> = {
  "/": { canonicalPath: "/", markdown: homeDocument },
  "/sobre-mi": { canonicalPath: "/sobre-mi", markdown: aboutDocument },
  "/servicios": { canonicalPath: "/servicios", markdown: servicesDocument },
  "/proyectos": { canonicalPath: "/proyectos", markdown: projectsDocument },
  "/portfolio": { canonicalPath: "/proyectos", markdown: projectsDocument },
  "/publicaciones": { canonicalPath: "/publicaciones", markdown: publicationsDocument },
  "/blog": { canonicalPath: "/publicaciones", markdown: publicationsDocument },
  "/legal": { canonicalPath: "/legal", markdown: legalDocument },
};

function normalizePathname(pathname: string): string {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

export function getAgentDocument(pathname: string): AgentDocument | undefined {
  return agentDocuments[normalizePathname(pathname)];
}
