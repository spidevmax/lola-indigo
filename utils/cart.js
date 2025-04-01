// Función para obtener el carrito de compras desde el localStorage.
export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

// Función para guardar el carrito en el localStorage.
export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Función para agregar un producto al carrito. Si el producto ya existe, incrementa la cantidad.
export const addToCart = (product) => {
  let cart = getCart(); // Obtenemos el carrito actual

  // Verificamos si el producto ya está en el carrito
  const existingProductIndex = cart.findIndex(
    (item) => item.name === product.name && item.size === product.size
  );

  if (existingProductIndex !== -1) {
    // Si el producto ya está en el carrito, solo aumentamos la cantidad
    cart[existingProductIndex].quantity += product.quantity;
  } else {
    // Si el producto no está en el carrito, lo agregamos
    cart.push({ ...product, quantity: product.quantity });
  }

  // Guardamos el carrito actualizado en el localStorage
  saveCart(cart);
  updateCart(); // Actualizamos el badge al agregar productos
};

// Función para actualizar la cantidad de productos en el carrito.
export const updateCart = () => {
  const cart = getCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.querySelector(".cart-badge");

  if (cartBadge) {
    if (totalQuantity > 0) {
      cartBadge.innerText = totalQuantity;
      cartBadge.style.visibility = "visible";
    } else {
      cartBadge.style.visibility = "hidden";
    }
  }
};
