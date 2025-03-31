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

  const dvd = {
    text: "ERROR 404",
    x: Math.random() * (canvas.width - 100),
    y: Math.random() * (canvas.height - 50),
    dx: 5,
    dy: 5,
    color: getRandomColor(),
  };

  const drawLogo = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = dvd.color;
    ctx.fillText(dvd.text, dvd.x, dvd.y);
    // Esperar a que la fuente esté lista
    document.fonts.load("50px Cubenzis").then(() => {
      ctx.font = "italic bold 50px Cubenzis";
      ctx.shadowColor = "rgb(0, 0, 0)";
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
    });
  };

  const update = () => {
    dvd.x += dvd.dx;
    dvd.y += dvd.dy;

    // Rebote en los bordes
    if (dvd.x + 100 >= canvas.width || dvd.x <= 0) {
      dvd.dx *= -1;
      dvd.color = getRandomColor();
    }
    if (dvd.y >= canvas.height || dvd.y - 50 <= 0) {
      dvd.dy *= -1;
      dvd.color = getRandomColor();
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
