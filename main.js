const element1 = document.querySelector("#text-show");
const element2 = document.querySelector("#text-show-2");
const showTextFinal = document.querySelector("#text-show-final");

const textFinal =
  "";
showTextFinal.textContent = textFinal;

const text1 = "Gửi team ReactJS...";
const text2 =
  "Hello world! 🌟🌟🌟";

let i = 0;

function fadeIn(el) {
  el.style.opacity = 0;

  var tick = function () {
    el.style.opacity = +el.style.opacity + 0.05;

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

let particles = [];

function createParticle() {
  let particle = {
    x: Math.random() * canvas.width,
    y: canvas.height + 10,
    vx: Math.random() * 4 - 2,
    vy: Math.random() * -5 - 1,
    color: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
  };
  particles.push(particle);
}

function updateParticle(particle) {
  particle.x += particle.vx;
  particle.y += particle.vy;
}

function drawParticle(particle) {
  // small stars 5
  ctx.beginPath();
  ctx.fillStyle = particle.color;
  ctx.arc(particle.x, particle.y, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    updateParticle(particles[i]);
    drawParticle(particles[i]);
  }

  requestAnimationFrame(animate);
}

setInterval(createParticle, 100);

function typeText() {
  if (i < text1.length) {
    element1.textContent += text1.charAt(i);
    fadeIn(element1);
    i++;
    setTimeout(typeText, 200);
  } else {
    i = 0;
    // element1.textContent = "";
    element2.textContent = text2;
    fadeIn(element2);
    setTimeout(() => {
      document.body.style.backgroundImage = "url('bggif.gif')";
      setTimeout(() => {
          animate();
      }, 0);
      // Change background to bggif.gif
    }, 2500);
  }
}

typeText();