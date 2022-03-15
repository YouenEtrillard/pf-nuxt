<template>
  <div :class="$style.root">
    <CustomIcon />
    <SidebarElem />
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue';
import CustomIcon from '~/components/CustomIcon.vue';
import SidebarElem from '~/components/SidebarElem.vue';

export default Vue.extend({
  components: {
    CustomIcon,
    SidebarElem
  },
  methods: {
    getPageName() {
      let routeName;

      if (this.$route.name === 'works-url') {
        const words = this.$route.params.url.split('-');
        routeName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(' ');
      } else {
        routeName =
          this.$route.name === 'index'
            ? 'Home'
            : this.$route.name.charAt(0).toUpperCase() +
              this.$route.name.slice(1);
      }

      return `${routeName} | Youen`;
    }
  },
  head() {
    return {
      title: this.getPageName()
    };
  }
});
</script>

<style module lang="scss">
.root {
  display: flex;
  margin: 0;
  min-height: 100vh;
  padding: 0;
  width: 100%;

  @include breakpoint($tablet) {
    min-height: calc(100vh - var(--sidebar-height));
  }
}
</style>
