<script>
export default {
  data() {
    return {
      tiles: [
        { img: '1' },
        { img: '2' },
        { img: '3' },
        { img: '4' }
      ]
    }
  }
}
</script>
<template>
  <div class="tiles">
    <div class="tiles__wrap">
      <div class="tiles__tile" v-for="tile in tiles">
        <img v-lazy:src="'/public/images/tile' + tile.img + '.jpg'" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.tiles {
  position: absolute;
  margin-left: -147px;

  @media(max-width: 1400px) {
    margin-left: -180px;
  }

  @media(max-width: 1300px) {
    margin-left: -200px;
  }

  @include sm {
    display: none;
  }

  &:before {
    position: absolute;
    content: '';
    width: 716px;
    height: 716px;
    background-color: rgba(38, 53, 112, 0.15);
    border-radius: 50px;
    transform: rotate(-45deg);
    left: calc(-50% + 150px);

    @media(max-width: 1700px) {
      width: 600px;
      height: 600px;
    }

    @media(max-width: 1500px) {
      width: 550px;
      height: 550px;
    }

    @include md {
      width: 450px;
      height: 450px;
    }
  }

  &__wrap {
    @include aife-jfcfe-fww;
    width: 700px;
    transform: rotate(45deg);

    @media(max-width: 1300px) {
      width: 600px;
    }

    @include md {
      width: 500px;
    }
  }

  &__tile {
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;
    @include aic-jcc;
    transition: .5s;
    will-change: transform;


    &:hover {
      transform: scale(1.04);
    }

    img {
      transform: rotate(-45deg);
    }

    &:first-child {
      width: 260px;
      height: 260px;

      @media(max-width: 1400px) {
        width: 235px;
        height: 235px;
      }

      @media(max-width: 1300px) {
        width: 215px;
        height: 215px;
      }

      @include md {
        width: 200px;
        height: 200px;
      }
    }

    &:nth-child(2) {
      width: 195px;
      height: 195px;

      @media(max-width: 1400px) {
        width: 170px;
        height: 170px;
      }

      @media(max-width: 1300px) {
        width: 150px;
        height: 150px;
      }

      @include md {
        width: 135px;
        height: 135px;
      }
    }

    &:nth-child(3),
    &:nth-child(4) {
      width: 325px;
      height: 325px;

      @media(max-width: 1400px) {
        width: 300px;
        height: 300px;
      }

      @media(max-width: 1300px) {
        width: 250px;
        height: 250px;
      }

      @include md {
        width: 215px;
        height: 215px;
      }

    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

}
</style>
