window.addEventListener('scroll', function() {
    const body = document.body;

    // If user scrolls down more than 50px, change to white background
    if(window.scrollY > 50) {
        body.classList.add('white-bg');
        body.classList.remove('purple-bg')
    } 
    // Otherwise, keep the purple background
    else {
        body.classList.add('purple-bg');
        body.classList.remove('white-bg')    }
});

// Function to update the favicon based on the current system's color scheme
function updateFavicon() {
  const favicon = document.getElementById("favicon");
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Set the favicon based on dark mode or light mode
  if (darkModeQuery.matches) {
    favicon.setAttribute ("href", "assets/images/favicon-dark.svg?v=" + new Date().getTime());
    favicon.setAttribute("type", "image/svg+xml"); // Dark mode favicon with cache busting + Explicitly setting the type
  } else {
    favicon.setAttribute("href", "assets/images/favicon-light.svg?v=" + new Date().getTime()); 
    favicon.setAttribute("type", "image/svg+xml"); // Light mode favicon with cache busting + Explicitly setting the type
  }
}

// Call the function on page load to set the correct favicon initially
updateFavicon();

// Listen for changes in the color scheme
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateFavicon);

'use strict';

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});