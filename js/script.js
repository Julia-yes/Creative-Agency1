const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".h-list");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("hamburger_close");
    nav.classList.toggle("h-list_phone");
})