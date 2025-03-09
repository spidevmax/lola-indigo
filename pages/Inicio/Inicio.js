import "./Inicio.css";
import data from "../../data/data.js";

const { hero_desktop_video, hero_mobile_video, title, ascii_art } = data;

export const Inicio = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
     <div class="splash">
        <pre>${ascii_art}</pre>
        <span class="cursor">|</span>
      </div>
    <section class="inicio">
      <video autoplay muted loop playsinline class="mobile-video">
          <source
            src="${hero_mobile_video}"
            type="video/mp4"
          />
        </video>
        <video autoplay muted loop playsinline class="desktop-video">
          <source
            src="${hero_desktop_video}"
            type="video/mp4"
          />
        </video>
        <div class="info">
          <h1>${title}</h1>
          <a href="/gira" class="btn primary">Comprar entradas</a>
        </div>
    </section>`;
};
