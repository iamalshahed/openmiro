const bar = document.getElementById("bar");
const nav__list = document.getElementById("nav__list");
const close__bar = document.getElementById("close__bar");

if (bar) {
  bar.addEventListener("click", () => {
    nav__list.classList.add("opennav");
  });
}


if (close__bar) {
  close__bar.addEventListener("click", () => {
    nav__list.classList.remove("opennav");
  });
}
