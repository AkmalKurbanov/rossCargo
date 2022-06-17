<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "@/assets/scss/base.scss";

</script>

<template>
  <Header />

  <transition name="fade" mode="out-in">
    <router-view />
  </transition>

  <Footer />
</template>


<style lang="scss" >
.fade-enter-active,
.fade-leave-active {
  transition: all .1s;
  opacity: 1;

  .hero__img--carrier {
    opacity: 1;
    transform: translateX(150px)!important;
  }

}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  .hero__img--carrier {
    opacity: 0;
  }
}
</style>
