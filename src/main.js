import "./style.css";

import Header from "/components/Header/Header";
import Main from "/components/Main/Main";
import Footer from "/components/Footer/Footer";

import { router, navListeners } from "../utils/router";


document.querySelector("#app").innerHTML = `
${Header()}
${Main()}
${Footer()}
`;

// selector
const menu = document.querySelector(".hamburger");

// method
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".menuppal").classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener("click", toggleMenu, false);

//Ejecutamos el router cada vez que arranca la aplicación
router();
//Ejecutamos navListeners
navListeners()