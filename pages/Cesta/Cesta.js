import { updateCart } from "../../utils/cart";
import { updateDateTime } from "../../utils/updateDateTime";
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
      <div class="ticket">
        <h3>Tienda Lola Índigo</h2>
        <div class="date-time">
          <p id="dateP"></p>
          <p id="timeP"></p>
        </div>
          ${
            cart.length > 0
              ? cart
                  .map(
                    (product) =>
                      `
            <article>
                <p class="cart-product-name">${product.name}</p>
                <p class="cart-product-quantity">x${product.quantity}</p>
                <p class="cart-product-price-quantity">${
                  product.price * product.quantity
                }</p>
            </article>
            `
                  )
                  .join("") +
                `
                <p class="cart-thanks">#Gracias por su compra</p>
                <div class="cart-total-price">
                  <p><strong>Total</strong></p>
                  <p><strong>${totalPrice}</strong></p>
                </div>
                <img src="https://res.cloudinary.com/darvwfw0u/image/upload/v1743509276/barcode_tbonxh.png" alt="Código de barras" />
                ${Button("Vaciar cesta", "primary", false, "clear-cart")}
                `
              : ` 
                  <div class="empty-shopping-cart">
                    <img src="https://res.cloudinary.com/darvwfw0u/image/upload/v1743437052/shopping-cart_xykwgf.png" alt="Carrito de la compra vacío" />
                    <a href="/tienda">Seguir comprando</a>
                  </div>
                  `
          }
          </div>
    </section>
  `;
  };

  // Evento para vaciar la cesta
  setTimeout(() => {
    document.getElementById("clear-cart")?.addEventListener("click", () => {
      localStorage.removeItem("cart");
      cart = [];
      document.querySelector(".cesta").innerHTML = Cesta();
      updateCart();
      updateDateTime();
    });
  }, 100);

  return renderCart();
};
