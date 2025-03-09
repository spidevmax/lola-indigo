import "./Contacto.css";

export const Contacto = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="contacto">
        <h2>Contacto</h2>
          <div class="entry">
        <section class="form-information">
          <form
            action="/"
            method="post"
            enctype="application/x-www-form-urlencoded"
            target="_self"
            accept-charset="UTF-8"
            autocomplete="off"
            novalidate
          >
            <label for="first_name">Nombre:</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Nombre"
              required
            />
            <label for="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            />
            <label for="first_name">Asunto:</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Asunto"
              required
            />
            <label for="phone">
  Enter your phone number:<br />
  <small>Format: 123-456-7890</small>
</label>

<input
  type="tel"
  id="phone"
  name="phone"
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  required />

            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </section>`;
};
