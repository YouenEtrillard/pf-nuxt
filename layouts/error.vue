<template>
  <div :class="$style.root" class="content wrapper">
    <h1 v-if="error.statusCode === 404">Where is the content ?</h1>
    <h1 v-else>An error occurred - {{ error.statusCode }}</h1>
    <nuxt-img
      v-if="!showGif"
      :class="$style.img"
      src="travolta.gif"
      alt="confused travolta from pulp fiction"
      @click.native="showGif = true"
    />
    <nuxt-img
      v-show="showGif"
      :class="$style.img"
      src="travolta.gif"
      alt="confused travolta from pulp fiction"
      :modifiers="{ animated: true }"
      @load.native="onGifLoad"
      @click.native="showGif = false"
    />
    <p :class="$style.text">
      It seems you landed on a page where there is nothing to see, you can go to
      the <NuxtLink to="/">Home page</NuxtLink> or let me know if you think
      there should be some content there
    </p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  layout: 'error', // you can set a custom layout for the error page
  data() {
    return {
      gifIsLoaded: false,
      showGif: false
    };
  },
  computed: {
    displayGif() {
      return this.gifIsLoaded && this.showGif;
    }
  },
  methods: {
    onGifLoad() {
      this.gifIsLoaded = true;
      this.showGif = true;
    }
  }
};
</script>

<style lang="scss" module>
.root {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-height: calc(100vh - var(--sidebar-height));
  padding-bottom: 1.8rem;
  padding-top: 1.8rem;
}

.img {
  min-height: 0;
  min-width: 0;
}

.text {
  font-size: var(--fz-subtitle);
  text-align: center;
}
</style>
