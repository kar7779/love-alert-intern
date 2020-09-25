const hamburgmenu = document.querySelector(".hamburgmenu");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");

hamburgmenu.addEventListener("click", () => {
  navlinks.classList.toggle("open");
});
