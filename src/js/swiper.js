import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
document.addEventListener('DOMContentLoaded', function () {
    const swiper2 = new Swiper('#swiper2', {
      modules: [Navigation],
      // Опциональные параметры
      direction: 'horizontal',
      loop: true,
      // Навигационные стрелки
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
    });
    swiper2.init()

    const swiper1 = new Swiper('#swiper1', {
      modules: [Navigation],
      // Опциональные параметры
      direction: 'horizontal',
      loop: true,
      // Навигационные стрелки
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
    });
    swiper1.init()
    console.log(swiper.el)
});
