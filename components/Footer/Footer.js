import "./Footer.css";
import data from "../../data/data.js";
import { iterator } from "../../utils/iterator.js";

const { copyright, social_media_links } = data;

const Footer = () => `
<footer>
  <ul>
    ${iterator(social_media_links, "icon")}
  </ul>
  <p>
  ${copyright}
    <a href="https://github.com/marinalsz" target="_blank" rel="noopener noreferrer">Marina López</a>
  </p>
</footer>
`;

export default Footer;
