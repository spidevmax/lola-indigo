export const setupHamburgerMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menuppal");

  if (!hamburger || !menu) return;

  hamburger.removeEventListener("click", toggleMenu);
  hamburger.addEventListener("click", toggleMenu);
};

const toggleMenu = () => {
  document.querySelector(".hamburger").classList.toggle("is-active");
  document.querySelector(".menuppal").classList.toggle("is-active");
};
