<script>
import Geography from "../components/Geography.vue";
import News from "../components/News.vue";
export default {
  components: {
    Geography,
    News
  },
  data() {
    return {
      advantages: [
        {
          icon: "icon-adv5",
          title: "Постонное задействование",
          desc: "Постоянное совершенствование логистической концепции в рамках избранной стратегии в рыночной среде.",
        },
        {
          icon: "icon-adv6",
          title: "Широкая география грузоперевозок",
          desc: "Постоянное совершенствование логистической концепции в рамках избранной стратегии в рыночной среде.",
        },
        {
          icon: "icon-adv7",
          title: "Гарантированная и своевременная оплата",
          desc: "Постоянное совершенствование логистической концепции в рамках избранной стратегии в рыночной среде.",
        },
        {
          icon: "icon-adv8",
          title: "Долгосрочное партнерство",
          desc: "Постоянное совершенствование логистической концепции в рамках избранной стратегии в рыночной среде.",
        },
      ],
      advDesc: false,
      texts: [
        {
          text: "Логистическая компания РоссКарго - это предприятие,  оказывающее услуги по транспортировке, обработке и хранению грузов, содействуя своим клиентам  в процессе продвижения товаров от производителя к потребителю.",
        },
        {
          text: "Непревзойденная логистическая сеть РоссКарго обеспечивает местное, региональное и всемирное присутствие компании практически на всех деловых рынках. ",
        },
        {
          text: "Уже более века мы предлагаем инновационные решения в области логистики для всех видов транспорта. Вы можете узнать больше о деятельности нашей компании из наших новостей.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="hero hero--carrier">
    <div class="container">
      <div class="hero__content">
        <div class="hero__slide-content">
          <div class="hero__col">
            <h2 class="hero__title">
              У вас есть грузовик? <br>
              <span>У нас есть груз!</span>
            </h2>
            <h3 class="hero__subtitle">
              Крупнейшая частная транспортно-логистическая компания в Кыргызстане
            </h3>
            <div class="hero__desc">
              Компанию РоссКарго знают во всему СНГ как отечественного перевозчика и лидера рынка перевозок комплектных
              грузов, независимо от того, идет ли речь об одноразовой перевозке или о постоянных перевозках в
              кругорейсе!
            </div>
            <RouterLink class="btn btn--arrow-right" to="/about" exact>Больше информации</RouterLink>
          </div>

          <div class="hero__col">
            <div class="hero__bg-img">
              <img v-lazy="{ src: '/public/images/ross-cargo-bg5.png' }" />
            </div>
            <div class="hero__img hero__img--carrier">
              <img v-lazy="{ src: '/public/images/ross-cargo5.png' }" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="advantages advantages--light">
    <div class="container">
      <div class="title-wrap">
        <div class="title">Наши преимущества</div>
      </div>
      <div class="advantages__wrap">
        <div class="advantages__item" v-for="advantage in advantages" @mouseover="advDesc = advantage"
          @mouseleave="advDesc = null">
          <div class="advantages__col">
            <div class="advantages__icon">
              <i :class="advantage.icon"></i>
            </div>
          </div>
          <div class="advantages__col">
            <div class="advantages__title" v-html="advantage.title"></div>
            <transition name="fade" mode="out-in">
              <div class="advantages__desc" v-show="advDesc === advantage">
                <span class="advantages__desc-title" v-html="advantage.title"></span>
                <span class="advantages__desc-desc" v-html="advantage.desc"></span>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="text-desc">
    <div class="container">
      <div class="title-wrap">
        <h2 class="title title--light">Что мы хотим видеть в вас</h2>
      </div>
      <div class="text-desc__col-wrap">
        <div class="text-desc__col">
          <div>
            <p v-for="text in texts">{{ text.text }}</p>
          </div>
          <a href="#" class="btn btn--arrow-right btn--light-bg">О компании</a>
        </div>
        <div class="text-desc__col">
          <div class="text-desc__img">
            <img v-lazy="{ src: '/public/images/for.png' }" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Geography />
  <Achievement />
  <News />

</template>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.advantages {
  &--light {
    background: #FBFBFB;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
    padding: 40px 0 60px;
    margin: 0;

    .advantages__wrap {
      margin-bottom: 0;
    }

    i {
      color: $secondary-color;
    }

    .advantages__desc {
      background: #FBFBFB;
    }

    .advantages__title,
    .advantages__desc * {
      color: $text-color;
    }

  }
}
</style>
