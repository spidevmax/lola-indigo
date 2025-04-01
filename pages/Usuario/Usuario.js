import "./Usuario.css";
import Button from "/components/Button/Button";

export const Usuario = () => {
  return `
    <section class="usuario">
        <h2>Usuario</h2>
        <form id="register-form">
            <h3>Registro</h3>
            <label for="username-input">Nombre usuario:</label>
            <input type="text" id="username-input" placeholder="Escribe un nombre de usuario" required />
            <label for="password-input">Contraseña:</label>
            <input type="password" id="password-input" placeholder="Escribe una contraseña" required />
            ${Button("Registrarse", "primary", false, "register-button")}
        </form>
        <form id="login-form">
            <h3>Inicio de sesión</h3>
            <label for="username-input-login">Nombre usuario:</label>
            <input type="text" id="username-input-login" placeholder="Escribe tu nombre de usuario" required />
            <label for="password-input-login">Contraseña:</label>
            <input type="password" id="password-input-login" placeholder="Escribe tu contraseña" required/>
            ${Button("Iniciar sesión", "primary", false, "login-button")}
        </form>
        <h3 id="result"></h3>
        ${Button("Cerrar sesión", "primary", false, "logout-button")}
    </section>`;
};
