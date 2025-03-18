import "./Tienda.css";
import { iterator } from "../../utils/iterator.js";
import data from "../../data/data.js";
import initializeModals from "/components/ProductModal/ProductModal";

const { product_links } = data;

export const Tienda = () => {
  const tiendaHTML = `
    <section class="tienda">
        <h2>Tienda</h2>
        <section class="store-container">
            ${iterator(product_links, "product")}
        </section>
    </section>`;
  setTimeout(() => {
    initializeModals(product_links);
  }, 0);

  return tiendaHTML;
};
