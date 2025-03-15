import "./style.css";

import { router, navListeners } from "../utils/router"; // Funciones de enrutamiento
import { setupHamburgerMenu } from "../utils/setupHamburgerMenu"; // Configuración del menú hamburguesa

// Inicialización del enrutador y listeners
window.addEventListener("DOMContentLoaded", () => {
  router(); // Renderiza la ruta inicial
  navListeners(); // Agrega los eventos de navegación
  setupHamburgerMenu(); // Configura el menú hamburguesa
});

// Detectamos cambios en el historial (navegación hacia adelante/atrás)
window.addEventListener("popstate", () => {
  router();
});
