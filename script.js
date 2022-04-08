
const buttonMenu = document.querySelector("#button-menu")
const statusButton = document.querySelector("#btn-menu")
const navBar = document.querySelector("#navbar")
const menubar = document.querySelector("#menu-burguer")

function menuBurguer() {
  navBar.classList.toggle("active")
  if (navBar.classList.contains("active")) {
    statusButton.setAttribute("src", "./src/assets/menu-buguer-close.svg")
  } else {
    statusButton.setAttribute("src", "./src/assets/menu-buguer-open.svg")
  }
}

buttonMenu.addEventListener("click", menuBurguer)