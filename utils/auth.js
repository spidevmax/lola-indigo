const API_URL = import.meta.env.VITE_API_URL;

export const initAuth = () => {
  const registerForm = document.querySelector("#register-form");
  const loginForm = document.querySelector("#login-form");
  const result = document.querySelector("#result");
  const logoutBtn = document.querySelector("#logout-button");
  const registerBtn = document.querySelector("#register-button");
  const logintBtn = document.querySelector("#login-button");
  const userSection = document.querySelector(".usuario");

  if (
    !registerForm ||
    !loginForm ||
    !result ||
    !logoutBtn ||
    !registerBtn ||
    !logintBtn
  ) {
    return;
  }

  const registerUser = async (ev) => {
    ev.preventDefault();
    const username = document.querySelector("#username-input").value.trim();
    const password = document.querySelector("#password-input").value.trim();

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
  };

  const loginUser = async (ev) => {
    ev.preventDefault();
    const username = document
      .querySelector("#username-input-login")
      .value.trim();
    const password = document
      .querySelector("#password-input-login")
      .value.trim();

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
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    alert("Usuario desconectado");
    updateUI(null);
  };

  const updateUI = (user) => {
    if (user) {
      result.innerHTML = `Bienvenidx, ${user.username}`;
      loginForm.style.display = "none";
      registerForm.style.display = "none";
      logoutBtn.style.display = "block";
      userSection.classList.add("logged-user");
    } else {
      result.innerHTML = "";
      loginForm.style.display = "flex";
      registerForm.style.display = "flex";
      logoutBtn.style.display = "none";
      userSection.classList.remove("logged-user");
    }
  };

  logoutBtn.addEventListener("click", logoutUser);
  registerBtn.addEventListener("click", registerUser);
  logintBtn.addEventListener("click", loginUser);

  const savedUser = JSON.parse(localStorage.getItem("user"));
  updateUI(savedUser);
};
