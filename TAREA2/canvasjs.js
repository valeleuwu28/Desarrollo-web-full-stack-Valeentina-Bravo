/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// dibuja un rectangulo(x,y,ancho,alto)

ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = "#FF0000";
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();
//rectangulo rosa
ctx.beginPath();
ctx.fillStyle = "#eec3e1";
ctx.rect(20, 50, 90, 50);
ctx.fill();
ctx.closePath();
//carita feliz
//cara
ctx.beginPath();
ctx.arc(500, 500, 200, 0, 3.14 * 2);
ctx.fillStyle = "#f5ddc5";
ctx.fill();
ctx.stroke();
//ojos
ctx.beginPath();
ctx.arc(400, 450, 50, 0, Math.PI * 2);
ctx.arc(600, 450, 50, 0, Math.PI * 2);
ctx.fillStyle = "#ffffff";
ctx.fill();
ctx.beginPath();
ctx.arc(400, 450, 20, 0, Math.PI * 2);
ctx.arc(600, 450, 20, 0, Math.PI * 2);
ctx.fillStyle = "#000000";
ctx.fill();

//boca
ctx.beginPath();
ctx.arc(500, 590, 70, 0, Math.PI);
ctx.stroke();
//evento deja granitos
canvas.addEventListener("click", function (e) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, 20, 0, Math.PI * 2);
  ctx.fill();
});
