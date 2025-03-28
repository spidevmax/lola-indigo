import "./Videos.css";
import { iterator } from "../../utils/iterator.js";
import data from "../../data/data.js";

const { videos } = data;

export const Videos = () => {
  return `
    <section class="videos">
        <h2>Vídeos</h2>
        <section class="video-container">
          ${iterator(videos, "video")}
        </section>
    </section>`;
};
