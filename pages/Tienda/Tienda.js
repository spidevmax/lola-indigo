import "./Tienda.css";
import { iterator } from "../../utils/iterator.js";
import data from "../../data/data.js";

const { product_links } = data;

export const Tienda = () => {
  return `
    <section class="tienda">
        <h2>Tienda</h2>
        <section class="store-container">
          ${iterator(product_links, "product")}
        </section>
    </section>`;
};
