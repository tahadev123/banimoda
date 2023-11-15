const Plus = document.querySelector(".plus")
const num = document.querySelector(".num")
const Minus = document.querySelector(".minus")

Minus.addEventListener("click", function () {
    if (num.innerHTML > 1) {
        num.innerHTML--
    }
})

Plus.addEventListener("click", function () {
    num.innerHTML++
})