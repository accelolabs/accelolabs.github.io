import "/src/sass/style.scss";
// import Swiper JS
import Swiper from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiper.on('slideChange', function () {
  console.log('slide changed');
});

const menu = document.querySelector('.menu');

document.querySelector('.burger').addEventListener('click', function() {
  menu.classList.add('menu--active');
});

const menuClose = document.querySelector('.menu-close');

menuClose.addEventListener('click', function() {
  menu.classList.remove('menu--active');
});

