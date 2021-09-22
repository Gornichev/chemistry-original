const btnMenu = document.querySelector("#btn-menu");
const hideMenu = document.querySelector("#hide-menu");
const body = document.querySelector("body");
const menu = document.querySelector("#menu");

btnMenu.onclick = function() {
    // btnMenu.classList.add("hide");
    body.classList.add("menu-show");
    menu.classList.add("show");
}

hideMenu.onclick = function() {
    btnMenu.classList.remove("hide");
    body.classList.remove("menu-show");
    menu.classList.remove("show");
}
