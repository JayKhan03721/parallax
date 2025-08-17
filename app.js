// ==========================
// Text stroke animation
// ==========================
window.onload = () => {
  gsap.to(".h2", {
    strokeDashoffset: 0,
    duration: 3,
    ease: "power2.out"
  });

  gsap.to(".h1", {
    strokeDashoffset: 0,
    duration: 4,
    delay: 3,
    ease: "power2.out"
  });
};

// ==========================
// Mountains & fog animation
// ==========================
window.addEventListener("load", () => {
  const tl = gsap.timeline();

  // Mountains
  tl.from(
    ".mountain_10, .mountain_9, .mountain_8, .mountain_7, .mountain_6, .mountain_5, .mountain_4, .mountain_3, .mountain_2, .mountain_1",
    {
      y: 100,
      opacity: 0,
      duration: 0.45,
      stagger: 0.2,
      ease: "power3.out"
    }
  );

  // Fogs
  tl.from(
    ".fog_7, .fog_6, .fog_5, .fog_4, .fog_3, .fog_2, .fog_1",
    {
      opacity: 1,
      duration: 2,
      stagger: 0.3,
      ease: "power1.out"
    },
    "-=1"
  );
});

// ==========================
// Mouse parallax effect
// ==========================
const parallaxEl = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;
let targetX = 0, targetY = 0;

window.addEventListener("mousemove", e => {
  targetX = e.clientX - window.innerWidth / 2;
  targetY = e.clientY - window.innerHeight / 2;
});

function animateParallax() {
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

  requestAnimationFrame(animateParallax);
}

animateParallax();


