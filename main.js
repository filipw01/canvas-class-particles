const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Particle {
  constructor(x, y) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
  }
  update() {
    this.speedX += Math.random() - 0.5;
    this.speedY += Math.random() - 0.5;
    this.x += this.speedX;
    this.y += this.speedY;
  }
  show() {
    ctx.fillStyle = Math.random() > 0.5 ? "green" : "red";
    ctx.fillRect(this.x, this.y, 3, 3);
  }
}

class BlackParticle extends Particle {
  constructor(x, y) {
    super(x, y);
  }
  show() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, 3, 3);
  }
}

const obiekty = [];
for (let i = 0; i < 2 ** 10; i++) {
  obiekty[i] = new BlackParticle(innerWidth / 2, innerHeight / 2);
}

function tick() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (const obiekt of obiekty) {
    obiekt.update();
    obiekt.show();
  }
  window.requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick);
