let openMenu = document.querySelector(".openMenu")
let close = document.querySelector(".close")
let header = document.querySelector(".content header")

openMenu.onclick = function() {
    header.classList.toggle("active")
}
close.onclick = function() {
    close.classList.toggle("active")

}