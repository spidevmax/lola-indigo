export const initCanvas = () => {
  const canvas = document.getElementById("errorCanvas");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();

  const getRandomColor = () => {
    const colors = ["#8D6A9F", "#C5CBD3", "#8CBCB9", "#DDA448", "#BB342F"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const errorMessage = {
    text: "ERROR 404",
    x: Math.random() * (canvas.width - 100),
    y: Math.random() * (canvas.height - 50),
    dx: 5,
    dy: 5,
    color: getRandomColor(),
  };

  const drawLogo = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = errorMessage.color;
    ctx.fillText(errorMessage.text, errorMessage.x, errorMessage.y);
    // Esperar a que la fuente esté lista
    document.fonts.load("50px Cubenzis").then(() => {
      ctx.font = "italic bold 50px Cubenzis";
      ctx.shadowColor = "rgb(0, 0, 0)";
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
    });
  };

  const update = () => {
    errorMessage.x += errorMessage.dx;
    errorMessage.y += errorMessage.dy;

    // Rebote en los bordes
    if (errorMessage.x + 100 >= canvas.width || errorMessage.x <= 0) {
      errorMessage.dx *= -1;
      errorMessage.color = getRandomColor();
    }
    if (errorMessage.y >= canvas.height || errorMessage.y - 50 <= 0) {
      errorMessage.dy *= -1;
      errorMessage.color = getRandomColor();
    }
  };

  const animate = () => {
    drawLogo();
    update();
    requestAnimationFrame(animate);
  };

  // Ajustar canvas si cambia el tamaño de la ventana
  window.addEventListener("resize", resizeCanvas);
  animate();
};
