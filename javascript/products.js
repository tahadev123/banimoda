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

// search box responsive

const iconResponsive = document.querySelector(".fa-magnifying-glass")

iconResponsive.onclick = function() {
    searchModal.style.display = "block"
}

closeSearchBtn.onclick = function() {
    searchModal.style.display = "none"
}

// image gallery

const places = [
    {
        id: 1,
        imageURL: "../assets/images/93878.webp"
    },
    {
        id: 2,
        imageURL: "../assets/images/93881.webp"
    },
    {
        id: 3,
        imageURL: "../assets/images/93880.webp"
    },
    {
        id: 4,
        imageURL: "../assets/images/93879.webp"
    }
];

const imgs = document.querySelectorAll(".all_imgs img");
const currentImg = document.querySelector(".current_img");

imgs.forEach((image, index) => {
    image.src = places[index].imageURL

    image.addEventListener("click", function(){
        currentImg.src = places[index].imageURL;
        currentImg.classList.add("animate_imgs");
        setTimeout(() => {
            currentImg.classList.remove("animate_imgs")
        }, 400);
    })
})

currentImg.src = places[1].imageURL;

// information product

const ArAttributes = document.querySelector(".Attributes");
const information_products = document.querySelector(".information_products");
const Product_review = document.querySelector(".Product_review");
const Attribute = document.querySelector(".Attribute");
const information_product = document.querySelector(".information_product");
const review = document.querySelector(".review");
const CommentsBtn = document.querySelector(".Comments");
const Comments = document.querySelector(".Comment_none");


ArAttributes.onclick = function() {
    Attribute.style.display = "block"
    information_product.style.display = "none"
    review.style.display = "none"
    Comments.style.display = "none"
}

information_products.onclick = function() {
    information_product.style.display = "block"
    Attribute.style.display = "none"
    review.style.display = "none"
    Comments.style.display = "none"

}

Product_review.onclick = function() {
    review.style.display = "block"
    Attribute.style.display = "none"
    information_product.style.display = "none"
    Comments.style.display = "none"
}

CommentsBtn.onclick = function() {
    Comments.style.display = "block"
    Attribute.style.display = "none"
    information_product.style.display = "none"
    review.style.display = "none"
}