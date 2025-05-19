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
