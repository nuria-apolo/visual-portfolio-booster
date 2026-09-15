import { useRef } from "react";
import blind01 from "@/assets/blind-words-case/blind-01.webp";
import blind02 from "@/assets/blind-words-case/blind-02.webp";
import blind03 from "@/assets/blind-words-case/blind-03.webp";
import blind04 from "@/assets/blind-words-case/blind-04.webp";
import blind05 from "@/assets/blind-words-case/blind-05.webp";
import blind06 from "@/assets/blind-words-case/blind-06.webp";
import blind07 from "@/assets/blind-words-case/blind-07.webp";
import blind08 from "@/assets/blind-words-case/blind-08.webp";
import blind09 from "@/assets/blind-words-case/blind-09.webp";
import blind10 from "@/assets/blind-words-case/blind-10.webp";
import blind11 from "@/assets/blind-words-case/blind-11.webp";
import blind13 from "@/assets/blind-words-case/blind-13.webp";
import blind14 from "@/assets/blind-words-case/blind-14.webp";
import blind15 from "@/assets/blind-words-case/blind-15.webp";
import blind16 from "@/assets/blind-words-case/blind-16.webp";
import blind17 from "@/assets/blind-words-case/blind-17.webp";
import blind19 from "@/assets/blind-words-case/blind-19.webp";
import blind20 from "@/assets/blind-words-case/blind-20.webp";
import citizenCampaign from "@/assets/blind-citizen-campaign.png";
import cuerposHero from "@/assets/cuerpos-que-se-miran/cuerpos-hero.gif";
import { OtherProjects } from "@/components/OtherProjects";
import {
  ProjectSectionAnchor,
  ProjectSectionNavigation,
} from "@/components/ProjectSectionNavigation";
import { SiteFooter } from "@/components/SiteFooter";

const navigation = [
  { id: "problema", label: "Problema" },
  { id: "busqueda", label: "Búsqueda" },
  { id: "ideacion", label: "Ideación" },
  { id: "diseno", label: "Diseño" },
  { id: "producto", label: "Producto" },
  { id: "mas-alla", label: "Más allá" },
  { id: "aportacion", label: "Aportación" },
];

const projectRoles = [
  "Investigación",
  "Diseño inclusivo",
  "Diseño tipográfico",
  "Diseño editorial",
];

const projectCredits = [
  ["Proyecto", "Trabajo Final de Estudios · 2016"],
  ["Diseño e investigación", "Núria López · Srta Serifa"],
  ["Centro", "Escuela de Arte de Jerez"],
  ["Tutora", "Marta Díaz Villoslada"],
];

const awards = [
  {
    year: "2017",
    title: "Finalista · Premio Acento G",
    source: "Revista Gràffica",
    href: "https://graffica.info/blind-words-nuria-lopez/",
  },
  {
    year: "2018",
    title: "1º Premio Estatal · Gaudeamus Projecta",
    source: "1.ª edición · Col·legi Oficial de Disseny Gràfic de Catalunya",
    href: "https://gaudeamusprojecta.dissenygrafic.org/es/blind-words/",
  },
  {
    year: "Edición 2018 · entrega 2019",
    title: "Premio Proyecto Estudiante en Comunicación",
    source: "Asociación Andaluza de Diseñadores",
    href: "https://www.aad-andalucia.org/premios-aad/",
  },
];

const mediaMentions = [
  {
    label: "Domestika",
    href: "https://www.domestika.org/es/blog/1248-blind-words-la-tipografia-inclusiva-para-videntes-e-invidentes",
  },
  {
    label: "Rayitas Azules",
    href: "https://www.rayitasazules.com/extra-extra-29/blind-words/",
  },
  {
    label: "Graficatessen",
    href: "https://graficatessen.es/blind-words-la-tipografia-inclusiva-para-videntes-e-invidentes/",
  },
  {
    label: "La Criatura Creativa",
    href: "https://lacriaturacreativa.com/2018/03/19/esta-disenadora-ha-creado-una-tipografia-combina-alfabeto-braille-latino/",
  },
  {
    label: "Experimenta",
    href: "https://www.experimenta.es/noticias/grafica-y-comunicacion/braille-para-todos-una-apuesta-tipografica-y-un-desafio-de-inclusion/",
  },
  {
    label: "No me toques las helvéticas",
    href: "http://www.nometoqueslashelveticas.com/2018/04/blind-type-tipografia-inclusiva-para.html",
  },
  {
    label: "Col·legi Oficial de Disseny Gràfic de Catalunya",
    href: "https://www.dissenygrafic.org/noticies/blind-words-vs-braille-neue/",
  },
  {
    label: "Cátedra Cosgaya",
    href: "https://www.catedracosgaya.com.ar/tipoblog/2019/blind-words-tipografia-inclusiva-para-videntes-e-invidentes/",
  },
];

