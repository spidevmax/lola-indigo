export const setupHamburgerMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menuppal");

  if (!hamburger || !menu) return; // Evita errores si no existe el menú

  // Elimina eventos previos antes de agregar uno nuevo
  hamburger.removeEventListener("click", toggleMenu);
  hamburger.addEventListener("click", toggleMenu);
};

const toggleMenu = () => {
  document.querySelector(".hamburger").classList.toggle("is-active");
  document.querySelector(".menuppal").classList.toggle("is-active");
};
