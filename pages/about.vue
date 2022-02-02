<template>
  <main :class="$style.root">
    <CoverImage />
    <div class="wrapper">
      <MyResume
        :education="education"
        :experience="experience"
        :skills="skills"
      />
      <IntroMyself />
      <FactList />
    </div>
  </main>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import Vue from 'vue';
import CoverImage from '~/components/CoverImage.vue';
import FactList from '~/components/FactList.vue';
import IntroMyself from '~/components/IntroMyself.vue';
import MyResume from '~/components/MyResume.vue';

export default Vue.extend({
  components: {
    CoverImage,
    FactList,
    IntroMyself,
    MyResume
  },
  async fetch() {
    await this.$store.dispatch(`fetchResource`, 'education');
    await this.$store.dispatch(`fetchResource`, 'experience');
    await this.$store.dispatch(`fetchResource`, 'skills');
  },
  computed: {
    ...mapGetters(['education', 'experience', 'skills'])
  }
});
</script>

<style lang="scss" module>
.root {
  max-width: 100%;
}
</style>
