<template>
  <section :class="[$style.root, $style.fullscreen]" appAppear>
    <!-- <picture appParallaxCover [config]="{scrollerSelector: 'app-root'}"> -->
    <!-- <picture appParallaxCover>
      <source
        srcset="~/assets/images/809-1080.jpg"
        :media="`(max-width: ${xSmallRes}) and (max-height: ${smallRes})`"
      />
      <source
        srcset="~/assets/images/1080-1441.jpg"
        :media="`(max-width: ${smallRes}) and (max-height: ${mediumRes})`"
      />
      <source
        srcset="~/assets/images/1200-675.jpg"
        :media="`(max-width: ${mediumRes}) and (orientation: landscape)`"
      />
      <source
        srcset="~/assets/images/1920-1080.jpg"
        :media="`(max-width: ${largeRes})`"
      />
      <source srcset="~/assets/images/3440-1440.jpg" />
    </picture> -->
    <nuxt-img src="~/assets/images/3440-1440.jpg" alt="yah" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      xSmallRes: '800px',
      smallRes: '1080px',
      mediumRes: '1350px',
      largeRes: '2070px',
      xLargeRes: '3590px'
    };
  }
});
</script>

<style lang="scss" module>
.fullscreen {
  --cover-h: 100vh;
  width: 100%;
  height: var(--cover-h);
  display: flex;
  overflow: hidden;

  @include breakpoint($tablet) {
    height: calc(var(--cover-h) - var(--sidebar-height));
  }

  picture {
    // position: relative;
    height: 100vh;
    width: 100%;
    // overflow: hidden;

    img {
      // position: absolute;
      // top: 50%;
      // left: 50%;
      // transform: translate3d(-50%,-50%,0);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
