import "./Usuario.css";
import Button from "/components/Button/Button";

export const Usuario = () => {
  return `
    <section class="usuario">
        <h2>Usuario</h2>

        <form id="registerForm">
            <label for="usernameInput">Registrarse</label>
            <input type="text" id="usernameInput" placeholder="Nombre usuario" required />
            <input type="password" id="passwordInput" placeholder="Contraseña" required />
            <input type="submit" value="Register" />
        </form>

        <form id="loginForm">
            <label for="usernameInputLogin">Iniciar sesión</label>
            <input type="text" id="usernameInputLogin" placeholder="Nombre usuario" required />
            <input type="password" id="passwordInputLogin" placeholder="Contraseña" required/>
            <input type="submit" value="Login" />
        </form>

        <h3 id="result"></h3>
        ${Button("Cerrar sesión", "primary", false, "logoutBtn")}
    </section>`;
};
