import "./Splash.css";
import data from "../../data/data.js";

const { ascii_art } = data;

const Splash = () => `
    <div class="splash">
        <pre>${ascii_art}</pre>
    </div>
`;

export default Splash;
