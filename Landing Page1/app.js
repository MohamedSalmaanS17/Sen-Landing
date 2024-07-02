const Menu = document.querySelector(".menu");
const list = document.querySelector(".list");
Menu.addEventListener("click", () => {
Menu.classList.toggle("active");
list.classList.toggle("active");
});