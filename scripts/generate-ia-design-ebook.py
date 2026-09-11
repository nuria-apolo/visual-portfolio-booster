from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A5
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, Image, PageBreak, PageTemplate, Paragraph, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "ia-y-el-criterio-en-diseno.pdf"
COVER = ROOT / "src" / "assets" / "article-cover-ia-diseno.jpg"
PAGE_W, PAGE_H = A5
INK = colors.HexColor("#202020")
MUTED = colors.HexColor("#6D6D67")
LINE = colors.HexColor("#D9D5CB")
ACCENT = colors.HexColor("#C9D5A5")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Kicker", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=8, leading=11, textColor=MUTED, spaceAfter=10))
styles.add(ParagraphStyle(name="CoverTitle", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=30, leading=31, textColor=INK, spaceAfter=16))
styles.add(ParagraphStyle(name="Chapter", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=23, leading=25, textColor=INK, spaceAfter=16))
styles.add(ParagraphStyle(name="BodyBook", parent=styles["BodyText"], fontName="Helvetica", fontSize=10.2, leading=14.6, textColor=INK, spaceAfter=10))
styles.add(ParagraphStyle(name="Lead", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=11.5, leading=16, textColor=INK, spaceAfter=15))
styles.add(ParagraphStyle(name="Quote", parent=styles["BodyText"], fontName="Helvetica-BoldOblique", fontSize=14, leading=18, textColor=INK, leftIndent=9, borderColor=ACCENT, borderWidth=3, borderPadding=8, spaceBefore=8, spaceAfter=14))
styles.add(ParagraphStyle(name="TableLabel", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=8.8, leading=11, textColor=INK, spaceAfter=0))
styles.add(ParagraphStyle(name="TableBody", parent=styles["BodyText"], fontName="Helvetica", fontSize=8.8, leading=11.5, textColor=INK, spaceAfter=0))
styles.add(ParagraphStyle(name="Small", parent=styles["Normal"], fontName="Helvetica", fontSize=8, leading=11, textColor=MUTED))


def p(text, style="BodyBook"):
    return Paragraph(text, styles[style])


def page_chrome(canvas, doc):
    canvas.saveState()
    if doc.page > 1:
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(0.5)
        canvas.line(17 * mm, PAGE_H - 15 * mm, PAGE_W - 17 * mm, PAGE_H - 15 * mm)
        canvas.setFont("Helvetica-Bold", 7)
        canvas.setFillColor(MUTED)
        canvas.drawString(17 * mm, PAGE_H - 11 * mm, "IA Y EL CRITERIO EN DISEÑO")
        canvas.drawRightString(PAGE_W - 17 * mm, 12 * mm, str(doc.page))
    canvas.restoreState()


class BookDoc(BaseDocTemplate):
    def __init__(self, filename):
        super().__init__(filename, pagesize=A5, leftMargin=17 * mm, rightMargin=17 * mm, topMargin=23 * mm, bottomMargin=18 * mm)
        self.addPageTemplates([PageTemplate(id="book", frames=Frame(self.leftMargin, self.bottomMargin, self.width, self.height), onPage=page_chrome)])


