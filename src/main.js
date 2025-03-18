import "./style.css";

import { router, navListeners } from "../utils/router";

// Inicialización del enrutador y listeners
window.addEventListener("DOMContentLoaded", () => {
  router(); // Renderiza la ruta inicial
  navListeners(); // Agrega los eventos de navegación
});

// Detectamos cambios en el historial (navegación hacia adelante/atrás)
window.addEventListener("popstate", () => {
  router();
});
