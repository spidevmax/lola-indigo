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
        <a href="/tienda" class="underlined-link">Seguir comprando</a>
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
                    .join("")
                : "<p>El carrito está vacío.</p>"
            }
        <p>Total: ${totalPrice} €</p>
        ${Button("Vaciar cesta", "primary", false, "clear-cart")}
      </section>
    `;
  };

  // Evento para vaciar la cesta
  setTimeout(() => {
    document.getElementById("clear-cart")?.addEventListener("click", () => {
      localStorage.removeItem("cart");
      cart = [];
      document.querySelector(".cesta").innerHTML = Cesta(); // Re-renderizar la cesta
    });
  }, 100);

  return renderCart();
};
