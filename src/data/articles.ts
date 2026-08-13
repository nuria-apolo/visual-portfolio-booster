import coverUnaInterfazBranding from "@/assets/article-cover-una-interfaz-branding.jpg";
import coverBrandSystemDesignSystem from "@/assets/article-cover-brand-system-design-system.jpg";
import coverMarcaDigitalReglas from "@/assets/article-cover-marca-digital-reglas.jpg";
import coverBrandingProducto from "@/assets/article-cover-branding-producto.jpg";
import coverDisenarSistemas from "@/assets/article-cover-disenar-sistemas.jpg";
import coverIaDiseno from "@/assets/article-cover-ia-diseno.jpg";
import coverQueEsInteligenciaArtificial from "@/assets/article-cover-que-es-inteligencia-artificial.jpg";

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  keywords: string[];
  coverImage: string;
  coverAlt: string;
  sections: ArticleSection[];
  faq: ArticleFaq[];
  relatedSlugs: string[];
}

export const articles: Article[] = [
  {
    slug: "que-es-inteligencia-artificial",
    title: "Qué es la inteligencia artificial y para qué puede servir",
    seoTitle: "Qué es la inteligencia artificial y para qué sirve | Srta Serifa",
    description:
      "Qué es la inteligencia artificial, cómo funciona a grandes rasgos y en qué casos puede ayudar a una empresa a investigar, decidir, diseñar y construir mejor.",
    excerpt:
      "La inteligencia artificial no es una respuesta automática a cualquier problema. Es una tecnología que puede ampliar la capacidad de un equipo cuando se usa con contexto, criterio y objetivos claros.",
    category: "Inteligencia artificial",
    publishedAt: "2026-08-12",
    readingTime: "8 min",
    keywords: [
      "qué es la inteligencia artificial",
      "inteligencia artificial generativa",
      "aplicaciones de la inteligencia artificial",
      "IA para empresas",
    ],
    coverImage: coverQueEsInteligenciaArtificial,
    coverAlt:
      "Composición editorial de una cuadrícula de decisiones y una red de puntos que representa la inteligencia artificial",
    sections: [
      {
        heading: "Una forma de reconocer patrones y generar posibilidades",
        paragraphs: [
          "La inteligencia artificial agrupa tecnologías capaces de encontrar patrones en grandes cantidades de información y de producir resultados a partir de ellos. Puede clasificar, predecir, resumir, recomendar o generar texto, imágenes, código y estructuras. No piensa como una persona ni entiende el mundo del mismo modo: calcula relaciones probables según los datos y las instrucciones que recibe.",
          "Por eso la pregunta útil no es si la IA es inteligente en términos humanos. Es qué tipo de tarea puede mejorar y qué supervisión necesita. En algunos contextos aporta velocidad; en otros, ayuda a explorar alternativas o a detectar señales que un equipo no tendría tiempo de revisar por separado.",
        ],
      },
      {
        heading: "Qué cambia con la IA generativa",
        paragraphs: [
          "La IA generativa es la parte que ha hecho visible esta tecnología para muchas personas. A partir de una petición puede redactar un borrador, proponer una imagen, estructurar una presentación, escribir código o crear variaciones de una idea. Su valor no está en sustituir el criterio, sino en reducir el coste de empezar y comparar opciones.",
          "Esa rapidez también exige más claridad. Una instrucción vaga suele producir una respuesta vaga. Un equipo que sabe para quién trabaja, qué necesita resolver y qué límites no puede cruzar obtiene resultados más útiles y más fáciles de revisar.",
        ],
      },
      {
        heading: "Aplicaciones reales en una empresa",
        paragraphs: [
          "La IA puede apoyar tareas como sintetizar entrevistas, ordenar documentación, buscar patrones en feedback, preparar primeras versiones de contenido, traducir información, crear prototipos o automatizar operaciones repetitivas. En producto y diseño puede acelerar la investigación, la exploración y la construcción de pruebas para aprender antes.",
          "No hace falta empezar por una transformación completa. Muchas veces el mejor punto de partida es un proceso pequeño, repetitivo y medible: una tarea que consume tiempo, tiene fuentes claras y permite revisar el resultado antes de tomar una decisión importante.",
        ],
      },
      {
        heading: "Qué conviene evaluar antes de usarla",
        paragraphs: [
          "Antes de incorporar una herramienta conviene definir el problema, las fuentes de información y el nivel de riesgo. Hay tareas donde un error es fácil de detectar y corregir; otras afectan a personas, datos sensibles o decisiones de alto impacto y requieren controles mucho más estrictos. La calidad de una respuesta no sustituye su verificación.",
          "También importa decidir quién revisa, dónde se guardan los datos y cómo se documenta el proceso. Usar IA con responsabilidad significa mantener a una persona a cargo de la decisión, no solo de pulsar el botón de generar.",
        ],
      },
      {
        heading: "La ventaja sigue siendo saber decidir",
        paragraphs: [
          "La IA hace más barato producir opciones. Eso aumenta el valor de formular buenas preguntas, elegir una dirección y reconocer qué solución encaja con un contexto real. El trabajo no desaparece: cambia de producir cada pieza a diseñar un sistema de trabajo que combine herramientas, fuentes, revisión y criterio.",
          "Una adopción útil no empieza por la herramienta de moda. Empieza por entender qué necesita el equipo para trabajar mejor y qué parte de ese proceso puede hacerse más clara, más rápida o más accesible sin perder responsabilidad.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Qué es la inteligencia artificial en palabras sencillas?",
        answer:
          "Es un conjunto de tecnologías que identifica patrones en datos para clasificar, predecir, recomendar o generar resultados. Puede ayudar con tareas concretas, pero necesita contexto y revisión humana.",
      },
      {
        question: "¿Para qué puede servir la inteligencia artificial en una empresa?",
        answer:
          "Puede apoyar la investigación, el análisis de información, la atención al cliente, la creación de borradores, la automatización de tareas repetitivas y la exploración de productos o servicios. El uso adecuado depende del problema, los datos y el nivel de riesgo.",
      },
      {
        question: "¿La IA generativa sustituye a las personas?",
        answer:
          "No. Puede acelerar tareas y proponer alternativas, pero no asume la responsabilidad de entender el contexto, definir prioridades ni valorar las consecuencias de una decisión.",
      },
      {
        question: "¿Cómo empezar a utilizar IA de forma responsable?",
        answer:
          "Empieza por un caso de uso pequeño y medible, define qué datos pueden utilizarse, revisa los resultados y deja clara la responsabilidad humana sobre la decisión final.",
      },
    ],
    relatedSlugs: [
      "que-cambia-la-ia-en-el-trabajo-de-diseno",
      "disenar-sistemas-no-pantallas",
    ],
  },
  {
    slug: "una-interfaz-tambien-es-branding",
    title: "Una interfaz también es branding",
    seoTitle: "Una interfaz también es branding | Srta Serifa",
    description:
      "Una interfaz no solo organiza funciones: también construye percepción de marca. Qué decisiones de producto convierten una identidad en experiencia digital.",
    excerpt:
      "La marca no termina en el logotipo. Cada pantalla, estado, palabra y transición le dice algo al usuario sobre quién eres.",
    category: "Branding digital",
    publishedAt: "2026-08-09",
    readingTime: "6 min",
    keywords: [
      "branding digital",
      "diseño de interfaces",
      "identidad de marca",
      "producto digital",
    ],
    coverImage: coverUnaInterfazBranding,
    coverAlt:
      "Composición editorial de pantallas y módulos que relaciona diseño de interfaz y marca",
    sections: [
      {
        heading: "La marca aparece cuando alguien usa el producto",
        paragraphs: [
          "Cuando hablamos de branding solemos pensar en un nombre, un símbolo, unos colores y una tipografía. Todo eso importa, pero es solo la parte más visible del sistema. La experiencia de uso también es una expresión de marca: el momento en que una persona entiende algo, se equivoca, espera una respuesta o recibe ayuda.",
          "Una interfaz puede comunicar precisión o improvisación, cercanía o distancia, calma o urgencia. Lo hace incluso cuando no contiene ningún logotipo. La velocidad percibida, la jerarquía, el tono de los mensajes y la forma de resolver un error construyen una opinión tan real como una campaña.",
        ],
      },
      {
        heading: "Qué decisiones de interfaz construyen marca",
        paragraphs: [
          "La personalidad de una marca digital aparece en decisiones pequeñas y repetidas. Cómo se nombra una acción. Cuánto espacio se deja entre dos ideas. Qué ocurre cuando una tarea no puede completarse. Si el sistema explica lo que está pasando o deja a la persona sola frente a una pantalla vacía.",
          "Por eso una interfaz coherente no significa que todo tenga que verse igual. Significa que las decisiones responden a una misma lógica. La identidad visual aporta reconocimiento; el producto aporta comportamiento. Juntos hacen que la marca sea algo que se puede experimentar, no solo contemplar.",
        ],
      },
      {
        heading: "De la identidad visual a la experiencia",
        paragraphs: [
          "Llevar una marca a un producto digital no consiste en aplicar colores corporativos sobre componentes prefabricados. Consiste en traducir sus principios a reglas de interacción: qué se prioriza, cómo se guía, qué nivel de control se ofrece y qué tipo de lenguaje se utiliza.",
          "Ese trabajo conecta branding, UX, contenido y tecnología. El resultado es una interfaz reconocible por su criterio, incluso en una pantalla que el equipo de marca todavía no había imaginado.",
        ],
      },
      {
        heading: "La pregunta útil",
        paragraphs: [
          "En lugar de preguntar si una pantalla respeta la identidad, conviene preguntar qué experiencia de marca está produciendo. ¿Hace que la persona confíe? ¿Le ayuda a avanzar? ¿Explica con honestidad lo que ocurre? ¿Se comporta como la organización dice que quiere comportarse?",
          "Cuando esas respuestas están alineadas, la interfaz deja de ser una capa decorativa y se convierte en uno de los principales activos de la marca.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Qué relación hay entre branding y diseño de interfaces?",
        answer:
          "El branding define el significado y la personalidad de una marca; el diseño de interfaces convierte esos principios en decisiones visibles y utilizables dentro de un producto digital.",
      },
      {
        question: "¿Una interfaz puede reforzar una marca sin mostrar el logotipo?",
        answer:
          "Sí. La jerarquía, el tono, los estados, los tiempos de respuesta y la forma de acompañar al usuario comunican marca aunque el logotipo no aparezca.",
      },
    ],
    relatedSlugs: ["del-brand-system-al-design-system", "branding-y-producto-deberian-hablar-mas"],
  },
  {
    slug: "del-brand-system-al-design-system",
    title: "Del brand system al design system",
    seoTitle:
      "Del brand system al design system: cómo llevar una identidad al producto | Srta Serifa",
    description:
      "Un brand system define cómo se expresa una marca; un design system define cómo se construye un producto. La conexión entre ambos evita experiencias digitales fragmentadas.",
    excerpt:
      "El paso de una identidad visual a un producto digital necesita traducción: principios, decisiones y componentes que puedan repetirse sin perder intención.",
    category: "Sistemas de diseño",
    publishedAt: "2026-08-09",
    readingTime: "7 min",
    keywords: ["brand system", "design system", "sistema de diseño", "identidad digital"],
    coverImage: coverBrandSystemDesignSystem,
    coverAlt:
      "Composición editorial de módulos ordenados que representan la conexión entre brand system y design system",
    sections: [
      {
        heading: "Dos sistemas, una misma intención",
        paragraphs: [
          "Un brand system organiza la expresión de una marca: su voz, sus códigos visuales, sus principios y la forma en que quiere ser reconocida. Un design system organiza la construcción de una experiencia digital: componentes, patrones, tokens, estados y reglas de uso.",
          "No son el mismo documento ni cumplen la misma función. Pero cuando trabajan separados, el producto puede terminar hablando otro idioma. El brand system aporta intención; el design system la convierte en decisiones que un equipo puede producir y mantener.",
        ],
      },
      {
        heading: "La traducción ocurre en los principios",
        paragraphs: [
          "El puente entre ambos sistemas no es una biblioteca de botones. Son los principios. Si una marca quiere ser clara, el producto debe tener una jerarquía legible y mensajes que no oculten información. Si quiere ser cuidadosa, sus flujos deben anticipar dudas y tratar los errores con respeto.",
          "A partir de ahí aparecen decisiones concretas: escalas tipográficas, densidad de información, contraste, ritmo, movimiento, nomenclatura y comportamiento responsive. El componente es la consecuencia; el principio es el origen.",
        ],
      },
      {
        heading: "Qué debe compartir un equipo",
        paragraphs: [
          "Para que la relación funcione, diseño, marca, contenido y desarrollo necesitan compartir un vocabulario. No basta con entregar una guía visual a un equipo de producto ni una librería de componentes a un equipo de comunicación.",
          "Un sistema útil explica por qué existe cada regla, cuándo puede cambiarse y qué problema resuelve. También señala sus límites. La consistencia no consiste en bloquear la evolución, sino en hacer que evolucionar sea una decisión consciente.",
        ],
      },
      {
        heading: "El resultado es más que eficiencia",
        paragraphs: [
          "Un buen design system acelera el trabajo, reduce decisiones repetidas y mejora la accesibilidad. Pero su valor más importante es otro: permite que la marca mantenga una voz reconocible mientras el producto crece, incorpora nuevas funcionalidades y cambia de escala.",
          "El objetivo no es que cada pantalla parezca diseñada por la misma persona. Es que todas parezcan pertenecer al mismo mundo.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Es lo mismo un brand system que un design system?",
        answer:
          "No. El brand system define la expresión y los principios de una marca; el design system define las reglas y piezas para construir experiencias digitales coherentes.",
      },
      {
        question: "¿Cuándo necesita una empresa un design system?",
        answer:
          "Cuando varias personas o equipos diseñan y desarrollan un producto, cuando la experiencia empieza a fragmentarse o cuando repetir decisiones ralentiza el crecimiento.",
      },
    ],
    relatedSlugs: ["una-interfaz-tambien-es-branding", "disenar-sistemas-no-pantallas"],
  },
  {
    slug: "una-marca-digital-necesita-reglas-no-aplicaciones",
    title: "Por qué una marca digital necesita reglas, no aplicaciones",
    seoTitle: "Por qué una marca digital necesita reglas, no aplicaciones | Srta Serifa",
    description:
      "Una identidad digital no se resuelve con plantillas, filtros o aplicaciones aisladas. Necesita reglas que permitan tomar buenas decisiones en contextos nuevos.",
    excerpt:
      "Las herramientas producen piezas. Las reglas ayudan a decidir qué merece existir y cómo debe comportarse cuando el contexto cambia.",
    category: "Estrategia de marca",
    publishedAt: "2026-08-09",
    readingTime: "6 min",
    keywords: ["marca digital", "estrategia de marca", "identidad visual", "sistema de marca"],
    coverImage: coverMarcaDigitalReglas,
    coverAlt:
      "Composición editorial de reglas, capas y módulos que representa un sistema de marca digital flexible",
    sections: [
      {
        heading: "Una colección de piezas no es un sistema",
        paragraphs: [
          "Una marca puede tener un logotipo, una paleta, una presentación, varias plantillas y una carpeta llena de recursos. Aun así, puede ser difícil trabajar con ella. El problema aparece cuando nadie sabe qué hacer en una situación que no estaba prevista.",
          "Las aplicaciones resuelven casos conocidos. Una regla bien formulada ayuda a resolver también los casos nuevos. Esa diferencia es especialmente importante en digital, donde aparecen formatos, canales, estados y necesidades que cambian continuamente.",
        ],
      },
      {
        heading: "Qué hace una regla de marca",
        paragraphs: [
          "Una regla no tiene por qué ser rígida ni hablar como un manual legal. Puede ser una frase que oriente una decisión: priorizar la claridad sobre el efecto, dejar espacio para que el contenido respire o mostrar el estado del sistema antes de pedir una acción.",
          "Las mejores reglas son memorables porque explican una intención. Después pueden convertirse en criterios para diseño, contenido, producto y desarrollo. Así, diferentes personas pueden tomar decisiones compatibles sin necesitar aprobación para cada detalle.",
        ],
      },
      {
        heading: "La marca como infraestructura",
        paragraphs: [
          "Pensar la marca como infraestructura cambia la pregunta. Ya no se trata solo de cómo se ve una pieza, sino de qué capacidad le da a la organización. ¿Permite lanzar una nueva funcionalidad sin empezar de cero? ¿Ayuda a incorporar a alguien nuevo? ¿Hace más fácil detectar una decisión que se aleja de la personalidad buscada?",
          "Una marca digital madura no depende de que una persona concreta esté en todas las reuniones. Sus principios están suficientemente claros como para viajar por el equipo.",
        ],
      },
      {
        heading: "Reglas para moverse, no para quedarse quietos",
        paragraphs: [
          "El valor de un sistema no está en impedir que algo cambie. Está en permitir que cambie sin perder el sentido. Las reglas deben tener un núcleo estable y una zona de interpretación: lo que siempre debe mantenerse y lo que puede adaptarse al contexto.",
          "Cuando una marca consigue ese equilibrio, deja de depender de aplicaciones cerradas y gana una forma más flexible de crecer.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Qué es un sistema de marca digital?",
        answer:
          "Es un conjunto de principios y reglas que orienta cómo una marca se expresa y se comporta en webs, productos, contenidos y otros contextos digitales.",
      },
      {
        question: "¿Por qué las plantillas no son suficientes para una marca?",
        answer:
          "Porque una plantilla resuelve un formato concreto, mientras que una regla ayuda a tomar decisiones cuando aparece un nuevo formato o una situación no prevista.",
      },
    ],
    relatedSlugs: ["del-brand-system-al-design-system", "disenar-sistemas-no-pantallas"],
  },
  {
    slug: "branding-y-producto-deberian-hablar-mas",
    title: "Branding y producto deberían hablar más",
    seoTitle: "Branding y producto deberían hablar más | Srta Serifa",
    description:
      "Cuando branding y producto trabajan separados, la marca promete una cosa y la experiencia entrega otra. Cómo construir una conversación más útil entre ambos equipos.",
    excerpt:
      "La marca atrae una expectativa y el producto la confirma, la matiza o la rompe. Por eso no deberían encontrarse solo al final del proceso.",
    category: "Branding y producto",
    publishedAt: "2026-08-09",
    readingTime: "6 min",
    keywords: [
      "branding y producto",
      "diseño de producto",
      "estrategia de marca",
      "experiencia digital",
    ],
    coverImage: coverBrandingProducto,
    coverAlt:
      "Dos sistemas editoriales que se conectan para representar la colaboración entre branding y producto",
    sections: [
      {
        heading: "La promesa y la experiencia",
        paragraphs: [
          "Branding y producto trabajan sobre momentos distintos de una misma relación. La marca formula una promesa y crea una expectativa. El producto aparece después para demostrar si esa promesa tenía fundamento.",
          "Si una empresa se presenta como sencilla y su onboarding es confuso, el problema no pertenece únicamente a UX. Si habla de cuidado y sus mensajes de error culpan al usuario, la incoherencia es también un problema de marca.",
        ],
      },
      {
        heading: "Dónde se pierde la conversación",
        paragraphs: [
          "A menudo branding participa al principio, producto toma el relevo y ambos vuelven a encontrarse cuando hay que preparar una campaña o un lanzamiento. En ese intervalo, las decisiones importantes se toman sin compartir contexto.",
          "El resultado suele ser una identidad bien presentada y una experiencia que la utiliza como decoración. La solución no es sumar reuniones de aprobación, sino compartir preguntas desde el principio: qué queremos que la persona entienda, sienta y pueda hacer.",
        ],
      },
      {
        heading: "Una colaboración más concreta",
        paragraphs: [
          "Branding puede aportar principios de personalidad, tono y diferenciación. Producto puede aportar necesidades, restricciones, comportamientos y evidencia de uso. Diseño funciona como espacio de traducción entre ambas perspectivas.",
          "Cuando se trabaja así, una decisión de interfaz deja de ser solo estética y una decisión de marca deja de ser abstracta. Ambas se pueden evaluar por la calidad de la experiencia que producen.",
        ],
      },
      {
        heading: "La marca se prueba en los detalles",
        paragraphs: [
          "La conversación se vuelve especialmente valiosa en los bordes: el primer uso, el pago, una espera, una cancelación, una notificación o un error. Son lugares donde la persona necesita saber si puede confiar.",
          "Ahí es donde branding y producto deberían hablar más: no para que todo tenga el mismo aspecto, sino para que la experiencia tenga el mismo criterio.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Por qué deben colaborar branding y producto?",
        answer:
          "Porque la marca genera expectativas y el producto las confirma mediante una experiencia concreta. Si ambos equipos trabajan separados, puede aparecer una distancia entre lo que se promete y lo que se vive.",
      },
      {
        question: "¿Quién debe liderar la conexión entre marca y producto?",
        answer:
          "No tiene que depender de un único rol. Necesita principios compartidos y una colaboración continua entre marca, producto, diseño, contenido y tecnología.",
      },
    ],
    relatedSlugs: [
      "una-interfaz-tambien-es-branding",
      "una-marca-digital-necesita-reglas-no-aplicaciones",
    ],
  },
  {
    slug: "disenar-sistemas-no-pantallas",
    title: "Diseñar sistemas, no pantallas",
    seoTitle: "Diseñar sistemas, no pantallas: una forma más sostenible de trabajar | Srta Serifa",
    description:
      "Diseñar sistemas permite crear productos digitales coherentes, escalables y más fáciles de mantener. La pantalla es una salida; el sistema es la lógica que la hace posible.",
    excerpt:
      "Una pantalla resuelve un instante. Un sistema permite resolver una familia entera de situaciones con coherencia.",
    category: "Diseño de producto",
    publishedAt: "2026-08-09",
    readingTime: "7 min",
    keywords: [
      "diseño de sistemas",
      "diseño de producto digital",
      "design system",
      "diseño escalable",
    ],
    coverImage: coverDisenarSistemas,
    coverAlt:
      "Composición editorial de componentes repetibles que representa el diseño de sistemas",
    sections: [
      {
        heading: "La pantalla es la evidencia, no el proyecto completo",
        paragraphs: [
          "Una pantalla es una fotografía de un sistema en un momento concreto. Muestra una combinación de contenido, componentes, reglas y decisiones. Cuando diseñamos solo la pantalla, corremos el riesgo de optimizar la imagen y olvidar todo lo que tendrá que ocurrir alrededor.",
          "Un producto real contiene estados vacíos, errores, permisos, diferentes tamaños, contenidos inesperados y personas que llegan con objetivos distintos. Diseñar para ese conjunto es diseñar un sistema.",
        ],
      },
      {
        heading: "Qué significa pensar en sistemas",
        paragraphs: [
          "Significa buscar patrones antes de dibujar excepciones. Entender qué decisiones se repiten, qué variables pueden cambiar y qué relaciones deben mantenerse estables. También significa diseñar la lógica de una experiencia, no únicamente su composición visual.",
          "El trabajo puede incluir arquitectura de información, flujos, componentes, tokens, contenido, estados y criterios de accesibilidad. No todo tiene que convertirse en una biblioteca enorme. El sistema debe tener el tamaño del problema que ayuda a resolver.",
        ],
      },
      {
        heading: "Más consistencia y menos trabajo perdido",
        paragraphs: [
          "Cuando cada pantalla se resuelve como una pieza independiente, las inconsistencias aparecen rápido: botones que hacen cosas distintas, mensajes con tonos incompatibles o patrones que se repiten con pequeñas variaciones.",
          "Un sistema bien pensado reduce ese trabajo perdido. Permite reutilizar lo que ya funciona, detectar contradicciones y reservar la energía de diseño para las decisiones que sí son nuevas.",
        ],
      },
      {
        heading: "Diseñar para lo que todavía no existe",
        paragraphs: [
          "La prueba de un sistema no es cuánto se parece la primera pantalla al prototipo. Es qué ocurre cuando llega la siguiente funcionalidad. Si el equipo puede ampliarlo sin romperlo, el diseño está haciendo su trabajo.",
          "Diseñar sistemas es aceptar que el producto seguirá cambiando. El objetivo no es anticiparlo todo, sino crear una base que pueda aprender, adaptarse y seguir siendo reconocible.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Qué diferencia hay entre diseñar una pantalla y diseñar un sistema?",
        answer:
          "Diseñar una pantalla resuelve una situación concreta; diseñar un sistema define patrones y reglas capaces de resolver muchas situaciones relacionadas con coherencia.",
      },
      {
        question: "¿Un sistema de diseño sirve solo para grandes empresas?",
        answer:
          "No. Un sistema pequeño y bien dimensionado también ayuda a equipos pequeños a reducir decisiones repetidas y mantener una experiencia coherente mientras el producto crece.",
      },
    ],
    relatedSlugs: [
      "del-brand-system-al-design-system",
      "una-marca-digital-necesita-reglas-no-aplicaciones",
    ],
  },
  {
    slug: "que-cambia-la-ia-en-el-trabajo-de-diseno",
    title: "Qué cambia la IA en el trabajo de diseño",
    seoTitle: "Qué cambia la IA en el trabajo de diseño | Srta Serifa",
    description:
      "La inteligencia artificial está cambiando cómo investigamos, exploramos y producimos diseño. Qué tareas acelera y por qué el criterio sigue siendo el trabajo principal.",
    excerpt:
      "La IA reduce el coste de producir opciones. Por eso aumenta el valor de saber formular problemas, elegir direcciones y reconocer cuándo una solución tiene sentido.",
    category: "Diseño e inteligencia artificial",
    publishedAt: "2026-08-09",
    readingTime: "7 min",
    keywords: [
      "IA y diseño",
      "inteligencia artificial diseño",
      "futuro del diseño",
      "diseño generativo",
    ],
    coverImage: coverIaDiseno,
    coverAlt:
      "Composición editorial de herramientas, cuadrículas y patrones que representa la inteligencia artificial en diseño",
    sections: [
      {
        heading: "La IA cambia el coste de explorar",
        paragraphs: [
          "La inteligencia artificial permite generar referencias, variaciones, textos, estructuras y prototipos con una velocidad que hace unos años no era razonable. Eso cambia una parte importante del trabajo: explorar deja de ser tan caro.",
          "Pero producir más opciones no equivale a encontrar una mejor dirección. Cuando las alternativas se multiplican, también aumenta la necesidad de tener un criterio capaz de ordenar, descartar y explicar.",
        ],
      },
      {
        heading: "Qué tareas puede acelerar",
        paragraphs: [
          "La IA puede ayudar a sintetizar entrevistas, agrupar señales, proponer preguntas, comparar referencias, generar primeras arquitecturas de contenido o convertir una hipótesis en un prototipo que permita aprender antes.",
          "También puede reducir el tiempo de algunas tareas mecánicas y abrir posibilidades para equipos pequeños. La clave está en utilizarla dentro de un proceso con objetivos claros, fuentes revisables y momentos de decisión humana.",
        ],
      },
      {
        heading: "Lo que no debería delegarse sin más",
        paragraphs: [
          "Definir el problema, entender a las personas, interpretar el contexto, decidir qué no hacer y asumir las consecuencias de una solución siguen necesitando responsabilidad. Una IA puede producir una respuesta convincente y estar equivocada, ser superficial o no tener en cuenta una restricción importante.",
          "En diseño, el criterio no es un filtro final que se aplica a una imagen terminada. Es la capacidad de elegir qué merece atención desde el principio.",
        ],
      },
      {
        heading: "El nuevo trabajo es diseñar el sistema de trabajo",
        paragraphs: [
          "La pregunta más productiva no es si la IA sustituirá a los diseñadores, sino qué partes del proceso queremos hacer más rápidas, más accesibles o más rigurosas. Eso exige diseñar un sistema de trabajo: herramientas, prompts, fuentes, revisiones, límites y criterios de calidad.",
          "La IA puede ampliar la capacidad de un equipo. La dirección sigue dependiendo de su capacidad para comprender, elegir y hacerse cargo del resultado.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Cómo está cambiando la IA el trabajo de diseño?",
        answer:
          "Está acelerando la exploración, la síntesis y la producción de primeras opciones. Al mismo tiempo, aumenta la importancia del criterio, la investigación, la edición y la responsabilidad sobre las decisiones.",
      },
      {
        question: "¿Puede la IA sustituir el criterio de un diseñador?",
        answer:
          "No. Puede proponer alternativas y automatizar tareas, pero no comprende por sí sola el contexto completo, las prioridades del negocio ni las consecuencias humanas de una decisión.",
      },
    ],
    relatedSlugs: ["que-es-inteligencia-artificial", "disenar-sistemas-no-pantallas"],
  },
];

export const articleBySlug = new Map(articles.map((article) => [article.slug, article]));
