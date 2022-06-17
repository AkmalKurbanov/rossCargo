  <script>
export default {
  data() {
    return {
      title: 'РоссКарго',
      subtitle: 'Мы гарантируем движение.',
      desc: 'Благодаря более 7 000 грузовым перевозкам ежедневно компания <br> РоссКарго является лидером в сфере перевозок комплектных грузов в <br> Европе, России, и странах средней Азии. Станьте партнером- <br> перевозчиком и ощутите многочисленные преимущества!',
      coopDesc: [
        { p: 'РоссКарго – компания международного класса, главное богатство которой составляют  работающие в ней люди. Мы гордимся исключительным профессионализмом и  мастерством наших сотрудников при обслуживании клиентов.' },
        { p: 'На протяжении всей своей долгой истории РоссКарго пользуется международным  признанием за отношение к работникам, стратегические устремления и мотивацию  своих сотрудников. Мы поддерживаем наших сотрудников в их стремлении к  профессиональному и карьерному росту внутри компании, всячески помогая им  развивать свои деловые и управленческие способности.' },
        { p: 'Политика и программы нашей компании поддерживают высокий уровень  производственной культуры, создавая безопасную, разностороннюю и поощряющую  рабочую среду и одновременно позволяя каждому региону организовывать на рабочих  местах обстановку, наиболее подходящую местным сотрудникам.' },
      ],
      coopDescImg: [
        { img: '1' },
        { img: '2' }
      ],
      block: [
        { img: '1', title: 'Снижение цен на топливо', desc: 'Мы разработали специальное предложение для наших водителей, в виде корпоративной скидки на дизельное топливо. Ваш комфорт для нас в приоритете!' },
        { img: '2', title: 'Безналичная оплата ', desc: 'Впредь Вам не обязательно иметь при себе наличные для оплаты бензина, ведь каждому партнеру РоссКарго предоставляется доступ к безналичной оплате.' },
        { img: '3', title: 'Ремонт транспорта', desc: 'Ежемесячно мы проводим диагностику рабочего транспорта на те или иные неполадки, в случае чего предоставляем должный ремонт. Для нас важна ваша безопасность.' },
        { img: '4', title: 'Обзор расхода топлива', desc: 'Мы предоставляем полную прозрачность заправок ваших автомобилей.' },
      ],
      partnersProgrammDesc: [
        {
          p: 'Партнерская программа – выгодное решение для тех, кто хочет успешно войти,  работать и развиваться на востребованном рынке перевозки сборного груза.'
        },
        {
          p: 'Мы предлагаем: эксклюзивное право работать под брендом крупной  федеральной компании, отсутствие  паушальных взносов, понятную схему  взаиморасчетов, индивидуальный подход, бесплатное обучение сотрудников  партнера,  поддержку персонального менеджера, сопровождение на всех  этапах, помощь в оформлении терминалов, широкую  региональную сеть,  включающую в себя 300+ представительств в России, Грузии, Казахстане,  Узбекистане,  Кыргызстане и Таджикистане.'
        }
      ],
      count: [
        {
          num: '200',
          desc: 'тысяч тонн грузов  доставлено в срок'
        },
        {
          num: '150',
          desc: 'сотрудников в 3 странах  работают для Вас'
        },
        {
          num: '20+',
          desc: 'лет успешной  работы в сфере ВЭД'
        },
      ],
      steps: [
        {
          title: 'Пришлите нам  данные о компании ',
          desc: 'Отправьте нам данные о вашей  компании для дальнейшего  сотрудничества.'
        },
        {
          title: 'Коммерческое  предложение',
          desc: 'Отправьте нам коммерческое  предложение на  <a href="mailto:info@rosscargo.com">info@rosscargo.com</a>'
        },
        {
          title: 'Рассмотрение  заявки',
          desc: 'Мы рассмотрим вашу заявку в  течении 2-ух недель, и после  пригласим вас на встречу.'
        },
        {
          title: 'Обговор условий  сотрудничества',
          desc: 'Заключительным этапом  является обговор условий на  ранее упомянутой встрече.'
        },
      ]
    }
  }
}
</script> 
<template>
  <div class="hero-banner">
    <div class="container">
      <div class="hero-banner__bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400.46 528.55">
          <defs>
            <pattern id="img1" patternUnits="userSpaceOnUse" width="1400" height="570">
              <image xlink:href="/public/images/cooperation.png" x="0" y="0" />
              <!-- Image from http://silviahartmann.com/background-tile/6-grass-meadow-tile.php-->
            </pattern>
            <linearGradient id='g1' x1='.5' x2='.5' y2='1'>
              <stop stop-color='#000' stop-opacity='0' />
              <stop offset='.539' stop-color='#000' stop-opacity='.483' />
            </linearGradient>

          </defs>
          <path d="M752,528.55,0,366.4V0L1400.46.6V349Z" fill="url(#img1)" />
          <path d="M752,528.55,0,366.4V0L1400.46.6V349Z" fill="url(#g1)" />
          <switch>
            <foreignObject x="20" y="90" width="100%" height="100%">
              <p class="title">{{ title }}</p>
              <p class="subtitle">{{ subtitle }}</p>
              <p class="desc" v-html="desc"></p>
            </foreignObject>
          </switch>
        </svg>
      </div>
    </div>
  </div>

  <div class="cooperation">
    <div class="container">
      <div class="cooperation__desc">
        <div class="cooperation__desc-col">
          <div class="title-wrap">
            <h2 class="title">Работая с росскарго</h2>
          </div>
          <div class="cooperation__desc-item" v-for="item in coopDesc">
            <p v-html="item.p"></p>
          </div>
        </div>
        <div class="cooperation__desc-col">
          <div class="cooperation__desc-item" v-for="item in coopDescImg">
            <img v-lazy:src="'/public/images/cooperationDesc' + item.img + '.jpg'" alt="">
          </div>
        </div>
      </div>
      <div class="block">
        <div class="title-wrap">
          <h2 class="title">предложения для партнеров</h2>
          <h3 class="subtitle">Мы предоставлем ряд эксклюзивных предложений для наших партнеров, делая работу с нами
            комфортнее и приятнее. </h3>
        </div>
        <div class="block__wrap">
          <div class="block__item" v-for="item in block">
            <div class="block__img">
              <img v-lazy:src="'/public/images/offer' + item.img + '.jpg'" alt="">
            </div>
            <div class="block__title" v-html="item.title"></div>
            <div class="block__desc" v-html="item.desc"></div>
          </div>
        </div>

      </div>
    </div>

    <div class="secondary-bg partners-programm">
      <div class="container">
        <div class="partners-programm__col-wrap">
          <div class="partners-programm__col">
            <div class="title-wrap">
              <h2 class="title title--light">Партнерская программа</h2>
            </div>
            <p v-for="item in partnersProgrammDesc" v-html="item.p"></p>
          </div>
          <div class="partners-programm__col">
            <div class="partners-programm__img">
              <img v-lazy="{ src: '/public/images/cooperation-desc.png' }">
            </div>
            <div class="partners-programm__count-block">
              <div class="partners-programm__count-item" v-for="item in count">
                <div class="partners-programm__count-num">{{ item.num }}</div>
                <div class="partners-programm__count-desc" v-html="item.desc"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="steps">
      <div class="container">
        <div class="title-wrap">
          <h2 class="title">На шаг ближе к нам</h2>
        </div>
        <div class="steps__wrap">
          <div class="steps__item" v-for="item in steps">
            <div class="steps__item-top">
              <div class="steps__count"></div>
              <div class="steps__title" v-html="item.title"></div>
            </div>
            <div class="steps__item-botom">
              <div class="steps__desc" v-html="item.desc"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>


