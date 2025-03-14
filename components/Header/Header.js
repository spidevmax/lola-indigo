import "./Header.css";
import Menu from "../Menu/Menu.js";
import Button from "../Button/Button.js";
import data from "../../data/data.js";

const { icon, icon_alt } = data;

const Header = () => `
<header>
  ${Menu()}
  <a href="/"><img class="icon" src="${icon}" alt="${icon_alt}" /></a>
  <ul class="buttons">
    <li>${Button("/icons/magnifying-glass-solid.svg", "secondary", true)}</li>
    <li>${Button("/icons/cart-shopping-solid.svg", "secondary", true)}</li>
    <li>${Button("/icons/user-solid.svg", "secondary", true)}</li>
  </ul>
</header>
`;

export default Header;
