import Chip from "/components/Chip/Chip";

export const iterator = (array, type) => {
  switch (type) {
    case "album":
      return array
        .map(
          (item) => `
        <article>
          <a href="${item.href}" target="_blank">
            <div class="video-info">
              ${Chip(item.year, "green")}
            </div>
            <div class="thumbnail-container">
              <img loading="lazy" src="${item.cover}" alt="${
            item.title
          }" class="thumbnail"/>
              <div class="overlay">
                <span><img src="https://res.cloudinary.com/darvwfw0u/image/upload/v1742743852/music-solid_dvkkkb.svg" alt="Music icon"/></span>
              </div>
            </div>
          </a>
          <h3>${item.title}</h3>
        </article>
        `
        )
        .join("");
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
                <span><img src="https://res.cloudinary.com/darvwfw0u/image/upload/v1742485977/eye-solid_u61yei.svg" alt="Eye icon"/></span>
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
              <div class="product-info">
                ${Chip(item.category, "red")}
              </div>
              <div class="product-container">
                <img loading="lazy" src="${item.cover}" alt="${
            item.name
          }" class="product-thumbnail"/>
                <div class="overlay">
                  <span><img src="https://res.cloudinary.com/darvwfw0u/image/upload/v1742485978/cart-shopping-solid_fbakdc.svg" alt="Shopping cart icon"/></span>
                </div>
              </div>
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
                <div data-augmented-ui="tl-round tr-2-clip-x border" class="augborder-tour">
                  <li>
                    <p>${item.date}</p>
                    <p>${item.city}</p>
                    <p>${item.venue}</p>
                    <a href="${item.tickets}" target="_blank">Entradas</a>
                  </li>
                </div>
                `
        )
        .join("");
    default:
      throw new Error("Invalid type");
  }
};
