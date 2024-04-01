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

// change about for my name HARCODED THIS IS BAD !!!
const mediaQuery = window.matchMedia('( min-width: 768px )');

// get collection of .about-me element
let aboutMe = document.getElementsByClassName("about-me")[0];

if ( mediaQuery.matches ) {
  // set my name
  aboutMe.firstElementChild.innerHTML = "Jesús Alfredo Yepez";

  // also create h4 element
  let stackSkills = document.createElement("h4");
  // add class
  stackSkills.classList.add('skill-stacks', 'roboto-thin');
  // set stacks 
  stackSkills.innerHTML = `<strong>Backend Developer |</strong> HTML, CSS, JavaScript, JQuery, PHP, Laravel, Drupal`;

  // get reference h2 about me
  let h2 = document.querySelector(".about-me h2");

  console.log(stackSkills);

  // insert new element after element h2
  h2.insertAdjacentElement("afterend", stackSkills);

}
