<script>
export default {
  data() {
    return {
      advantages: [
        {
          icon: "icon-adv1",
          title: "advantages.title1",
          desc: 'advantages.desc1'
        },
        {
          icon: "icon-adv2",
          title: "advantages.title2",
          desc: 'advantages.desc2'
        },
        {
          icon: "icon-adv3",
          title: "advantages.title3",
          desc: 'advantages.desc3'
        },
        {
          icon: "icon-adv4",
          title: "advantages.title4",
          desc: 'advantages.desc4'
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
  <div class="secondary-bg advantages">
    <div class="container">
      <div class="title-wrap">
        <h2 class="title title--light">Наши преимущества</h2>
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
            <div class="advantages__title" v-html="$t(advantage.title)"></div>
            <transition name="fade" mode="out-in">
              <div class="advantages__desc" v-show="advDesc === advantage">
                <span class="advantages__desc-title" v-html="$t(advantage.title)"></span>
                <span class="advantages__desc-desc" v-html="$t(advantage.desc)"></span>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-desc text-desc--pt0">
    <div class="container">
      <div class="title-wrap">
        <h2 class="title title--light">Познакомимся поближе</h2>
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
            <img v-lazy="{ src: '/public/images/delivery-location.png' }" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/mixins.scss";

.advantages {
  padding-top: 180px;
  padding-bottom: 60px;
  margin-top: -107px;
  position: relative;

  @include lg {
    padding-top: 150px;
    padding-bottom: 50px;
  }

  @include sm {
    padding-top: 140px;
    padding-bottom: 40px;
  }

  @include xs {
    margin: 0;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  &__wrap {
    @include jfcsb;

    @include md {
      flex-wrap: wrap
    }

  }

  &__item {
    @include aistr;
    width: 25%;
    min-height: 100px;
    cursor: pointer;

    @include md {
      width: calc(50% - 20px);
    }

    @include xs {
      width: 100%;
    }
  }

  &__icon {
    font-size: 60px;

    @include lg {
      font-size: 40px;
    }
  }

  &__col {
    margin-right: 15px;
    position: relative;
    @include aic;

    &:first-child {
      width: 72px;

      @include lg {
        width: 52px;
      }
    }

    &:last-child {
      margin-right: 0;
      width: 100%;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 22px;

    @include lg {
      font-size: 16px;
    }
  }

  &__desc {
    background-color: $secondary-color;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

    @include lg {
      min-width: 125%;
      z-index: 1;
      left: -62px;
    }

    @include md {
      min-width: 100%;
      left: 0;
    }

    @include sm {
      min-width: 125%;
      z-index: 1;
      left: -62px;
    }

    @include xs {
      min-width: 100%;
      left: 0;
    }

    span {
      display: block;
    }
  }

  &__desc-title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;

    @include lg {
      font-size: 15px;
    }

    br {
      display: none;
    }
  }

  &__desc-desc {
    font-size: 12px;
    line-height: 14px;
  }

  .fade-enter-from {
    opacity: 0;
    transform: translateY(-40%);
  }

  .fade-enter-active {
    transition: $transition;
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateY(-40%);
  }

  .fade-leave-active {
    transition: $transition;
  }

}

.text-desc {
  padding: 80px 0;
  background-color: $secondary-color;

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

  &--pt0 {
    padding-top: 0;
  }

  &__col-wrap {
    display: flex;
  }

  &__col {
    @include aic-jfcsb;
    position: relative;

    &:first-child {
      width: calc(75% - 25px);

      @include md {
        flex-direction: column;
        align-items: flex-start;
      }

      @include sm {
        width: 100%;
      }

      .btn {
        margin-left: 55px;

        @include md {
          margin-left: 0;
          margin-top: 30px;
        }
      }
    }

    &:last-child {
      width: calc(40% - 25px);
      padding-left: 60px;

      @include lg {
        padding: 0;
      }

      @include sm {
        display: none;
      }
    }
  }

  p {
    color: $white-color;
    margin-bottom: 25px;

    @include md {
      font-size: 15px;
    }

    @include xs {
      font-size: 14px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__img {
    position: absolute;
    bottom: 0;
    max-width: 350px;
    width: 100%;

    @include md {
      top: 0;
      bottom: auto;
    }



    img {
      width: 100%;
    }
  }
}
</style>
