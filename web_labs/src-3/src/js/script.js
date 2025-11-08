import "../sass/style.scss";

import Swiper from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  speed: 500,
  effect: 'slide',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

swiper.on('slideChange', function () {
  console.log('slide changed');
});

const menu = document.querySelector('.menu');

document.querySelector('.burger').addEventListener('click', function() {
  menu.classList.add('menu--active');
  menu.classList.remove('menu--closing');
});

const menuClose = document.querySelector('.menu__close');

menuClose.addEventListener('click', function() {
  menu.classList.add('menu--closing');
  setTimeout(() => {
    menu.classList.remove('menu--closing');
    menu.classList.remove('menu--active');
  }, 400);
});

