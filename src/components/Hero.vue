<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import SwiperCore, { Thumbs, Autoplay } from "swiper";

SwiperCore.use([Thumbs, Autoplay]);
import Slide1 from "./slides/Slide1.vue";
import Slide2 from "./slides/Slide2.vue";
import Slide3 from "./slides/Slide3.vue";
import Slide4 from "./slides/Slide4.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Slide1,
    Slide2,
    Slide3,
    Slide4,
  },
  data() {
    return {
      thumbsSwiper: null,
      thumbs: [
        {
          icon: "icon-tab1",
          title: "Цифровые <br> решения",
        },
        {
          icon: "icon-tab2",
          title: "Авиа <br> перевозки",
        },
        {
          icon: "icon-tab3",
          title: "Комбинированные <br> перевозки",
        },
        {
          icon: "icon-tab4",
          title: "Автомобильные <br> перевозки",
        },
      ],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};

</script>
<template>
  <div class="hero">
    <div class="container">
      <div class="hero__content">

        <swiper :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }" :speed="400" :loop="true" :spaceBetween="20" :thumbs="{ swiper: thumbsSwiper }" class="mySwiper2">
          <swiper-slide>
            <Slide1 />
          </swiper-slide>
          <swiper-slide>
            <Slide2 />
          </swiper-slide>
          <swiper-slide>
            <Slide3 />
          </swiper-slide>
          <swiper-slide>
            <Slide4 />
          </swiper-slide>
        </swiper>
      </div>
      <div class="hero__thumbs">

        <swiper @swiper="setThumbsSwiper" :allowTouchMove="false" :loop="false" :slidesPerView="4" :freeMode="true"
          :watchSlidesProgress="true" class="mySwiper">
          <swiper-slide v-for="thumb in thumbs">
            <div class="hero__thumb">
              <div class="hero__thumb-icon">
                <i :class="thumb.icon"></i>
              </div>
              <div class="hero__thumb-title" v-html="thumb.title"></div>
            </div>
          </swiper-slide>
          <swiper-slide class="runner"></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>




<style lang="scss">
@import "/src/assets/scss/variables.scss";
@import "/src/assets/scss/mixins.scss";

