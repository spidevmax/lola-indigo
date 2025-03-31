import { updateCart } from "../../utils/cart";
import "./Cesta.css";
import Button from "/components/Button/Button";

export const Cesta = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Función para actualizar la vista del carrito
  const renderCart = () => {
    const totalPrice = cart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );

    return `
    <section class="cesta">
      <h2>Tu carrito</h2>
          ${
            cart.length > 0
              ? cart
                  .map(
                    (product) =>
                      `
            <article>
              <img src="${product.cover}" alt="${
                        product.name
                      }" class="product-cover"/>
              <div>
                <p>${product.name}</p>
                <p>${product.price * product.quantity} €</p>
                <p>x${product.quantity}</p>
              </div>
            </article>
            `
                  )
                  .join("") +
                `
                <p>Total: ${totalPrice} €</p>
                ${Button("Vaciar cesta", "primary", false, "clear-cart")}
                `
              : `   <div class="empty-shopping-cart">
                      <img src="https://res.cloudinary.com/darvwfw0u/image/upload/v1743351343/shopping-cart_yq3swp.png" alt="Carrito de la compra vacío" />
                      <a href="/tienda">Seguir comprando</a>
                    </div>
                  `
          }
    </section>
  `;
  };

  // Evento para vaciar la cesta
  setTimeout(() => {
    document.getElementById("clear-cart")?.addEventListener("click", () => {
      localStorage.removeItem("cart");
      cart = [];
      document.querySelector(".cesta").innerHTML = Cesta(); // Re-renderizar la cesta
      updateCart();
    });
  }, 100);

  return renderCart();
};