const printPublications = [
  {
    year: "2016",
    title: "Selected Inspiration: The Book",
    href: "https://selectedinspiration.com/2016/book",
  },
  {
    year: "2018",
    title: "Experimenta 77",
    href: "https://www.experimenta.es/tienda/producto/experimenta-77/",
  },
  {
    year: "2019",
    title: "Femme Type",
    href: "https://www.slanted.de/femme-type/",
  },
];

function SectionNav({ activeId }: { activeId: string }) {
  return <ProjectSectionAnchor activeId={activeId} items={navigation} />;
}

function CaseImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={1500}
      height={1060}
      loading="lazy"
      decoding="async"
    />
  );
}

export function BlindWordsCaseStudy() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const moveGallery = (direction: number) => {
    galleryRef.current?.scrollBy({
      left: direction * galleryRef.current.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  return (
    <div className="blind-case-study">
      <ProjectSectionNavigation items={navigation} />
      <main className="case-study-main blind-case-study-main">
        <section
          className="case-study-cover blind-case-study-cover"
          aria-label="Portada de Blind Words"
        >
          <img
            src={blind05}
            alt="Una mano explora las letras en relieve de la cubierta de Blind Words"
            width={1500}
            height={1060}
          />
        </section>
        <script src="/cover-zoom.js?v=2" defer />

        <div className="case-study-sheet blind-case-study-sheet">
          <header className="case-study-header">
            <a href="/proyectos" className="case-study-close" aria-label="Volver a proyectos">
              <span aria-hidden="true">×</span>
            </a>
          </header>

          <section className="blind-intro" id="intro">
            <aside className="blind-intro-aside" aria-label="Ficha del proyecto">
              <div>
                <p className="blind-intro-label">Mi papel</p>
                <ul className="blind-role-list">
                  {projectRoles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="blind-intro-label">Estado</p>
                <p>Finalizado · 2016</p>
              </div>
            </aside>

            <div className="blind-intro-content">
              <p className="blind-breadcrumb">
                <a href="/proyectos">PROYECTOS</a>&nbsp; / &nbsp;BLIND WORDS
              </p>
              <h1>Blind Words</h1>
              <h2>¿Puede una misma tipografía leerse con los ojos y con las manos?</h2>
              <div className="blind-prose blind-intro-copy">
                <p>
                  Blind Words es una investigación teórico-práctica sobre tipografía, tacto y
                  accesibilidad. Nació como mi Trabajo Final de Estudios en la Escuela de Arte de
                  Jerez y parte de una pregunta incómoda: ¿es el diseño gráfico actual restrictivo
                  para las personas invidentes?
                </p>
                <p>
                  El proyecto explora cómo traducir información visual a una experiencia háptica y
                  hace convivir, dentro de una misma pieza, el alfabeto latino y la estructura de
                  seis puntos del braille.
                </p>
              </div>
            </div>

            <div className="blind-gallery">
              <div className="blind-gallery-controls" aria-label="Controles de la galería">
                <button
                  type="button"
                  onClick={() => moveGallery(-1)}
                  aria-label="Ver imagen anterior"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => moveGallery(1)}
                  aria-label="Ver imagen siguiente"
                >
                  →
                </button>
              </div>
              <div
                className="blind-gallery-track"
                ref={galleryRef}
                aria-label="Detalles de Blind Words"
              >
                <CaseImage src={blind01} alt="Cubierta táctil del libro Blind Words" />
                <CaseImage src={blind08} alt="Manos sostienen una tarjeta táctil de Blind Words" />
                <CaseImage src={blind03} alt="Pieza de Blind Words iluminada en la oscuridad" />
              </div>
            </div>
          </section>

          <section className="blind-section" id="problema">
            <SectionNav activeId="problema" />
            <div className="blind-section-body">
              <p className="blind-section-number">01 / PROBLEMA</p>
              <h2>Diseñar para mirar deja fuera otras formas de leer.</h2>
              <div className="blind-prose">
                <p>
                  La comunicación gráfica se construye casi siempre para la vista. Jerarquía, color,
                  composición y tipografía organizan la información, pero también pueden convertirla
                  en inaccesible cuando ese no es el canal de lectura.
                </p>
                <p>
                  La limitación de acceso al contenido impreso no era el único punto de partida.
                  También estaba el desconocimiento general del braille por parte de quienes vemos:
                  dos sistemas de alfabetización que comparten el lenguaje y, sin embargo, suelen
                  vivir separados.
                </p>
                <p>
                  El reto no consistía en añadir braille al final de una pieza. Consistía en pensar
                  desde el principio una forma que pudiera ofrecer una experiencia diferente, pero
                  equivalente, a dos receptores.
                </p>
              </div>
              <figure className="blind-figure blind-figure-wide blind-figure-dark">
                <CaseImage src={blind07} alt="Dos manos recorren tarjetas impresas en braille" />
                <figcaption>Leer también es recorrer una superficie.</figcaption>
              </figure>
              <h3 className="blind-statement">
                ¿Es posible comprender el mundo invidente si permanece invisible para nosotros?
              </h3>
            </div>
          </section>

          <section className="blind-section" id="busqueda">
            <SectionNav activeId="busqueda" />
            <div className="blind-section-body">
              <p className="blind-section-number">02 / BÚSQUEDA</p>
              <h2>Entender el tacto antes de dibujar una letra.</h2>
              <div className="blind-prose">
                <p>
                  La investigación conectó diseño social, diseño universal, tipografía y
                  tiflografía: la creación de signos en relieve destinados a la lectura de personas
                  ciegas. También revisó la historia del braille y otros intentos de trasladar la
                  escritura a una superficie legible con los dedos.
                </p>
                <p>
                  El precedente de Valentin Haüy fue especialmente importante. Su sistema imprimía
                  caracteres latinos en relieve sobre papel y abrió una pregunta útil para el
                  proyecto: ¿qué necesita conservar una letra cuando deja de ser únicamente visual?
                </p>
                <p>
                  La búsqueda pasó pronto de la bibliografía al material. Papel húmedo, presión,
                  goma, piezas tipográficas y falsos grabados sirvieron para comprobar cómo el
                  relieve, la resistencia y la distancia entre puntos modificaban la lectura.
                </p>
              </div>
              <div className="blind-pair blind-pair-search">
                <figure className="blind-figure">
                  <CaseImage
                    src={blind20}
                    alt="Memoria abierta en las páginas dedicadas a la metodología"
                  />
                  <figcaption>Contexto, investigación, análisis y proceso de diseño.</figcaption>
                </figure>
                <figure className="blind-figure">
                  <CaseImage
                    src={blind04}
                    alt="Detalle del relieve y los puntos braille sobre papel"
                  />
                  <figcaption>Pruebas de presión, papel y legibilidad táctil.</figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section className="blind-section" id="ideacion">
            <SectionNav activeId="ideacion" />
            <div className="blind-section-body">
              <p className="blind-section-number">03 / IDEACIÓN</p>
              <h2>La línea es un punto en movimiento.</h2>
              <div className="blind-prose">
                <p>
                  Tiempo, espacio y contraste fueron los tres conceptos iniciales. La frase de
                  Kandinsky —la línea como un punto que abandona el reposo— permitió conectar el
                  gesto tipográfico con la unidad mínima del braille.
                </p>
                <p>
                  En lugar de tratar la retícula de seis puntos como una limitación, la convertí en
                  sistema generador. Las líneas del alfabeto latino podían nacer del movimiento
                  entre esos puntos y conservar en sus extremos la referencia al código táctil.
                </p>
                <p>
                  La exploración ensayó módulos, patrones, texturas y desplazamientos hasta reducir
                  cada carácter a una forma reconocible, directa y compatible con la estructura del
                  braille.
                </p>
              </div>
              <CaseImage
                className="blind-artwork blind-artwork-line"
                src={blind09}
                alt="Secuencia de puntos que forman una línea en movimiento"
              />
              <div className="blind-pair blind-pair-construction">
                <CaseImage
                  src={blind10}
                  alt="Retícula de seis puntos y primeros módulos tipográficos"
                />
                <CaseImage
                  src={blind11}
                  alt="Construcción de la letra a sobre la retícula braille"
                />
              </div>
            </div>
          </section>

          <section className="blind-section" id="diseno">
            <SectionNav activeId="diseno" />
            <div className="blind-section-body">
              <p className="blind-section-number">04 / DISEÑO</p>
              <h2>Blind Type: dos alfabetos, una misma regla.</h2>
              <div className="blind-prose">
                <p>
                  El resultado fue Blind Type, una tipografía modular que integra el alfabeto latino
                  en la matriz braille. Cada letra se construye con trazos que conectan los seis
                  puntos y hacen visible la lógica del sistema táctil.
                </p>
                <p>
                  No pretende sustituir el braille. Su aportación consiste en acercar ambos códigos,
                  convertir la estructura braille en una herramienta pedagógica para quien ve y
                  abrir un espacio de experimentación tiflográfica para formatos impresos.
                </p>
                <p>
                  Negro, blanco, visible e invisible definieron el lenguaje gráfico. El contraste
                  extremo organiza la identidad mientras el relieve y la luz revelan información que
                  no aparece siempre del mismo modo.
                </p>
              </div>
              <CaseImage
                className="blind-artwork blind-alphabet"
                src={blind13}
                alt="Alfabeto modular completo de Blind Type"
              />
              <div className="blind-design-principles" aria-label="Principios del sistema visual">
                <span>NEGRO / BLANCO</span>
                <span>VISIBLE / INVISIBLE</span>
                <span>PUNTO / LÍNEA</span>
                <span>VISTA / TACTO</span>
              </div>
            </div>
          </section>

          <section className="blind-section" id="producto">
            <SectionNav activeId="producto" />
            <div className="blind-section-body">
              <p className="blind-section-number">05 / PRODUCTO</p>
              <h2>La tipografía necesitaba salir de la pantalla.</h2>
              <div className="blind-prose">
                <p>
                  El sistema tomó forma en un objeto editorial que reunía memoria, proceso,
                  espécimen tipográfico y pruebas táctiles. La encuadernación, el papel, el relieve
                  y la transparencia no fueron acabados decorativos: formaban parte de la lectura.
                </p>
                <p>
                  Las cubiertas convierten las letras en volumen; las páginas superpuestas dejan
                  aparecer y desaparecer el alfabeto; las tarjetas permiten seguir los puntos con
                  los dedos y las piezas oscuras muestran cómo el contraste y la luz pueden cambiar
                  la percepción del mismo signo.
                </p>
              </div>
              <div className="blind-product-grid">
                <CaseImage
                  className="blind-product-grid-main"
                  src={blind01}
                  alt="Vista frontal del libro Blind Words"
                />
                <CaseImage src={blind02} alt="Cubierta y estuche del libro Blind Words" />
                <CaseImage src={blind06} alt="Libro Blind Words abierto con páginas translúcidas" />
                <CaseImage src={blind16} alt="Desplegable con el alfabeto de Blind Type" />
                <CaseImage
                  src={blind17}
                  alt="Detalle lateral de las letras en relieve de la cubierta"
                />
              </div>
              <figure className="blind-figure blind-figure-wide blind-figure-dark blind-reading-figure">
                <CaseImage
                  src={blind19}
                  alt="Una persona hojea la memoria de Blind Words bajo una luz puntual"
                />
                <figcaption>
                  El objeto final reúne investigación, construcción y experiencia.
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="blind-section" id="mas-alla">
            <SectionNav activeId="mas-alla" />
            <div className="blind-section-body">
              <p className="blind-section-number">06 / MÁS ALLÁ</p>
              <h2>Un punto y seguido, no un punto final.</h2>
              <div className="blind-prose">
                <p>
                  La memoria planteaba Blind Words como el inicio de una investigación más amplia:
                  llevar el braille al packaging, explorar experiencias hápticas de producto y
                  seguir desarrollando tipografías bajo criterios inclusivos.
                </p>
                <p>
                  Después de su presentación, el proyecto continuó circulando en publicaciones,
                  exposiciones y selecciones de diseño. En 2017, su sistema tipográfico se convirtió
                  en la identidad de la exposición Cuerpos que [se] miran, de Arte Actual FLACSO.
                  Años después encontró otra aplicación inesperada en Canadá, cuando la agencia
                  Citizen utilizó Blind Words en la campaña audiovisual Braille Nails.
                </p>
                <p>
                  Estas nuevas vidas confirmaron algo importante: el sistema podía salir del
                  contexto académico y aportar identidad a piezas de comunicación reales sin perder
                  la conversación sobre accesibilidad que le dio origen.
                </p>
              </div>
              <div className="blind-credits">
                <section className="blind-credits-section" aria-labelledby="blind-credits-title">
                  <h3 id="blind-credits-title">Créditos</h3>
                  <dl className="blind-credit-list">
                    {projectCredits.map(([term, description]) => (
                      <div key={term}>
                        <dt>{term}</dt>
                        <dd>{description}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                <section className="blind-credits-section" aria-labelledby="blind-awards-title">
                  <h3 id="blind-awards-title">Premios</h3>
                  <div className="blind-award-list">
                    {awards.map((award) => (
                      <a key={award.title} href={award.href} target="_blank" rel="noreferrer">
                        <span className="blind-credit-meta">{award.year}</span>
                        <span>
                          <strong>{award.title}</strong>
                          <small>{award.source}</small>
                        </span>
                        <span className="blind-credit-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </section>

                <section className="blind-credits-section" aria-labelledby="blind-media-title">
                  <h3 id="blind-media-title">Medios</h3>
                  <div className="blind-media-list">
                    {mediaMentions.map((medium) => (
                      <a key={medium.label} href={medium.href} target="_blank" rel="noreferrer">
                        {medium.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </section>

                <section className="blind-credits-section" aria-labelledby="blind-print-title">
                  <h3 id="blind-print-title">Publicaciones impresas</h3>
                  <div className="blind-print-list">
                    {printPublications.map((publication) => (
                      <a
                        key={publication.title}
                        href={publication.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="blind-credit-meta">{publication.year}</span>
                        <strong>{publication.title}</strong>
                        <span className="blind-credit-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </section>
              </div>
              <div className="blind-beyond-grid">
                <CaseImage src={blind14} alt="Tarjeta negra con números de Blind Type" />
                <CaseImage src={blind03} alt="Panel numérico de Blind Type iluminado en verde" />
              </div>
              <div className="blind-related-projects">
                <p className="blind-related-projects-label">Proyectos relacionados</p>
                <div className="blind-related-projects-grid">
                  <a className="blind-related-project-card" href="/proyectos/blind-words-citizen">
                    <span className="blind-related-project-media">
                      <img
                        src={citizenCampaign}
                        alt="Campaña Braille Nails de Citizen con Blind Words"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className="blind-related-project-title">
                      Blind Words × Citizen <span aria-hidden="true">↗</span>
                    </span>
                    <span className="blind-related-project-description">
                      Una campaña que lleva el braille a la vida cotidiana.
                    </span>
                  </a>
                  <a
                    className="blind-related-project-card"
                    href="/proyectos/cuerpos-que-se-miran"
                  >
                    <span className="blind-related-project-media">
                      <img
                        src={cuerposHero}
                        alt="Identidad visual de la exposición Cuerpos que se miran"
                        loading="lazy"
                      />
                    </span>
                    <span className="blind-related-project-title">
                      Cuerpos que [se] miran <span aria-hidden="true">↗</span>
                    </span>
                    <span className="blind-related-project-description">
                      Una identidad expositiva que convierte Blind Words en un código compartido.
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="blind-section blind-contribution" id="aportacion">
            <SectionNav activeId="aportacion" />
            <div className="blind-section-body">
              <p className="blind-section-number">07 / APORTACIÓN</p>
              <h2>Diseñar como una forma de hacer visible una ausencia.</h2>
              <div className="blind-prose">
                <p>
                  Blind Words definió una manera de trabajar que todavía reconozco como propia:
                  investigar antes de formalizar, convertir una restricción en la regla del sistema
                  y usar el diseño para formular preguntas, no solo para vestir respuestas.
                </p>
                <p>
                  El proyecto no resolvía por sí solo la accesibilidad tipográfica. Sí demostraba
                  que el diseño gráfico podía intervenir, experimentar y acercar dos formas de
                  lectura que rara vez se piensan juntas.
                </p>
                <p>
                  Diez años después, sigue siendo una de las piezas que mejor explica mi compromiso
                  con un diseño atento al contexto, a los materiales y a las personas que suelen
                  quedar fuera de la imagen.
                </p>
              </div>
              <div className="blind-contribution-images">
                <CaseImage src={blind08} alt="Manos sostienen una tarjeta táctil de Blind Words" />
                <CaseImage
                  src={blind15}
                  alt="Manos recorren con los dedos una página del espécimen"
                />
              </div>
            </div>
          </section>

          <section className="blind-closing">
            <h3>
              No diseñar solo para los ojos.
              <br />
              <em>Diseñar también para las manos.</em>
            </h3>
          </section>

          <OtherProjects currentHref="/proyectos/blind-words" />
        </div>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