<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.hero-banner {


  svg {

    .title {
      font-size: 64px;
      font-weight: 500;
      color: #fff;
      line-height: 75px;
    }

    .subtitle {
      font-size: 48px;
      font-weight: 300;
      display: table;
      color: #fff;
      line-height: 56px;
      margin-bottom: 25px;
    }

    .desc {
      font-size: 20px;
      color: #fff;
      line-height: 23px;
    }
  }
}

br {
  display: none;
}

.cooperation {
  position: relative;

  &:after {
    position: absolute;
    content: '';
    background-image: url('/public/images/map.png');
    width: 900px;
    height: 600px;
    left: -275px;
    top: 100px;
    z-index: -2;
    background-repeat: no-repeat;
  }


  &__desc {
    padding-top: 40px;
    margin-bottom: 60px;
    @include aic-jfcsb;


    @include md {
      padding-top: 30px;
    }

    @include sm {
      margin-bottom: 40px;
    }

    @include xs {
      margin-bottom: 30px;
    }
  }

  &__desc-col {
    &:last-child {
      @include aic;
      margin-left: 15px;

      @include sm {
        display: none;
      }


      .cooperation__desc-item {
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
        transition: $transition;
        margin: 0;
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        @include aic-jcc;

        &:first-child {
          max-width: 212px;
          margin-right: 60px;

          @media (max-width: 1300px) {
            margin-right: 30px;
          }

          @include lg {
            margin-right: -50px;
            z-index: 1;
          }

          @include md {
            margin: 0;
          }


        }

        &:last-child {
          max-width: 297px;

          @media (max-width: 1300px) {
            max-width: 250px;
          }

          @include md {
            display: none;
          }
        }
      }
    }

  }

  &__desc-item {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    @include md {
      p {
        font-size: 14px;

        br {
          display: none;
        }
      }
    }
  }
}



