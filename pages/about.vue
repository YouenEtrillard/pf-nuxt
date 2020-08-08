<template>
  <main :class="$style.root">
    <Cover />
    <div class="wrapper">
      <Resume />
      <Intro />
      <Facts />
    </div>
  </main>
</template>


<script lang="ts">
  import Vue from 'vue';
  import Contact from '~/components/Contact.vue';
  import Cover from '~/components/Cover.vue';
  import Facts from '~/components/Facts.vue';
  import Intro from '~/components/Intro.vue';
  import Resume from '~/components/Resume.vue';

  export default Vue.extend({
    components: {
      Contact,
      Cover,
      Facts,
      Intro,
      Resume,
    }
  })
</script>

<style lang="scss" module>
  .root {
    max-width: 100%;
  }
</style>