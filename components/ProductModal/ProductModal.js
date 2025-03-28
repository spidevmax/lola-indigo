import "./ProductModal.css";
import Button from "../Button/Button";
import { addToCart } from "../../utils/cart";

// Función principal para inicializar los modales
const initializeModals = (products) => {
  addModalEventListeners(products);
};

// Función para añadir los event listeners a las imágenes de los productos
const addModalEventListeners = (products) => {
  const images = document.querySelectorAll(".product-thumbnail");
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      openModal(products[index]);
    });
  });
};

const openModal = (product) => {
  // Evitar múltiples modales abiertos
  const existingModal = document.querySelector(".modal-overlay");
  if (existingModal) {
    existingModal.remove();
  }

  // Crear el modal con la información del producto
  const modal = document.createElement("div");
  modal.classList.add("modal-overlay");
  modal.innerHTML = `
    <div data-augmented-ui="tl-clip tr-2-clip-x l-clip both" class="augborder-modal">
      <div class="modal-content">
        ${Button(
          "https://res.cloudinary.com/darvwfw0u/image/upload/v1742485978/circle-xmark-solid_azhkgq.svg",
          "secondary",
          true,
          "close-modal"
        )}
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price} €</p>
        <p class="product-description">${product.description}</p>
        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" min="1" value="1" />
        ${
          product.category && product.category.toLowerCase() === "moda"
            ? `
          <label for="talla">Talla:</label>
          <select id="talla">
            ${product.sizes
              .map(
                (size) => `
            <option value="${size}">${size}</option>
            `
              )
              .join("")}
          </select>
          `
            : ""
        }
        ${Button("Añadir al carrito", "primary", false, "buy-button")}
      </div>
    </div>
  `;

  // Añadir el modal al .store-container
  const tienda = document.querySelector(".store-container");
  tienda.appendChild(modal);

  // Evento para cerrar el modal
  document
    .getElementById("close-modal")
    .addEventListener("click", () => modal.remove());

  // Cerrar el modal si el usuario hace clic fuera de la ventana del modal
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.remove();
    }
  });

  // Evento para agregar el producto al carrito
  document.getElementById("buy-button").addEventListener("click", () => {
    const quantity = parseInt(document.getElementById("cantidad").value);
    const size =
      product.category.toLowerCase() === "moda"
        ? document.getElementById("talla").value
        : null;

    // Crear un objeto con la información del producto para agregar al carrito
    const productToAdd = {
      cover: product.cover,
      name: product.name,
      price: parseFloat(product.price), // Aseguramos que el precio es un número
      category: product.category,
      description: product.description,
      quantity: quantity,
      size: size || "", // Si no es un producto de moda, la talla estará vacía
    };

    // Añadir el producto al carrito utilizando la función addToCart
    addToCart(productToAdd);

    // Mostrar la notificación de éxito
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerText = `Producto ${product.name} añadido al carrito`;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);

    // Cerrar el modal después de añadir al carrito
    modal.remove();
  });
};

export default initializeModals;
