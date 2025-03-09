import Chip from "/components/Chip/Chip";

export const iterator = (array, type) => {
  switch (type) {
    case "video":
      return array
        .map(
          (item) => `
        <article>
          <a href="${item.href}" target="_blank">
            <div class="video-info">
              ${Chip(item.album, "red")}
              ${Chip(item.year, "green")}
            </div>
            <div class="thumbnail-container">
              <img loading="lazy" src="${item.cover}" alt="${
            item.title
          }" class="thumbnail"/>
              <div class="overlay">
                <span><img src="/icons/eye-solid.svg" alt="Eye icon"/></span>
              </div>
            </div>
          </a>
          <h3>${item.title}</h3>
        </article>
        `
        )
        .join("");
    case "product":
      return array
        .map(
          (item) => `
            <article>
              <a href="${item.href}" target="_blank">
                <div class="product-info">
                  ${Chip(item.format, "red")}
                </div>
                <div class="product-container">
                  <img loading="lazy" src="${item.cover}" alt="${
            item.name
          }" class="thumbnail"/>
                  <div class="overlay">
                    <span><img src="/icons/cart-shopping-solid.svg" alt="Eye icon"/></span>
                  </div>
                </div>
              </a>
              <h3>${item.name}</h3>
              <h3>${item.price} €</h3>
            </article>
            `
        )
        .join("");
    case "icon":
      return array
        .map(
          (item) => `
        <li>
          <a href="${item.href}" target="_blank">
            <img src="${item.icon}" alt="${item.icon_alt}" />
          </a>
        </li>
        `
        )
        .join("");
    case "text":
      return array
        .map(
          (item) => `
            <li>
              <a href="${item.href}" target="_blank">${item.name}</a>
            </li>
            `
        )
        .join("");
    case "tour":
      return array
        .map(
          (item) => `
                <li>
                  <p>${item.date}</p>
                  <p>${item.city}</p>
                  <p>${item.venue}</p>
                  <a href="${item.tickets}" target="_blank">Compra</a>
                </li>
                `
        )
        .join("");
    default:
      throw new Error("Invalid type");
  }
};
