import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Inicio } from "../pages/Inicio/Inicio";
import { Musica } from "../pages/Musica/Musica";
import { Videos } from "../pages/Videos/Videos";
import { Gira } from "../pages/Gira/Gira";
import { Tienda } from "../pages/Tienda/Tienda";
import { Contacto } from "../pages/Contacto/Contacto";
import { Cesta } from "../pages/Cesta/Cesta";
import { Usuario } from "../pages/Usuario/Usuario";
import { NoEncontrada } from "../pages/NoEncontrada/NoEncontrada";
import { updateHeaderClass } from "./updateHeaderClass";
import { setupHamburgerMenu } from "./setupHamburgerMenu";
import { updateCart } from "../utils/cart";
import { initCanvas } from "../utils/renderCanvas.js";
import { controlAudio } from "./controlAudio.js";

const routes = {
  "/": Inicio,
  "/musica": Musica,
  "/videos": Videos,
  "/gira": Gira,
  "/tienda": Tienda,
  "/contacto": Contacto,
  "/cesta": Cesta,
  "/usuario": Usuario,
};

export const router = () => {
  const path = window.location.pathname;
  const page = routes[path] || NoEncontrada;

  const app = document.querySelector("#app");
  if (!app) {
    console.error("No se encontró el elemento #app.");
    return;
  }

  app.innerHTML = `
    ${Header()}
    <main>${page()}</main>
    ${path !== "/" ? Footer() : ""}
  `;

  updateHeaderClass(); 
  setupHamburgerMenu();
  updateCart();
  updateActiveNav();

  if (path === "/") {
    controlAudio();
  } else {
    const button = document.getElementById("soundBtn");
    button.style.display = "none";
  }

  if (path === "/usuario") {
    import("../utils/auth.js")
      .then((module) => {
        module.initAuth(); 
      })
      .catch((err) => console.error("Error al cargar auth.js", err));
  }

  if (NoEncontrada) {
    initCanvas();
  }
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
  });

  window.addEventListener("popstate", router);
};

/**
 * Resalta el enlace activo en la navegación.
 */
const updateActiveNav = () => {
  const path = window.location.pathname;
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.toggle("active", el.pathname === path);
  });
};
