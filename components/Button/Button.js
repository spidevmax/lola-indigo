import "./Button.css";

const Button = (content, variant = "primary", isImage = false) => {
  const button = document.createElement("button");
  if (isImage) {
    const img = document.createElement("img");
    img.src = content;
    button.appendChild(img);
  } else {
    button.innerText = content;
  }
  button.className = `btn ${variant}`;
  return button.outerHTML;
};

export default Button;
