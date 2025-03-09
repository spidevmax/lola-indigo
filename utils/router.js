// Importamos todas las páginas
import {Inicio} from "../pages/Inicio/Inicio";
import {Musica} from "../pages/Musica/Musica";
import {Videos} from "../pages/Videos/Videos";
import {Gira} from "../pages/Gira/Gira";
import {Tienda} from "../pages/Tienda/Tienda";
import {Contacto} from "../pages/Contacto/Contacto";
import {NoEncontrada} from "../pages/NoEncontrada/NoEncontrada";

// Definimos las rutas
const routes = [
  { path: "/", page: Inicio },
  { path: "/musica", page: Musica },
  { path: "/videos", page: Videos },
  { path: "/gira", page: Gira },
  { path: "/tienda", page: Tienda },
  { path: "/contacto", page: Contacto },
];

// Función principal del router
export const router = () => {
  // Obtenemos la ruta actual
  const path = window.location.pathname;

  // Buscamos la ruta en el array de rutas
  const route = routes.find((route) => route.path === path) || {
    page: NoEncontrada,
  };

  // Renderizamos la página correspondiente
  route.page();
};

// Función para manejar la navegación sin recarga
export const navListeners = () => {
  const nav = document.querySelector("nav"); // Asegúrate de tener un `<nav>` en tu HTML
  if (!nav) return;

  // Usamos delegación de eventos
  nav.addEventListener("click", (ev) => {
    const link = ev.target.closest("a"); // Detectamos el enlace
    if (!link) return; // Si no es un enlace, salimos

    ev.preventDefault(); // Evitamos la recarga de la página

    // Actualizamos el historial del navegador
    const path = link.pathname;
    history.pushState(null, null, path);

    // Actualizamos las clases activas de los enlaces
    const navLinks = document.querySelectorAll("nav a");
    for (const el of navLinks) {
      el.classList.remove("active");
    }
    link.classList.add("active");

    // Llamamos al router para renderizar la nueva página
    router();
  });
};

// Inicialización del enrutador y listeners
window.addEventListener("DOMContentLoaded", () => {
  router(); // Renderizamos la ruta inicial
  navListeners(); // Configuramos los listeners para la navegación
});

// Detectamos cambios en el historial (navegación hacia adelante/atrás)
window.addEventListener("popstate", router);