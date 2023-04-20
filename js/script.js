const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".h-list");
const body = document.querySelector(".main");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger_close");
  nav.classList.toggle("h-list_phone");
  body.classList.toggle("modal-window");
});

let slideCounter = () => {
  if (window.innerWidth <= 992 && window.innerWidth >= 576) {
    return 2;
  } else if (window.innerWidth < 576) {
    return 1;
  } else {
    return 3;
  }
};

let glide = new Glide(".glide", {
  type: "carousel",
  perView: slideCounter(),
}).mount();

window.addEventListener("resize", () => {
  glide.update({ perView: slideCounter() });
});

var rellax = new Rellax(".ball_1", {
  speed: 1,
  center: true,
});

var rellax = new Rellax(".ball_2", {
  speed: 3,
  center: true,
});

var rellax = new Rellax(".ball_3", {
  speed: 1,
  center: true,
});

var rellax = new Rellax(".ball_4", {
  speed: 3,
  center: true,
});
var rellax = new Rellax(".intro__bubbles_1", {
  speed: 1,
  center: true,
});
var rellax = new Rellax(".intro__bubbles_2", {
  speed: -1,
  center: true,
});
var rellax = new Rellax(".about-us__bubbles_1", {
  speed: -2,
  center: true,
});
var rellax = new Rellax(".about-us__bubbles_2", {
  speed: 2,
  center: true,
});

var rellax = new Rellax(".portfolio__bubbles_1", {
  speed: 1,
  center: true,
});
var rellax = new Rellax(".portfolio__bubbles_2", {
  speed: 1,
  center: true,
});
var rellax = new Rellax(".testimonial__bubbles_1", {
  speed: -1,
  center: true,
});
var rellax = new Rellax(".testimonial__bubbles_2", {
  speed: 1,
  center: true,
});
var rellax = new Rellax(".collaboration__bubbles1", {
  speed: 1,
  center: true,
});
var rellax = new Rellax(".collaboration__bubbles2", {
  speed: 1,
  center: true,
});
var rellax = new Rellax(".collaboration__bubbles3", {
  speed: 1,
  center: true,
});

var rellax = new Rellax(".intro__review", {
  speed: 1,
  center: true,
});

var rellax = new Rellax(".intro__score", {
  speed: -1,
  center: true,
});
