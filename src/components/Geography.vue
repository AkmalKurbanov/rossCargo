<script>

</script>
<template>
  <div class="geography">
    <div class="container">
      <div class="geography__bg-map"></div>
      <div class="title-wrap">
        <h2 class="title">География грузоперевозок</h2>
      </div>
      <div class="geography__wrap">
        <div class="geography__col">
          <img v-lazy="{ src: '/public/images/location.png' }" />
        </div>
        <div class="geography__col">
          <p class="geography__text geography__text--main-color">
            Основными крупными направлениями международной доставки грузов
            являются: <br />
            Китай, Казахстан, Россия, Узбекистан, Кыргызстан.
          </p>
          <p class="geography__text">
            Специалисты ВЭД помогут подобрать наиболее удобный и выгодный способ
            карго- <br />доставки по СНГ странам.
          </p>
          <a href="#" class="btn">Подробнее</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scopred>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.geography {
  padding: 80px 0;

  @include lg {
    padding: 70px 0;
  }

  @include md {
    padding: 60px 0;
  }

  @include sm {
    padding: 50px 0;
  }

  @include xs {
    padding: 40px 0;
  }

  .container {
    position: relative;
  }

  &__bg-map {
    position: relative;
    background-image: url('/public/images/map-mini.svg');
    position: absolute;
    content: '';
    top: -50px;
    right: 0;
    width: 100%;
    max-width: 433px;
    min-height: 285px;
  }

  .btn {
    max-width: 175px;
    width: 100%;
  }

  &__wrap {
    @include aifs;
    position: relative;
  }

  &__col {
    &:first-child {
      margin-right: 70px;
      max-width: 330px;
      width: 100%;

      img {
        width: 100%;
      }

      @include lg {
        margin-right: 60px;
        max-width: 300px;
      }

      @include md {
        margin-right: 50px;
        max-width: 250px;
      }

      @include sm {
        display: none;
      }
    }

    &:last-child {

      @include aic-fdc;

      @include xs {
        align-items: flex-start;
      } 
    }
  }

  &__text {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 24px;
    text-align: left;

    @include lg {
      font-size: 22px;
      margin-bottom: 22px;
      line-height: normal;

      br {
        display: none;
      }
    }

    @include md {
      font-size: 20px;
      margin-bottom: 20px;
    }

    @include sm {
      font-size: 18px;
      margin-bottom: 18px;
    }

    @include xs {
      font-size: 16px;
      margin-bottom: 15px;
    }

    &--main-color {
      color: $main-color;
      font-weight: 600;
    }

    &:last-child {
      margin-bottom: 55px;
    }
  }
}
</style>
