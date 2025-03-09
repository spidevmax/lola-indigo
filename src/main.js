import "./style.css";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

import { router, navListeners } from "../utils/router";

document.querySelector("#app").innerHTML = `
${Header()}
${Main()}
${Footer()}
`;

/*----------------------MENÚ HAMBURGUESA---------------------------*/
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menuppal");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is_active");
});
/*-----------------------------------------------------------------------*/

//Ejecutamos el router cada vez que arranca la aplicación
router();
//Ejecutamos navListeners
navListeners();

setTimeout(() => {
  const splashScreen = document.querySelector(".splash");
  const inicioSection = document.querySelector(".inicio");

  if (splashScreen && inicioSection) {
    function fadeOutAndShowInicio() {
      splashScreen.classList.add("fade-out");

      setTimeout(() => {
        splashScreen.classList.add("hidden");
        inicioSection.classList.add("visible");
      }, 1000);
    }

    splashScreen.addEventListener("click", fadeOutAndShowInicio);
    setTimeout(fadeOutAndShowInicio, 8000);
  }
}, 0);
