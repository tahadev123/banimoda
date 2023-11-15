const modal = document.querySelector(".modal")
const loginButton = document.querySelector(".login_btn")
const closeBtn = document.querySelector(".close_btn")
const searchBtn = document.querySelector(".search_btn")
const searchModal = document.querySelector(".modal_search")
const closeSearchBtn = document.querySelector(".close_btn_search")

loginButton.onclick = function() {
    modal.style.display = "block"
}

closeBtn.onclick = function() {
    modal.style.display = "none"
}

searchBtn.onclick = function() {
    searchModal.style.display = "block"
}

closeSearchBtn.onclick = function() {
    searchModal.style.display = "none"
}

// img slide

var slideIndex = 1;
showSlides(slideIndex)

function controlSlides(n) {
    slideIndex += n
    showSlides(slideIndex)
}

function dotSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    const sliders = document.getElementsByClassName("slide")
    const dots = document.getElementsByClassName("dot")
    if (n > sliders.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = sliders.length;
    }

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none"
    }

    for (let index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");
    }

    sliders[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active";
}

// timer

var countDownDate = new Date("2023-11-30 23:34:10").getTime();

var x = setInterval(() => {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

// search box responsive

const iconResponsive = document.querySelector(".fa-magnifying-glass")

iconResponsive.onclick = function() {
    searchModal.style.display = "block"
}

closeSearchBtn.onclick = function() {
    searchModal.style.display = "none"
}

// img slide responsive

var slideIndex2 = 1;
showSlides2(slideIndex2)

function controlSlides2(n) {
    slideIndex2 += n
    showSlides2(slideIndex2)
}

function dotSlide2(n) {
    slideIndex2 = n;
    showSlides2(slideIndex2);
}

function showSlides2(n) {
    let i;
    const sliders2 = document.getElementsByClassName("slide_responsive")
    const dots2 = document.getElementsByClassName("dot_responsive")
    if (n > sliders2.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = sliders2.length;
    }

    for (let i = 0; i < sliders2.length; i++) {
        sliders2[i].style.display = "none"
    }

    for (let index = 0; index < dots2.length; index++) {
        dots2[index].className = dots2[index].className.replace(" active", "");
    }

    sliders2[slideIndex2 - 1].style.display = "block"
    dots2[slideIndex2 - 1].className += " active";
}