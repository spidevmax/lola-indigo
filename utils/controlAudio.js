export const controlAudio = () => {
  const button = document.getElementById("soundBtn");
  const buttonImg = button.querySelector("img"); // Obtener la imagen dentro del botón
  const videoMobile = document.getElementById("video-mobile");
  const videoDesktop = document.getElementById("video-desktop");

  // Determinar qué video está visible
  const getActiveVideo = () => {
    return window.getComputedStyle(videoDesktop).display !== "none"
      ? videoDesktop
      : videoMobile;
  };

  button.addEventListener("click", () => {
    const activeVideo = getActiveVideo();
    activeVideo.muted = !activeVideo.muted; // Alternar el mute

    // Cambiar la imagen del botón según el estado del audio
    buttonImg.src = activeVideo.muted
      ? "https://res.cloudinary.com/darvwfw0u/image/upload/v1743099613/volume-xmark-solid_y0g0xv.svg"
      : "https://res.cloudinary.com/darvwfw0u/image/upload/v1743094427/volume-high-solid_nq2vcu.svg";
  });
};
