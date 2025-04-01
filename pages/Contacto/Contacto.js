import "./Contacto.css";
import Button from "../../components/Button/Button";

export const Contacto = () => {
  return `
    <section class="contacto">
      <h2>Contacto</h2>
      <form id="contact-form" name="contact" autocomplete="on" novalidate>
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder="Escribe tu nombre" autocomplete="on" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Escribe tu email" autocomplete="on" required />
        <label for="subject">Asunto:</label>
        <input type="text" id="subject" name="subject" placeholder="Escribe un asunto" autocomplete="on" required/>
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" placeholder="Escribe un mensaje" required></textarea>
        ${Button("Enviar", "primary", false, "send-form")}
      </form>
    </section>
  `;
};
