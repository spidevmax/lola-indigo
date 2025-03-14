import "./Gira.css";
import { iterator } from "../../utils/iterator.js";
import data from "../../data/data.js";

const { tour_links } = data;

export const Gira = () => {
  return `
    <section class="gira">
        <h2>Gira</h2>
        <ol>${iterator(tour_links, "tour")}</ol>
    </section>`;
};
