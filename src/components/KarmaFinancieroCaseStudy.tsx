import { SiteFooter } from "@/components/SiteFooter";
import karmaApp from "@/assets/karma-app.png";

type PlaceholderProps = {
  label: string;
  aspectRatio?: string;
  className?: string;
};

export function AssetPlaceholder({ label, aspectRatio = "16 / 10", className = "" }: PlaceholderProps) {
  return (
    <div
      className={`karma-asset-placeholder ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span>[ ASSET — {label} ]</span>
    </div>
  );
}

const navigation = [
  ["intro", "Intro"],
  ["problema", "Problema"],
  ["busqueda", "Búsqueda"],
  ["ideacion", "Ideación"],
  ["diseno", "Diseño"],
  ["producto", "Producto"],
  ["mas-alla", "Más allá"],
  ["aportacion", "Aportación"],
];

const projectCategories = [
  "Product design", "UX research", "Interaction design", "Design systems", "Prototyping",
  "User flows", "Usability testing", "Visual design", "Information architecture", "Branding",
  "Creative direction", "Accessibility web", "Content design", "UI design", "Desarrollo con IA y agentes",
];

function SectionAnchorNav({ activeId }: { activeId: string }) {
  return <nav className="section-anchor-nav" aria-label="Índice del proyecto">
    {navigation.slice(1).map(([id, label]) => <a key={id} href={`#${id}`} className={id === activeId ? "is-active" : ""}>{label}</a>)}
  </nav>;
}

function SectionLabel({ children }: { children: string }) {
  const activeId = navigation.find(([, label]) => label === children)?.[0] ?? "";
  return <SectionAnchorNav activeId={activeId} />;
}

export function KarmaFinancieroCaseStudy() {
  return (
    <div className="karma-case-study">
      <main className="karma-case-study-main">
        <section className="case-study-cover karma-case-study-cover" aria-label="Portada de Karma Financiero">
          <img src={karmaApp} alt="Pantalla de acceso de Karma Financiero" />
        </section>
        <script src="/cover-zoom.js?v=2" defer />

        <div className="case-study-sheet karma-case-study-sheet">
          <header className="case-study-header">
            <a href="/proyectos" className="case-study-close" aria-label="Volver a proyectos">
              <span aria-hidden="true">×</span>
            </a>
          </header>
          <section className="karma-intro" id="intro">
            <aside className="karma-intro-aside" aria-label="Ficha del proyecto">
              <p>9 de agosto 2026</p>
              <p>Overview</p>
              <p>Categorías</p>
            </aside>
            <div className="karma-intro-content">
              <p className="karma-breadcrumb"><a href="/proyectos">PROYECTOS</a>&nbsp; / &nbsp;KARMA FINANCIERO</p>
              <div className="karma-intro-title-row">
                <h1>Karma Financiero</h1>
                <a className="karma-project-link" href="https://karmafinanciero.com" target="_blank" rel="noreferrer">Visitar proyecto <span aria-hidden="true">↗</span></a>
              </div>
              <h2>¿Cómo compartir dinero sin que todo se convierta en una cuenta pendiente?</h2>
              <div className="karma-intro-context karma-prose">
                <p>Parejas, familias, pisos compartidos o viajes tienen algo en común: hay gastos, aportaciones, objetivos y decisiones que dejan de pertenecer únicamente a una persona. La mayoría de herramientas financieras están pensadas para controlar el dinero. Karma parte de otra pregunta: ¿cómo podemos entenderlo mejor cuando el dinero es compartido?</p>
                <p>Así empezó el diseño de un producto que intenta convertir algo que normalmente resolvemos entre conversaciones, transferencias, notas y hojas de cálculo en un espacio común, claro y fácil de entender.</p>
              </div>
              <ul className="karma-category-list" aria-label="Categorías del proyecto">
                {projectCategories.map((category) => <li key={category}>{category}</li>)}
              </ul>
            </div>
          </section>

        <section className="karma-section karma-section-problem" id="problema">
          <SectionAnchorNav activeId="problema" />
          <div className="karma-section-body">
            <h2>Las cuentas cuadran. Las personas no siempre.</h2>
            <div className="karma-prose"><p>Gestionar las finanzas de una sola persona ya implica tomar decisiones. Cuando entran dos, tres o cinco personas en la ecuación, aparecen muchas más.</p><p>¿Quién ha pagado esto?<br />¿Cuánto aporta cada uno?<br />¿Dividimos todo por igual?<br />¿Qué gastos son realmente comunes?<br />¿Cuánto llevamos ahorrado?<br />¿Quién adelantó dinero?</p><p>El problema no era únicamente calcular cantidades.</p><p>Gran parte de los acuerdos financieros que tenemos con otras personas existen en nuestra cabeza, en conversaciones o en pequeñas rutinas que ninguna herramienta recoge realmente.</p><p>Eso cambió el punto de partida del proyecto.</p></div>
            <p className="karma-statement">Karma no debía ser una aplicación para dividir gastos.<br /><em>Debía ser un espacio para entender una economía compartida.</em></p>
            <AssetPlaceholder label="YO + TÚ = NOSOTROS" aspectRatio="1.6 / 1" className="karma-wide-placeholder" />
            <p className="karma-word-list">Ingresos · Gastos · Aportaciones · Objetivos · Acuerdos · Decisiones</p>
          </div>
        </section>

        <section className="karma-section" id="busqueda">
          <SectionAnchorNav activeId="busqueda" />
          <div className="karma-section-body">
            <h2>Antes de diseñar pantallas, había que entender qué estábamos compartiendo.</h2>
            <div className="karma-prose"><p>Las primeras decisiones no tuvieron que ver con botones, colores o componentes.</p><p>Tuvieron que ver con preguntas.</p><p>¿Qué ocurre cuando dos personas ganan cantidades diferentes? ¿Tiene sentido dividir siempre un gasto al 50 %? ¿Qué debería poder ver todo el grupo? ¿Qué información debería seguir siendo individual?</p><p>Y, sobre todo:</p><p>¿Podría funcionar la misma lógica para una pareja, una familia, un piso compartido o un viaje?</p><p>Explorar estas situaciones permitió separar dos conceptos que inicialmente parecían lo mismo: gastar juntos y gestionar dinero juntos.</p><p>Karma tenía que permitir ambas cosas.</p></div>
            <p className="karma-statement karma-statement-small">No organizar únicamente transacciones, sino relaciones económicas entre personas.</p>
            <div className="karma-research-grid"><AssetPlaceholder label="NOTAS DE RESEARCH" aspectRatio="1 / 1.15" /><AssetPlaceholder label="PRIMEROS ESQUEMAS" aspectRatio="1.15 / 1" /><AssetPlaceholder label="EXPLORACIÓN INICIAL" aspectRatio="0.9 / 1.1" /></div>
          </div>
        </section>

        <section className="karma-section" id="ideacion">
          <SectionAnchorNav activeId="ideacion" />
          <div className="karma-section-body">
            <h2>Diseñar alrededor de espacios, no de cuentas.</h2>
            <div className="karma-prose"><p>Una persona no comparte su economía de una única manera.</p><p>Puede tener una economía doméstica con su pareja, organizar un viaje con cuatro amigos y compartir determinados gastos familiares.</p><p>Por eso, la unidad principal de Karma terminó siendo el espacio.</p><p>Cada espacio representa una economía compartida independiente, con sus propios miembros, movimientos, aportaciones y objetivos.</p></div>
            <AssetPlaceholder label="ARQUITECTURA DE ESPACIOS" aspectRatio="2 / 1" className="karma-wide-placeholder" />
            <div className="karma-flow">PERSONA <span>↓</span> ESPACIOS <span>↓</span> MIEMBROS <span>↓</span> DINERO <span>↓</span> DECISIONES</div>
            <div className="karma-subsection"><h3>Reducir la complejidad.</h3><div className="karma-prose"><p>A partir de ahí, el reto fue decidir qué necesitaba entender una persona cada vez que entraba en Karma.</p><p>La arquitectura se fue reduciendo alrededor de unas pocas acciones:</p></div><p className="karma-actions">VER → AÑADIR → REPARTIR → ENTENDER → DECIDIR</p><div className="karma-prose"><p>En lugar de intentar mostrar toda la información financiera disponible, la interfaz debía priorizar aquello que ayudara a responder preguntas cotidianas.</p><p>¿Cuánto tenemos?<br />¿En qué estamos gastando?<br />¿Cómo estamos aportando?<br />¿Tenemos algo pendiente?<br />¿Nos estamos acercando a nuestro objetivo?</p></div><div className="karma-iteration-grid"><AssetPlaceholder label="WIREFRAME" aspectRatio="1 / 1.1" /><span className="karma-iteration-arrow">→</span><AssetPlaceholder label="ITERACIÓN UI" aspectRatio="1 / 1.1" /><span className="karma-iteration-arrow">→</span><AssetPlaceholder label="INTERFAZ ACTUAL" aspectRatio="1 / 1.1" /></div></div>
          </div>
        </section>

        <section className="karma-section" id="diseno">
          <SectionAnchorNav activeId="diseno" />
          <div className="karma-section-body"><h2>Una fintech que no pareciera un banco.</h2><div className="karma-prose"><p>El lenguaje visual de Karma se desarrolló al mismo tiempo que el producto.</p><p>Desde el principio quería alejarlo de algunos códigos habituales del sector financiero: interfaces oscuras, gráficos complejos, azules corporativos y una comunicación excesivamente técnica.</p><p>Porque Karma habla de dinero, pero también habla de convivencia.</p><p>La identidad debía transmitir claridad, cercanía y cierta calma sin perder la sensación de estar utilizando una herramienta financiera.</p><p>El resultado combina una interfaz funcional con un lenguaje mucho más editorial.</p></div><AssetPlaceholder label="BRAND SYSTEM" aspectRatio="2 / 1" className="karma-wide-placeholder" /><div className="karma-subsection"><h3>Un sistema entre lo digital y lo humano.</h3><div className="karma-prose"><p>La interfaz utiliza una base neutra y cálida sobre la que aparecen pequeños códigos de color para organizar la información.</p><p>La tipografía editorial aporta personalidad fuera de las zonas más funcionales, mientras que una sans serif mantiene la legibilidad dentro del producto.</p><p>Las ilustraciones siguen la misma lógica: líneas manuales, personajes simplificados y pequeñas metáforas visuales.</p><p>La intención era que hubiera siempre algo ligeramente humano alrededor de los números.</p></div><div className="karma-visual-system"><AssetPlaceholder label="TYPOGRAPHY" aspectRatio="1 / 1" /><AssetPlaceholder label="COLOR" aspectRatio="1 / 1" /><AssetPlaceholder label="UI COMPONENTS" aspectRatio="1.35 / 1" /><AssetPlaceholder label="ILLUSTRATION" aspectRatio="1 / 1" /><AssetPlaceholder label="ICONOGRAPHY" aspectRatio="1 / 1" /></div></div></div>
        </section>

        <section className="karma-section karma-product-section" id="producto">
          <SectionAnchorNav activeId="producto" />
          <div className="karma-section-body"><h2>Diseñar qué significa cada número.</h2><div className="karma-prose"><p>Una interfaz financiera puede mostrar muchos datos. El reto estaba en decidir cuáles necesitaban realmente las personas para entender lo que estaba ocurriendo.</p></div><div className="karma-product-block"><div><span className="karma-product-number">01</span><p className="karma-product-label">SALDO COMPARTIDO</p><h3>No basta con saber cuánto dinero hay. Hay que entender qué significa.</h3><div className="karma-prose"><p>El dashboard debía proporcionar una lectura rápida del estado del espacio sin obligar al usuario a interpretar una colección de gráficos.</p><p>Saldo, gastos, aportaciones y evolución conviven en una misma jerarquía para ofrecer contexto antes que detalle.</p></div></div><AssetPlaceholder label="DASHBOARD / SALDO" aspectRatio="1.25 / 1" /></div><div className="karma-product-block karma-product-block-reverse"><div><span className="karma-product-number">02</span><p className="karma-product-label">APORTACIONES</p><h3>Aportar no es lo mismo que gastar.</h3><div className="karma-prose"><p>Separar ambos conceptos permite representar situaciones mucho más reales.</p><p>Dos personas pueden aportar cantidades diferentes al espacio y, sin embargo, compartir los mismos gastos.</p><p>Esta separación permite que Karma pueda evolucionar hacia modelos más flexibles que el clásico reparto 50/50.</p></div></div><AssetPlaceholder label="APORTACIONES" aspectRatio="1.25 / 1" /></div><div className="karma-product-block"><div><span className="karma-product-number">03</span><p className="karma-product-label">OBJETIVOS</p><h3>El ahorro compartido necesitaba dejar de ser invisible.</h3><div className="karma-prose"><p>Los objetivos convierten una intención —un viaje, una casa, un colchón común— en algo que todas las personas del espacio pueden ver y seguir.</p><p>El diseño busca que el progreso sea comprensible de un vistazo sin convertir la experiencia en una aplicación de inversión.</p></div></div><AssetPlaceholder label="OBJETIVOS" aspectRatio="1.25 / 1" /></div><div className="karma-product-block karma-product-block-reverse"><div><span className="karma-product-number">04</span><p className="karma-product-label">MOVIMIENTOS</p><h3>Registrar tenía que ser rápido. Entenderlo después, todavía más.</h3><div className="karma-prose"><p>Los movimientos mantienen una estructura sencilla, pero incorporan la información necesaria para entender quién realizó el gasto, a qué espacio pertenece y cómo se repartió.</p></div></div><AssetPlaceholder label="MOVIMIENTOS / AÑADIR GASTO" aspectRatio="1.25 / 1" /></div></div>
        </section>

        <section className="karma-section" id="mas-alla"><SectionLabel>Más allá</SectionLabel><div className="karma-section-body"><h2>Construir también el producto.</h2><div className="karma-prose"><p>Karma empezó como una idea de producto, pero rápidamente se convirtió en algo mucho más amplio.</p><p>Diseñar la experiencia implicó también trabajar en su posicionamiento, identidad, arquitectura de contenidos, estrategia SEO, modelo de negocio y tecnología.</p><p>El producto se ha ido construyendo conectando diseño y desarrollo desde las primeras fases, trabajando sobre una arquitectura preparada para evolucionar hacia una plataforma real.</p></div><AssetPlaceholder label="ECOSISTEMA KARMA" aspectRatio="1.7 / 1" className="karma-wide-placeholder" /><div className="karma-ecosystem-labels"><span>PRODUCT<br /><b>UX/UI</b></span><span>BRAND<br /><b>Identity</b></span><span>CONTENT<br /><b>SEO</b></span><span>TECH<br /><b>Development</b></span><span>GROWTH<br /><b>Strategy</b></span></div><div className="karma-small-assets"><AssetPlaceholder label="WEB" aspectRatio="1.1 / 1" /><AssetPlaceholder label="APP" aspectRatio="1.1 / 1" /><AssetPlaceholder label="BLOG" aspectRatio="1.1 / 1" /><AssetPlaceholder label="ADMIN" aspectRatio="1.1 / 1" /><AssetPlaceholder label="SOCIAL" aspectRatio="1.1 / 1" /></div></div></section>

        <section className="karma-section karma-contribution" id="aportacion"><SectionLabel>Aportación</SectionLabel><div className="karma-section-body"><h2>Diseñar el producto completo.</h2><div className="karma-prose"><p>Karma es un proyecto personal y, al mismo tiempo, un laboratorio donde puedo trabajar prácticamente todas las capas que forman un producto digital.</p><p>Desde detectar una oportunidad y convertirla en una propuesta hasta definir la experiencia, construir su identidad, diseñar la interfaz y participar directamente en cómo se lleva a producción.</p><p>Muchas de las decisiones han cambiado por el camino y probablemente seguirán cambiando.</p><p>Precisamente por eso quería incluirlo en este portfolio.</p><p>No como un proyecto perfectamente cerrado, sino como una muestra de cómo pienso, diseño y construyo un producto desde cero.</p></div></div></section>

          <section className="karma-closing"><p className="karma-closing-statement">No diseñar solo cómo se ve Karma.<br /><em>Diseñar cómo funciona Karma.</em></p><a href="https://karmafinanciero.com" target="_blank" rel="noreferrer">karmafinanciero.com ↗</a><div className="karma-closing-meta"><div><span>MI PAPEL</span><p>Product Strategy<br />Product Design<br />UX/UI<br />Visual Identity<br />Art Direction<br />Content & SEO<br />Prototyping<br />Development Direction</p></div><div><span>ESTADO</span><p>En desarrollo · 2026</p></div></div><p className="karma-note">“Diseñado entre Figma, código, conversaciones, demasiadas pestañas abiertas y unas cuantas ideas que acabaron descartadas.”</p></section>
        </div>
      </main>
      <SiteFooter variant="floating" />
    </div>
  );
}
