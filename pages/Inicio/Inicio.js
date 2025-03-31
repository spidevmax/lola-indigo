import "./Inicio.css";
import data from "../../data/data.js";

const { title, subtitle } = data;

export const Inicio = () => {
  return `
    <section class="inicio">
      <video id="video-mobile" autoplay muted loop playsinline>
        <source src="https://res.cloudinary.com/darvwfw0u/video/upload/v1743275368/video-mobile_v1bnsh.mov">
      </video>
      <video id="video-desktop" autoplay muted loop playsinline>
        <source src="https://res.cloudinary.com/darvwfw0u/video/upload/v1743275365/video-desktop_jjtoay.mp4">
      </video>
      <a href="/gira" class="info" target="_self">
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
      </a>
    </section>`;
};
