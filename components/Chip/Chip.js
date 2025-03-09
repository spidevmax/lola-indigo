import "./Chip.css";

const Chip = (text, color = "red") => {
  const span = document.createElement("span");
  span.innerText = text;
  span.className = `chip ${color}`;
  return span.outerHTML;
};

export default Chip;
