import hamburgerMenu from "./hamburger_menu.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});

// HIDE BUTTON 
//==================================================================================================
const $width = window.screen.width,
  $button = document.createElement("button"),
  $container = document.querySelector(".container");

// console.log($width);

$button.className = "panel-btn hamburger hamburger--vortex";
$button.setAttribute("type", "button");
$button.innerHTML = `
    <span class="hamburger-box">
    <span class="hamburger-inner"></span>
    </span>`;

if ($width <= 768) {
  $container.appendChild($button);
}
//======================================================================================================

// Scrolling header style
//=======================================================================================================
document.addEventListener("scroll", () => progress());

function progress() {
  let progress = document.documentElement.scrollTop;
  // console.log(` Este es el progreso del scrolling ${progress}`);

  if (progress >= 40) {
    document.querySelector("header").classList.add("box-shadow");
  } else {
    document.querySelector("header").classList.remove("box-shadow");
  }

  
}
//=========================================================================================================