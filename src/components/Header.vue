<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      value: "kg",
      list: ["kg", "ru"],
      visible: false,
      customer: true,
      carrier: false,
      activeLocale: true
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
    },
    changeMode() {
      this.carrier = !this.carrier,
        this.customer = !this.customer
      if (this.carrier == true) {
        this.$router.push('/carrier');
      } else {
        this.$router.back();
      }
    },
    setLocale(locale) {
      this.activeLocale = !this.activeLocale;
      import(`../locales/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
        localStorage.setItem('lang', this.$i18n.locale = locale)
      })
    }
  },
};
</script>

<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__col">
          <div class="header__select select" :data-value="value" :data-list="list" @click="toggle()">
            <div class="select__angle">
              <i class="icon-angle"></i>
            </div>
            <div class="select__selected">
              <img v-lazy:src="'/public/images/' + value + '.svg'" alt="" />
              <div :class="{ hidden: !visible, visible }">
                <ul>
                  <li :class="{ current: item === value }" v-for="item in list" @click="select(item)">
                    <img v-lazy:src="'/public/images/' + item + '.svg'" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="select__title">Выберите страну</div>
          </div>

          <div class="locale">
            <div class="locale__lang">
              <div @click="setLocale('ru')" :class="{ active: activeLocale }">ru</div>
            </div>
            <div class="locale__lang">
              <div @click="setLocale('kg')" :class="{ active: !activeLocale }">kg</div>
            </div>
          </div>

        </div>
        <div class="header__col">
          <form action="">
            <div class="header__choice" :class="{ carrier, customer }">
              <span>Я заказчик</span>
              <div class="switch" @click="changeMode">
                <div class="switch__slider"></div>
              </div>
              <span>Я перевозчик</span>
            </div>
          </form>
          <div class="header__call-back">
            <a href="tel:+996550550550">+996 (550) 550 550</a>
            <p>Для связи с оператором</p>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <div class="header__col">
          <RouterLink to="/" class="header__logo">
            <img v-lazy="{ src: '/public/images/logo.svg' }" />
          </RouterLink>
          <nav>
            <RouterLink to="/services" exact>Услуги</RouterLink>
            <RouterLink to="/cooperation">Рынок</RouterLink>
            <RouterLink to="/about">О нас</RouterLink>
            <RouterLink to="/carrier">Новости</RouterLink>
            <RouterLink to="/contacts">Контакты</RouterLink>
          </nav>
        </div>
        <div class="header__col">
          <div class="hamburger"></div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/mixins.scss";

.header {
  margin-bottom: 60px;

  @include lg {
    margin-bottom: 50px;
  }

  @include md {
    margin-bottom: 40px;
  }

  @include sm {
    margin-bottom: 30px;
  }

  @include xs {
    margin-bottom: 20px;
  }

  &__col {
    @include aic;
  }

  &__top {
    padding: 13px 0 25px;

    @include sm {
      padding: 13px 0 20px;
    }

    @include xs {
      display: none;
    }

    .container {
      @include aic-jfcsb;

      @include sm {
        align-items: flex-start;
      }
    }

    .header__col {
      &:last-child {
        @include sm {
          @include fdc-aife;
        }
      }
    }
  }

  &__bottom {
    @include xs {
      padding: 20px 0;
    }

    .container {
      @include aic-jfcsb;
    }
  }

  &__logo {
    margin-right: 80px;
    @include aic-jcc;

    @include xs {
      margin-right: 30px;
    }

    img {
      max-width: 230px;
      width: 100%;
    }
  }

  &__choice {
    @include aic-jcc;

    .router-link-active.router-link-exact-active {
      color: $text-color;
    }

    &.customer {
      .switch__slider {
        left: -9px;
      }

      span {
        &:first-child {
          color: $text-color;
        }
      }
    }

    &.carrier {
      .switch__slider {
        left: calc(100% - 9px);
      }

      span {
        &:last-child {
          color: $text-color;
        }
      }
    }

    span {
      color: rgba(45, 45, 45, 0.5);
      pointer-events: none;
    }
  }

  &__call-back {
    margin-left: 30px;

    @include sm {
      display: none;
    }

    a {
      color: #575757;
      transition: $transition;

      &:hover {
        color: $main-color;
      }
    }

    p {
      font-size: 12px;
    }
  }
}

.select {
  @include aic;
  margin-right: 15px;
  cursor: pointer;

  &__angle {
    font-size: 6px;
    @include aic-jcc;
    margin-right: 7px;
  }

  &__selected {
    width: 22px;
    @include aic-jcc;
    margin-right: 5px;
    position: relative;
    box-shadow: 0px 0px 2px 1px rgba(204, 204, 204, 1);

    img {
      width: 100%;
    }
  }

  &__title {
    font-size: 12px;
  }

  .hidden {
    display: none;
  }

  .hidden,
  .visible {
    position: absolute;
    left: 0;
    top: calc(100% + 3px);

    li {
      width: 22px;
      list-style-type: none;
      @include aic-jcc;
      box-shadow: 0px 0px 2px 1px rgba(204, 204, 204, 1);
      margin-bottom: 2px;

      &:last-child {
        margin-bottom: 0;
      }

      img {
        width: 100%;
      }
    }
  }
}

.locale {
  @include aic-jcc;

  &__lang {
    text-transform: uppercase;
    padding-right: 6px;
    margin-right: 6px;
    position: relative;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;

    &:after {
      position: absolute;
      content: "";
      height: 10px;
      width: 1px;
      background-color: $black-color;
      opacity: 0.5;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }

    &:last-child {
      padding-right: 0;
      margin-right: 0;
      border-right: 0;

      &:after {
        display: none;
      }
    }

    * {
      color: $secondary-color;
      text-decoration: none;
      transition: $transition;

      &:hover {
        color: $main-color;
      }
    }

    .active {
      pointer-events: none;
      color: $main-color;
    }
  }
}

.switch {
  width: 22px;
  height: 10px;
  background: #2d2d2d;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  position: relative;
  margin: 0 20px;
  cursor: pointer;

  &__slider {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: $main-color;
    box-shadow: 0px 2px 4px rgba(45, 45, 45, 0.25),
      inset 0px 4px 4px rgba(255, 255, 255, 0.25);
    transition: $transition;
  }
}

nav {
  @include md {
    display: none;
  }

  a {
    margin-right: 56px;
    color: $text-color;
    font-weight: 500;
    transition: $transition;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: $main-color;
    }
  }

  .router-link-exact-active {
    color: $main-color;
  }
}

.hamburger {
  position: relative;
  width: 35px;
  height: 12px;
  cursor: pointer;

  &:hover {
    &:before {
      width: 28px;
    }

    &:after {
      width: 35px;
    }
  }

  &:before,
  &:after {
    position: absolute;
    content: "";
    height: 2px;
    background: #363c49;
    right: 0;
    transition: $transition;
  }

  &:before {
    width: 35px;
    top: 0;
  }

  &:after {
    width: 28px;
    height: 3px;
    bottom: 0;
  }
}
</style>
