import "./Aside.css";
import data from "../../data/data.js";

const { aside } = data;

const Aside = () => `
<aside>
  <a href="/tienda" target="_self">${aside}</a> 
</aside>
`;

export default Aside;