.partners-programm {
  background: $secondary-color;
  margin-top: -225px;
  padding-top: 225px;
  padding-bottom: 40px;

  @include xs {
    padding-top: 190px;
  }

  p {
    margin-top: 30px;

    br {
      display: none;
    }
  }

  &__col-wrap {
    @include aife-jfcsb;

    @include md {
      flex-direction: column;
    }
  }

  &__col {
    width: 50%;

    @include md {
      width: 100%;
    }

    &:last-child {
      flex-direction: column;
      @include aic-jcc;
      margin-left: 30px;

      @include md {
        margin-left: 0;
        margin-top: 30px;
      }
    }
  }

  &__img {
    max-width: 594px;
    width: 100%;

    @include lg {
      max-width: 400px;
    }

    @include sm {
      display: none;
    }

    img {
      width: 100%;
    }
  }

  &__count-block {
    @include jfcsb;
    width: 100%;
    margin-top: 10px;

    @include md {
      justify-content: space-around;
    }

    @include sm {
      flex-direction: column;
    }
  }

  &__count-item {
    padding: 0 5px;

    @include sm {
      margin-bottom: 15px;
    }

    &:last-child {
      margin: 0;
    }
  }

  &__count-num {
    font-size: 72px;
    font-weight: 600;
    line-height: 90px;

    @media (max-width: 1400px) {
      font-size: 35px;
      line-height: normal;
    }
  }

  &__count-desc {
    font-size: 18px;
    font-weight: 500;

    @media (max-width: 1400px) {
      font-size: 15px;
    }

    @include lg {
      font-size: 13px;
      line-height: normal;
      font-weight: 400;
    }
  }
}

.steps {
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
    padding: 30px 0;
  }

  &__wrap {
    @include jfcsb;
    counter-reset: item;

    @include md {
      flex-wrap: wrap;
    }
  }

  &__item {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background: $white-color;
    width: calc(25% - 1.5%);
    padding: 25px;

    @include lg {
      padding: 15px;
    }

    @include md {
      padding: 15px;
      width: calc(50% - 1.5%);
      margin-bottom: 20px;

      &:nth-last-child(-n+2) {
        margin-bottom: 0;
      }
    }

    @include xs {
      width: 100%;

      &:nth-last-child(-n+2) {
        margin-bottom: 20px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__count {
    position: relative;
    margin-right: 20px;

    @include lg {
      margin-right: 10px;
    }

    &:after {
      counter-increment: item;
      content: "0" counter(item);
      color: $secondary-color;
      font-weight: 600;
      font-size: 50px;
      line-height: 74px;
      font-family: 'Oswald', sans-serif;

      @include lg {
        font-size: 40px;
        line-height: normal;
      }

      @include md {
        font-size: 30px;
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    @include lg {
      font-size: 16px;
      line-height: normal;
    }

    @include md {
      font-size: 15px;
    }
  }

  &__desc {
    @include lg {
      font-size: 14px;
    }

    @include md {
      font-size: 13px;
    }
  }

  &__item-top {
    margin-bottom: 34px;
    @include aic;

    @include lg {
      margin-bottom: 25px;
    }

    @include md {
      margin-bottom: 15px;
    }

    @include sm {
      margin-bottom: 10px;
    }
  }
}
</style>
