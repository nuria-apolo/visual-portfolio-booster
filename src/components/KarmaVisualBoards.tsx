import karmaWordmark from "@/assets/karma-wordmark-original.svg";
import "./karma-visual-boards.css";

const palette = [
  ["Base", "#F4F2EE"],
  ["Vainilla", "#FEF7AF"],
  ["Salvia", "#C3D6B6"],
  ["Azul gris", "#CBD6DF"],
  ["Tinta", "#141414"],
];

export function KarmaIdentityBoard() {
  return (
    <figure id="karma-identidad" className="karma-artwork" aria-label="Sistema visual de Karma Financiero">
      <div className="karma-brand-board">
        <div className="karma-brand-tile karma-brand-logo">
          <img src={karmaWordmark} alt="Logotipo original de Karma Financiero" />
        </div>
        <div className="karma-brand-tile karma-brand-message">
          <span>LA PERSONALIDAD</span>
          <p>
            Compartir
            <br />
            con calma.
          </p>
        </div>
        <div className="karma-brand-tile karma-brand-type">
          <span>ATKING LIGHT</span>
          <p>
            AaBbCc
            <br />
            0123456789
          </p>
          <small>Editorial + funcional</small>
        </div>
        <div className="karma-brand-palette" aria-label="Paleta de color">
          {palette.map(([name, hex]) => (
            <div
              key={hex}
              style={{ background: hex, color: hex === "#141414" ? "#fff" : "#141414" }}
            >
              <span>{name}</span>
              <small>{hex}</small>
            </div>
          ))}
        </div>
      </div>
      <figcaption>Identidad · Logotipo, tipografía y colores originales de Karma.</figcaption>
    </figure>
  );
}

export function KarmaComponentsBoard() {
  return (
    <figure className="karma-artwork">
      <div className="karma-components-board">
        <img className="karma-components-logo" src={karmaWordmark} alt="Karma Financiero" />
        <div
          className="karma-component-tabs"
          aria-label="Muestra visual de navegación, no interactiva"
        >
          <span>Resumen</span>
          <span>Deudas</span>
          <span>Suscripciones</span>
        </div>
        <div className="karma-component-intro">
          <span>EL LENGUAJE DE LA INTERFAZ</span>
          <p>
            Claridad alrededor
            <br />
            de los números.
          </p>
        </div>
        <div className="karma-component-metrics">
          <div className="karma-metric-income">
            <span>
              ↗ <b>INGRESOS</b>
            </span>
            <p>2870 €</p>
            <small>Total Recibido</small>
          </div>
          <div className="karma-metric-expense">
            <span>
              ↘ <b>GASTOS</b>
            </span>
            <p>1153 €</p>
            <small>Total Gastado</small>
          </div>
        </div>
        <div className="karma-component-note">
          <span>01 / JERARQUÍA</span>
          <p>
            Primero, el dato.
            <br />
            Después, su contexto.
          </p>
        </div>
      </div>
      <figcaption>
        Composición editorial de componentes · Datos de ejemplo. No es una captura de la aplicación.
      </figcaption>
    </figure>
  );
}
