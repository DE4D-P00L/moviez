function openMenu() {
  menuLinks.classList.remove("close");
  menuLinks.classList.add("open");
  menuOpen = true;
}

function closeMenu() {
  menuLinks.classList.remove("open");
  menuLinks.classList.add("close");
  menuOpen = false;
}

const loginButton = document.querySelector("#loginButton");

if (user && user.length > 0) {
  logoutButton.style.display = "flex";
  loginButton.style.display = "none";
} else {
  logoutButton.style.display = "none";
  loginButton.style.display = "inline";
}

const menuButton = document.querySelector(".ham-menu");
const menuLinks = document.querySelector(".nav-links");
let menuOpen = false;

menuButton.addEventListener("click", function () {
  if (menuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});
