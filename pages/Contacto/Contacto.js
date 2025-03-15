import "./Contacto.css";
import Button from "../../components/Button/Button";

export const Contacto = () => {
  return `
    <section class="contacto">
      <h2>Contacto</h2>
      <form action="">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder="Nombre" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" required />
        <label for="subject">Asunto:</label>
        <input type="text" id="subject" name="subject" placeholder="Asunto" required />
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" placeholder="Mensaje" rows="8" cols="35" required></textarea>
        ${Button("Enviar", "primary", false)}
      </form>
    </section>
  `;
};
