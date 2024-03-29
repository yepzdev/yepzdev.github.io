import hamburgerMenu from "./hamburger_menu.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});

// Add Hamburger button in the DOM
// -----------------------------------------------------------
const $button = document.createElement("button"),
  $container = document.querySelector(".container");

$button.className = "panel-btn hamburger hamburger--vortex";
$button.setAttribute("type", "button");
$button.innerHTML = `
    <span class="hamburger-box">
    <span class="hamburger-inner"></span>
    </span>`;

$container.appendChild($button);

// Scrolling header style
// -------------------------------------------------------------------
document.addEventListener("scroll", () => progress());

function progress() {
  let progress = document.documentElement.scrollTop;

  if (progress >= 40) {
    document.querySelector("header").classList.add("box-shadow");
  } else {
    document.querySelector("header").classList.remove("box-shadow");
  }
}
