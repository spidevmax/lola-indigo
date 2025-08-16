import "./Footer.css";
import data from "../../data/data.js";
import { iterator } from "../../utils/iterator.js";

const { copyright, social_media_links, legal_links } = data;

const Footer = () => `
<footer>
  <ul class="social-media">
    ${iterator(social_media_links, "icon")}
  </ul>
  <ul class="legal">
    ${iterator(legal_links, "text")}
  </ul>
  <p class="copyright">
  ${copyright}
    <a href="https://github.com/spidevmax" target="_blank" rel="noopener noreferrer">spidevmax</a>
  </p>
</footer>
`;

export default Footer;