.swiper-slide-active {
  .hero__img {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero {
  padding-top: 20px;
  background-color: $white-color;
  position: relative;

  @include xs {
    padding-top: 0;
  }

  &--carrier {
    padding-bottom: 70px;

    .hero__slide-content {
      padding-left: 9px;
      padding-right: 9px;
    }
  }

  .swiper {
    width: 100%;
  }

  .mySwiper2 {
    padding: 0 9px 85px;
    box-sizing: border-box;

    @media (max-width: 1499.98px) {
      padding: 0 9px 55px;
    }

    @include lg {
      padding: 0 9px 35px;
    }

    @include sm {
      padding: 0 0 35px;
    }
  }

  &:before {
    position: absolute;
    content: "";
    max-width: 915px;
    width: 100%;
    min-height: 600px;
    background-image: url("/public/images/map.png");
    top: -30px;
    left: 0;
  }

  &__title {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 40px;
    line-height: 40px;

    @media (max-width: 1499.98px) {
      font-size: 35px;
      margin-bottom: 30px;
      line-height: 35px;
    }

    @include lg {
      font-size: 30px;
      margin-bottom: 25px;
      line-height: normal;
    }

    @include md {
      font-size: 25px;
      margin-bottom: 20px;
    }

    span {
      color: $secondary-color;
      font-weight: 700;
      display: block;
    }
  }

  &__subtitle {
    color: $main-color;
    font-size: 21px;
    font-weight: 400;
    margin-bottom: 20px;
    line-height: 25px;

    @include lg {
      font-size: 20px;
      line-height: 23px;
      margin-bottom: 15px;
    }

    @include md {
      font-size: 19px;
      line-height: 21px;
      margin-bottom: 10px;
    }
  }

  &__desc {
    margin-bottom: 45px;
    line-height: 22px;

    @include lg {
      margin-bottom: 40px;
    }

    @include md {
      margin-bottom: 35px;
      font-size: 15px;
      line-height: normal;
    }
  }

  &__slide-content {
    @include aifs-jfcsb;
  }

  &__col {
    position: relative;

    &:first-child {
      padding-top: 100px;
      width: 40%;

      @media (max-width: 1499.98px) {
        padding-top: 60px;
      }

      @include lg {
        padding-top: 40px;
        width: 50%;
      }

      @include md {
        padding-top: 0;
        width: 50%;
      }

      @include sm {
        width: 100%;
      }
    }

    &:last-child {
      width: 60%;
      @include jfcfe;

      @include lg {
        width: 50%;
      }

      @include sm {
        display: none;
      }
    }
  }

  &__bg-img {
    width: 100%;
    overflow: hidden;
    max-width: 470px;
    border-radius: 100%;
    position: relative;

    @media (max-width: 1499.98px) {
      max-width: 430px;
    }

    @include lg {
      max-width: 320px;
    }

    img {
      width: 100%;
    }
  }

  &__img {
    position: absolute;
    left: 0;
    opacity: 0;
    transform: translateX(150px);
    transition: all 0.8s;

    @media (max-width: 899.98px) {
      min-width: 120%;
      width: 100%;
    }

    img {
      width: 100%;
    }

    &--auto {
      top: 150px;
    }

    &--avia {
      top: 40px;
    }

    &--box {
      top: 150px;
    }

    &--carrier {
      top: 180px;
      opacity: 1;
      transform: translateX(0) !important;
    }


  }

  &__thumbs {
    position: relative;
    @include aic;
    z-index: 1;

    &:before {
      position: absolute;
      content: "";
      width: 100%;
      min-height: 170px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      display: flex;
      background-color: $white-color;

      @include lg {
        min-height: 150px;
      }

      @include md {
        min-height: 110px;
      }

      @include xs {
        display: none;
      }
    }

    .swiper {
      @include xs {
        padding: 10px 0 30px;
        display: flex;
        justify-content: center;
      }

      .swiper-wrapper {
        @include xs {
          width: auto;
        }
      }
    }

    .swiper-slide {
      @include jcc;
      position: relative;
      z-index: 1;

      @include xs {
        width: 20px !important;
      }

      &:nth-child(1).swiper-slide-thumb-active~.runner {
        transform: translate3d(0, 0, 0);
      }

      &:nth-child(2).swiper-slide-thumb-active~.runner {
        transform: translate3d(100%, 0, 0);
      }

      &:nth-child(3).swiper-slide-thumb-active~.runner {
        transform: translate3d(200%, 0, 0);
      }

      &:nth-child(4).swiper-slide-thumb-active~.runner {
        transform: translate3d(300%, 0, 0);
      }

      &.runner {
        position: absolute;
        pointer-events: none;
        width: 100%;
        transition: all 0.5s cubic-bezier(1, 0.01, 0, 1.22);
        z-index: 0;

        &:before {
          position: absolute;
          content: "";
          border-radius: 10px;
          pointer-events: none;
          min-height: 214px;
          max-width: 214px;
          width: 100%;
          top: 50%;
          transform: translateY(-50%);
          background-color: $main-color;
          box-shadow: inset 0px 5px 7px rgba(255, 255, 255, 0.43);

          @include lg {
            min-height: 194px;
            max-width: 194px;
          }

          @include md {
            min-height: 154px;
            max-width: 154px;
          }

          @include xs {
            max-width: 15px;
            min-height: 15px;
            border-radius: 100%;
          }
        }
      }

      &.swiper-slide-thumb-active {
        * {
          color: $white-color;
        }

        &:hover {
          * {
            color: $white-color;
          }
        }

        .hero__thumb {
          background: none;
        }
      }
    }
  }

  &__thumb {
    transition: $transition;
    @include aic-jcc-fdc;
    min-height: 214px;
    max-width: 214px;
    width: 100%;
    cursor: pointer;
    position: relative;
    z-index: 1;

    @include lg {
      min-height: 194px;
      max-width: 194px;
    }

    @include md {
      min-height: 154px;
      max-width: 154px;
    }

    @include xs {
      max-width: 10px;
      min-height: 10px;
      border-radius: 100%;
      background-color: $secondary-color;
    }

    &:hover {
      position: relative;

      .hero__thumb-title {
        color: $main-color;
      }

      .hero__thumb-icon {
        i {
          color: $main-color;
        }
      }
    }
  }

  &__thumb-icon {
    max-width: 80px;
    height: 80px;
    width: 100%;
    position: relative;
    @include aic-jcc;
    z-index: 1;

    @include lg {
      max-width: 70px;
      height: 70px;
    }

    @include md {
      max-width: 60px;
      height: 60px;
    }

    @include xs {
      display: none;
    }

    i {
      font-size: 60px;
      color: $text-color;
      transition: $transition;

      @include lg {
        font-size: 50px;
      }

      @include md {
        font-size: 40px;
      }
    }
  }

  &__thumb-title {
    font-weight: 700;
    transition: $transition;
    text-align: center;
    position: relative;
    z-index: 1;

    @include lg {
      font-size: 15px;
    }

    @include md {
      font-size: 13px;
    }

    @include xs {
      display: none;
    }
  }
}
</style>
