import "./Inicio.css";
import data from "../../data/data.js";

const { title, subtitle } = data;

export const Inicio = () => {
  return `
    <section class="inicio">
      <video id="video-mobile" autoplay muted loop playsinline>
        <source src="/videos/video-mobile.mp4">
      </video>
      <video id="video-desktop" autoplay muted loop playsinline>
        <source src="/videos/video-desktop.mp4">
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
