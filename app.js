const parallaxEl = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;
let targetX = 0, targetY = 0;

window.addEventListener("mousemove", e => {


  targetX = e.clientX - window.innerWidth / 2;
  targetY = e.clientY - window.innerHeight / 2;
});

function animate() {
  // Smooth follow effect
  xValue += (targetX - xValue) * 0.1;
  yValue += (targetY - yValue) * 0.1;

  parallaxEl.forEach(el => {
    const speedx = parseFloat(el.dataset.speedx) || 0;
    const speedy = parseFloat(el.dataset.speedy) || 0;

    el.style.transform = `
      translateX(calc(-50% + ${-xValue * speedx}px))
      translateY(calc(-50% + ${yValue * speedy}px))
    `;
  });

  requestAnimationFrame(animate);
}

animate();

