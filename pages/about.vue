<template>
  <main :class="$style.root">
    <AnchorNavigation :anchors="anchors" />
    <CoverImage />
    <div :class="$style.content" class="wrapper">
      <IntroMyself />
      <FactList />
      <MyResume
        :education="education"
        :experience="experience"
        :skills="skills"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Vue from 'vue';
import CoverImage from '~/components/CoverImage.vue';
import FactList from '~/components/FactList.vue';
import IntroMyself from '~/components/IntroMyself.vue';
import MyResume from '~/components/MyResume.vue';
import AnchorNavigation from '~/components/AnchorNavigation.vue';

export default Vue.extend({
  components: {
    AnchorNavigation,
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
  data() {
    return {
      anchors: [
        {
          id: 'who-am-i',
          text: 'Who am I ?'
        },
        {
          id: 'skills',
          text: 'Some skills'
        },
        {
          id: 'education',
          text: 'Education'
        },
        {
          id: 'experience',
          text: 'Experience'
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['education', 'experience', 'skills'])
  }
});
</script>

<style lang="scss" module>
.root {
  max-width: 100%;
  position: relative;
  padding-bottom: 6rem; // TODO - remove once there is a button to fold/hide the anchor nav
}

.content {
  margin-top: 5rem;
}
</style>