def index_table(rows):
    table = Table(rows, colWidths=[18 * mm, 96 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEBELOW", (0, 0), (-1, -1), 0.5, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return table


def build_story():
    s = [Spacer(1, 8 * mm), p("UN ENSAYO BREVE SOBRE DISEÑO, TECNOLOGÍA Y DECISIONES HUMANAS", "Kicker"), p("IA y el<br/>criterio en<br/>diseño", "CoverTitle"), p("Cómo trabajar con inteligencia artificial sin dejar que piense por nosotros."), Spacer(1, 12 * mm)]
    if COVER.exists():
        s.append(Image(str(COVER), width=116 * mm, height=65 * mm))
    s += [Spacer(1, 10 * mm), p("Núria López · Srta Serifa · 2026", "Small"), PageBreak()]

    s += [p("ÍNDICE", "Kicker"), p("Un recorrido para entender el presente", "Chapter")]
    s.append(index_table([
        [p("00", "TableLabel"), p("Una invitación", "TableBody")],
        [p("01", "TableLabel"), p("La Revolución Industrial: cuando el mundo cambió de ritmo", "TableBody")],
        [p("02", "TableLabel"), p("De la computación a la inteligencia artificial", "TableBody")],
        [p("03", "TableLabel"), p("La IA hace más barato explorar", "TableBody")],
        [p("04", "TableLabel"), p("Una compañera de mesa", "TableBody")],
        [p("05", "TableLabel"), p("El criterio no es un filtro final", "TableBody")],
        [p("06", "TableLabel"), p("Un marco pequeño para empezar", "TableBody")],
        [p("07", "TableLabel"), p("Seguir siendo quienes deciden", "TableBody")],
    ]))
    s += [Spacer(1, 10 * mm), p("Una historia de herramientas, cambios de escala y decisiones humanas.", "Lead"), PageBreak()]

    s += [p("00 · UNA INVITACIÓN", "Kicker"), p("No estamos diseñando menos. Estamos diseñando de otra manera.", "Chapter"), p("La inteligencia artificial ha entrado en el diseño como entran las herramientas que cambian una mesa de trabajo: modifica los tiempos, abre posibilidades y obliga a revisar algunos gestos que dábamos por hechos. Pero una herramienta, por poderosa que sea, no sabe por sí sola qué merece ser construido.", "Lead"), p("Este libro parte de una posición deliberadamente optimista: la IA puede ser una herramienta más dentro de nuestro oficio. Puede ayudarnos a investigar, ordenar, probar, imaginar y producir. Lo importante es no confundir velocidad con dirección ni abundancia con sentido."), p("El diseño siempre ha consistido, en parte, en elegir. Cuando producir opciones se vuelve más barato, esa capacidad de elegir no pierde valor: se vuelve más visible."), p("La tecnología puede ampliar el campo. El criterio decide hacia dónde caminar.", "Quote"), PageBreak()]

    s += [p("01 · EL ANTECEDENTE", "Kicker"), p("La Revolución Industrial: cuando el mundo cambió de ritmo", "Chapter"), p("Entre finales del siglo XVIII y el siglo XIX, una parte de Europa comenzó a sustituir herramientas y energías locales por máquinas, fábricas y nuevas formas de organizar el trabajo. El vapor, la mecanización textil, el ferrocarril y la producción en serie no fueron solo avances técnicos: cambiaron las ciudades, los horarios y la relación de las personas con lo que fabricaban."), p("La Revolución Industrial trajo más capacidad de producción y también nuevas tensiones. Aumentó la escala, aceleró los intercambios y abrió oportunidades, pero produjo desigualdad, jornadas duras, contaminación y una sensación desconocida de vivir dentro de un sistema que iba más rápido que sus habitantes."), p("Cada gran transformación tecnológica tiene dos caras. Amplía lo que podemos hacer y obliga a preguntar para quién funciona, qué coste tiene y qué tipo de mundo termina construyendo."), p("La tecnología amplía lo posible. El criterio decide qué merece crecer.", "Quote"), PageBreak()]

    s += [p("02 · EL ORIGEN", "Kicker"), p("De la computación a la inteligencia artificial", "Chapter"), p("Mucho antes de los modelos actuales, las personas ya buscaban formas de contar, ordenar y automatizar operaciones. El ábaco, las máquinas de cálculo mecánico y las ideas de Charles Babbage sobre una máquina analítica fueron pasos distintos hacia una misma intuición: algunas operaciones podían describirse como reglas y ejecutarse con ayuda de una máquina."), p("En el siglo XX, la computación pasó de ser una idea mecánica a convertirse en una disciplina electrónica. La lógica formal, los primeros ordenadores y el desarrollo de los transistores crearon las condiciones para almacenar datos, ejecutar instrucciones y programar sistemas cada vez más complejos."), p("La expresión inteligencia artificial empezó a utilizarse en 1956, en un encuentro de investigadores celebrado en Dartmouth. Desde entonces, el campo ha alternado entusiasmo y decepción: sistemas expertos, inviernos de la IA, aprendizaje automático y, más recientemente, modelos capaces de generar texto, imágenes, audio y código."), p("La IA contemporánea no apareció de repente. Es la última capa visible de una historia larga: convertir el cálculo en capacidad, la capacidad en automatización y la automatización en nuevas preguntas humanas."), PageBreak()]

    s += [p("03 · EL CAMBIO", "Kicker"), p("La IA hace más barato explorar", "Chapter"), p("Durante mucho tiempo, una parte importante del trabajo de diseño consistió en convertir una intuición en algo visible. La IA reduce el tiempo necesario para llegar a esas primeras formas."), p("Eso cambia el coste de explorar. Podemos comparar más rutas, detectar antes una dirección débil y mostrar una hipótesis antes de que se convierta en una producción costosa."), p("Pero si todas las opciones llegan rápido, podemos sentir que avanzar es simplemente seguir generando. No lo es. Explorar no sustituye a comprender, y producir variaciones no equivale a haber encontrado una idea."), p("El nuevo trabajo consiste en saber qué pregunta merece otra iteración y cuál ya puede cerrarse.", "Quote"), PageBreak()]

    s += [p("04 · LAS POSIBILIDADES", "Kicker"), p("Una compañera de mesa", "Chapter"), p("La IA puede ser una buena compañera cuando la invitamos a una tarea concreta, le damos contexto y sabemos qué vamos a revisar."), p("<b>Investigar.</b> Resumir materiales, agrupar señales y proponer preguntas."), p("<b>Abrir.</b> Generar rutas visuales, nombres, estructuras y alternativas."), p("<b>Ensayar.</b> Crear prototipos, variaciones y borradores fáciles de discutir."), p("<b>Aliviar.</b> Automatizar tareas repetitivas para reservar atención a lo que necesita interpretación."), p("<b>Traducir.</b> Convertir una idea entre formatos y lenguajes para que más personas puedan participar."), p("La IA ayuda a mover el material, pero no sabe qué significa para las personas que lo van a recibir. Esa lectura sigue siendo nuestra.", "Quote"), PageBreak()]

    s += [p("05 · LO HUMANO", "Kicker"), p("El criterio no es un filtro final", "Chapter"), p("A veces hablamos del criterio como si fuera una última capa: primero generamos, después seleccionamos. En realidad, aparece mucho antes: en la forma de definir el problema, en lo que decidimos observar y en aquello que preferimos no hacer."), p("Un resultado puede ser técnicamente correcto y, aun así, no servir. Puede ser atractivo y no tener relación con la experiencia real. Puede sonar convincente y apoyarse en una premisa falsa."), p("Por eso el criterio incluye preguntas que ninguna herramienta debería responder sola: ¿para quién hacemos esto?, ¿qué contexto no aparece en los datos?, ¿qué error tendría consecuencias?, ¿qué parte debe seguir siendo explicable?"), p("La IA puede ayudarnos a mirar más. El criterio nos ayuda a ver mejor.", "Quote"), PageBreak()]

    rows = [
        [p("1 · Enfocar", "TableLabel"), p("Nombra la tarea y el resultado que quieres mejorar.", "TableBody")],
        [p("2 · Contextualizar", "TableLabel"), p("Aporta fuentes, audiencia, restricciones y ejemplos reales.", "TableBody")],
        [p("3 · Explorar", "TableLabel"), p("Pide alternativas y usa la velocidad para comparar.", "TableBody")],
        [p("4 · Revisar", "TableLabel"), p("Comprueba datos, tono, sesgos, calidad y coherencia.", "TableBody")],
        [p("5 · Decidir", "TableLabel"), p("Una persona o un equipo asume la elección.", "TableBody")],
        [p("6 · Aprender", "TableLabel"), p("Guarda lo que funcionó, lo que falló y qué ajustar.", "TableBody")],
    ]
    s += [p("06 · UN MODO DE USARLA", "Kicker"), p("Un marco pequeño para empezar", "Chapter"), p("No hace falta adoptar una herramienta para todo el proceso. Es más útil elegir un punto concreto, probarlo y aprender de la diferencia entre lo que esperábamos y lo que ocurrió."), Table(rows, colWidths=[29 * mm, 85 * mm], hAlign="LEFT"), Spacer(1, 3 * mm), p("Este marco protege el espacio donde aparecen las buenas decisiones.", "BodyBook"), PageBreak()]
    s += [p("07 · PARA TERMINAR", "Kicker"), p("Seguir siendo quienes deciden", "Chapter"), p("El futuro del diseño no tiene por qué ser una competición entre personas y máquinas. Puede ser una conversación sobre qué queremos hacer con nuestra atención, qué tareas merece la pena acelerar y qué responsabilidades queremos conservar cerca."), p("La IA puede producir más, antes y de maneras inesperadas. Eso es una oportunidad si recordamos que diseñar no es llenar el mundo de resultados: es darle forma a algo para que tenga sentido en una situación concreta."), p("El futuro se plantea menos como una sustitución total y más como una redistribución de tareas. Algunas operaciones serán más rápidas; otras, precisamente por ser humanas, ganarán peso: interpretar, cuidar, imaginar consecuencias, construir confianza y decidir qué merece nuestra atención."), p("Podemos decidir qué principios permanecen.", "Quote")]
    return s


OUTPUT.parent.mkdir(parents=True, exist_ok=True)
BookDoc(str(OUTPUT)).build(build_story())
print(OUTPUT)
