import "./style.css";

import { router, navListeners } from "../utils/router"; // Funciones de enrutamiento
import { updateHeaderClass } from "../utils/updateHeaderClass"; // Función de actualización de clases del header
import { setupHamburgerMenu } from "../utils/setupHamburgerMenu"; // Función de actualización de clases del header

// Inicialización del enrutador y listeners
window.addEventListener("DOMContentLoaded", () => {
  router(); // Renderiza la ruta inicial
  navListeners(); // Agrega los eventos de navegación
  updateHeaderClass(); // Asegura que el header se actualiza en la carga inicial

  setupHamburgerMenu(); // Configuración del menú hamburguesa
});

// Detectamos cambios en el historial (navegación hacia adelante/atrás)
window.addEventListener("popstate", () => {
  router();
  updateHeaderClass();
});

/*------------------------------------------------------CARGAR VÍDEOS-----------------------------------------------------------*/
/**
 * Ajusta el video de fondo dependiendo del tamaño de la pantalla
 */
function setVideoSource() {
  const video = document.getElementById("video-background");
  const source = document.getElementById("video-source");

  if (!video || !source) return;

  const videoDesktop = "/videos/video-desktop.mp4";
  const videoMobile = "/videos/video-mobile.mp4";

  const isDesktop = window.matchMedia("(min-width: 769px)").matches;
  const newSrc = isDesktop ? videoDesktop : videoMobile;

  if (source.getAttribute("src") !== newSrc) {
    source.setAttribute("src", newSrc);
    video.load();
    video.play().catch((error) => console.warn("Autoplay bloqueado:", error));
  }
}

// Cargar el video en el evento load
window.addEventListener("load", setVideoSource);

// Detectar cambios de tamaño de pantalla y ajustar el video
const mediaQuery = window.matchMedia("(min-width: 769px)");
mediaQuery.addEventListener("change", setVideoSource);
/*--------------------------------------------------------------------------------------------------------------------------------*/
