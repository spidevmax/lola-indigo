import "./Menu.css";
import Footer from "../Footer/Footer";

const Menu = () =>
  `
    <div class='hamburger'>
      <div class="top"></div>
      <div class="mid"></div>
      <div class="bottom"></div>
    </div>
    <nav class='menuppal'>
      <ul class='section-links'>
        <li><a href="/">Inicio</a></li>
        <li><a href="/musica">Música</a></li>
        <li><a href="/videos">Vídeos</a></li>
        <li><a href="/gira">Gira</a></li>
        <li><a href="/tienda">Tienda</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      ${Footer()}
    </nav>
`;

export default Menu;
