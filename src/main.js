import "./style.css";

import { router, navListeners } from "../utils/router";

window.addEventListener("DOMContentLoaded", () => {
  router();
  navListeners();
});
