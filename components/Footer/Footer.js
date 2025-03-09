import "./Footer.css";
import data from "../../data/data.js";
import { iterator } from "../../utils/iterator.js";

const { copyright, social_media_links, legal_links } = data;

const Footer = () => `
<footer>
  <ul class="social-media">
    ${iterator(social_media_links, "icon")}
  </ul>
  <p>Suscríbete a la comunidad de Lola Índigo para enterarte de todas las novedades y acceder a las ventas exclusivas</p>
  <ul class="legal">
    ${iterator(legal_links, "text")}
  </ul>
  <p class="copyright">
  ${copyright}
    <a href="https://github.com/marinalsz" target="_blank" rel="noopener noreferrer">Marina López</a>
  </p>
</footer>
`;

export default Footer;
