import "./Header.css";
import Menu from "../Menu/Menu.js";
import data from "../../data/data.js";
import Button from "/components/Button/Button";

const { icon, icon_alt } = data;

const Header = () => {
  return `
    <header>
      ${Menu()}
      <a href="/"><img class="icon" src="${icon}" alt="${icon_alt}" /></a>
      <ul class="links-header">
        <li>
          ${Button("https://res.cloudinary.com/darvwfw0u/image/upload/v1743099613/volume-xmark-solid_y0g0xv.svg", "secondary", true, "soundBtn")}
        </li>
        <li>
          <a href="/cesta" class="cart-container">
            <img src="https://res.cloudinary.com/darvwfw0u/image/upload/v1742994292/cart-shopping-solid-white_fpkbvq.svg" alt="Icono carrito" />
            <span class="cart-badge">0</span>
          </a>
        </li>
        <li>
          <a href="/usuario" class="user-container">
            <img src="https://res.cloudinary.com/darvwfw0u/image/upload/v1742485980/user-solid_knclj9.svg" alt="Icono usuario" />
          </a> 
        </li>
      </ul>
    </header>
  `;
};

export default Header;
