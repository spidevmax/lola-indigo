import "./ProductModal.css";

//Función principal para inicializar los modales
const initializeModals = (products) => {
  addModalEventListeners(products);
};

//Función para añadir los event listeners a las imágenes de los productos
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
    <div class="modal-content">
      <h2>${product.name}</h2>
      <p><strong>Precio:</strong> ${product.price} €</p>
      <p><strong>Descripción:</strong> ${product.description}</p>
      <input type="number" id="quantity" min="1" value="1" />
      ${
        product.category && product.category.toLowerCase() === "moda"
          ? `
        <label for="size">Talla:</label>
        <select id="size">
          ${product.sizes
            .map((size) => `<option value="${size}">${size}</option>`)
            .join("")}
        </select>
      `
          : ""
      }
      <button id="buy-button">Comprar</button>
      <button id="close-modal">Cerrar</button>
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
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerText = `Producto ${product.name} añadido al carrito`;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
    modal.remove();
  });
};

export default initializeModals;
