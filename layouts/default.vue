<template>
  <div :class="$style.root">
    <CustomIcon />
    <SidebarElem />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CustomIcon from '~/components/CustomIcon.vue';
import SidebarElem from '~/components/SidebarElem.vue';

export default Vue.extend({
  components: {
    CustomIcon,
    SidebarElem
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
