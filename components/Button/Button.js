import "./Button.css";

const Button = (content, variant, isImage, id) => {
  const button = document.createElement("button");
  if (isImage) {
    const img = document.createElement("img");
    img.src = content;
    button.appendChild(img);
  } else {
    button.innerText = content;
  }
  button.className = `btn ${variant}`;
  button.id = `${id}`;
  return button.outerHTML;
};

export default Button;
