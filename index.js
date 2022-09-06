const menuBtn = document.querySelector(".mobile_menu_icon"),
  mobileMenu = document.querySelector(".mobile_menu_container");

menuBtn.addEventListener("click", showMenu);

function showMenu() {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
}
