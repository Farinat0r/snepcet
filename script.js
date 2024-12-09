const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const bgColorInput = document.getElementById("bg-color");
const strokeColorInput = document.getElementById("stroke-color");
const strokeWidthInput = document.getElementById("stroke-width");
const fillColorInput = document.getElementById("fill-color");
const sizeInput = document.getElementById("size");

function drawSnapchatLogo() {
  const bgColor = bgColorInput.value;
  const strokeColor = strokeColorInput.value;
  const strokeWidth = strokeWidthInput.value;
  const fillColor = fillColorInput.value; 

  const size = parseInt(sizeInput.value);
  canvas.width = size;
  canvas.height = size;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.scale(size / 400, size / 400);
  ctx.moveTo(200.00, 336.00);
  ctx.bezierCurveTo(218.00, 343.00, 237.00, 323.00, 256.00, 310.00);
  ctx.bezierCurveTo(283.00, 309.00, 272.00, 307.00, 302.00, 312.00);
  ctx.bezierCurveTo(307.00, 271.00, 315.00, 309.00, 346.00, 276.00);
  ctx.bezierCurveTo(329.00, 274.00, 279.00, 242.00, 279.00, 205.00);
  ctx.bezierCurveTo(295.00, 192.00, 303.00, 200.00, 314.00, 185.00);
  ctx.bezierCurveTo(311.00, 158.00, 286.00, 189.00, 277.00, 176.00);
  ctx.bezierCurveTo(289.00, 95.00, 253.00, 64.00, 202.00, 63.00);
  ctx.bezierCurveTo(145.00, 62.00, 110.00, 97.00, 122.00, 174.00);
  ctx.bezierCurveTo(111.00, 194.00, 98.00, 160.00, 85.00, 182.00);
  ctx.bezierCurveTo(84.00, 200.00, 105.00, 189.00, 119.00, 206.00);
  ctx.bezierCurveTo(128.00, 223.00, 86.00, 274.00, 53.00, 273.00);
  ctx.bezierCurveTo(64.00, 302.00, 100.00, 277.00, 95.00, 311.00);
  ctx.bezierCurveTo(170.00, 299.00, 150.00, 337.00, 200.00, 336.00);
  ctx.closePath();

  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = strokeWidth;
  ctx.stroke();
  ctx.fill();
}

bgColorInput.addEventListener("input", drawSnapchatLogo);
strokeColorInput.addEventListener("input", drawSnapchatLogo);
strokeWidthInput.addEventListener("input", drawSnapchatLogo);
sizeInput.addEventListener("input", drawSnapchatLogo);
fillColorInput.addEventListener("input", drawSnapchatLogo);

drawSnapchatLogo();