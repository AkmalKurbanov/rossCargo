  <script>
export default {
  data() {
    return {
      title: 'РоссКарго',
      subtitle: 'Вам везёт, пока мы везём',
    }
  }
}
</script> 
<template>
  <div class="hero-banner">

    <div class="hero-banner__bg">


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 638.16">

        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="1920" height="600">
            <image xlink:href="/public/images/abot-hero.png" x="0" y="0" />
            <!-- Image from http://silviahartmann.com/background-tile/6-grass-meadow-tile.php-->
          </pattern>
          <linearGradient id='g2' x1='.5' y1='1' x2='.5'>
            <stop stop-color='#000' stop-opacity='.2' />
            <stop offset='1' stop-color='#000' stop-opacity='.2' />
          </linearGradient>
          <linearGradient id='g1' gradientUnits='userSpaceOnUse' x1='-8.47%' y1='13.59%' x2='108.47%' y2='86.41%'>
            <stop offset='.308' stop-color='#000' stop-opacity='0' />
            <stop offset='.63' stop-color='#000' stop-opacity='.2' />
          </linearGradient>


        </defs>



        <path class="cls-1"
          d="M1377.8,610.76c-31.73-8.09-706.47-112.63-1345.58-233.82L0,370.81V0H1920V414.13a125.14,125.14,0,0,1-73.73,90.69l-387.18,97.09-37.36,9.36a95.11,95.11,0,0,1-30.42,1.89A88.5,88.5,0,0,1,1377.8,610.76Z" />
        <path class="cls-2"
          d="M1425.62,563.09l-1091-215.66c-5.34-.64-37.74-5.09-59-35.81-15.42-22.33-15.4-47.34-15.36-61.14.15-54.64-.55-126.23-.49-213.48l1400.46.6V386.09c-1.59,29-20.59,55.1-50.06,68.84L1474,555.29A108.48,108.48,0,0,1,1425.62,563.09Z"
          fill="url(#img1)" />
        <path class="cls-2"
          d="M1425.62,563.09l-1091-215.66c-5.34-.64-37.74-5.09-59-35.81-15.42-22.33-15.4-47.34-15.36-61.14.15-54.64-.55-126.23-.49-213.48l1400.46.6V386.09c-1.59,29-20.59,55.1-50.06,68.84L1474,555.29A108.48,108.48,0,0,1,1425.62,563.09Z"
          fill="url(#g1)" />
        <path class="cls-2"
          d="M1425.62,563.09l-1091-215.66c-5.34-.64-37.74-5.09-59-35.81-15.42-22.33-15.4-47.34-15.36-61.14.15-54.64-.55-126.23-.49-213.48l1400.46.6V386.09c-1.59,29-20.59,55.1-50.06,68.84L1474,555.29A108.48,108.48,0,0,1,1425.62,563.09Z"
          fill="url(#g2)" />
        <switch>
          <foreignObject x="52.4%" y="40%" width="100%" height="100%">
            <p class="title">{{ title }}</p>
            <p class="subtitle">{{ subtitle }}</p>
          </foreignObject>
        </switch>
      </svg>




    </div>
  </div>


</template>
<style lang="scss" scoped>
.hero-banner {

  svg {
    .cls-1 {
      fill: rgba(38, 53, 112, 0.15);
    }

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
</style>
