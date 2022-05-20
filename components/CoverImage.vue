<template>
  <section :class="[$style.root, $style.fullscreen]" appAppear>
    <!-- <picture appParallaxCover [config]="{scrollerSelector: 'app-root'}"> -->
    <picture>
      <source
        :srcset="`${getResizedImage(`809-1080.jpg`)}`"
        :media="`(max-width: ${xSmallRes}) and (max-height: ${smallRes})`"
      />
      <source
        :srcset="`${getResizedImage(`1080-1441.jpg`)}`"
        :media="`(max-width: ${smallRes}) and (max-height: ${mediumRes})`"
      />
      <source
        :srcset="`${getResizedImage(`1200-675.jpg`)}`"
        :media="`(max-width: ${mediumRes}) and (orientation: landscape)`"
      />
      <source
        :srcset="`${getResizedImage(`1920-1080.jpg`)}`"
        :media="`(max-width: ${largeRes})`"
      />
      <img
        :src="`${getResizedImage(`3440-1440.jpg`)}`"
        alt="Decent portrait of Youen wearing a textured blue shirt"
      />
    </picture>
  </section>
</template>

<script>
export default {
  data() {
    return {
      xSmallRes: '800px',
      smallRes: '1080px',
      mediumRes: '1350px',
      largeRes: '2070px',
      xLargeRes: '3590px'
    };
  },
  methods: {
    getResizedImage(path) {
      return this.$img(path);
    }
  }
};
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
}
</style>
