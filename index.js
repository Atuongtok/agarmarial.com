const ICONS = document.querySelector(".icons");
const Contents = document.querySelector('.content');

ICONS.addEventListener("click", () => {
    ICONS.classList.toggle("active");
    Contents.classList.toggle("active");
}) 

document.querySelectorAll(".under__line").forEach(n=>n.addEventListener("click", () => {
  ic.classList.remove("active");
  Contents.classList.remove("active");
}))
//animation
document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById(".about__1");
  let direction = 1; // 1 = down, -1 = up
  let position = 0;

  function animate() {
    // Move between -20px and 20px vertically
    position += direction * 0.5; // speed
    if (position > 20 || position < -20) {
      direction *= -1; // reverse direction
    }

    content.style.transform = `translateY(${position}px)`;
    requestAnimationFrame(animate); // keep the animation going
  }

  animate(); // start animation
});