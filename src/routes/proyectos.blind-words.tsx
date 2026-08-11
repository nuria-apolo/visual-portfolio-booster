import { createFileRoute } from "@tanstack/react-router";
import projectBlindwords from "@/assets/blindwords-framer.png";
import projectBlindwordsDetail1 from "@/assets/blindwords-detail-1.png";
import projectBlindwordsDetail2 from "@/assets/blindwords-detail-2.png";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { projects } from "@/data/projects";
import { absoluteAssetUrl } from "@/lib/seo";

const blindWordsProject = projects.find((project) => project.title === "Blind Words");

export const Route = createFileRoute("/proyectos/blind-words")({
  head: () => ({
    meta: [
      { title: "Blind Words — Srta Serifa" },
      {
        name: "description",
        content:
          blindWordsProject?.description ?? "Blind Words, un proyecto de tipografía inclusiva.",
      },
      { property: "og:title", content: "Blind Words — Srta Serifa" },
      {
        property: "og:description",
        content:
          blindWordsProject?.description ?? "Blind Words, un proyecto de tipografía inclusiva.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://srtaserifa.es/proyectos/blind-words" },
      { property: "og:image", content: absoluteAssetUrl(projectBlindwords) },
    ],
    links: [{ rel: "canonical", href: "https://srtaserifa.es/proyectos/blind-words" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": "https://srtaserifa.es/proyectos/blind-words#creative-work",
          name: "Blind Words",
          description:
            blindWordsProject?.description ??
            "Investigación tipográfica sobre identidad, accesibilidad y tacto.",
          creator: { "@id": "https://srtaserifa.es/sobre-mi#nuria-lopez" },
          url: "https://srtaserifa.es/proyectos/blind-words",
          keywords: ["Research", "Identity", "Accessibility"],
        }),
      },
    ],
  }),
  component: BlindWordsPage,
});

