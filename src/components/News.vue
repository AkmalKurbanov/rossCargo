<script>
export default {
  data() {
    return {
      items: [
        {
          img: "/public/images/news1.jpg",
          title: "Сертификаты на услуги",
          desc: "Теперь у нас есть сертификаты на всякие разные услуги",
        },
        {
          img: "/public/images/news3.jpg",
          title: "Сертификаты на услуги",
          desc: "Теперь у нас есть сертификаты на всякие разные услуги",
        },
        {
          img: "/public/images/news2.jpg",
          title: "Сертификаты на услуги",
          desc: "Теперь у нас есть сертификаты на всякие разные услуги",
        },
      ],
    };
  },
};
</script>


<template>
  <div class="news">
    <div class="container">
      <div class="title-wrap">
        <h2 class="title">Новости компании</h2>
      </div>
      <div class="news__wrap">
        <div class="news__trailer-bg">
          <div class="news__trailer-wrap">
            <div class="news__trailer">
              <img v-lazy="{ src: '/public/images/trailer.png' }" />
            </div>
            <div class="news__trailer">
              <img v-lazy="{ src: '/public/images/trailer.png' }" />
            </div>
          </div>
        </div>
        <div class="news__item" v-for="item in items">
          <div class="news__img">
            <img v-lazy:src="item.img" alt="" />
          </div>
          <div class="news__bottom">
            <h3 class="news__title">{{ item.title }}</h3>
            <p class="news__desc">{{ item.desc }}</p>
            <a href="#" class="btn">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/scss/variables.scss";
@import "/src/assets/scss/mixins.scss";

.news {
  padding-bottom: 80px;

  @include lg {
    padding-bottom: 70px;
  }

  @include md {
    padding-bottom: 60px;
  }

  @include sm {
    padding-bottom: 50px;
  }

  @include xs {
    padding-bottom: 40px;
  }

  &__wrap {
    margin-top: 40px;
    position: relative;
    @include jfcsb;

    @include xs {
      flex-direction: column;
      align-items: center;
    }
  }

  &__trailer-wrap {
    width: 100%;
    @include jfcsb;
  }

  &__item {
    max-width: 350px;
    width: 100%;
    background: $white-color;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 1350px) {
      max-width: 320px;
    }

    @include lg {
      max-width: 300px;
    }

    @include md {
      max-width: calc(33.33% - 10px);
    }

    @include xs {
      margin-bottom: 30px;
      max-width: 270px;
    }
  }

  &__img {
    img {
      width: 100%;
    }
  }

  &__bottom {
    padding: 20px 25px;

    @include lg {
      padding: 17px 22px;
    }

    @include md {
      padding: 12px 15px;
    }

    @include sm {
      padding: 10px 12px;
    }
  }

  &__title {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 20px;

    @include lg {
      font-size: 19px;
    }

    @include md {
      font-size: 16px;
    }

    @include sm {
      font-size: 13px;
    }
  }

  &__desc {
    margin-bottom: 30px;

    @include lg {
      font-size: 15px;
      margin-bottom: 25px;
    }

    @include md {
      font-size: 14px;
      margin-bottom: 20px;
    }

    @include sm {
      font-size: 12px;
      margin-bottom: 15px;
    }
  }

  &__trailer-bg {
    border-bottom: 5px solid $main-color;
    position: absolute;
    z-index: 0;
    width: calc(100% + 44px);
    @include jfcsb;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 90px;

    @media (max-width: 1350px) {
      padding: 0 45px;
    }

    @include lg {
      padding: 0;
      justify-content: space-around
    }

    @include xs {
      display: none;
    }
  }

  &__trailer {
    @include aife;

    @include md {
      display: none;
    }
  }

  .btn {
    max-width: 175px;
    width: 100%;
    @include md {
      padding: 10px;
    }
    @include md {
      padding: 7px;
    }
    @include sm {
      padding: 5px;
    }
  }
}
</style>
