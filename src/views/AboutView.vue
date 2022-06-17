<script>
import HeroBanner from "@/components/HeroBanner.vue";
import Tile from "@/components/Tile.vue";
import Reviews from "@/components/Reviews.vue";
export default {
  components: {
    HeroBanner,
    Tile,
    Reviews,
  },
  data() {
    return {
      descP: [
        {
          p: 'Уже более 30 лет компания РоссКарго раздвигает границы логистической отрасли и <br> управления цепочкой поставок.'
        },
        {
          p: 'Мы лидеры в области транспортных технологий. В течение десятилетия мы <br> инвестировали в передовые технологии, чтобы каждый раз выполнять работу <br> эффективно по разумной цене.'
        },
        {
          p: 'Все в нашей команде — от водителей до исполнительных руководителей — опережают <br> потребности клиентов и партнеров, решают их проблемы и упрощают транспортировку. <br> Для более простых задач наша технология позволяет использовать самообслуживание, <br> чтобы выполнить работу быстрее.'
        },
      ],
      services: [
        { img: '1', title: 'погрузка, доставка <br> и выгрузка' },
        { img: '2', title: 'Перевозка грузов <br> в любые страны' },
        { img: '3', title: 'Сортировка, <br> фасовка, упаковка' },
        { img: '4', title: 'хранение товаров <br> на личном складе ' },
        { img: '5', title: 'Страхование <br> грузов' },
        { img: '6', title: 'Услуги <br> фулфилмента' },
      ],
      block: [
        { img: '1', title: 'Экологичность', desc: 'Мы сокращаем выбросы и отходы,<br> заменяем устаревшие технологии и <br> транспортные средства. <br> Мы понимаем свою роль в защите и <br> сохранении нашей планеты.' },
        { img: '2', title: 'Управление качеством ', desc: '«Я сделаю каждый опыт работы с <br> РоссКарго выдающимся». Это обещание - <br> наше обязательство перед клиентами и <br> друг перед другом, которое <br> устанавливает планку совершенства.' },
        { img: '3', title: 'Разнообразие поставщиков', desc: 'Наша разнообразная рабочая сила, база <br> поставщиков и культура поддержки <br> позволяют РоссКарго лучше обслуживать <br> наших клиентов и более эффективно <br> конкурировать на мировом рынке.' },
        { img: '4', title: 'Инновации', desc: 'Мы видим преимущества инноваций <br> следующего поколения для членов нашей <br> команды и операций, включая <br> автомобили с компьютерным <br> управлением, искусственный интеллект, <br> робототехнику и дроны.' },
      ],
      cooperation: [
        { title: 'Распечатайте сопроводительную <br> документацию', desc: 'Она понадобится при сдаче товара <br> на ПВЗ или водителю-экспедитору' },
        { title: 'Внесите характеристики <br> товара и оформите заказ', desc: 'Укажите основные характеристики товара <br> - объем, вес.' },
        { title: 'Оплатите транспортные услуги <br> удобным образом', desc: 'Оплатить услуги можно банковской <br> картой или сформировав счет для юр. лиц' },
        { title: 'Сдайте груз водителю или на <br> пункт выдачи заказов', desc: 'При сдаче груза подготовьте <br> документацию в 3-ех экземплярах' },
      ],
    }
  },

}
</script>
<template>
  <HeroBanner />
  <div class="about">
    <div class="about__desc-wrap">
      <Tile />
      <div class="container">
        <div class="about__desc">
          <div class="title-wrap">
            <h2 class="title">что такое “росскарго”</h2>
          </div>
          <p v-for="item in descP" v-html="item.p"></p>
        </div>
      </div>
    </div>
  </div>
  <div class="services">
    <div class="container">
      <div class="title-wrap title-wrap--centered">
        <h2 class="title">Наши услуги</h2>
        <p class="subtitle">Мы предоставляем тысячи продуктов для клиентов, которые находятся в поиске лучшего решения
          по доставке.</p>
      </div>
      <div class="services__wrap">
        <div class="services__service" v-for="service in services">
          <div class="services__service-img">
            <img v-lazy:src="'/public/images/service' + service.img + '.jpg'" alt="">
          </div>
          <div class="services__service-title" v-html="service.title"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="block">
    <div class="container">
      <div class="title-wrap">
        <h2 class="title">Наши ценности</h2>
      </div>
      <div class="block__wrap">
        <div class="block__item" v-for="item in block">
          <div class="block__img">
            <img v-lazy:src="'/public/images/value' + item.img + '.jpg'" alt="">
          </div>
          <div class="block__title" v-html="item.title"></div>
          <div class="block__desc" v-html="item.desc"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="cooperation">
    <div class="container">
      <div class="title-wrap">
        <h2 class="title">Как начать с нами работать</h2>
      </div>
      <div class="cooperation__wrap">
        <div class="cooperation__item" v-for="item in cooperation">
          <div class="cooperation__title" v-html="item.title"></div>
          <div class="cooperation__desc" v-html="item.desc"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="reviews">
    <div class="container">
      <div class="title-wrap">
        <h2 class="title">Отзывы от наших клиентов</h2>
      </div>
      <Reviews />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.about {
  margin-top: -60px;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    width: 716px;
    height: 716px;
    background-color: rgba(38, 53, 112, 0.15);
    border-radius: 50px;
    transform: rotate(-45deg);
    right: -358px;
    top: 60%;

    @media(max-width: 1700px) {
      width: 600px;
      height: 600px;
    }

    @media(max-width: 1500px) {
      width: 550px;
      height: 550px;
    }

    @include sm {
      display: none;
    }
  }

  &__desc-wrap {
    height: 716px;
    @include aic;

    @include sm {
      height: auto;
      margin-top: 80px;
    }
  }

  &__desc {
    display: inline-block;
    float: right;

    @media (max-width: 1500px) {
      max-width: 53%;
      width: 100%;
    }

    @include sm {
      max-width: 100%;
    }

    p {
      margin-bottom: 35px;

      @include sm {
        margin-bottom: 25px;
      }

      @include xs {
        margin-bottom: 15px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.services {
  margin-top: 200px;
  margin-bottom: 70px;

  @media (max-width: 1400px) {
    margin-top: 150px;
  }

  @media (max-width: 1300px) {
    margin-top: 100px;
  }

  @include md {
    margin-top: 70px;
    margin-bottom: 50px;
  }

  @include sm {
    margin-top: 50px;
    margin-bottom: 40px;
  }


  .services__wrap {
    @include fww;
    margin-top: 70px;

    @include md {
      margin-top: 50px;
    }

    @include sm {
      margin-top: 40px;
    }
  }

  .services__service {
    width: 33.33%;
    @include aic-jfcfe-fdc;
    margin-bottom: 30px;
    position: relative;

    @include xs {
      width: 50%;
    }

    &:nth-last-child(-n+2) {
      @include xs {
        margin-bottom: 0;
      }
    }

    &:after {
      position: absolute;
      content: '';
      background-image: url('/public/images/arrow.svg');
      width: 40%;
      height: 35px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      right: -95px;
      top: 50%;
      transform: translateY(-50%);

      @include lg {
        right: -70px;
      }

      @include md {
        right: -50px;
      }

      @include sm {
        right: -35px;
      }

      @include xs {
        display: none;
      }
    }

    &:nth-child(2) {
      &:after {
        transform: translateY(-50%) rotateX(180deg);
      }
    }

    &:nth-child(4) {
      &:after {
        transform: translateY(-50%) rotateY(180deg) rotateX(180deg);
      }
    }

    &:nth-child(5) {
      &:after {
        transform: translateY(-50%) rotateY(180deg);
      }
    }

    &:nth-child(3n) {
      &:after {
        display: none;
      }
    }
  }

  &__service-img {
    margin-bottom: 10px;
    max-width: 130px;
    width: 100%;

    img {
      width: 100%;
    }

    @include md {
      max-width: 100px;
    }

    @include sm {
      max-width: 70px;
    }
  }

  &__service-title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 1500px) {
      font-size: 16px;
    }

    @include lg {
      font-size: 15px;
    }

    @include md {
      font-size: 13px;
    }

    @include sm {
      font-size: 11px;
    }
  }
}

.cooperation {
  position: relative;
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

  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 100%;
  }

  &:before {
    top: 20px;
    right: 0;
    background-image: url('/public/images/about-car.png');
    width: 550px;
    z-index: 1;

    @include md {
      display: none;
    }
  }

  &:after {
    top: 0;
    right: 60px;
    background-image: url('/public/images/map.png');
    width: 900px;
    background-size: contain;
    background-repeat: no-repeat;
  }


  &__wrap {
    @include jfcsb-fww;
    max-width: 800px;
    width: 100%;
    margin-top: 80px;
    margin-left: 25px;
    counter-reset: item;

    @include lg {
      margin-top: 70px;
    }

    @include md {
      justify-content: space-around;
      max-width: 100%;
      margin-top: 60px;
      margin-left: 10px;
    }

    @include sm {
      margin-top: 50px;
    }

    @include xs {
      margin-top: 40px;
      margin-left: 0;
    }
  }

  &__item {
    background-color: $white-color;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    position: relative;
    max-width: 365px;
    width: 100%;
    margin-bottom: 70px;
    z-index: 1;

    @include md {
      max-width: calc(50% - 20px);
      margin-bottom: 50px;
    }

    @include sm {
      padding: 20px 10px 10px 20px;
      margin-bottom: 40px;
    }

    @include xs {
      max-width: 100%;
      margin-bottom: 30px;
      padding: 15px 10px 10px 15px;
    }

    &:last-child,
    &:nth-last-child(2) {
      margin-bottom: 0;

      @include xs {
        margin-bottom: 30px;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      position: absolute;
      counter-increment: item;
      content: counter(item);
      width: 50px;
      height: 50px;
      border-radius: 100%;
      @include aic-jcc;
      color: $white-color;
      background-color: $secondary-color;
      font-size: 35px;
      font-weight: 600;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15), inset 0px 4px 8px rgba(255, 255, 255, 0.5);
      top: -25px;
      left: -25px;

      @include md {
        width: 40px;
        height: 40px;
        font-size: 25px;
        top: -15px;
        left: -15px;
      }

      @include xs {
        width: 30px;
        height: 30px;
        font-size: 15px;
        top: -10px;
        left: -10px;
      }
    }
  }

  &__title {
    font-size: 19px;
    line-height: 23px;
    font-weight: 700;
    margin-bottom: 20px;

    @include sm {
      font-size: 16px;
      line-height: normal;
      margin-bottom: 15px;
    }

    @include xs {
      font-size: 14px;
    }
  }

  &__desc {
    @include sm {
      font-size: 14px;
    }

    @include xs {
      font-size: 12px;
    }
  }
}
</style>


