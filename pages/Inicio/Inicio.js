import "./Inicio.css";
import data from "../../data/data.js";

const { title, subtitle } = data;

export const Inicio = () => {
  return `
    <section class="inicio">
      <video id="video-background" autoplay loop muted playsinline>
        <source id="video-source" src="" type="video/mp4">
        Tu navegador no soporta videos.
      </video>
        <div class="info">
          <h1>${title}</h1>
          <h2 class="marker">${subtitle}</h2>
          <div class="line">
            <hr/>
            <hr/>
            <hr/>
            <hr/>
          </div>
          <div class="tour-name">
            <h3>La Bruja</h3>
            <h3>La Niña</h3>
            <h3>El Dragón</h3>
          </div>
        </div>
    </section>`;
};
