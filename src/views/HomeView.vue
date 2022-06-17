<script>
import Hero from "../components/Hero.vue";
import Advantages from "../components/Advantages.vue";
import Achievement from "../components/Achievement.vue";
import Geography from "../components/Geography.vue";
import News from "../components/News.vue";

export default {
  components: {
    Hero,
    Advantages,
    Achievement,
    News,
    Geography
  }
}
</script>

<template>
  <Hero />
  <Advantages />
  <Achievement />
  <Geography />
  <News />
</template>

