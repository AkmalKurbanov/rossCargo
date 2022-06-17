<script>
import { Swiper, SwiperSlide, } from "swiper/vue";
import "swiper/css";

import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Autoplay, Navigation]);
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      reviews: [
        { img: '1', name: 'Имя Фамильевна', status: 'Какая-либо должность', review: 'Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit. Adipiscing lacus ipsum, massa sit. <br> Ornare volutpat velit metus, purus, vulputate <br> interdum nunc lobortis purus. Non elit aenean <br> nulla sit ullamcorper vitae fringilla. Eget neque ' },
        { img: '1', name: 'Имя Фамильевна', status: 'Какая-либо должность', review: 'Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit. Adipiscing lacus ipsum, massa sit. <br> Ornare volutpat velit metus, purus, vulputate <br> interdum nunc lobortis purus. Non elit aenean <br> nulla sit ullamcorper vitae fringilla. Eget neque ' },
        { img: '1', name: 'Имя Фамильевна', status: 'Какая-либо должность', review: 'Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit. Adipiscing lacus ipsum, massa sit. <br> Ornare volutpat velit metus, purus, vulputate <br> interdum nunc lobortis purus. Non elit aenean <br> nulla sit ullamcorper vitae fringilla. Eget neque ' },
      ]
    }
  }
}
</script>
<template>
  <swiper :navigation="true" :modules="modules" :speed="1000" :loop="true" :spaceBetween="50" :centeredSlides="true"
    :autoplay="{
      delay: 22222500,
      disableOnInteraction: false,
    }" :breakpoints="{
  '0': {
    slidesPerView: 1,
  },
  '576': {
    slidesPerView: 2,
    spaceBetween: 5,
    centeredSlides: false
  },
  '1199': {
    slidesPerView: 3,
  }

}" class="reviews-slider">
    <swiper-slide v-for="review in reviews">
      <div class="reviews__item">
        <div class="reviews__item-blur">
          <div class="reviews__reviewer-img">
            <img v-lazy:src="'/public/images/reviewer' + review.img + '.jpg'" alt="">
          </div>
          <div class="reviews__reviewer-review" v-html="review.review"></div>
          <div class="reviews__reviewer-name">{{ review.name }}</div>
          <div class="reviews__reviewer-status">{{ review.status }}</div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.reviews {
  padding-bottom: 120px;
  position: relative;

  @media(max-width: 1500px) {
    padding-bottom: 110px;
  }

  @media(max-width: 1400px) {
    padding-bottom: 100px;
  }

  @include lg {
    padding-bottom: 80px;
  }

  @include md {
    padding-bottom: 60px;
  }

  @include sm {
    padding-bottom: 40px;
  }

  @include xs {
    padding-bottom: 30px;
  }

  &:after {
    position: absolute;
    content: "";
    width: 650px;
    height: 650px;
    background-color: rgba(38, 53, 112, 0.15);
    border-radius: 50px;
    transform: translateY(-30%) rotate(-45deg);
    right: -358px;
    top: 50%;
    z-index: -999;
  }

  .swiper {
    padding: 40px 0;
    z-index: 999;
    position: relative;

    .swiper-button-prev {
      left: 37%;

      @include lg {
        left: 32%;
      }

      @include md {
        left: 28%;
      }
    }

    .swiper-button-next {
      right: 37%;

      @include lg {
        right: 32%;
      }

      @include md {
        right: 28%;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      bottom: 40px;
      @include aic-jcc;
      z-index: 2;
      width: 44px;
      height: 34px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25);
      border-radius: 4px;
      background-color: $white-color;
      cursor: pointer;

      @include lg {
        bottom: 10px;
      }

      &:after {
        position: absolute;
        content: '\e80c';
        font-family: icon;
      }
    }

    .swiper-button-prev:after {
      transform: rotate(90deg);
    }

    .swiper-button-next:after {
      transform: rotate(-90deg);
    }


  }

  .swiper-slide {
    padding: 10px;

    &.swiper-slide-active {
      .reviews__item {
        background-color: $white-color;
        transform: scale(1.2);

        @include lg {
          transform: scale(1);
        }

        @include xs {
          max-width: 400px;
          width: 100%;
        }
      }

      .reviews__item-blur {
        filter: blur(0);
      }
    }
  }

  &__item {
    background: #EBECF1;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    padding: 20px 25px;
    transition: $transition;
    max-width: 500px;
    width: 100%;
    margin: auto;

    @include lg {
      background-color: $white-color;
    }
  }

  &__item-blur {
    filter: blur(3px);
    transition: $transition;
    text-align: center;

    @include lg {
      filter: none;
    }
  }

  &__reviewer-img {
    border-radius: 100%;
    width: 129px;
    height: 129px;
    overflow: hidden;
    margin: auto;
    margin-bottom: 20px;
  }

  &__reviewer-review {
    font-size: 14px;
    line-height: 16px;
    padding-bottom: 55px;
    position: relative;
    display: inline-block;

    @media (max-width: 1400px) {
      font-size: 13px;
    }

    @include sm {
      font-size: 12px;
      line-height: normal;

      br {
        display: none;
      }
    }

    &:before,
    &:after {
      position: absolute;
      content: '';
      width: 35px;
      height: 25px;
      background-image: url('/public/images/q.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;

      @include sm {
        width: 25px;
        height: 15px;
      }
    }

    &:before {
      bottom: 110%;
      right: 100%;

      @media (max-width: 1400px) {
        right: 90%;
        bottom: 105%;
      }
    }

    &:after {
      transform: rotate(180deg);
      left: 100%;
      bottom: 0;

      @media (max-width: 1400px) {
        left: 90%;
        bottom: 15%;
      }
    }
  }

  &__reviewer-name {
    font-size: 20px;
    font-weight: 700;

    @media (max-width: 1400px) {
      font-size: 16px;
      margin-bottom: 5px;
    }
  }

  &__reviewer-status {
    font-size: 14px;

    @media (max-width: 1400px) {
      font-size: 13px;
    }
  }
}
</style>
