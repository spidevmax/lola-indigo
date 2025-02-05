import "./NoEncontrada.css";

export const NoEncontrada = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="no-encontrada">
        <h2>NOT FOUND</h2>
    </section>`;
};
