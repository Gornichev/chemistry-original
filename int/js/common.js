const btnMenu = document.querySelector("#btn-show-menu");
const hideMenu = document.querySelector("#btn-hide-menu");
const body = document.querySelector("body");
const menu = document.querySelector("#menu");

btnMenu.onclick = function() {
    btnMenu.classList.add("hide");
    body.classList.add("overlay");
    menu.classList.add("show");
}

hideMenu.onclick = function() {
    btnMenu.classList.remove("hide");
    body.classList.remove("overlay");
    menu.classList.remove("show");
}

const swiperCert = new Swiper(".swiper-cert", {
    slidesPerView: 5,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// Section_feedback Start
const feedback = new Swiper(".swiper_feedback", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
