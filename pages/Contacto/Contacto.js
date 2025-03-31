import "./Contacto.css";
import Button from "../../components/Button/Button";

export const Contacto = () => {
  return `
    <section class="contacto">
      <h2>Contacto</h2>
      <form action="" method="post" id="contact-form" name="contact" target="_blank" enctype="application/x-www-form-urlencoded" accept-charset="utf-8" autocomplete="on" novalidate>
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" autocomplete="on" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Ingresa tu email" autocomplete="on" required />
        <label for="subject">Asunto:</label>
        <input type="text" id="subject" name="subject" placeholder="Ingresa un asunto" autocomplete="on" required/>
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" placeholder="Ingresa un mensaje" required></textarea>
        ${Button("Enviar", "primary", false, "send-form")}
      </form>
    </section>
  `;
};