function BlindWordsPage() {
  return (
    <ProjectCaseStudy
      title="Blind Words"
      currentHref="/proyectos/blind-words"
      category={blindWordsProject?.type ?? "Tipografía inclusiva"}
      state="Publicado · 2016"
      intro="Blind Words nace de una pregunta bastante sencilla: ¿es el diseño gráfico actual restrictivo para las personas invidentes?"
      heroImage={projectBlindwords}
      heroAlt={blindWordsProject?.alt ?? "Espécimen tipográfico de Blind Words"}
      sections={[
        {
          id: "intro",
          eyebrow: "La pregunta",
          title: "Diseñar una tipografía que pudiera leerse de otra manera",
          paragraphs: [
            "La tipografía es una de las herramientas fundamentales del diseño gráfico, pero casi siempre la diseñamos pensando en ser vista. Este proyecto empezó cuestionando precisamente eso: qué ocurre cuando dejamos de considerar la vista como el único canal posible de lectura.",
            "Blind Words es una investigación sobre tipografía, accesibilidad y tacto que terminó convirtiéndose en Blind Type, un sistema tipográfico modular que hace convivir el alfabeto latino y la estructura del braille.",
          ],
        },
        {
          id: "problema",
          eyebrow: "Problema",
          title: "Diseñamos para mirar. ¿Pero qué ocurre cuando no puedes ver?",
          paragraphs: [
            "Gran parte de la comunicación visual depende de códigos pensados exclusivamente para la vista: jerarquías, color, composición, imágenes y, especialmente, tipografía.",
            "El diseño gráfico busca hacer la información más comprensible, pero sus propias herramientas pueden dejar fuera a parte de las personas a las que intenta comunicar.",
            "El proyecto comenzó investigando esa tensión entre comunicación visual y accesibilidad, centrándose especialmente en las personas ciegas y en la forma en la que históricamente han accedido a la lectura.",
            "La intención no era simplemente adaptar una tipografía existente al braille, sino preguntarme si ambos sistemas podían compartir un mismo espacio.",
            "¿Podían una persona vidente y una persona ciega enfrentarse a una misma pieza y encontrar cada una su propio código de lectura?",
          ],
          image: projectBlindwordsDetail1,
          imageAlt: "Composición tipográfica de Blind Words con letras y puntos Braille",
        },
        {
          id: "busqueda",
          eyebrow: "Búsqueda",
          title: "Antes del braille ya existieron otros intentos de hacer visible el tacto",
          paragraphs: [
            "Para entender cómo diseñar un sistema nuevo, primero tenía que comprender cómo habíamos llegado hasta el actual.",
            "La investigación me llevó hasta Valentin Haüy, considerado uno de los pioneros de la educación para personas ciegas. A finales del siglo XVIII desarrolló un sistema que permitía imprimir caracteres latinos en relieve sobre papel.",
            "Las letras podían reconocerse mediante el tacto, aunque seguían manteniendo la estructura visual del alfabeto convencional. Ese punto intermedio entre ver una letra y tocar una letra se convirtió en una de las primeras pistas del proyecto.",
            "Reproduje este principio mediante una serie de experimentos y postales táctiles que me permitieron estudiar físicamente la relación entre forma, presión, material y legibilidad.",
            "No estaba buscando todavía una tipografía. Estaba intentando entender qué necesita una forma para convertirse en información cuando deja de ser únicamente visual.",
            "La investigación incorporó además las ideas de autores como Victor Papanek, que defendía una visión del diseño mucho más ligada a la responsabilidad social que a la simple producción estética.",
            "La pregunta dejó de ser cómo puedo hacer una tipografía diferente y pasó a ser qué puede aportar realmente una tipografía a este problema.",
          ],
          image: projectBlindwordsDetail2,
          imageAlt: "Detalle de una pieza tipográfica de Blind Words",
        },
        {
          id: "ideacion",
          eyebrow: "Ideación",
          title: "Dos alfabetos. Una misma estructura.",
          paragraphs: [
            "El punto de inflexión llegó al estudiar la unidad mínima del braille. El sistema se construye mediante una matriz extremadamente sencilla: seis posiciones organizadas en dos columnas y tres filas.",
            "En lugar de considerar esa retícula una limitación, decidí utilizarla como sistema generador. ¿Y si las letras del alfabeto latino pudieran construirse utilizando esa misma lógica?",
            "A partir de ahí comencé a simplificar cada carácter hasta encontrar formas capaces de conservar suficiente información para seguir siendo reconocibles visualmente dentro de una estructura directamente relacionada con el braille.",
            "La solución no debía superponer dos lenguajes independientes. Tenía que conseguir que ambos nacieran de la misma regla.",
            "Trabajar dentro de una retícula tan limitada obligaba a eliminar cualquier gesto innecesario. La accesibilidad dejó así de funcionar como una condición añadida al final del proceso y se convirtió en la propia regla que construía el diseño.",
          ],
        },
        {
          id: "diseno",
          eyebrow: "Diseño",
          title: "Blind Type",
          paragraphs: [
            "El resultado de esta investigación fue Blind Type, una tipografía modular basada en la estructura de seis puntos del sistema braille.",
            "Cada carácter latino se construye utilizando esa retícula como unidad común, creando un lenguaje visual que conecta ambos alfabetos. La tipografía permite reconocer las letras convencionales mientras mantiene visible la estructura que da origen al braille.",
            "No pretende sustituirlo. Pretende hacer visible su lógica y acercarla a quienes normalmente no necesitamos utilizarla.",
            "Blind Type también podía funcionar como una herramienta para que las personas videntes comprendieran mejor la estructura del braille. La tipografía se convertía así en una especie de puente pedagógico entre dos sistemas de lectura que normalmente permanecen separados.",
            "Un sistema visual construido a partir de un lenguaje táctil.",
          ],
          image: projectBlindwordsDetail1,
          imageAlt: "Especimen tipográfico de Blind Type",
        },
        {
          id: "producto",
          eyebrow: "Producto",
          title: "La tipografía necesitaba salir de la pantalla",
          paragraphs: [
            "Desde el principio Blind Words estuvo pensado como un proyecto físico. Si la investigación hablaba de tacto, tenía poco sentido limitar el resultado a una presentación digital.",
            "Por eso el sistema se trasladó a diferentes soportes y pruebas de impresión donde podían explorarse el relieve, la materialidad y la interacción con los caracteres.",
            "Postales, especímenes tipográficos y aplicaciones impresas permitieron comprobar cómo la tipografía cambiaba cuando dejaba de ser exclusivamente una forma para convertirse también en superficie.",
            "Blind Words comenzó como mi Trabajo Final de Estudios en 2016 en la Escuela de Arte de Jerez. Pero el proyecto no terminó con su presentación: el sistema empezó a circular en publicaciones, exposiciones, medios especializados y selecciones de diseño.",
          ],
          image: projectBlindwordsDetail2,
          imageAlt: "Aplicación impresa del sistema Blind Words",
        },
        {
          id: "mas-alla",
          eyebrow: "Más allá",
          title: "Un proyecto de 2016 que sigue encontrando nuevos contextos",
          paragraphs: [
            "Una de las cosas más interesantes de Blind Words ha sido comprobar cómo el proyecto ha seguido teniendo vida mucho después de haberlo terminado.",
            "Entre sus reconocimientos se encuentran: 2017, Finalista Premio Acento G · Revista Gràffica; 2018, Premio categoría Estudiante · Asociación Andaluza de Diseñadores; 2019, Premio Gaudeamus Projecta · 1ª edición.",
            "También ha sido publicado o reseñado por medios como Domestika, Experimenta, Rayitas Azules, Graficatessen, La Criatura Creativa o el Col·legi Oficial de Disseny Gràfic de Catalunya, entre otros.",
            "Y ha formado parte de publicaciones impresas como Femme Type, Experimenta y Selected Inspiration: The Book.",
            "Años después, la agencia Citizen, en Canadá, utilizó Blind Words en la cartela de una campaña audiovisual. Una tipografía que había nacido como una investigación sobre accesibilidad acababa formando parte de una pieza comercial real.",
            "Para mí fue especialmente interesante porque demostraba que el sistema podía funcionar fuera del contexto donde había sido concebido: no solo como experimento, también como decisión tipográfica capaz de aportar identidad y carácter a una pieza de comunicación real.",
          ],
          link: {
            href: "/proyectos/blind-words-citizen",
            label: "Blind Words × Citizen · Canadá",
          },
        },
      ]}
    />
  );
}
