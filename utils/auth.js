// Base URL del JSON Server
const API_URL = "http://localhost:3000/usuario";

// Función de inicialización (se ejecuta cuando se carga la página de usuario)
export function initAuth() {
  // Recuperamos los elementos del DOM
  const registerForm = document.querySelector("#registerForm");
  const loginForm = document.querySelector("#loginForm");
  const result = document.querySelector("#result");
  const logoutBtn = document.querySelector("#logoutBtn");

  if (!registerForm || !loginForm || !result || !logoutBtn) {
    console.error("No se encontraron los elementos necesarios en el DOM.");
    return;
  }

  // Función para registrar un nuevo usuario
  async function registerUser(ev) {
    ev.preventDefault();
    const username = document.querySelector("#usernameInput").value.trim();
    const password = document.querySelector("#passwordInput").value.trim();

    if (!username || !password) {
      alert("Completa los campos, por favor");
      return;
    }

    try {
      const res = await fetch(API_URL);
      const users = await res.json();

      if (users.some((user) => user.username === username)) {
        alert("Este usuario ya existe");
        return;
      }

      const newUser = { username, password };
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      alert("Usuario creado exitosamente");
      registerForm.reset();
    } catch (error) {
      console.error("Error registrando usuario", error);
    }
  }

  // Función para manejar el login
  async function loginUser(ev) {
    ev.preventDefault();
    const username = document.querySelector("#usernameInputLogin").value.trim();
    const password = document.querySelector("#passwordInputLogin").value.trim();

    try {
      const res = await fetch(API_URL);
      const users = await res.json();
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (!user) {
        alert("Credenciales incorrectas");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      updateUI(user);
    } catch (error) {
      console.error("Error en el login", error);
    }
  }

  // Función para cerrar sesión
  function logoutUser() {
    localStorage.removeItem("user");
    alert("Usuario desconectado");
    updateUI(null);
  }

  // Función para actualizar la UI según el estado del usuario
  function updateUI(user) {
    if (user) {
      result.innerHTML = `Bienvenidx, ${user.username}`;
      loginForm.style.display = "none";
      registerForm.style.display = "none";
      logoutBtn.style.display = "block";
    } else {
      result.innerHTML = "";
      loginForm.style.display = "block";
      registerForm.style.display = "block";
      logoutBtn.style.display = "none";
    }
  }

  // Agregar event listeners
  registerForm.addEventListener("submit", registerUser);
  loginForm.addEventListener("submit", loginUser);
  logoutBtn.addEventListener("click", logoutUser);

  // Verificar usuario al cargar la página
  const savedUser = JSON.parse(localStorage.getItem("user"));
  updateUI(savedUser);
}
