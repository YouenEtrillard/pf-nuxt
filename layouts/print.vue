<template>
  <div>
    <CustomIcon />
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue';
import CustomIcon from '~/components/CustomIcon.vue';

export default Vue.extend({
  components: {
    CustomIcon
  }
});
</script>

<style module lang="scss"></style>
