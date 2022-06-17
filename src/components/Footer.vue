<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
      },
      productsLinks: [
        { item: "География" },
        { item: "Расчет стоимости" },
        { item: "Схема работы" },
        { item: "Страховые услуги" },
      ],
      marketLinks: [
        { item: "Расчет стоимости" },
        { item: "Партнеры" },
        { item: "Сотрудничество" },
        { item: "Условия перевозки" },
      ],
      aboutLinks: [
        { item: "Контакты" },
        { item: "Новости" },
        { item: "О компании" },
      ],
    };
  },
  methods: {
    checkForm() {
      this.v$.form.$touch();
      // if (!this.v$.form.$error) {
      //   alert("sucs");
      // } else {
      //   alert("error");
      // }
    },
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        phone: { required },
      },
    };
  },
};
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__col">
          <div class="footer__logo">
            <a href="#">
              <img v-lazy="{ src: '/public/images/logo-light.svg' }" />
            </a>
          </div>
          <div class="footer__desc">
            <p>
              Крупнейшая частная <br> транспортно-логистическая <br>
              компания в Кыргызстане
            </p>
          </div>
        </div>
        <div class="footer__col">
          <div class="footer__col-item">
            <div class="footer__item">
              <div class="footer__title">Продукты и услуги</div>
              <ul>
                <li v-for="item in productsLinks">
                  <span class="footer__link">
                    {{ item.item }}
                  </span>
                </li>
              </ul>
            </div>
            <div class="footer__item">
              <div class="footer__title">О нас</div>
              <ul>
                <li v-for="item in aboutLinks">
                  <span class="footer__link">
                    {{ item.item }}
                  </span>
                </li>
              </ul>
            </div>


          </div>

          <div class="footer__col-item">
            <div class="footer__item">
              <div class="footer__title">Наши рынки</div>
              <ul>
                <li v-for="item in marketLinks">
                  <span class="footer__link">
                    {{ item.item }}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer__col-item">
            <div class="footer__item">
              <div class="footer__title">
                Наш адрес
              </div>
              <p class="footer__link footer__link--without-url">
                Свердловский район, <br> Рынок дордой
              </p>
            </div>
            <div class="footer__item">
              <div class="footer__title">
                Номер телефона
              </div>
              <a href="tel:+996557632020" class="footer__link">+996 557 632 020</a>
              <a href="tel:+996552268787" class="footer__link">+996 552 268 787</a>
            </div>
            <div class="footer__item">
              <div class="footer__title">
                Почта
              </div>
              <a href="mailto:info@rosscargo.com" class="footer__link">info@rosscargo.com</a>
            </div>
          </div>
        </div>
        <div class="footer__col">
          <div class="footer__col-item">
              <div class="footer__title">Ответим на любой вопрос!</div>
              <form @submit.prevent="checkForm">
                <div class="form-group">
                  <input v-model.trim="form.name" type="text" placeholder="Ваше имя"
                    :class="v$.form.name.$error ? 'is-invalid' : ''" />
                  <p class="invalid-feedback" v-if="v$.form.name.$error || v$.form.name.$required">
                    Поле обязательно для заполнения
                  </p>
                </div>
                <div class="form-group">
                  <input v-model.trim="form.email" type="text" placeholder="Email" />
                  <p class="invalid-feedback" v-if="v$.form.email.$error || v$.form.email.$required">
                    Не правильный формат email
                  </p>
                </div>
                <div class="form-group">
                  <input v-model.trim="form.phone" type="text" placeholder="Ваш телефон" />
                  <p class="invalid-feedback" v-if="v$.form.phone.$error || v$.form.phone.$required">
                    Поле обязательно для заполнения
                  </p>
                </div>
                <button type="submit" class="btn btn--light-bg">
                  Оставить заявку
                </button>
              </form>
       

          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <div class="container">
        <span>ООО “РоссКарго” 2022</span>
        <span>Все права защищены</span>
      </div>
    </div>
  </footer>
</template>  
<style lang="scss" scoped>
@import "/src/assets/scss/variables.scss";
@import "/src/assets/scss/mixins.scss";

.footer {
  padding-top: 70px;
  background-color: #363c49;

  @include lg {
    padding-top: 60px;
  }

  @include md {
    padding-top: 50px;
  }

  @include sm {
    padding-top: 40px;
  }

  @include xs {
    padding-top: 30px;
  }

  &__wrap {
    @include jfcsb;
    padding-bottom: 40px;

    @include lg {
      flex-wrap: wrap;
    }

    @include sm {
      flex-wrap: nowrap;
      flex-direction: column
    }
  }

  &__col {
    @include sm {
      max-width: 100% !important;
      margin-bottom: 30px;
    }

    &:first-child {
      margin-right: 3%;

      @include lg {
        width: 100%;
        max-width: 100%;
        margin-bottom: 30px;
        margin-right: 0;
      }
    }

    &:nth-child(2) {
      @include fdr-jfcsb;
      width: 100%;

      @include lg {
        max-width: 50%;
      }

      @include md {
        max-width: 65%;
      }

      @include xs {
        flex-direction: column;
      }

    }

    &:last-child {
      margin-left: 3%;
      max-width: 280px;
      width: 100%;

      @include lg {
        max-width: 30%;
        margin: 0;
      }

      @include sm {
        margin-bottom: 0;
      }
    }


  }

  &__item {
    @include fdc;
    margin-bottom: 13px;

    @include xs {
      margin-bottom: 20px;
    }

    &:last-child {
      margin: 0;

      @include xs {
        margin-bottom: 20px;
      }
    }

    ul {
      li {
        &:last-child {
          .footer__link {
            margin: 0;
          }
        }
      }
    }
  }

  &__logo {
    border-bottom: 4px solid $white-color;
    margin-bottom: 15px;
    max-width: 250px;
    width: 100%;
  }

  &__desc {
    p {
      color: $white-color;
      font-size: 18px;
      line-height: 21px;

      @include sm {
        font-size: 16px;
        line-height: normal;
      }
    }
  }

  &__copyright {
    font-size: 11px;
    color: $white-color;
    background-color: $white-color;
    min-height: 40px;
    @include aic;

    span {
      margin-right: 15px;
      color: $text-color;
    }
  }

  &__title {
    position: relative;
    color: $white-color;
    font-weight: 500;
    margin-bottom: 12px;

    @include lg {
      font-size: 16px;
    }

    i {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 100%;
      margin-right: 5px;
      color: $main-color;
      font-size: 15px;
    }
  }

  &__link {
    color: $white-color;
    color: rgba(255, 255, 255, 0.79);
    font-size: 16px;
    display: inline-block;
    margin-bottom: 5px;
    transition: $transition;
    cursor: pointer;

    @include lg {
      font-size: 14px;
    }

    &:hover {
      color: $main-color;
    }

    &--without-url {
      pointer-events: none;
    }
  }

  ul {
    li {
      list-style-type: none;
    }
  }

  .btn {
    font-size: 18px;
    padding: 0;
    min-height: 40px;
  }
}

.invalid-feedback {
  margin-top: 5px;
  color: red;
  font-size: 12px;
}

.is-invalid {
  box-shadow: 0px 0px 15px 0px rgba(255, 11, 0, 0.52);
  border: 1px solid red;
}
</style>  
