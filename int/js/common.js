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

const swiper = new Swiper('.swiper-cert', {
    slidesPerView: 5,
    spaceBetween: 10,
    speed: 500,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20
        },

    }
});