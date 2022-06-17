<script>
export default {
  data() {
    return {
      achievements: [
        {
          count: "20+",
          desc: "лет успешной работы <br> в сфере ВЭД",
        },
        {
          count: "200",
          desc: "тысяч тонн грузов доставлено в срок",
        },
        {
          count: "150",
          desc: "сотрудников в 3 странах работают для Вас",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="achievement">
    <div class="container">
      <div class="achievement__wrap">
        <div class="achievement__item" v-for="achievement in achievements">
          <div class="achievement__count" v-html="achievement.count"></div>
          <div class="achievement__desc" v-html="achievement.desc"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/mixins.scss";

.achievement {
  background: #fbfbfb;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  padding: 40px 0;

  @include lg {
    padding: 35px 0;
  }

  @include sm {
    padding: 20px 0;
  }

  &__wrap {
    @include aic-jfcsb;

    @include xs {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__item {
    width: calc(33.33% - 20px);
    @include aic-jcc;

    @include md {
      width: calc(33.33% - 5px);
    }

    @include sm {
      flex-direction: column;
    }

    @include xs {
      align-items: flex-start;
      width: 100%;
    }


    &:nth-child(2) {
      padding: 0 15px;

      @include xs {
        margin: 10px 0;
        padding: 0;
      }
    }
  }

  &__count {
    color: $main-color;
    font-weight: 600;
    font-size: 72px;
    line-height: 90px;
    margin-right: 20px;

    @include lg {
      font-size: 50px;
      line-height: normal;
      margin-right: 10px;
    }

    @include md {
      font-size: 40px;
    }

    @include sm {
      margin-right: 0;
    }
  }

  &__desc {
    text-transform: uppercase;
    color: #4e5864;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    @include lg {
      font-size: 16px;
      line-height: normal;
    }

    @include md {
      font-size: 13px;
    }

    @include sm {
      text-align: center;
    }

    @include xs {
      text-align: left;
    }
  }
}
</style>
