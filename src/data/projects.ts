import projectGyotaku from "@/assets/gyotaku-framer.png";
import projectGyotakuDetail from "@/assets/gyotaku-detail.png";
import projectBlindwords from "@/assets/blindwords-framer.png";
import projectBlindwordsDetail1 from "@/assets/blindwords-detail-1.png";
import projectBlindwordsDetail2 from "@/assets/blindwords-detail-2.png";
import projectApolo from "@/assets/apolo-framer.png";
import projectApoloDetail1 from "@/assets/apolo-detail.png";
import projectApoloDetail2 from "@/assets/apolo-detail-2.png";

export type Project = {
  num: string;
  title: string;
  type: string;
  year: string;
  description: string;
  image: string;
  detailImages: string[];
  href: string;
  alt: string;
};

export const projects: Project[] = [
  {
    num: "01",
    title: "Del gyotaku al branding",
    type: "Identidad · Branding",
    year: "2026",
    description:
      "Hay proyectos que empiezan mucho antes de que llegue el briefing. Una identidad nacida del gyotaku, la materia y la búsqueda de una marca con verdad.",
    image: projectGyotaku,
    detailImages: [projectGyotakuDetail],
    href: "https://grounded-focus-364680.framer.app/del-gyotaku-al-branding-disenar-una-marca-con-verdad",
    alt: "Estampación gyotaku en negro sobre papel crema como base de un sistema de identidad",
  },
  {
    num: "02",
    title: "Blind Words",
    type: "Tipografía inclusiva",
    year: "2025",
    description:
      "Un proyecto que explora la tipografía inclusiva y pregunta si el diseño gráfico actual sigue siendo restrictivo para las personas invidentes.",
    image: projectBlindwords,
    detailImages: [projectBlindwordsDetail1, projectBlindwordsDetail2],
    href: "https://grounded-focus-364680.framer.app/blind-words-una-tipografia-inclusiva",
    alt: "Espécimen tipográfico de Blind Words con letras blancas y puntos Braille sobre fondo negro",
  },
  {
    num: "03",
    title: "universoapolo.com",
    type: "Web · Galardonada con LAUS",
    year: "2024",
    description:
      "Un rediseño que conecta objetivos de negocio, experiencia de usuario y tecnología para materializar la visión de Apolo. Con un LAUS debajo del brazo.",
    image: projectApolo,
    detailImages: [projectApoloDetail1, projectApoloDetail2],
    href: "https://grounded-focus-364680.framer.app/una-web-con-un-laus-debajo-del-brazo",
    alt: "Mockup de la web universoapolo.com con galardón LAUS de diseño gráfico",
  },
];
