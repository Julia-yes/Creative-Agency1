"use strict";

var _parallaxController = require("parallax-controller");

console.log(_parallaxController.ParallaxController);
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".h-list");
var body = document.querySelector(".main");
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle("hamburger_close");
  nav.classList.toggle("h-list_phone");
  body.classList.toggle("modal-window");
});

var slideCounter = function slideCounter() {
  if (window.innerWidth <= 992 && window.innerWidth >= 576) {
    return 2;
  } else if (window.innerWidth < 576) {
    return 1;
  } else {
    return 3;
  }
};

var glide = new Glide('.glide', {
  perView: slideCounter()
}).mount();
window.addEventListener('resize', function () {
  glide.update({
    perView: slideCounter()
  });
});
controller.createElement({
  el: document.querySelector('.intro__button'),
  props: {
    translateY: [-100, 100],
    opacity: [0.4, 1]
  }
});