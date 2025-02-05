import "./Inicio.css";
import data from "../../data/data.js";

const { hero_desktop_video, hero_mobile_video } = data;

export const Inicio = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
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
    </section>`;
};
