import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    allowTouchMove: true,
    centeredSlides: true,
    navigation: true,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 9000,
      disableOnInteraction: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

  configClientReviews: SwiperOptions = {
    // navigation: true,
    loop: true,
    spaceBetween: 20,
    // allowTouchMove: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  };

  configBlogs: SwiperOptions = {
    navigation: true,
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,

    // allowTouchMove: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

}

