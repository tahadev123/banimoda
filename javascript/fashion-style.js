var slideIndex = 2;
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
    const sliders = document.getElementsByClassName("slide3")
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