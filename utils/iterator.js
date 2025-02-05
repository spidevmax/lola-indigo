export const iterator = (array, type) => {
  switch (type) {
    case "video":
      return array
        .map(
          (item) => `
        <article>
          <a href="${item.href}" target="_blank">
            <div class="video-info">
              <span class="chip bg-red">${item.album}</span>
              <span class="chip bg-green">${item.year}</span>
            </div>
            <img loading="lazy" src="${item.cover}" alt="${item.title}" class="video-cover"/>
          </a>
          <h3>${item.title}</h3>
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
    default:
      throw new Error("Invalid type");
  }
};
