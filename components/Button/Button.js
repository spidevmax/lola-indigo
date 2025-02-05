import "./Button.css";

const Button = (text, variant = "primary") => {
  const button = document.createElement("button");
  button.innerText = text;
  button.className = `btn ${variant}`;
  return button.outerHTML;
};

export default Button;
