// JS OOP CIRCLES START CODE

// Set up canvas and context variables
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let circle1 = {
  x: randomInt(0, 800),
  y: randomInt(0, 600),
  r: randomInt(20, 50),
  color: randomRGB(),
};
console.log(circle1);

let circle2 = {
  x: randomInt(0, 800),
  y: randomInt(0, 600),
  r: randomInt(20, 50),
  color: randomRGB(),
};
console.log(circle2);

// Main Draw Function after page load
window.addEventListener("load", draw);

function draw() {
  // ***** LOGIC *****

  // ***** DRAWING *****
  // Clear background
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Circle 1
  ctx.lineWidth = 3;
  ctx.strokeStyle = circle1.color;
  ctx.beginPath();
  ctx.arc(circle1.x, circle1.y, circle1.r, 0, 2 * Math.PI);
  ctx.stroke();

  // Draw Circle 2
  ctx.lineWidth = 3;
  ctx.strokeStyle = circle2.color;
  ctx.beginPath();
  ctx.arc(circle2.x, circle2.y, circle2.r, 0, 2 * Math.PI);
  ctx.stroke();

  // Request Another Frame
  requestAnimationFrame(draw);
}
