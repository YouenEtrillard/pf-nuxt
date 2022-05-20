<template>
  <div :class="$style.root">
    <CustomIcon />
    <SidebarElem>
      <template v-slot:bottom>
        <AnchorNavigation v-if="displayAnchors" :anchors="anchors" />
      </template>
    </SidebarElem>
    <nuxt @passAnchors="handleAnchors(anchors)" />
  </div>
</template>

<script>
import Vue from 'vue';
import CustomIcon from '~/components/CustomIcon.vue';
import SidebarElem from '~/components/SidebarElem.vue';
import AnchorNavigation from '~/components/AnchorNavigation.vue';

export default Vue.extend({
  components: {
    AnchorNavigation,
    CustomIcon,
    SidebarElem
  },
  data() {
    return {
      anchors: [],
      displayAnchors: false
    };
  },
  watch: {
    $route(to, from) {
      if (to.name !== from.name) {
        this.displayAnchors = false;
      }
    }
  },
  created() {
    //  Ideally I would prefer to have the possibility either
    //  to pass the data through a layout api / property in the page component
    //  or to be able to use slots with the nuxt component.
    //  but I didn't want to move the SideBarElemen into each page components
    //  Let's see what Nuxt 3 has to offer
    this.$nuxt.$on('passAnchors', (anchors) => {
      if (anchors?.length > 0) {
        this.anchors = anchors;
        this.displayAnchors = true;
      }
    });
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
