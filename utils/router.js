import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Inicio } from "../pages/Inicio/Inicio";
import { Musica } from "../pages/Musica/Musica";
import { Videos } from "../pages/Videos/Videos";
import { Gira } from "../pages/Gira/Gira";
import { Tienda } from "../pages/Tienda/Tienda";
import { Contacto } from "../pages/Contacto/Contacto";
import { NoEncontrada } from "../pages/NoEncontrada/NoEncontrada";
import { updateHeaderClass } from "./updateHeaderClass";
import { setupHamburgerMenu } from "./setupHamburgerMenu";

// Definimos las rutas
const routes = [
  { path: "/", page: Inicio },
  { path: "/musica", page: Musica },
  { path: "/videos", page: Videos },
  { path: "/gira", page: Gira },
  { path: "/tienda", page: Tienda },
  { path: "/contacto", page: Contacto },
  { path: "*", page: NoEncontrada },
];

/**
 * Renderiza la página correspondiente según la ruta actual.
 */
export const router = () => {
  const path = window.location.pathname;
  const route = routes.find((r) => r.path === path) || { page: NoEncontrada };

  const app = document.querySelector("#app");
  if (!app) {
    console.error("No se encontró el elemento #app.");
    return;
  }

  // Renderiza la página, sin footer si es la página de inicio
  app.innerHTML = `
    ${Header()}
    <main>${route.page()}</main>
    ${path !== "/" ? Footer() : ""}
  `;

  // Actualiza la clase del header
  updateHeaderClass();
  setupHamburgerMenu(); // Reasigna el evento del menú hamburguesa
};

/**
 * Maneja la navegación sin recarga.
 */
export const navListeners = () => {
  document.body.addEventListener("click", (ev) => {
    const link = ev.target.closest("a");
    if (
      !link ||
      link.target === "_blank" ||
      link.hostname !== window.location.hostname
    ) {
      return;
    }

    ev.preventDefault();
    history.pushState(null, "", link.pathname);
    router();
    updateActiveNav(link);
  });

  window.addEventListener("popstate", router);
};

/**
 * Resalta el enlace activo en la navegación.
 */
const updateActiveNav = (activeLink) => {
  document
    .querySelectorAll("nav a")
    .forEach((el) => el.classList.remove("active"));
  activeLink.classList.add("active");
};

// Inicializa el router
document.addEventListener("DOMContentLoaded", () => {
  router();
  navListeners();
});
