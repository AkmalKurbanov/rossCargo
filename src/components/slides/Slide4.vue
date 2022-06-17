<script>
export default {
  name: "Slide4",
};
</script>

<template>
  <div class="hero__slide-content">
    <div class="hero__col">
      <h2 class="hero__title">
        РоссКарго - это <span>Индивидуальные решения </span>
      </h2>
      <h3 class="hero__subtitle">
        Крупнейшая частная транспортно-логистическая компания в Кыргызстане
      </h3>
      <div class="hero__desc">
        Уже более 20 лет компания РоссКарго раздвигает границы логистической
        отрасли и управления цепочкой поставок. Мы предоставляем тысячи
        продуктов для клиентов, которые находятся в поиске лучшего решения по
        доставке
      </div>

      <RouterLink class="btn btn--arrow-right" to="/about" exact>Больше информации</RouterLink>
    </div>

    <div class="hero__col">
      <div class="hero__bg-img">
        <img v-lazy="{ src: '/public/images/ross-cargo-bg4.png' }" />
      </div>
      <div class="hero__img hero__img--box">
        <img v-lazy="{ src: '/public/images/ross-cargo4.png' }" />
      </div>
    </div>
  </div>
</template>
