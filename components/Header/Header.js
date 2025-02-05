import "./Header.css";
import Menu from "../Menu/Menu.js";
import data from "../../data/data.js";

const { icon, icon_alt} = data;

const Header = () => `
<header>
  ${Menu()}
  <a href="/"><img id="icon" src="${icon}" alt="${icon_alt}" /></a>
  <ul>
    <li><button><img src="/icons/search.svg" alt="Search"></button></li>
    <li><button><img src="/icons/shopping-cart.svg" alt="Shopping cart"></button></li>
    <li><button><img src="/icons/person.svg" alt="Person"></button></li>
  </ul>
</header>
`;

export default Header;
