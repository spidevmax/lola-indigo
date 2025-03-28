import "./Musica.css";
import { iterator } from "../../utils/iterator.js";
import data from "../../data/data.js";

const { albums } = data;

export const Musica = () => {
  return `
    <section class="musica">
        <h2>Música</h2>
        <section class="music-container">
          ${iterator(albums, "album")}
        </section>
    </section>`;
};