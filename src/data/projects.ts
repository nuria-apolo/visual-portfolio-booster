import projectGyotaku from "@/assets/project-gyotaku.jpg";
import projectBlindwords from "@/assets/project-blindwords.jpg";
import projectApolo from "@/assets/project-apolo.jpg";

export type Project = {
  num: string;
  title: string;
  type: string;
  year: string;
  description: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    num: "01",
    title: "Del gyotaku al branding",
    type: "Identidad · Branding",
    year: "2026",
    description:
      "Diseñar una marca con verdad partiendo de la técnica japonesa de estampación de peces. Textura, gesto y memoria material.",
    image: projectGyotaku,
    alt: "Estampación gyotaku en negro sobre papel crema como base de un sistema de identidad",
  },
  {
    num: "02",
    title: "Blind Words",
    type: "Tipografía inclusiva",
    year: "2025",
    description:
      "Tipografía que fusiona Braille y alfabeto latino en un mismo glifo. Campaña internacional con Citizen (Canadá).",
    image: projectBlindwords,
    alt: "Espécimen tipográfico de Blind Words con letras blancas y puntos Braille sobre fondo negro",
  },
  {
    num: "03",
    title: "universoapolo.com",
    type: "Web · Galardonada con LAUS",
    year: "2024",
    description:
      "Una web con un LAUS debajo del brazo. Dirección de arte y diseño de producto para la consultora de branding Apolo.",
    image: projectApolo,
    alt: "Mockup de la web universoapolo.com con galardón LAUS de diseño gráfico",
  },
];
