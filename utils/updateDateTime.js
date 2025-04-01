export const updateDateTime = () => {
  const date = new Date();
  const dateOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("es-ES", dateOptions).format(
    date
  );
  const dateElement = document.querySelector("#dateP");
  if (dateElement) dateElement.innerText = formattedDate;

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const formattedTime = new Intl.DateTimeFormat("es-ES", timeOptions).format(
    date
  );
  const timeElement = document.querySelector("#timeP");
  if (timeElement) timeElement.innerText = formattedTime;
};
