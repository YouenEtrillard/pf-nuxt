<template>
  <div :class="$style.root">
    <CustomIcon />
    <Sidebar />
    <nuxt />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import CustomIcon from '~/components/CustomIcon.vue';
  import Sidebar from '~/components/Sidebar.vue';

  export default Vue.extend({
    components: {
      CustomIcon,
      Sidebar,
    }
  })
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
