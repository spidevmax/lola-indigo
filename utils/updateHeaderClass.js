export const updateHeaderClass = () => {
  const path = window.location.pathname;
  const header = document.querySelector("header");

  if (header) {
    header.classList.toggle("absolute-header", path === "/");
    header.classList.toggle("relative-header", path !== "/");
    header.classList.toggle("background-header", path !== "/");
  }
};
