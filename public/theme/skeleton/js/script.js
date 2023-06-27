let showMenu = document.getElementById("mobile-menu");
showMenu.addEventListener("click", show);

function show() {
   let menu = document.getElementById("mobile");
    menu.classList.toggle("show");
}